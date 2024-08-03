import supabase from "../config/supabaseClient";
import { useEffect , useState } from "react";
import Card from "../components/card";

    const AboutUs = () => {
        const [error , setError] = useState(null)
        const [teachers , setTeachers] = useState(null)
        useEffect(() => {
            const fetchTeachers = async () => {
                const { data , error } = await supabase
                .from('teachers')
                .select('*')
                if(error) setError(error)

                else{ 
                    setTeachers(data)
                    console.log(data)
                }
            }
         //  fetchTeachers()
          
        } , [])

        return (
            <section className="py-20 shadow-xl"  id="about-us">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
                    <p className="text-center text-gray-600 mb-8">
                        Welcome to Smart Langue, where we are dedicated to making language learning accessible, enjoyable, and effective for all our students. Our mission is to provide a welcoming and stimulating environment that encourages language acquisition and cultural understanding.
                    </p>
    
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                            <h4 className="text-2xl text-gray-800 font-bold mb-4">Our Mission</h4>
                            <p className="text-center text-gray-600 mb-8">
                                Our mission is to help you learn a new language quickly and easily. We offer a variety of language courses designed to help you learn a new language in a fun and interactive way.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                            <h4 className="text-2xl text-gray-800 font-bold mb-4">Our Vision</h4>
                            <p className="text-center text-gray-600 mb-8">
                                Our vision is to be the leading language school in the world. We are committed to providing our students with the best language courses and resources to help them learn a new language.
                            </p>
                        </div>
                    </div>
    
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                            <h4 className="text-2xl text-gray-800 font-bold mb-4">Our Values</h4>
                            <p className="text-center text-gray-600 mb-8">
                                At Smart Langue, we believe in inclusivity, excellence, innovation, and cultural understanding. These values guide our approach to education and ensure that we provide the best learning experience for our students.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                            <h4 className="text-2xl text-gray-800 font-bold mb-4">Teaching Methods</h4>
                            <p className="text-center text-gray-600 mb-8">
                                Our teaching methods are interactive and engaging, designed to meet the needs of students at different proficiency levels. We use a combination of traditional and modern techniques to ensure effective language learning.
                            </p>
                        </div>
                    </div>
                    
    
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Faculty</h2>
                        <p className="text-center text-gray-600 mb-8">
                            Our teachers are highly qualified and experienced professionals who are dedicated to helping you learn a new language. They are native speakers of the languages they teach and have a deep understanding of the language and culture.
                        </p>
    
             
    
    {/* Cards end */}
                    </div>
    
                    <div className="flex flex-row justify-center space-x-10">
                        <div className="rounded-full bg-gray-500 w-24 h-24 flex items-center justify-center shadow-lg transform transition duration-500 hover:scale-110">
                            <p className="text-center text-white font-bold text-lg">+10 Courses</p>
                        </div>
                        <div className="rounded-full bg-gray-500 w-24 h-24 flex items-center justify-center shadow-lg transform transition duration-500 hover:scale-110">
                            <p className="text-center text-white font-bold text-lg">+20 Teachers</p>
                        </div>
                        <div className="rounded-full bg-gray-500 w-24 h-24 flex items-center justify-center shadow-lg transform transition duration-500 hover:scale-110">
                            <p className="text-center text-white font-bold text-lg">+5k Followers</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    
    export default AboutUs;
    
