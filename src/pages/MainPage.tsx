import React from 'react'
import Title from '../components/Title'
import MainPageBtnChoices from '../components/MainPageBtnChoices'
import MainImage from '../components/MainImage'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <div className='home-page'>
        <Title/>
        {/* <MainImage /> */}
        <MainPageBtnChoices/>
        <Footer />
    </div>
  )
}

export default MainPage