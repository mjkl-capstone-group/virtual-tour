"use client";

import { useState, useEffect } from 'react';
import supabase from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function ForumPage() {
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: ''
    });
    const [loading, setLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
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
        setFormData(prev => ({ ...prev, [name]: value }));
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

        const { error } = await supabase.from('forum_posts').insert([{
            visitor_id: user.id,
            title: formData.title,
            content: formData.content,
            category: formData.category
        }]);

        setLoading(false);

        if (error) {
            alert(`Failed to create post: ${error.message}`);
        } else {
            alert('Post created successfully!');
            setFormData({ title: '', content: '', category: '' });
            fetchPosts();
        }
    };


    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />
            <div className="container py-5">
                <h1 className="text-center fw-bold">Forums</h1>

                <div className="mb-4 d-flex justify-content-center">
                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder="Type in to Search …"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="card shadow-sm border-0 mb-5">
                    <div className="card-body">
                        <h5 className="fw-bold mb-4">Start a Discussion</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Post Title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="form-control"
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
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value="">Select a category</option>
                                    <option value="Ask question">Ask question</option>
                                    <option value="Popular">Popular</option>
                                    <option value="Favorites">Favorites</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                {loading ? 'Posting...' : 'Post'}
                            </button>
                        </form>
                    </div>
                </div>

                <h5 className="fw-semibold mb-3">Categories</h5>
                <div className="d-flex gap-3 flex-wrap mb-4">
                    <div className="position-relative">
                        <span className="position-absolute start-0 top-0 bottom-0 bg-primary" style={{ width: '10px', borderRadius: '6px 0 0 6px' }}></span>
                        <button
                            className={`btn btn-outline-primary d-flex align-items-center ps-4 pe-3 py-2 w-100 ${activeCategory === 'Ask question' ? 'bg-primary text-white' : ''}`}
                            onClick={() => setActiveCategory('Ask question')}
                        >
                            <i className="fas fa-question-circle me-2"></i>
                            Ask question
                        </button>
                    </div>
                    <div className='position-relative'>
                        <span className="position-absolute start-0 top-0 bottom-0 bg-danger" style={{ width: '10px', borderRadius: '6px 0 0 6px' }}></span>
                        <button
                            className={`btn btn-outline-danger d-flex align-items-center ps-4 pe-3 py-2 w-100 ${activeCategory === 'Popular' ? 'bg-danger text-white' : ''}`}
                            onClick={() => setActiveCategory('Popular')}
                        >
                            <i className="fas fa-fire me-2"></i>
                            Popular
                        </button>
                    </div>
                    <div className='position-relative'>
                        <span className="position-absolute start-0 top-0 bottom-0 bg-warning" style={{ width: '10px', borderRadius: '6px 0 0 6px' }}></span>
                        <button
                            className={`btn btn-outline-warning d-flex align-items-center ps-4 pe-3 py-2 w-100 ${activeCategory === 'Favorites' ? 'bg-warning text-white' : ''}`}
                            onClick={() => setActiveCategory('Favorites')}
                        >
                            <i className="fas fa-heart me-2"></i>
                            Favorites
                        </button>
                    </div>
                </div>

                <h5 className="fw-semibold mb-3">Latest</h5>
                {filteredPosts.length === 0 ? (
                    <p className="text-center text-muted">No posts yet.</p>
                ) : (
                    filteredPosts.map(post => (
                        <div key={post.forum_id} className="card mb-4 shadow-sm border-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-2">
                                    <Image
                                        src="/assets/images/profile.jpg"
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                        className="rounded-circle me-2"
                                    />
                                    <div>
                                        <strong>{post.profiles?.first_name} {post.profiles?.last_name}</strong>
                                        {post.category && (
                                            <span className="badge bg-secondary ms-1">{post.category}</span>
                                        )}
                                        <div className="text-muted small">{new Date(post.created_at).toLocaleTimeString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
                                    </div>
                                </div>
                                <h6 className="fw-bold text-muted">{post.title}</h6>
                                <p>{post.content}</p>
                                <div className="d-flex gap-4 mt-3 text-muted">
                                    <button className="btn">
                                        <i className="fa-regular fa-heart me-1"></i> Likes
                                    </button>
                                    <button className="btn">
                                        <i className="fas fa-comment-alt me-1"></i> Comments
                                    </button>
                                    <button className="btn">
                                        <i className="fas fa-share me-1"></i> Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </>
    );
}
