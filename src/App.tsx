import './App.css'
import AboutUs from './components/AboutUs'
import Clients from './components/Clients'
import CourseSection from './components/CourseSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import WhyUs from './components/WhyUs'
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <WhyUs />
      <CourseSection />
      <Clients />
      <Footer />
    </div>

  )
}

export default App
