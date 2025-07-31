import React from 'react'
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import RoomsPreview from './RoomPreview';
import DiningExperience from './DiningExperience';



const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutUs/>
      <RoomsPreview/>
      <DiningExperience/>
    </div>
  )
}

export default Home
