import { Link } from "react-router-dom";


const Estate = (estate) => {
    return (
        <div>
            <div className=''>
                <div className='rounded-xl mt-7 border-[#dddcdc] border p-6 h-full'>
                    <div>
                        <div>
                            <div className='mt-6 flex flex-col md:flex-col lg:flex-row lg:items-center gap-4'>
                                {/* <h2 className='text-base font-medium text-[#23BE0A] font-work bg-[#23be0a0d] px-4 py-1 rounded-full w-fit'>Young Adult</h2> */}
                            </div>
                            <div className='mt-5'>
                                <h2 className='text-2xl font-bold text-[#131313] font-playfire'>{estate.estate_title}</h2>
                                {/* <p className='mt-6 text-base font-medium text-[#131313cc] font-work'>Author: {book.author}</p> */}
                            </div>
                        </div>
                        <div className=''>
                            <div className=' mt-6 border-b-2 border-dashed'></div>
                            <div className='mt-6 flex justify-between items-center'>
                                <div>
                                    {/* <h3 className='text-base font-medium text-[#131313cc] font-work'>{book.category}</h3> */}
                                </div>
                                <div className='flex items-center gap-2'>
                                    {/* <div><h3 className='text-base font-medium text-[#131313cc] font-work'>{book.rating}</h3></div> */}
                                    <div><img src="/src/assets/star.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;