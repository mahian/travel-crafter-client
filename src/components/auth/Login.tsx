import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(formData: any) => {
        try {
            const response = await fetch('http://localhost:5000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black my-5">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">Log in</p>
                                        <p className="text-center mb-5 mx-1 mx-md-4 mt-4">not have any account yet? Please <Link href="../register">Create an account</Link></p>

                                        <form onSubmit={handleSubmit(onSubmit)} className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw d-none d-sm-block"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw d-sm-none"></i>
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    <input type="email" {...register("email", { required: true })} id="form3Example3c" className="form-control" />
                                                    {errors.email && <p>This field is required</p>}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw d-none d-sm-block"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw d-sm-none"></i>
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    <input type="password" {...register("password", { required: true })} id="form3Example4c" className="form-control" />
                                                    {errors.password && <p>This field is required</p>}
                                                </div>
                                            </div>

                                            <div className="form-check d-flex mb-5">
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    <Link href="#">Forgot Password</Link>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="primary-btn">Log in</button>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;