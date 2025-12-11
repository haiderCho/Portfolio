import React, { useEffect, useState } from 'react';
import { BookOpen, Filter } from 'lucide-react';
import { BlogPost } from '@/types';
import { getAllBlogPosts, getAllTags } from '@/utils/blogUtils';
import BlogPostCard from '@/components/BlogPostCard';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBlogData = async () => {
            try {
                const [allPosts, allTags] = await Promise.all([
                    getAllBlogPosts(),
                    getAllTags()
                ]);
                setPosts(allPosts);
                setFilteredPosts(allPosts);
                setTags(allTags);
            } catch (error) {
                console.error('Error loading blog posts:', error);
            } finally {
                setLoading(false);
            }
        };

        loadBlogData();
    }, []);

    useEffect(() => {
        if (selectedTag) {
            setFilteredPosts(posts.filter(post => post.tags.includes(selectedTag)));
        } else {
            setFilteredPosts(posts);
        }
    }, [selectedTag, posts]);

    if (loading) {
        return (
            <div className="min-h-screen bg-cyber-black text-cyber-text flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyber-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-cyber-muted font-mono">LOADING_BLOG_POSTS...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cyber-black text-cyber-text">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.03),transparent_70%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-cyber-primary hover:text-cyber-secondary transition-colors font-mono text-sm mb-6">
                        ← BACK_TO_PORTFOLIO
                    </Link>

                    <div className="flex items-center gap-4 mb-4">
                        <BookOpen className="w-10 h-10 text-cyber-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold">Blog_Archive</h1>
                    </div>

                    <p className="text-cyber-muted text-lg max-w-2xl">
                        Thoughts on AI/ML, software development, and technology.
                    </p>
                </div>

                {/* Tag Filter */}
                {tags.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Filter className="w-5 h-5 text-cyber-primary" />
                            <span className="font-mono text-sm text-cyber-muted">FILTER_BY_TAG:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedTag(null)}
                                className={`px-4 py-2 rounded border font-mono text-sm transition-all ${selectedTag === null
                                        ? 'bg-cyber-primary text-black border-cyber-primary'
                                        : 'bg-cyber-dark border-cyber-dim text-cyber-text hover:border-cyber-primary'
                                    }`}
                            >
                                ALL
                            </button>
                            {tags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-4 py-2 rounded border font-mono text-sm transition-all ${selectedTag === tag
                                            ? 'bg-cyber-primary text-black border-cyber-primary'
                                            : 'bg-cyber-dark border-cyber-dim text-cyber-text hover:border-cyber-primary'
                                        }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Blog Posts Grid */}
                {filteredPosts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-cyber-muted font-mono">NO_POSTS_FOUND</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.map((post) => (
                            <BlogPostCard key={post.id} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
