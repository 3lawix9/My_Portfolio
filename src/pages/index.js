import About from "components/About";
import Contact from "components/Contact";
import Experience from "components/Experience";
import Navbar from "components/Nav";
import Projects from "components/Projects";
import Skills from "components/Skills";



export default function Home() {
  return (
    <>
    <Navbar />
     <About />
     <Experience/>
     <Skills />
     <Projects />
     <Contact/>
   </>
  )
}
