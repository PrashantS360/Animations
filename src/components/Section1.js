import React, { useState, useEffect } from 'react'


const Section1 = () => {
    const data = "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.";
    const words = data.split(" ");
    const [scroll, setsroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            setsroll(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scroll]);

    return (
        <div className='overflow-x-hidden overflow-y-auto text-6xl w-[75vw] m-auto flex flex-wrap hide-scroll pt-12'>
            {
                words.map((word, index) => {
                    return <span key={index} className={`${scroll > (index * 25) ? "text-white " : "text-gray-600"} ${scroll > (index * 4) ? "sm:text-white " : "sm:text-gray-600"} mr-3 my-0.5 transition-all ease-in-out delay-150`}>{word}</span>
                })
            }

<div></div>
        </div>
    )
}

export default Section1