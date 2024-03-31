import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', formData);
      const { access_token, refresh_token } = response.data;

      // Store tokens in local storage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      navigate('/toplisting');
      // Redirect the user to another page or show a success message
      // window.location.href = '/dashboard';
      console.log('Login successful');
      console.log(access_token,refresh_token)
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <main>

    


    <header className="site-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
            <div className="row align-items-center">

                <div className="col-lg-5 col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="index.html">Homepage</Link></li>

                            <li className="breadcrumb-item active" aria-current="page">Login Form</li>
                        </ol>
                    </nav>

                    <h2 className="text-white">Login Form</h2>
                </div>

            </div>
        </div>
    </header>


    <section className="section-padding section-bg">
        <div className="container">
            <div className="row">
            <div className='log'>
                <div className="col-lg-12 col-12">
                  
                    <h3 className='log' >Good to see you again :)</h3>
                </div>
            

                <div className="col-lg-6 col-12"></div>
    <div>
      <h2 className='log'> Login</h2>
      </div>
      <form onSubmit={handleSubmit} className="custom-form login-form">
      <div className="row">
      <div className='an'>
                            <div className="col-lg-12 col-12"> 
                                <div className="form-floating">
          
          <input type="email" name="email" className="form-control" value={formData.email} placeholder='email' onChange={handleChange} required />
          <label htmlFor='floatingInput'>Email:</label>
        </div>
        </div>
        <div className="col-lg-12 col-12">
        <div className="form-floating">
          
          <input type="password" name="password" placeholder='password' className="form-control" value={formData.password} onChange={handleChange} required />
          <label htmlFor="floatingInput">Password:</label>
        </div>
        </div>
        
        <div className="col-lg-6 col-12 ms-auto" >
        <button type="submit" className="form-control">Login</button>
        </div>
        </div>
        <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                        <Link className='head' to="/regform">Don't have an account?</Link>
                        </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-12"> 
                        <div className="form-floating">
                        <Link className='Head1' to="/forgotpswd">Forgot password?</Link>
                        </div>
                        
                        </div>
                        </div>
                        </div>
                        
        </form>
         </div>
         <div className='log'>
         <div className='ifrme'>
    <div className="col-lg-5 col-12 mx-auto mt-5 mt-lg-0">
        <iframe title='googlemap' className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5306.152133906735!2d76.3528230449337!3d10.266486708144758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f2943df42e3%3A0xd5d617aa4afb4a9b!2sGALTech%20Technologies%20Private%20Limited!5e1!3m2!1sen!2sbh!4v1708852182927!5m2!1sen!2sbh" width="400" height="400" style={{ border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
        <h5 className="mt-4 mb-2" style={{ color: 'rgb(27, 126, 180)' }}>Galtech Learning Center</h5>
        <p style={{ color: 'rgb(27, 126, 180)' }}><strong>Office No: 3A-4, Third Floor,
        Indeevaram, Special Economic Zone (SEZ),
        Infopark Thrissur Campus, Koratty P O,
        Thrissur District - 680308</strong></p>
    </div>
</div>


</div>
</div>
</div>
</section>
</main>


)
}

export default Login;
