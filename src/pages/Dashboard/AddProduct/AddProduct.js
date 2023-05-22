import React from 'react';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();



    //*=====================================\\
    //!Handle Submit onclick event function.
    const handleAddDoctor = data => {
        console.log(data);
    }



    //*=====================================\\
    //!Current Date Variable
    let today = new Date();
    let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
    // console.log(date)



    return (
        <div>
            <div className='w-full p-4'>
                <h3 className="text-3xl mb-5 text-center font-bold mt-2 text-primary ">Add Product </h3>
                <form onSubmit={handleSubmit(handleAddDoctor)}>


                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text font-bold">Product Name</span></label>
                            <input type="text" {...register("productName", {
                                required: "Product Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm input-primary" />
                            {errors.productName && <p className='text-red-500 text-sm'>{errors.productName.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text font-bold">Location</span></label>
                            <input type="text" {...register("location", {
                                required: "Location is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm input-primary" />
                            {errors.location && <p className='text-red-500 text-sm'>{errors.location.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text font-bold">Resell Price</span></label>
                            <input type="number" {...register("resellPrice", {
                                required: "Resell Price is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm input-primary" />
                            {errors.resellPrice && <p className='text-red-500 text-sm'>{errors.resellPrice.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text font-bold">Original Price</span></label>
                            <input type="number" {...register("originalPrice", {
                                required: "Original Price is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm input-primary" />
                            {errors.originalPrice && <p className='text-red-500 text-sm'>{errors.originalPrice.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text font-bold">Used Year</span></label>
                            <input type="number" {...register("usedYear", {
                                required: "Used Year is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm input-primary" />
                            {errors.usedYear && <p className='text-red-500 text-sm'>{errors.usedYear.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text font-bold">Condition</span></label>
                            <input type="text" {...register("condition", {
                                required: "Condition is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm input-primary" />
                            {errors.condition && <p className='text-red-500 text-sm'>{errors.condition.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text font-bold">Seller Name</span></label>
                            <input type="text" {...register("sellerName", {
                                required: "Seller Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm input-primary" />
                            {errors.sellerName && <p className='text-red-500 text-sm'>{errors.sellerName.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text font-bold">Product Posting Date</span></label>
                            <input value={`${date}`} fix type="text" {...register("postingDate", {
                                required: "Filled Automatically"
                            })} className="input input-bordered w-full max-w-xs input-sm input-primary" />
                            {errors.postingDate && <p className='text-red-500 text-sm'>{errors.postingDate.message}</p>}
                        </div>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text font-bold">Select Condition</span></label>
                        <select className="select select-primary w-full max-w-xs input-sm">
                            <option disabled selected>Condition of your product?</option>
                            <option>Auto</option>
                            <option>Dark mode</option>
                            <option>Light mode</option>
                        </select>
                    </div>
                    <input className='btn btn-outline  w-full mt-4 ' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;