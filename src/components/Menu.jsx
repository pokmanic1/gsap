import React, { useRef, useState } from 'react'
import { sliderLists } from '../../constants'
import Cocktails from './cocktails'
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
const Menu = () => {

    const conntentRef = useRef();

    const [currentIndex, setCurentIndex] = useState(0)


    useGSAP(() => {


        gsap.fromTo("#title",
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1,
            }
        )
        gsap.fromTo(".cocktail img",
            {
                opacity: 0,
                xPercent: -100
            },
            {
                opacity: 1,
                duration: 1,
                xPercent: 0,
                ease: "power1"
            }
        )
        gsap.fromTo(".details h2",
            {
                opacity: 0,
                yPercent: -100
            },
            {
                opacity: 1,
                duration: 1,
                yPercent: 0,
                ease: "power1"
            }
        )
        gsap.fromTo(".details p",
            {
                opacity: 0,
                yPercent: -100
            },
            {
                opacity: 1,
                duration: 1,
                yPercent: 0,
                ease: "power1"
            }
        )



    }, [currentIndex])













    const totalCocktails = sliderLists.length;
    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails

        setCurentIndex(newIndex);
    }
    const getCocktailAt = (indexOffset) => {
        return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }
    const currentCocktail = getCocktailAt(0)
    const prevCocktail = getCocktailAt(-1)
    const nextCocktail = getCocktailAt(1)
    return (
        <section id='menu' aria-labelledby='menu-heading' className='px-7'>
            <img src="/public/images/slider-left-leaf.png" id='m-left-leaf' alt="eft-leaf" />
            <img src="/public/images/slider-right-leaf.png" id='m-right-leaf' alt="right-leaf" />
            <h2 id='menuHeading' className='sr-only'>
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs" aria-label='Cocktail Navigation'>
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (<button key={cocktail.id} onClick={() => goToSlide(index)}
                        className={`${isActive ? "text-white" : "text-gray-600"}`}>

                        {cocktail.name}

                    </button>)
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="test-left" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/public/images/right-arrow.png" aria-hidden="true" alt="" />
                    </button>


                    <button className="test-left" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/public/images/left-arrow.png" aria-hidden="true" alt="" />
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} className='object-contain' alt="" />
                </div>
            </div>

            <div className="recipe ">
                <div ref={conntentRef} className='info w-full flex flex-row justify-between'>
                    <div>
                        <p>Recepie for</p>
                        <p id='title'>{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>
                            {currentCocktail.title}
                        </h2>
                        <p> {currentCocktail.description}</p>
                    </div>
                </div>
            </div>



        </section>

    )
}

export default Menu