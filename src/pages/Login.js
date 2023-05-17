import React from 'react';
import useTitle from '../hooks/useTitle';
import { Link } from 'react-router-dom';
import { BsGoogle, BsGithub } from "react-icons/bs";




const Login = () => {
    useTitle('Login');
    return (
        <form onSubmit="" className="card-body lg:w-1/3 mx-auto px-30 bg-base-300 shadow-layer rounded mt-20">
            <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className='text-3xl font-semibold text-center'>Please <span className='text-yellow-500'>Login</span></h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                </label>
                <label className="label">
                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
            </div>
            <div>

            </div>
            <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
            </div>
            <div className="flex text-3xl justify-center mt-5">
                <button onClick="">
                    <BsGoogle />
                </button>
                <button onClick="">
                    <BsGithub className="ml-5" />
                </button>
            </div>
        </form>
    );
};

export default Login;