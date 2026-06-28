import React from 'react'
import { featureLists, goodLists } from '../../constants'
import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from 'react-responsive'
const Art = () => {

    const isMobile=useMediaQuery({maxWidth:767});


    useGSAP(()=>{

        const start = isMobile?"top 20%":"top top";
        // const end =isMobile?""
        const maskedTimelie = gsap.timeline({
            scrollTrigger:{
                trigger:"#art",
                start,
                end:"bottom center",
                scrub:1.5,
                pin:true //importat art section fixed inplace while scroling

            }
        })


        maskedTimelie.to('.will-fade',{
            opacity:0,
            stagger:0.2,
            ease:"power1.inOut"
        }).to(".masked-img",{
            scale:1.3,
            maskPosition:"center",
            maskSize:'400%',
            duration:3,
            ease:'power1.inOut'
        }).to('.masked-content',{
            opacity:1,
            ease:"power1.inOut",
            duration:1,
            
        })

    })

    return (
        <div id='art'>
            <div className="container   mx-auto h-full pt-20">

                <h2 className='will-fade'>The Art</h2>
                <div className='content'>
                  
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((features, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <img src="/public/images/check.png" alt="" />
                                {features}
                            </li>
                        ))}
                    </ul>
                    <div className="cocktail-img">
                        <img src="/public/images/under-img.jpg" alt="" className='abs center masked-img size-full object-contain' />
                    </div>

                    <ul className="space-y-4 will-fade">
                        {featureLists.map((features, index) => (
                            <li key={index} className='flex items-center justify-start gap-2'>
                                <img className='md:w-fit w-60' src="/images/check.png" alt="" />
                                {features}
                            </li>
                        ))}
                    </ul>


                </div>

                <div className="masked-container">
                    <h2 className="will-fade">
                        Sip-Worthy Perfection
                    </h2>
                    <div className="masked-content">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, suscipit?</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Art