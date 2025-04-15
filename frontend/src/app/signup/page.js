"use client";

import { useState } from 'react'
import supabase from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import assetsURL from '@/utils/supabase-assets';

export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        user_name: '',
    })

    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        const { email, password, first_name, middle_name, last_name, user_name } = formData

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            alert(error.message)
            return
        }

        const user = data.user
        if (user) {
            const { error: profileError } = await supabase
                .from('visitors')
                .insert([{
                    visitor_id: user.id,
                    email,
                    first_name,
                    middle_name,
                    last_name,
                    user_name
                }])

            if (profileError) {
                console.error('Error inserting profile:', profileError)
            } else {
                await supabase.auth.signOut();
                alert('Successfully registered account')
                router.push('/signin')
            }
        }
    }

    return (
        <div className="container-fluid vh-100 bg-light">
            <div className="row h-100">
                <div className="col-md-6 d-none d-md-block position-relative p-0">
                    <div className="position-absolute" style={{ zIndex: 1, top: "30px", left: "30px" }}>
                        <Link href="/" className='text-decoration-none'>
                            <Image
                                src={`${assetsURL.logos}leytexplore.jpg`}
                                width={40}
                                height={40}
                                alt="Leyte Explore"
                                className='mb-2'
                            />
                            <span className="fw-bold text-white ms-2 fs-4">PERIPLOS</span>
                        </Link>
                    </div>

                    <Image
                        src={`${assetsURL.authentication}sign.png`}
                        alt="Signup Image"
                        fill={true}
                        style={{
                            borderTopRightRadius: "30px",
                            borderBottomRightRadius: "30px",
                        }}
                        className="object-fit-cover"
                    />

                    <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5" style={{ zIndex: 1 }}>
                        <h2 className="text-white text-center fw-bold">Start your journey with us</h2>
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="container px-5">
                        <h1 className="mb-5 text-center fw-bold fs-4">SIGN UP</h1>
                        <form className="w-100" onSubmit={handleRegister}>
                            <h4 className="mb-3 fs-6">Personal Information</h4>
                            <div className="row mb-4">
                                <div className="col-md-4 mb-3">
                                    <input
                                        type="text"
                                        pattern="^[A-Za-z]+(\s[A-Za-z]+)*$"
                                        name="first_name"
                                        placeholder="First Name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <input
                                        type="text"
                                        name="middle_name"
                                        placeholder="Middle Name"
                                        value={formData.middle_name}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <input
                                        type="text"
                                        pattern="^[A-Za-z]+(\s[A-Za-z]+)*$"
                                        name="last_name"
                                        placeholder="Last Name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>

                            <h4 className="my-4 fs-6">Account Information</h4>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    pattern="^[A-Za-z0-9]+$"
                                    name="user_name"
                                    placeholder="Username"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    pattern="^(?!\s*$).+"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="acceptTerms" required />
                                    <label className="form-check-label" htmlFor="acceptTerms">
                                        By signing up, you agree to our <a href="/terms" className="text-decoration-none">Terms of Service and Privacy Policy</a>.
                                        You can unsubscribe from our communications at any time. If you have any questions or concerns,
                                        feel free to <a href="/about" className="text-decoration-none">contact us</a>.
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mt-4">
                                <button type='submit' className="btn btn-primary w-50">Sign Up</button>
                            </div>
                        </form>

                        <div className="d-flex justify-content-center mt-3">
                            <p>Already have an account? <a href="/signin" className="text-decoration-none">Sign In</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
