import Title from '../components/Title'
import MainPageBtnChoices from '../components/MainPageBtnChoices'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <div className='home-page'>
        <Title/>
        <MainPageBtnChoices/>
        <Footer />
    </div>
  )
}

export default MainPage