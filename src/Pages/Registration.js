import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Registration= () => {
    
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        phone_number:''
        
    });
    const navigate = useNavigate();
  

    const handleChange = (e) => {
        const { name, value } = e.target;
        
            setFormData({ ...formData, [name]: value });
         
      };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/register/',formData);
            console.log('User registered successfully:', response.data);
            console.log(response.data)
            navigate('/login');
    
            // Add any further handling here, like redirection or showing a success message
        } catch (error) {
            
            console.error('Error registering user:', error);
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
                            <li className="breadcrumb-item"><Link to="/">Homepage</Link></li>

                            <li className="breadcrumb-item active" aria-current="page">Registration Form</li>
                        </ol>
                    </nav>

                    <h2 className="text-white">Registration Form</h2>
                </div>

            </div>
        </div>
    </header>


    <section className="section-padding section-bg">
        <div className="container">
            <div className="row">

                <div className="col-lg-12 col-12">
                    <h3 className='log'>Register Here</h3>
               
                </div>

                <div className="col-lg-6 col-12">
                    <form  onSubmit={handleSubmit}  className="custom-form register-form"  >
                        <div className="row">
                            <div className='log'>
                            <div className="col-lg-12 col-12">
                                <div className="form-floating">
                                    <input type="text" name="username" id="username" className="form-control" placeholder="username" value={formData.username} onChange={handleChange}  />
                                    
                                    <label htmlFor="floatingInput">Username</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-12">
                            <div className="form-floating">
                                <input type="password" name="password" id="password" className="form-control" placeholder="password" value={formData.password} onChange={handleChange} />

                                    
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                            </div>

                            <div className="col-lg-12 col-12"> 
                                <div className="form-floating">
                                    <input type="email" name="email" id="email"  className="form-control"   placeholder="Email address" value={formData.email} onChange={handleChange}  />
                                    
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-12">
                                <div className="form-floating">
                                    <input type="text" name="first_name" id="first_name" className="form-control"   placeholder="first_name"  value={formData.first_name} onChange={handleChange} />
                                    
                                    <label htmlFor="floatingInput">FirstName</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-12">
                                <div className="form-floating">
                                    <input type="text" name="last_name" id="last_name" className="form-control"   placeholder="last_name" value={formData.last_name} onChange={handleChange}/>
                                    
                                    <label htmlFor="floatingInput">LastName</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-12">
                                <div className="form-floating">
                                    <input type="tel" name="phone_number" id="phone_number" className="form-control"   placeholder="phone_number" value={formData.phone_number} onChange={handleChange}/>
                                    
                                    <label htmlFor="floatingInput">PhoneNumber</label>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6 col-12 ms-auto">
                                <button type="submit" className="form-control">Register</button>
                            </div>

                        </div>
                    </form>
                </div>

                <div className="col-lg-5 col-12 mx-auto mt-5 mt-lg-0">
                    <iframe  title="google map" className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.936517972318!2d76.35495647275124!3d10.26669886839344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f2943df42e3%3A0xd5d617aa4afb4a9b!2sGALTech%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sbh!4v1708851735100!5m2!1sen!2sbh" width="400" height="400" style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>

                    <h5 className="mt-4 mb-2">Galtech Learning  Center</h5>

                    <p><strong>Office No: 3A-4, Third Floor,
Indeevaram, Special Economic Zone (SEZ),
Infopark Thrissur Campus, Koratty P O,
Thrissur District - 680308</strong></p>
                </div>

            </div>
        </div>
    </section>
</main>


  )
}
export default Registration;
