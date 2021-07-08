import React from 'react'
import Navbar from './components/Navbar'
import SectionImg from './components/SectionImg'
import SectionText from './components/SectionText'
import Pic1 from './img/1.jpeg'
import "./App.css"

const App = () => {
  return (
    <>
     <Navbar/> 
     <main>
       <SectionImg img={Pic1} title="Homes" tag="Home"/>
       <SectionText title="About" tag="About"/>
       <SectionImg img={Pic1} title="Services" tag="Services" />
       <SectionImg img={Pic1} title="Contacts" tag="Contacts"/>
       <SectionImg img={Pic1} title="Feedback" tag="Feedback"/>

     </main>
    </>
  )
}

export default App
