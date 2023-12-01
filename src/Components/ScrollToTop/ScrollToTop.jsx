import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 100;

        if (scrollY > threshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
    //   <div className='bottom_top '>

    //   <button onClick={scrollToTop} className="scroll-to-top-button">
    //       <FaArrowUp/>
    //   </button>
    //     </div>


        <div className={` ${isVisible ? 'bottom_top' : ''}`}>
            <button onClick={scrollToTop}>
                <FaArrowUp />
            </button>
        </div>
  )
}

export default ScrollToTop