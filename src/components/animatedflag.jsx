import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ukFlag from '../assets/uk.png';
import frFlag from '../assets/france.png';
import spFlag from '../assets/spain.png';
import grFlag from '../assets/germany.png';
import itFlag from '../assets/italy.png';
import trFlag from '../assets/turc.png';
import rsFlag from '../assets/russia.png';

const flags = [
    { src: ukFlag, alt: 'UK Flag' },
    { src: frFlag, alt: 'FRANCE Flag' },
    { src: spFlag, alt: 'SPAIN Flag' },
    { src: grFlag, alt: 'GERMANY Flag' },
    { src: itFlag, alt: 'Italy Flag' },
    { src: rsFlag, alt: 'Russia Flag' },
    { src: trFlag, alt: 'Turkish Flag' },
];

const AnimatedFlag = () => {
    const flagRefs = useRef([]);
    const [currentFlag, setCurrentFlag] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFlag((prevFlag) => (prevFlag + 1) % flags.length);
        }, 2000); // Change flag every 2 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        flagRefs.current.forEach((flagRef, index) => {
            if (index === currentFlag) {
                gsap.to(flagRef, {
                    zIndex: 1,
                    opacity: 1,
                    duration: 1,
                });
            } else {
                gsap.to(flagRef, {
                    zIndex: 0,
                    opacity: 0.5,
                    duration: 1,
                });
            }
        });
    }, [currentFlag]);

   

    return (
        <div className="relative w-full h-55  ">
            {flags.map((flag, index) => (
                <img
                    ref={(el) => (flagRefs.current[index] = el)}
                    key={index}
                    src={flag.src}
                    alt={flag.alt}
                    className="absolute w-20 h-20 transition-opacity"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: index === currentFlag ? 1 : 0,
                        opacity: index === currentFlag ? 1 : 0.5,
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedFlag;
