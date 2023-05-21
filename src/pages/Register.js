import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import  { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-hot-toast';


const Register = () => {
useTitle('Register');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    //! firebase error.
    //! *** redirect to home page.
    const navigate = useNavigate();



    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');  //! firebase error clear error
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email) //!post api call
                     })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }



    //! Save user to the database - Post api call.
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user', data);
                navigate('/');

            })
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



                    {/* firebase error  */}
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                </form>
                <p>Already have an account <Link className='text-primary font-bold' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Register;