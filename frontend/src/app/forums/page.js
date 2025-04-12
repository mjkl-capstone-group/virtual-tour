"use client";

import { useState, useEffect } from 'react';
import supabase from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';

export default function ForumPage() {
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: '',
    });
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const { data, error } = await supabase
            .from('forum_posts')
            .select(`
                *,
                profiles:visitor_id (
                    user_name,
                    first_name,
                    last_name
            )
            `)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching posts:', error.message);
        } else {
            setPosts(data);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { data: sessionData } = await supabase.auth.getSession();
        const user = sessionData.session?.user;

        if (!user) {
            alert('You must be signed in to post.');
            router.push('/signin');
            return;
        }

        const { error } = await supabase.from('forum_posts').insert([
            {
                visitor_id: user.id,
                title: formData.title,
                content: formData.content,
                category: formData.category,
            },
        ]);

        setLoading(false);

        if (error) {
            alert(`Failed to create post: ${error.message}`);
        } else {
            alert('Post created successfully!');
            setFormData({ title: '', content: '', category: '' });
            fetchPosts();
        }
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4 text-center fw-bold">Forum</h1>

            <form onSubmit={handleSubmit} className="mb-5">
                <div className="mb-3">
                    <input
                        type="text"
                        name="title"
                        placeholder="Post Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        name="content"
                        placeholder="What's on your mind?"
                        value={formData.content}
                        onChange={handleChange}
                        className="form-control"
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="category"
                        placeholder="Category (optional)"
                        value={formData.category}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? 'Posting...' : 'Create Post'}
                </button>
            </form>

            <div>
                {posts.length === 0 ? (
                    <p className="text-center">No posts yet.</p>
                ) : (
                    posts.map((post) => (
                        <div key={post.forum_id} className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.content}</p>
                                {post.category && <span className="badge bg-secondary">{post.category}</span>}
                                <p className="text-muted mt-2 mb-0">
                                    Posted by {post.profiles?.user_name || `${post.profiles?.first_name} ${post.profiles?.last_name}`} on {new Date(post.created_at).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}