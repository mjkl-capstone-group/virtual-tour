"use client";

import { useState, useEffect } from 'react';
import supabase from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function ForumPage() {
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: ''
    });
    const [loading, setLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [likes, setLikes] = useState([]);

    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const { data: sessionData } = await supabase.auth.getSession();
            const user = sessionData.session?.user;
            if (user) setCurrentUser(user.id);
        };

        fetchUser();
        fetchPosts();
        fetchLikes();
    }, []);

    const fetchLikes = async () => {
        const { data, error } = await supabase.from('forum_likes').select('*');
        if (!error) setLikes(data);
    };
    
    const fetchPosts = async () => {
        const { data, error } = await supabase
            .from('forum_posts')
            .select(`
                *,
                profile:visitor_id (
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

        let error;

        if (isEditing) {
            const { error: updateError } = await supabase
                .from('forum_posts')
                .update({
                    title: formData.title,
                    content: formData.content,
                    category: formData.category
                })
                .eq('forum_id', editPostId);
            error = updateError;
        } else {
            const { error: insertError } = await supabase.from('forum_posts').insert([{
                visitor_id: user.id,
                title: formData.title,
                content: formData.content,
                category: formData.category
            }]);
            error = insertError;
        }

        setLoading(false);

        if (error) {
            alert(`${isEditing ? 'Update' : 'Post'} failed: ${error.message}`);
        } else {
            alert(isEditing ? 'Post updated successfully!' : 'Post created successfully!');
            setFormData({ title: '', content: '', category: '' });
            setIsEditing(false);
            setEditPostId(null);
            fetchPosts();
        }
    };

    const handleEdit = (post) => {
        setEditingPost({ ...post });
        setEditModalOpen(true);
    };

    const handleUpdatePost = async () => {
        const { error } = await supabase
            .from('forum_posts')
            .update({
                title: editingPost.title,
                content: editingPost.content,
                category: editingPost.category,
                updated_at: new Date().toISOString()
            })
            .eq('forum_id', editingPost.forum_id);

        if (error) {
            alert(`Update failed: ${error.message}`);
        } else {
            alert('Post updated!');
            setEditModalOpen(false);
            setEditingPost(null);
            fetchPosts();
        }
    };

    const handleDelete = async (postId) => {
        if (confirm('Are you sure you want to delete this post?')) {
            const { error } = await supabase
                .from('forum_posts')
                .delete()
                .eq('forum_id', postId);

            if (error) {
                alert(`Delete failed: ${error.message}`);
            } else {
                alert('Post deleted.');
                fetchPosts();
            }
        }
    };

    const hasUserLiked = (postId) => {
        return likes.some(like => like.forum_id === postId && like.visitor_id === currentUser);
    }

    const handleLike = async (postId) => {
        const alreadyLiked = hasUserLiked(postId);

        if (!currentUser) {
            alert('Please sign in to like posts.');
            return;
        }

        if (alreadyLiked) {
            const { error } = await supabase
                .from('forum_likes')
                .delete()
                .match({ forum_id: postId, visitor_id: currentUser });

            if (!error) {
                setLikes(likes.filter(like => !(like.forum_id === postId && like.visitor_id === currentUser)));
            }
        } else {
            const { error } = await supabase.from('forum_likes').insert([{
                forum_id: postId,
                visitor_id: currentUser
            }]);

            if (!error) {
                setLikes([...likes, { forum_id: postId, visitor_id: currentUser }]);
            }
        }
    };

    const handleShare = (post) => {
        const postUrl = `${window.location.origin}/forums/${post.forum_id}`;
        navigator.clipboard.writeText(postUrl);
        alert('Post link copied to clipboard!');
    };

    const handleReport = (post) => {
        alert(`Reported post: ${post.title}`);
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

                <div className="row g-4 mb-5">
                    <div className="col-lg-8">
                        <div className="card shadow-sm border-0 rounded-4 h-100">
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit}>
                                    <h5 className="fw-bold mb-4">{isEditing ? 'Edit Post' : 'New Post'}</h5>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Post title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="form-control form-control-lg mb-3 rounded-3"
                                    />
                                    <textarea
                                        name="content"
                                        placeholder="What’s on your mind?"
                                        value={formData.content}
                                        onChange={handleChange}
                                        className="form-control mb-3 rounded-3"
                                        rows="4"
                                        required
                                    />
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="form-select mb-3 rounded-3"
                                    >
                                        <option value="">Choose a category</option>
                                        <option value="Ask question">Ask a question</option>
                                        <option value="Popular">Popular</option>
                                        <option value="Favorites">Favorites</option>
                                    </select>
                                    <div className="d-flex justify-content-between align-items-center border-top pt-3">
                                        <div className="d-flex gap-4 text-secondary fs-5">
                                            <i className="far fa-image" title="Add Photo"></i>
                                            <i className="far fa-smile" title="Add Emoji"></i>
                                            <i className="fas fa-map-marker-alt" title="Add Location"></i>
                                        </div>
                                        <div className="d-flex">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-sm rounded-pill px-4"
                                                disabled={loading}
                                            >
                                                {loading ? (isEditing ? 'Updating...' : 'Posting...') : (isEditing ? 'Update' : 'Post')}
                                            </button>
                                            {isEditing && (
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm rounded-pill px-4 ms-2"
                                                    onClick={() => {
                                                        setIsEditing(false);
                                                        setEditPostId(null);
                                                        setFormData({ title: '', content: '', category: '' });
                                                    }}
                                                >
                                                    Cancel Edit
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow-sm border-0 rounded-4 h-100">
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-3">Quick Search</h5>
                                <input
                                    type="text"
                                    className="form-control rounded-pill shadow-sm mb-4"
                                    placeholder="Type in to Search ..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <h5 className="fw-bold mb-4">Categories</h5>
                                <div className="d-grid gap-3">
                                    {['Ask question', 'Popular', 'Favorites'].map((cat, i) => {
                                        const color = ['primary', 'danger', 'warning'][i];
                                        return (
                                            <div className="position-relative" key={cat}>
                                                <span className={`position-absolute top-0 bottom-0 bg-${color}`} style={{ width: '10px', borderRadius: '6px 0 0 6px' }}></span>
                                                <button
                                                    className={`btn btn-outline-${color} d-flex align-items-center p-0 py-2 ps-3 w-100 ${activeCategory === cat ? `bg-${color} text-white` : ''}`}
                                                    onClick={() => setActiveCategory(cat)}
                                                >
                                                    <i className={`me-2 ${cat === 'Ask question' ? 'fas fa-question-circle' : cat === 'Popular' ? 'fas fa-fire' : 'fas fa-heart'}`}></i>
                                                    {cat}
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h5 className="fw-semibold mb-3">For You</h5>
                {filteredPosts.length === 0 ? (
                    <p className="text-center text-muted">No posts yet.</p>
                ) : (
                    filteredPosts.map(post => (
                        <div key={post.forum_id} className="card mb-4 shadow-sm border-0">
                            <div className="card-body position-relative">
                                <div className="dropdown position-absolute top-0 end-0 m-3">
                                    <button className="btn btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-ellipsis-h"></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        {currentUser === post.visitor_id ? (
                                            <>
                                                <li>
                                                    <button className="dropdown-item" onClick={() => handleEdit(post)}>
                                                        <i className="fa-solid fa-pen-to-square me-2"></i>
                                                        Edit
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item text-danger" onClick={() => handleDelete(post.forum_id)}>
                                                        <i className="fa-solid fa-trash me-2 text-danger"></i>
                                                        Delete
                                                    </button>
                                                </li>
                                            </>
                                        ) : (
                                            <li>
                                                <button className="dropdown-item text-danger" onClick={() => handleReport(post)}>
                                                    <i className="fa-solid fa-flag me-2 text-danger"></i>
                                                    Report
                                                </button>
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <div className="d-flex align-items-center mb-2">
                                    <Image
                                        src="/assets/images/profile.jpg"
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                        className="rounded-circle me-2"
                                    />
                                    <div>
                                        <strong>{post.profile?.first_name} {post.profile?.last_name}</strong>
                                        {post.category && (
                                            <span className="badge bg-secondary ms-1">{post.category}</span>
                                        )}
                                        <div className="text-muted small">
                                            {post.updated_at
                                                ? `Edited: ${new Date(post.updated_at).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`
                                                : `Posted: ${new Date(post.created_at).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`}
                                        </div>
                                    </div>
                                </div>
                                <h6 className="fw-bold text-muted">{post.title}</h6>
                                <p>{post.content}</p>
                                <div className="d-flex gap-4 mt-3 text-muted">
                                    <button className="btn" onClick={() => handleLike(post.forum_id)}>
                                        <i className={`fa-heart me-1 ${hasUserLiked(post.forum_id) ? 'fa-solid text-danger' : 'fa-regular'}`}></i>
                                        {likes.filter(like => like.forum_id === post.forum_id).length} Likes
                                    </button>
                                    <button className="btn"><i className="fas fa-comment-alt me-1"></i> Comments</button>
                                    <button className="btn" onClick={() => handleShare(post)}><i className="fa-solid fa-share-nodes me-1"></i> Share</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {editModalOpen && editingPost && (
                <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Post</h5>
                                <button type="button" className="btn-close" onClick={() => setEditModalOpen(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    value={editingPost.title}
                                    onChange={(e) => setEditingPost(prev => ({ ...prev, title: e.target.value }))}
                                />
                                <textarea
                                    className="form-control mb-3"
                                    rows="4"
                                    value={editingPost.content}
                                    onChange={(e) => setEditingPost(prev => ({ ...prev, content: e.target.value }))}
                                />
                                <select
                                    className="form-select"
                                    value={editingPost.category}
                                    onChange={(e) => setEditingPost(prev => ({ ...prev, category: e.target.value }))}
                                >
                                    <option value="">Choose a category</option>
                                    <option value="Ask question">Ask a question</option>
                                    <option value="Popular">Popular</option>
                                    <option value="Favorites">Favorites</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setEditModalOpen(false)}>Cancel</button>
                                <button className="btn btn-primary" onClick={handleUpdatePost}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}
