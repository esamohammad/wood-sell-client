import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import  { AuthContext } from '../context/AuthProvider';


const Register = () => {
useTitle('Register');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='h-[800px] flex justify-center items-center  '>
            <div className='w-96 p-7 border-secondary border-8 rounded-2xl'>
                <h2 className='text-4xl text-center font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                   
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "Email is Required",

                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters or longer" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, 
                            message: '1 uppercase,1 lowercase and 1 special character' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500 text-sm '>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-outline w-full max-w-xs mt-4' value="Sign Up" type="submit" />
                </form>
                <p>Already have an account <Link className='text-primary font-bold' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Register;