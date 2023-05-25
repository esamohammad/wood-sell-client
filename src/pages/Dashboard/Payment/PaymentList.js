import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../../utils/Spinner';
import useTitle from '../../../hooks/useTitle';
import { useState } from 'react';
import ConfirmationModal from '../../../components/ConfirmationModal';

const PaymentList = () => {
    useTitle('PaymentList')

    const payments = useLoaderData();
    const navigation = useNavigation(); //!loading Spinner.


    // !Deleting Payment State
    const [deletingPayment, setDeletingPayment] = useState(null);



    // !Close Modal Function
    const closeModal = () => {
        setDeletingPayment(null);
    }



    // !success Action on Modal
    const handleDeletePayment = payment => {
        console.log(payment);
    }





    if (navigation.state === "loading") { //!loading Spinner.
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h3 className="text-3xl mb-5 text-center font-bold mt-2 text-primary ">Payments List: {payments.length} </h3>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-base'>SL.</th>
                            <th className='text-base'>Transaction ID</th>
                            <th className='text-base'>Price</th>
                            <th className='text-base'>Client Email</th>
                            <th className='text-base'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments &&

                            payments?.map((payment, i) => <tr key={payment._id}>
                                <th>{i + 1}</th>
                                <td>{payment.transactionId}</td>
                                <td>{payment.price}</td>
                                <td>{payment.email}</td>
                                <td>
                                    <label onClick={() => setDeletingPayment(payment)} htmlFor="confirmation-modal" className="btn bg-red-500 hover:bg-red-700 text-white btn-xs">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>


            {

                deletingPayment &&

                <ConfirmationModal
                    title={`Are you sure you want to delete?`}

                    message={`Be careful we have not any other information of this Payment history of  ${deletingPayment.email}.It will be  permanently delete from the database.`}

                    closeModal={closeModal}

                    successAction={handleDeletePayment}

                    modalData={deletingPayment}

                    successButtonName="Delete"

                ></ConfirmationModal>

            }















        </div>
    );
};

export default PaymentList;