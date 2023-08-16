import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import MainTrack from './components/MainTrack'
import HeroSec from './components/HeroSec'
import FootBar from './components/FootBar'
import Project from './components/pages/ProjectForm'
import TrainApi from './components/pages/TrainApi'

export default function Main() {
  return (
        <section>
        <BrowserRouter>
        <div className="track">
        
          <NavBar/>
          <HeroSec/>
          
        
        </div>
        
        <div className='mainda'>
            <MainTrack/>
        </div>


        <Routes>
          <Route path='/explore' element = {<Project/>}></Route>
          <Route path='/tickets' element = {<TrainApi/>}></Route>
        </Routes>
        
        </BrowserRouter>
        </section>
  )
}
