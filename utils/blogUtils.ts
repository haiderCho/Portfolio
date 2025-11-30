import { BlogPost } from '../types';

// Simple reading time calculation
const calculateReadingTime = (text: string): string => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
};

// Custom frontmatter parser
const parseFrontmatter = (content: string) => {
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        return {
            data: {},
            content: content
        };
    }

    const frontmatterBlock = match[1];
    const markdownContent = content.replace(frontmatterRegex, '').trim();
    const data: Record<string, any> = {};

    frontmatterBlock.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            let value = valueParts.join(':').trim();
            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            // Parse arrays (simple comma-separated)
            if (value.startsWith('[') && value.endsWith(']')) {
                const arrayContent = value.slice(1, -1);
                data[key.trim()] = arrayContent.split(',').map(item => {
                    item = item.trim();
                    if (item.startsWith('"') && item.endsWith('"')) {
                        return item.slice(1, -1);
                    }
                    return item;
                }).filter(Boolean);
            } else {
                data[key.trim()] = value;
            }
        }
    });

    return { data, content: markdownContent };
};

// This will be used to dynamically import all markdown files from the blog-posts directory
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
    // In a Vite setup, we use import.meta.glob to get all markdown files
    const postFiles = import.meta.glob('../blog-posts/*.md', { as: 'raw', eager: true });

    // console.log('Blog Utils: Found post files:', Object.keys(postFiles));

    const posts: BlogPost[] = [];

    for (const path in postFiles) {
        const content = postFiles[path] as string;
        const filename = path.replace('../blog-posts/', '').replace('.md', '');

        // Skip hidden files (like _template)
        if (filename.startsWith('_')) continue;

        // Strip numeric prefix for the slug (e.g. 00_welcome -> welcome)
        const slug = filename.replace(/^\d+_/, '');

        try {
            const { data, content: markdownContent } = parseFrontmatter(content);
            // console.log('Blog Utils: Parsed post:', slug, data);

            const readingTime = calculateReadingTime(markdownContent);

            posts.push({
                id: slug,
                slug,
                title: data.title || 'Untitled',
                date: data.date || new Date().toISOString().split('T')[0],
                tags: Array.isArray(data.tags) ? data.tags : [],
                excerpt: data.excerpt || '',
                coverImage: data.coverImage || '',
                content: markdownContent,
                readingTime,
            });
        } catch (e) {
            console.error('Blog Utils: Error parsing post:', slug, e);
        }
    }

    // console.log('Blog Utils: Final posts array:', posts);

    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    try {
        const postFiles = import.meta.glob('../blog-posts/*.md', { as: 'raw', eager: true });

        // Find the file that matches the slug, considering potential prefixes
        const matchingPath = Object.keys(postFiles).find(path => {
            const filename = path.replace('../blog-posts/', '').replace('.md', '');
            if (filename.startsWith('_')) return false;
            const currentSlug = filename.replace(/^\d+_/, '');
            return currentSlug === slug;
        });

        if (!matchingPath) {
            return null;
        }

        const content = postFiles[matchingPath] as string;
        const { data, content: markdownContent } = parseFrontmatter(content);
        const readingTime = calculateReadingTime(markdownContent);

        return {
            id: slug,
            slug,
            title: data.title || 'Untitled',
            date: data.date || new Date().toISOString().split('T')[0],
            tags: Array.isArray(data.tags) ? data.tags : [],
            excerpt: data.excerpt || '',
            coverImage: data.coverImage || '',
            content: markdownContent,
            readingTime,
        };
    } catch (error) {
        console.error('Error loading blog post:', error);
        return null;
    }
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const getPostsByTag = async (tag: string): Promise<BlogPost[]> => {
    const allPosts = await getAllBlogPosts();
    return allPosts.filter(post => post.tags.includes(tag));
};

export const getAllTags = async (): Promise<string[]> => {
    const allPosts = await getAllBlogPosts();
    const tags = new Set<string>();
    allPosts.forEach(post => {
        post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
};
