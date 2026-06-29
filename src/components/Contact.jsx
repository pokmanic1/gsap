import React, { use } from 'react'
import { openingHours, socials } from '../../constants'
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
const Contact = () => {





    useGSAP(() => {


        const titleSplit = SplitText.create("#contact h2", { type: "words" });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center"
            },
            ease: "power1.inOut"


        })

        timeline.from(titleSplit.words, {
            opacity: 0, yPercent: 100, stagger: 0.02,
        })
        timeline.from('#contact h3, #contact p', {
            opacity: 0, yPercent: 100, stagger: 0.02,
        })
        timeline.to("#f-right-leaf", {
            y:'-50',duration:1,ease:'power1.inOut'
        })
        timeline.to("#r-right-leaf", {
            y:'-50',duration:1,ease:'power1.inOut'
        },'<before')
    })

    return (
        <footer id='contact'>
            <img src="/public/images/footer-right-leaf.png" id='f-right-leaf' alt="" />
            <img src="/public/images/footer-left-leaf.png" id='f-left-leaf' alt="" />

            <div className="content ">
                <h2>Where to Find Us</h2>
                <div className="">
                    <h3>Visit Our Bar</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,</p>

                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>3734569237</p>
                    <p>email@example.com</p>
                </div>
                <div>
                    <h3>Open every day</h3>
                    {openingHours.map(time => {
                        <p key={time.day}>
                            {time.day}:{time.time}
                        </p>
                    })}
                </div>

                <div>
                    <h3>Socials</h3>

                    <div className="flex-center gap-6">
                        {socials.map(social => {
                            <a href={social.url} key={social.name} target="_blank" rel="noopenet" aria-label={social.name}>

                                <img src={social.icon} alt="" />
                            </a>
                        })}

                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Contact