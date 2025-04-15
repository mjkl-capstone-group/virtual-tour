"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import assetsURL from "@/utils/supabase-assets";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error: loginError, data } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        });

        console.log("Supabase Response:", { loginError });

        if (loginError) {
            setError("Invalid credentials, please try again.");
            console.error("Login Error:", loginError.message);
            return;
        }

        console.log("Login Successful:", data);
        router.push("/");
    };


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
                        sizes="500px"
                        style={{
                            borderTopRightRadius: "30px",
                            borderBottomRightRadius: "30px",
                        }}
                        className="object-fit-cover"
                        priority
                    />

                    <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5" style={{ zIndex: 1 }}>
                        <h2 className="text-white text-center fw-bold">Welcome!</h2>
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="container px-5">
                        <h1 className="mb-5 text-center fw-bold fs-4">SIGN IN</h1>
                        <form className="w-100" onSubmit={handleSubmit}>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}

                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-center mt-4">
                                <button type="submit" className="btn btn-primary w-50">Sign In</button>
                            </div>
                        </form>
                        <div className="d-flex justify-content-center mt-3">
                            <p>Don't have an account? <a href="/signup" className="text-decoration-none">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
