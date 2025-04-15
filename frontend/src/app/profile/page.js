"use client";

import { useEffect, useState } from 'react';
import supabase from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import assetsURL from '@/utils/supabase-assets';

export default function ProfileWithPosts() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [posts, setPosts] = useState([]);
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState('posts');
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        const getUserData = async () => {
            const { data: sessionData } = await supabase.auth.getSession();

            if (!sessionData?.session) {
                router.push('/signin');
                return;
            }

            const currentUser = sessionData.session.user;
            setUser(currentUser);

            const { data: profileData, error } = await supabase
                .from('visitors')
                .select('first_name, last_name, user_name, email')
                .eq('visitor_id', currentUser.id)
                .single();

            if (error) {
                console.error('Error fetching profile:', error);
            } else {
                setProfile(profileData);
            }

            const { data: userPosts, error: postsError } = await supabase
                .from('forum_posts')
                .select('*')
                .eq('visitor_id', currentUser.id)
                .order('created_at', { ascending: false });

            if (postsError) {
                console.error('Error fetching posts:', postsError);
            } else {
                setPosts(userPosts);
            }
        };

        getUserData();
        fetchLikes();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    const fetchLikes = async () => {
        const { data, error } = await supabase.from('forum_likes').select('*');
        if (!error) setLikes(data);
    };

    return (
        <div className="container mt-4">
            {profile ? (
                <div className="card mx-auto shadow" style={{ maxWidth: '800px' }}>
                    <div className="position-relative rounded-1" style={{ backgroundColor: 'var(--primary-color)', height: '230px' }}>
                        <Link href="/" className="position-absolute top-0 start-0">
                            <i className="fa-solid fa-chevron-left text-light mx-3 my-3"></i>
                        </Link>
                        <div className="position-absolute top-0 end-0 dropdown">
                            <button
                                className="btn btn-link text-light"
                                type="button"
                                id="profileDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-ellipsis-vertical mx-3 my-3"></i>
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                <li>
                                    <Link href="/edit-profile" className="dropdown-item">
                                        <i className="fa-solid fa-pen-to-square me-1"></i>Edit Profile</Link>
                                </li>
                                <li>
                                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                                        <i className="fa-solid fa-right-from-bracket me-1"></i>Logout</button>
                                </li>
                            </ul>
                        </div>
                        <div className="position-absolute top-100 start-50 translate-middle" style={{ width: '120px' }}>
                            <Image
                                src={`${assetsURL.authentication}profile.jpg`}
                                alt="Profile"
                                width={120}
                                height={120}
                                className="rounded-circle border border-5 border-white"
                            />
                        </div>
                    </div>

                    <div className="card-body mt-5 text-center">
                        <h4 className="fw-bold text-black">{profile.first_name} {profile.last_name}</h4>
                        <p className="text-muted mb-1">@{profile.user_name}</p>
                        <ul className="nav nav-tabs mt-5 mb-3">
                            <li className="nav-item">
                                <button className={`nav-link text-dark ${selectedTab === 'posts' ? 'active' : ''}`} onClick={() => setSelectedTab('posts')}>Posts</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link text-dark ${selectedTab === 'about' ? 'active' : ''}`} onClick={() => setSelectedTab('about')}>About</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link text-dark ${selectedTab === 'bookmarked' ? 'active' : ''}`} onClick={() => setSelectedTab('bookmarked')}>Bookmarks</button>
                            </li>
                        </ul>

                        <div className="text-start mt-3">
                            {selectedTab === 'posts' && (
                                <div>
                                    {posts.length > 0 ? (
                                        <div className="bg-light rounded p-3">
                                            {posts.map(post => (
                                                <div key={post.forum_id} className="card mb-4 shadow-sm border-0">
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <Image
                                                                src={`${assetsURL.authentication}profile.jpg`}
                                                                alt="Profile"
                                                                width={40}
                                                                height={40}
                                                                className="rounded-circle me-2"
                                                            />
                                                            <div>
                                                                <strong>{profile.first_name} {profile.last_name}</strong>
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
                                                                <i className="fa-regular fa-heart me-1"></i>
                                                                {likes.filter(like => like.forum_id === post.forum_id).length} Likes
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
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="bg-light rounded p-4 text-muted" style={{ height: '160px' }}>
                                            No uploads yet
                                        </div>
                                    )}
                                </div>
                            )}

                            {selectedTab === 'about' && (
                                <div className="bg-light rounded p-4">
                                    <h6 className="fw-bold">About</h6>
                                    <i className="fa-solid fa-envelope text-muted"></i>
                                    <span className='ms-2 text-muted'>email adress: </span>
                                    <span>{profile.email}</span>
                                </div>
                            )}

                            {selectedTab === 'bookmarked' && (
                                <div className="bg-light rounded p-4">
                                    <h6 className="fw-bold">Bookmarks</h6>
                                    <p>No bookmarks yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading user data...</p>
                </div>
            )}
        </div>
    );

}
