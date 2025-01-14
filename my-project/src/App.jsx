import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home/home"
import About from "./component/About/About"
import TechCards from "./TechCard/Techcard"
import SignUpForm from "./login/Login"
import Footer from "./footer/Footer"
const App = () => {
  return (
    <div>
      <>
      <Navbar />
      <Home />
      <About />
      <TechCards />
      <SignUpForm/>
      <Footer />
      

      </>      
    </div>
  )
}

export default App
