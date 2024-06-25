import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

import React from 'react';

const ListView = ({ items }) => {
    const scrollerRef = useRef(null);

    useEffect(() => {
        const scrollAnimation = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
        scrollAnimation.to(scrollerRef.current, { xPercent: -100, duration: 20, ease: "linear" });
    }, []);

    return (
        <div className="overflow-hidden relative w-full py-6 bg-gray-100 mb-20">
            <div ref={scrollerRef} className="flex space-x-4 whitespace-nowrap">
                {items.map((item, index) => (
                    <div key={index} className="inline-block bg-white shadow-lg rounded-lg p-4">
                        <img className="h-24 w-24 rounded-full mx-auto" src={item.image} alt={item.name} />
                        <p className="text-center font-bold mt-2">{item.name}</p>
                        <p className="text-center text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
       
};

export default ListView;
