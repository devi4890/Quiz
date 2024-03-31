//import logo from './logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import React ,{useEffect}from 'react';
import { BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Topics_Listing from './Pages/Topics_Listing';
import Navbar   from './Pages/Navbar';
import { Footer } from './Pages/Footer';
import Topicdetails from './Pages/Topicdetails';
import Browsecourse from './Pages/Browsecourse';
import Howitworks from './Pages/Howitworks';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Forgotpswd from './Pages/Forgotpswd';
import CourseDetailsPage from './Pages/CourseDetailsPage';
import QuizDetail from './Pages/QuizDetail';
import Quiz from './Pages/Quiz';





function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      offset: 200, // Offset (in pixels) from the original trigger point
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing type (e.g., 'ease', 'ease-in', 'ease-out', 'ease-in-out')
      delay: 200, // Delay before the animation starts in milliseconds
      once: true, // Whether the animation should only happen once
      mirror: false, // Whether the animation should be mirrored when scrolling in reverse
      anchorPlacement: 'top-bottom', // Anchor placement (e.g., 'top-bottom', 'top-center', 'center-center', etc.)
    });
  }, []);
  return (
<div className='head'>
<BrowserRouter>

  
      
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}> </Route>
          <Route path="/toplisting" element={<Topics_Listing/>}></Route> 
          <Route path="/topicdetails/:slug" element={<Topicdetails/>}></Route> 
          <Route path="/browsecourse" element={<Browsecourse/>}></Route>
          <Route path="/howitworks" element={<Howitworks/>}></Route>
          <Route path="/faq" element={<Faq/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/regform" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/forgotpswd" element={<Forgotpswd/>}></Route>
          <Route path="/courses/:slug" element={<CourseDetailsPage/>} ></Route>
          
          <Route path="/quiz" element={<Quiz/>}></Route>
          </Routes>
          
          <Footer/>
          
</BrowserRouter>
</div>
  

   
   


  );
}

export default App;