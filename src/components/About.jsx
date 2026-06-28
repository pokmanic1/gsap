import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";

import React from 'react'

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: "words"
        })
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "about",
                start: "top center",

            }
        })

        scrollTimeline.from(titleSplit.words,{
            opacity:0,
            duration:1,
            ease:"expo.out",
            yPercent:100,
            stagger:0.02
        }).from('top-grid, bottom-grid div',{
            opacity:0,duration:1,ease:"power1.inOut",stagger:0.04
        },'-=0.5')


    })

    return (
        <div id='about' className='px-[100px]'>
            <div className="md:mb-16 md:px-0 px-5">
                <div className='content'>
                    <div className='md:col-span-8'>
                        <p className='badge'>Best cocktails</p>
                        <h2>Where every details matter
                            <span className="text-white">-</span>
                            from moddle to garnish

                        </h2>
                    </div>
                    <div className="sub-content">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, cum nemo nostrum doloremque nisi aut nobis sequi tenetur veritatis repellat.</p>
                    </div>
                    <p className='md:text-3xl text-xl font-bold '>
                        <span>4.5</span>/5
                    </p>
                    <p className='text-sm text-white-100'>
                        More then 1200 customers
                    </p>
                </div>
            </div>

            <div className="top-grid">
                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src="/public/images/abt1.png" alt="" />
                </div>
                <div className='md:col-span-6'>
                    <div className='noisy' />
                    <img src="/public/images/abt2.png" alt="" />
                </div>
                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src="/public/images/abt5.png" alt="" />
                </div>

            </div>

            <div className="bottom-grid">
                <div className='md:col-span-8'>
                    <div className='noisy' />
                    <img src="/public/images/abt3.png" alt="" />
                </div>
                <div className='md:col-span-4'>
                    <div className='noisy' />
                    <img src="/public/images/abt4.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About