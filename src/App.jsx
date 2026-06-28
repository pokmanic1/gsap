import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/cocktails";
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {

    return (
        <main>
            <Navbar />
           <Hero />
           <Cocktails />
        
        </main>
    )
}
export default App

// $ npm install gsap @gsap/react react-responsive