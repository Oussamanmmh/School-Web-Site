import React from 'react';
import { CarouselDefault } from '../components/carousel';
import AnimatedFlag from '../components/animatedflag';
import { popover } from '@material-tailwind/react';
import ContactUs from '../components/buttonPop';

const HomePage = () => {
    
    return (
        <div className='flex flex-col gap-2 ' id='home'>
            <section className="text-gray-600 body-font mb-0">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <CarouselDefault />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Welcome to Smart Language School
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            We are a language school that offers a variety of language courses to help you learn a new language. Our courses are designed to help you learn a new language quickly and easily.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
                                Learn More
                            </button>
                            {/* <a href="tel:+1234567890" className="ml-4 inline-flex items-center justify-center text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg " >
                                Contact Us
                            </a> */}
                            <ContactUs/>
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex justify-center item-center flex-col gap-20 '>
                <h1 className='text-4xl font-bold text-gray-800 text-center'>Our Courses</h1>
                <AnimatedFlag />
            </div>

           
        </div>
    );
}

export default HomePage;
