import React from 'react'
import { Link } from 'react-router-dom';
import './Blog1.css';
import './Blog1.scss';
import blog2 from '../../../images/blog-card-2.jpg'
import blog3 from '../../../images/blog-card-3.jpg'
import blog4 from '../../../images/blog-card-4.jpg'
import blog5 from '../../../images/blog-card-5.jpg'
import blog6 from '../../../images/blog-card-6.jpg'
import blog7 from '../../../images/blog-card-7.jpg'
import blog8 from '../../../images/blog-card-8.jpg'
import blog9 from '../../../images/blog-card-9.jpeg'
import blog10 from '../../../images/blog-card-10.jpg'
import blog11 from '../../../images/blog-card-11.jpeg'
import beaconsDark from '../../../images/beacons-dark.png'
import avatar1 from '../../../images/avatar-1.png'


const Blog1 = () => {
   
    return (
  <div>  
    <div className="menu">
    <div id="content" className="dropdown-content">
        <div className="articles-container">
           <h5 className="recent">Recent articles</h5>
            <div className="articles-area">

                <div className="each-article">
                    <Link to="/" >
                    <img src={blog2} className="article-img" alt="Loading..." />
                    <h4>Optimizing your links for clicks <span role="img" aria-label="body">&#128170;</span> </h4>
                    <span>2 months ago</span>        
                    </Link>    
                </div>
          
                <div className="each-article">
                    <Link to="">
                    <img src={blog11} className="article-img" alt="Loading..." />
                    <h4>Building your email list <span role="img" aria-label="email">&#127969;</span>.</h4>
                    <span>6 months ago</span> 
                    </Link>              
                </div>    
    
                <div className="each-article">
                    <Link to="/">
                        <img src={blog9} className="article-img" alt="" />
                        <h4>The Smart Link <span role="img" aria-label="email" >&#9889;</span> </h4>
                        <span>5 months ago</span>  
                    </Link>          
                </div>   
       
                <div className="each-article">
                <Link to="/">
                <img src={blog8} className="article-img" alt="" />
                <h4>Setting up with stripe <span role="img" aria-label="Stripe">&#127970;</span></h4>
                <span>5 months ago</span>       
                </Link>
                </div>
            </div>
                <div className="article-tags">Tags</div>
                    <div className="other-info">
                        <span>Research</span>
                        <span>Tips</span>
                    </div>
             </div>
         </div>
    </div>
    
    <div className="blogs-section-container">
        <section className="first-section">
            <div className="navbar">
       
                <div className="logo-div">
                 <Link to="/" className="blog-logo"><img src={beaconsDark} alt="" /></Link>
                </div>
        
                <div className="blog-navbar-items">
                    <Link to="#" className="navbar-item">Blog</Link>
                    <Link to="#" className="navbar-item">Gallery</Link>
                    <Link to="#" className="navbar-item">Shop</Link>
                    <Link to="#" className="navbar-item">Merchants</Link>
                    <Link to="#" className="drop-down">
                        {/* <i onclick="myfun()" id="clicks" className="dropdown fas fa-ellipsis-h"></i> */}
                    </Link>
                </div>
            </div> 
        </section>

       
        <div className="blog-image">
          <div className="blog-title">
            Beacons Blog <br/> <br/>
            <span className="blog-span">Tips, research and stories from a startup to build the best toold for the creator community</span> 
          </div>
        </div>

        <section className="blog-post">
            <Link to="/getting-started" className="blog-card-top">
                <div className="featured">   
                    <div className="avatar-1"><img src={avatar1} alt="" />
                    <h4 className="tips">Tips</h4>
                    </div>
                <div className="featured-icon"><i className="fas fa-star"></i> Featured</div>
                </div> 
                <div className="blog-card-middle">
                    <h4 className="blog-card-1-title"><span className="traffic"> <span role="img" aria-label="Traffic" >&#128678;</span></span>Getting started with your Beacons profile</h4>
                </div>
                <div className="blog-card-bottom">
                    <h6>7 months ago &bull;<span> 3 mins read</span></h6>
                </div>
            </Link>
  
            <Link to="/featuring-video" className="blog-card-top-2">
                <div className="card-2">
                    <img src={blog2} alt="" className="blog-card-img" />
                    <img src={avatar1} alt="" className="card-avatar" />
                    <div className="card-2-info">
                        <div><h5>Optimizing your links for clicks <span role="img" aria-label="Links">&#128170;</span></h5></div>
                        <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </div>     
                </div>
            </Link>
        </section>
           
       
            <div className="card-container">
                <Link to="/link" className="main-card main-card-1">
                    <img src={blog3} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                        <div>
                        <h5>Leveling up your links <span role="img" aria-label="Links">&#128279;</span> </h5>
                        </div>
                        <div>
                            <h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6>
                        </div>
                </Link>
    
            
                <Link to="/getting-started" className="main-card main-card-4">
                    <img src={blog4} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1" />
                <h2 className="tips-card">Tips</h2>
    
                    <div>
                    <h5>Customizing your page <span role="img" aria-label="Page">&#127912;</span> </h5>
                    </div>
                    <div>
                    <h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6>
                    </div>
                </Link>
    
                <Link to="/featuring-video" className="main-card main-card-5">
                    <img src={blog5} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                        <div><h5>Your weekly update email <span role="img" aria-label="email" >&#129299;</span>  </h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                </Link>

        
    
                <Link to="/getting-started" className="main-card main-card-6">
                    <img src={blog6} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                    <div><h5>Enabling visitors to support your content <span role="img" aria-label="Content">&#129395;</span> </h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>
    
        
                <Link to="/featuring-video" className="main-card main-card-7">
                    <img src={blog7} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                    <div><h5>Featuring a video <span role="img" aria-label="Video">&#127916;</span> </h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                </Link>
    
                <Link to="/featuring-video" className="main-card main-card-8">
                    <img src={blog8} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                    <div><h5>Setting up with stripe <span role="img" aria-label="Stripe">&#127970;</span> </h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                </Link>
    
        
                <Link to="/featuring-video" className="main-card main-card-9">
                <img src={blog9} alt="" className="main-card-img" />
                <img src={avatar1} alt="" className="card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                    <div><h5>The Smart Link <span role="img" aria-label="Link">&#9889;</span> </h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>

    
                <Link to="/getting-started" className="main-card main-card-10">
                <img src={blog10} alt="" className="main-card-img" />
                <img src={avatar1} alt="" className="card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                    <div><h5>Monetization for content creators</h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>
    
                <Link to="/featuring-video" className="main-card main-card-11">
                    <img src={blog11} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                    <div><h5>Building your email list <span role="img" aria-label="Email">&#127969;</span> .</h5></div>
                    <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>

            
                <Link to="/featuring-video" className="main-card main-card-12">
                    <img src={blog11} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                        <div><h5>Building your email list <span role="img" aria-label="Email">&#127969;</span> .</h5></div>
                        <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>

        
                <Link to="/featuring-video" className="main-card main-card-13">
                    <img src={blog2} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                    <div><h5>Optimizing your links for clicks <span role="img" aria-label="body">&#128170;</span></h5></div>
                    <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>
            </div>

            <div className="page-btn">
                <div>
                    <p>Page 1 of 2 
                      <Link to="/blog2"><i className="fas fa-arrow-right page-arrow"></i></Link>
                    </p>   
                </div>
            </div>
            <section className="footer">
                <p>Beacons Blog &copy;2020&nbsp; &bull; &nbsp;Published with Ghost</p>
                <Link to="https://www.facebook.com/beaconsai">
                   <i className="fab fa-facebook-square fb fa-2x"></i>
                </Link>
                <Link to="https://twitter.com/beaconsai">
                  <i className="fab fa-twitter fa-2x twitter"></i>
                </Link>
                <p>Javascript license information</p>
            </section>
        </div>
    </div>
    )
}

export default Blog1
