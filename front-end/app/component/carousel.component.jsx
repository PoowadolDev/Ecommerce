'use client'

import Image from "next/image";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"
import { useState } from "react";

export default function Carousel({slides}) {

    let [current, setCurrent] = useState();

    let previouSlide = () => {
        if (current===0) setCurrent(slides.length-1);
        else setCurrent(current-1);
    
    };

    let nextSlide = () => {
        if (current === slides.length-1) setCurrent(0);
        else setCurrent(current + 1);
    
    };

    return (<div className="overflow-hidden relative">
                <div className={`flex translate ease-out duration-40 translate-x-[-${current * 100}]`}>    
                    {slides.map((s) => {
                            return <Image                 
                            src={s}
                            fill={true}
                            alt="banner"/>;
                        })}
                    </div>

                    <div className="absolute top-0 h-full w-full justify-between items-baseline flex text-white px-10 text-3xl">
                    <button onClick={previouSlide}>
                        <BsFillArrowLeftCircleFill/>
                    </button>
                    <button onClick={nextSlide}>
                        <BsFillArrowRightCircleFill/>
                    </button>
                </div>
            </div>
            )

}