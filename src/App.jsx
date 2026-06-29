import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Cocktails from "./components/cocktails";
import Art from "./components/Art";
import Menu from "./components/Menu";
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {

    return (
        <main>
            <Navbar />
           <Hero />
           <Cocktails />
            <About/>
            <Art></Art>
            <Menu></Menu>
        </main>
    )
}
export default App

// $ npm install gsap @gsap/react react-responsive