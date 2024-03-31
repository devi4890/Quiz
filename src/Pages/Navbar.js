import React , { useState, useEffect }  from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [username, setUsername] = useState('');
  const [showLogout, setShowLogout] = useState(false); // State for toggling logout link
  const accessToken=localStorage.getItem('access_token');
  console.log(accessToken);
  const isUserLoggedIn = accessToken!==null;
  const navigate = useNavigate();
  useEffect(() => {
    console.log('accessToken:', accessToken); // Check access token
    if (isUserLoggedIn) {
      // Make an API request to fetch user data using the access token
      axios.get('http://127.0.0.1:8000/protected/', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        console.log('User data:', response.data); // Check user data response
        if (response.data && response.data.message) {
          const usernameStartIndex = response.data.message.indexOf(',') + 2; // Index of username start
          const usernameEndIndex = response.data.message.indexOf('!', usernameStartIndex); // Index of username end
          const extractedUsername = response.data.message.substring(usernameStartIndex, usernameEndIndex);
          setUsername(extractedUsername); // Set extracted username
          setShowLogout(false); // Show logout link if user data is fetched successfully
          
           } 
        else {
          console.error('Error: Username not found in message');
        }
      })
      .catch(error => {
        console.error('Error fetching user data: ', error);
      });
    }
  }, [isUserLoggedIn, accessToken]);
  const handleTopLinkClick = () => {
    setShowLogout(true);}
  
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  
    
  };
  return (
    <>
     {isUserLoggedIn ?(
    <div className='heade'>
      <nav className="navbar navbar-expand-lg" >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="bi-back"></i>
            <span className='wh'>Quiz</span>
          </Link>

          <div className="d-lg-none ms-auto me-4">
           
              <Link to="/" className="navbar-icon bi-person smoothscroll"></Link>
         
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5 me-lg-auto">
              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/">Home</Link>
              </li>

              
                  <li className="nav-item">
                    <Link className="nav-link click-scroll" to="/browsecourse">Browse Course</Link>
                  </li>
                
             

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/howitworks">How it works</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/faq">FAQs</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/contact">Contact</Link>
              </li>

              
               {/* <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#section_5" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sign Up</Link> 
                  <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                    <li><Link className="dropdown-item active" to="/regform">Registration</Link></li>
                    <li><Link className="dropdown-item active" to="/login">Login</Link></li>
                  </ul>
     </li>*/}
             
             <div className="d-none d-lg-block" style={{ display: 'flex', alignItems: 'center' }}>
  <Link to="#top" className="navbar-icon bi-person smoothscroll" onClick={handleTopLinkClick} style={{ marginRight: '10px' }}>
    <span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>Welcome, </span>
    <span style={{ fontSize: '14px' }}>{username}!</span>
  </Link>
  {/* Your other content here */}




                {showLogout && ( // Show logout link if showLogout is true
                          <button className="nav-link btn btn-link" onClick={handleLogout}>LogOut</button>
                
                )}
              </div>

           
            </ul>
          </div>
        </div>
      </nav>
    </div>
  ):(
    <div className='heade'>
      <nav className="navbar navbar-expand-lg" >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="bi-back"></i>
            <span>Quiz</span>
          </Link>

          <div className="d-lg-none ms-auto me-4">
           
              <Link to="/" className="navbar-icon bi-person smoothscroll"></Link>
         
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5 me-lg-auto">
              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/">Home</Link>
              </li>

              
                 {/* <li className="nav-item">
                    <Link className="nav-link click-scroll" to="/browsecourse">Browse Course</Link>
  </li>*/}
                
             

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/howitworks">How it works</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/faq">FAQs</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/contact">Contact</Link>
              </li>

              
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#section_5" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sign Up</Link> 
                  <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                    <li><Link className="dropdown-item active" to="/regform">Registration</Link></li>
                    <li><Link className="dropdown-item active" to="/login">Login</Link></li>
                  </ul>
                </li>
             
            </ul>

            {/*<div className="d-none d-lg-block">
             <Link to="#top" className="navbar-icon bi-person smoothscroll"></Link>
</div>
            <div className="d-none d-lg-block">
            <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>Logged Out</button>
                </li>
            </div>*/}
          </div>
        </div>
      </nav>
    </div>
   
    )}
    </>
  );
};

export default Navbar;
