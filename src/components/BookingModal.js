import React from 'react';

const BookingModal = ({ item, setItem }) => {
    const { image, category, name, email, resalePrice, availabilty, _id } = item;




    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const clientName = form.name.value;
        const clientEmail = form.email.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        // console.log(clientName,clientEmail,productName,price,phone,location)

        const orderData = {
            clientName,
            clientEmail,
            productName,
            price,
            phone,
            location,
            image,
            _id,
            category
        }
        console.log(orderData)
        setItem(null); //for close the modal.


    }





    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 '>

                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered input-info w-full my-1 " required />

                        <input name="email" type="email" placeholder="Email Address" className="input input-bordered input-info w-full mb-1 " required />

                        <input name="productName" type="text" placeholder="Product Name" className="input input-bordered input-info w-full mb-1 " required />

                        <input name="price" type="number" placeholder="Price" className="input input-bordered input-info w-full mb-1 " required />

                        <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered input-info w-full mb-1 " required />

                        <input name="location" type="text" placeholder="Location" className="input input-bordered input-info w-full  " required />

                        <br />
                        <input type="submit" value="Submit" className="btn btn-outline btn-secondary w-full  " />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;