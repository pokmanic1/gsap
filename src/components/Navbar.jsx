import React from 'react'
import { navLinks } from '../../constants'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'


const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: "nav",
                    start: "bottom top"
                }
            }
        );


        navTween.fromTo('nav',

            {
            backgroundColor: "transparent",
            },

            {
                backgroundColor: "#00000005",
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease:"power1.inOut"
            }

        )

    })



    return (
        <nav>
            <div>
                <a href="#home" className='flex items-center gap-2 bg-black '>
                    <img src="../public/images/logo.png" alt="" />
                    <p>Velvet pour</p>
                </a>
                <ul>
                    {
                        navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))

                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar