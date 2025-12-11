import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/types';
import { formatDate } from '@/utils/blogUtils';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
    post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
    return (
        <Link to={`/blog/${post.slug}`}>
            <div className="group relative h-full p-6 bg-cyber-panel border border-cyber-dim rounded-lg hover:border-cyber-primary transition-all">
                {/* Decorative glow effect */}
                <div className="absolute inset-0 bg-cyber-primary/0 group-hover:bg-cyber-primary/5 rounded-lg transition-all duration-300" />

                {/* Cover Image (if exists) */}
                {post.coverImage && (
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="relative z-10">
                    {/* Tags */}
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-mono bg-cyber-dark border border-cyber-dim rounded text-cyber-primary"
                                >
                                    <Tag className="w-3 h-3" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-cyber-primary transition-colors mb-2">
                        {post.title}
                    </h3>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-sm text-cyber-muted mb-3 font-mono">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readingTime}
                        </span>
                    </div>

                    {/* Excerpt */}
                    <p className="text-cyber-text/80 leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="mt-4 text-cyber-primary font-mono text-sm group-hover:translate-x-2 transition-transform inline-block">
                        READ_MORE →
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogPostCard;
