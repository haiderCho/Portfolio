import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types';
import { getBlogPostBySlug, formatDate } from '../utils/blogUtils';
import 'highlight.js/styles/atom-one-dark.css';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [loading, setLoading] = useState(true);
    const [readingProgress, setReadingProgress] = useState(0);

    useEffect(() => {
        const loadPost = async () => {
            if (!slug) return;

            try {
                const postData = await getBlogPostBySlug(slug);
                setPost(postData);
            } catch (error) {
                console.error('Error loading blog post:', error);
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [slug]);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
            setReadingProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-cyber-black text-cyber-text flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyber-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-cyber-muted font-mono">LOADING_POST...</p>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-cyber-black text-cyber-text flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404_NOT_FOUND</h1>
                    <p className="text-cyber-muted mb-6">The requested blog post does not exist.</p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-primary text-black font-bold rounded hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all font-mono"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        BACK_TO_BLOG
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cyber-black text-cyber-text">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-cyber-dark z-50">
                <div
                    className="h-full bg-cyber-primary transition-all duration-150"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>

            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.03),transparent_70%)]" />
            </div>

            {/* Content */}
            <article className="relative z-10 max-w-4xl mx-auto px-6 py-20">
                {/* Back Button */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-cyber-primary hover:text-cyber-secondary transition-colors font-mono text-sm mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    BACK_TO_BLOG
                </Link>

                {/* Cover Image */}
                {post.coverImage && (
                    <div className="mb-8 rounded-lg overflow-hidden border border-cyber-dim">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-64 md:h-96 object-cover"
                        />
                    </div>
                )}

                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 glitch-text">
                        {post.title}
                    </h1>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-cyber-muted font-mono mb-4">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readingTime}
                        </span>
                    </div>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono bg-cyber-dark border border-cyber-dim rounded text-cyber-primary"
                                >
                                    <Tag className="w-3 h-3" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                {/* Blog Content */}
                <div className="prose prose-invert prose-cyber max-w-none">
                    <ReactMarkdown
                        rehypePlugins={[rehypeHighlight]}
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-white mb-4 mt-8" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-white mb-3 mt-6" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-white mb-2 mt-4" {...props} />,
                            p: ({ node, ...props }) => <p className="text-cyber-text/90 leading-relaxed mb-4" {...props} />,
                            code: ({ node, inline, ...props }: any) =>
                                inline
                                    ? <code className="px-2 py-1 bg-cyber-dark border border-cyber-dim rounded text-cyber-primary font-mono text-sm" {...props} />
                                    : <code className="block" {...props} />,
                            pre: ({ node, ...props }) => <pre className="bg-cyber-dark border border-cyber-dim rounded-lg p-4 overflow-x-auto mb-4" {...props} />,
                            a: ({ node, ...props }) => <a className="text-cyber-primary hover:text-cyber-secondary underline" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 text-cyber-text/90" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 text-cyber-text/90" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-cyber-primary pl-4 italic text-cyber-muted mb-4" {...props} />,
                            img: ({ node, ...props }) => <img className="rounded-lg border border-cyber-dim my-4" {...props} />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* Footer */}
                <footer className="mt-12 pt-8 border-t border-cyber-dim">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-panel border border-cyber-dim hover:border-cyber-primary text-cyber-text rounded transition-all font-mono"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        VIEW_ALL_POSTS
                    </Link>
                </footer>
            </article>
        </div>
    );
};

export default BlogPost;
