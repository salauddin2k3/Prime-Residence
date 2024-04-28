
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-3xl">
                    <SwiperSlide className='bg-[url("https://i.ibb.co/dKffZWV/01.png")] bg-no-repeat bg-cover py-40'>
                        <div className='flex justify-center'>
                            <div className='p-24 border border-[#f7614d] w-fit rounded-2xl bg-gray-600 bg-opacity-30 text-center'>
                                <h4 className='text-xl font-medium text-white'>Welcome to <span className='font-bold'>Prime Residence</span></h4>
                                <h2 className='mt-4 text-6xl font-extrabold text-[#f7614d]'>Manage Your Property</h2>
                                <p className='mt-3 text-base font-semibold text-white'>Your will have everything nearby Single-family homes, townhouses, apartments, <br /> senior living communities and the student housing, etc</p>
                                <button className='mt-7 btn btn-error btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url("https://i.ibb.co/ykQFkzd/03.png")] bg-no-repeat bg-cover py-40'>
                        <div className='flex justify-center'>
                            <div className='p-24 border border-[#f7614d] w-fit rounded-2xl bg-gray-600 bg-opacity-30 text-center'>
                                <h4 className='text-xl font-medium text-white'>Welcome to <span className='font-bold'>Prime Residence</span></h4>
                                <h2 className='mt-4 text-6xl font-extrabold text-[#f7614d]'>Manage Your Property</h2>
                                <p className='mt-3 text-base font-semibold text-white'>Your will have everything nearby Single-family homes, townhouses, apartments, <br /> senior living communities and the student housing, etc</p>
                                <button className='mt-7 btn btn-error btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url("https://i.ibb.co/80pZD6p/04.png")] bg-no-repeat bg-cover py-40'>
                        <div className='flex justify-center'>
                            <div className='p-24 border border-[#f7614d] w-fit rounded-2xl bg-gray-600 bg-opacity-30 text-center'>
                                <h4 className='text-xl font-medium text-white'>Welcome to <span className='font-bold'>Prime Residence</span></h4>
                                <h2 className='mt-4 text-6xl font-extrabold text-[#f7614d]'>Manage Your Property</h2>
                                <p className='mt-3 text-base font-semibold text-white'>Your will have everything nearby Single-family homes, townhouses, apartments, <br /> senior living communities and the student housing, etc</p>
                                <button className='mt-7 btn btn-error btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url("https://i.ibb.co/LYXZYX5/07.png")] bg-no-repeat bg-cover py-40'>
                        <div className='flex justify-center'>
                            <div className='p-24 border border-[#f7614d] w-fit rounded-2xl bg-gray-600 bg-opacity-30 text-center'>
                                <h4 className='text-xl font-medium text-white'>Welcome to <span className='font-bold'>Prime Residence</span></h4>
                                <h2 className='mt-4 text-6xl font-extrabold text-[#f7614d]'>Manage Your Property</h2>
                                <p className='mt-3 text-base font-semibold text-white'>Your will have everything nearby Single-family homes, townhouses, apartments, <br /> senior living communities and the student housing, etc</p>
                                <button className='mt-7 btn btn-error btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
