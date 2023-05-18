import React from 'react';
import useTitle from '../hooks/useTitle';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';





const Login = () => {
    useTitle('Login');
    const { register, formState: { errors }, handleSubmit } = useForm();
    //! Own making handleLogin -73.2,NOD.
    const handleLogin = data => {
        console.log(data);

    }





    return (
      
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border-secondary border-8 rounded-2xl'>
                <h2 className='text-4xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"> <span className="label-text"><Link className='text-primary font-bold' to="/register">Forget Password..?</Link></span></label>
                        
                    </div>

                    <input className='btn btn-outline w-full' value="Login" type="submit" />
                </form>
                <p>Are you new..?  <Link className='text-primary font-bold' to="/register">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;