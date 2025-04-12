"use client";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '@/lib/supabase-client'
import Image from 'next/image'

export default function NewProfile() {
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const [posts, setPosts] = useState([])
    const router = useRouter()

    useEffect(() => {
        const getUserData = async () => {
            const { data: sessionData } = await supabase.auth.getSession()

            if (!sessionData?.session) {
                router.push('/signin')
                return
            }

            const currentUser = sessionData.session.user
            setUser(currentUser)

            const { data: profileData, error: profileError } = await supabase
                .from('visitors')
                .select('first_name, last_name, user_name, email')
                .eq('visitor_id', currentUser.id)
                .single()

            if (profileError) {
                console.error('Error fetching profile:', profileError)
            } else {
                setProfile(profileData)
            }

            const { data: userPosts, error: postsError } = await supabase
                .from('forum_posts')
                .select('*')
                .eq('visitor_id', currentUser.id)
                .order('created_at', { ascending: false })

            if (postsError) {
                console.error('Error fetching posts:', postsError)
            } else {
                setPosts(userPosts)
            }
        }

        getUserData()
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    return (
            <div className='container'>
                {profile ? (
                    <div className="container mt-4">
                        <div className="row g-2">
                            <div className="col-md-3">
                                <div className='border-end border-black'>
                                    <div className="card-body">
                                        <Image src="/assets/images/profile.png"
                                            className="img-fluid rounded-circle mb-3"
                                            alt="Profile Picture"
                                            width={300}
                                            height={300} />
                                        <h5 className="card-title mb-0 fw-bold">{profile.first_name} {profile.last_name}</h5>
                                        <p className="text-muted mb-1">@{profile.user_name}</p>
                                        <div>
                                            <i className="bi bi-envelope mx-1"></i>
                                            Email:
                                            <p className="mb-3">{profile.email}</p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="btn btn-outline-danger btn-sm"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-9">
                                {posts.length > 0 ? (
                                    posts.map(post => (
                                        <div className="card mb-3" key={post.forum_id}>
                                            <div className="card-body">
                                                <h5 className="card-title">{post.title}</h5>
                                                <p className="text-muted small mb-1">{post.category}</p>
                                                <p className="card-text">{post.content}</p>
                                                {post.image_url && (
                                                    <img src={post.image_url} className="img-fluid rounded" alt={post.title} />
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No posts found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='text-center m-5'>
                        <div className='spinner-border text-dark' role="status">
                        </div>
                        <p className='mt-2'>Loading user data...</p>
                    </div>
                )}
            </div>
    )
}
