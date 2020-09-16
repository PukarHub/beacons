import React from 'react';
import {Link} from 'react-router-dom';
import './Blog2.css';
import './Blog2.scss';
import blog2 from '../../../images/blog-card-2.jpg'
import blog8 from '../../../images/blog-card-8.jpg'
import blog9 from '../../../images/blog-card-9.jpeg'
import blog11 from '../../../images/blog-card-11.jpeg'
import blog12 from '../../../images/blog-card-12.jpg'
import blog13 from '../../../images/blog-card-13.jpg'
import blog14 from '../../../images/blog-card-14.jpg'
import blog15 from '../../../images/blog-card-15.jpg'
import beaconsDark from '../../../images/beacons-dark.png'
import avatar1 from '../../../images/avatar-1.png'

const Blog2 = () => {
    return (
 <div>
   <div className="menu">
      <div id="content" className="dropdown-content">
        <div className="articles-container">
          <h5 className="recent">Recent articles</h5>
            <div className="articles-area">

                <div className="each-article">
                    <Link to="/">
                        <img src={blog2} className="article-img" alt="Loading.."/> 
                        <h4>Optimizing your links for clicks <span role="img" aria-label="link" >&#128170;</span>  </h4>
                        <span>2 months ago</span> 
                    </Link>        
                </div>   

                <div className="each-article">
                    <Link to="/">
                        <img src={blog11} className="article-img" alt="loading..." />
                        <h4>Building your email list <span role="img" aria-label="email">&#127969;</span> .</h4>
                        <span>6 months ago</span>   
                    </Link>          
                </div>   

            
                <div className="each-article">
                    <Link to="/">
                        <img src={blog9} className="article-img" alt="" />
                        <h4>The Smart Link <span role="img" aria-label="email">&#9889;</span></h4>
                        <span>5 months ago</span>  
                    </Link>          
                </div>    

      
                <div className="each-article">
                    <Link to="/">
                        <img src={blog8} className="article-img" alt="" />
                        <h4>Setting up with stripe <span role="img" aria-label="stripe" >&#127970;</span> </h4>
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


        <section className="first-section">
           <div className="navbar">
                <div className="logo-div">
                   <Link to="/" className="blog-logo"><img src={beaconsDark} alt="" /></Link>
                </div>
   
    
                <div className="blog-navbar-items">
                    <Link to="/blog1" className="navbar-item">Blog</Link>
                    <Link to="/" className="navbar-item">Gallery</Link>
                    <Link to="/" className="navbar-item">Shop</Link>
                    <Link to="/" className="navbar-item">Merchants</Link>
                    <Link to="/" className="drop-down">
                       <i onclick="myfun()" id="clicks"    className="dropdown fas fa-ellipsis-h"></i>
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



        <section className="blog-page-2">
            <Link to="getting started.html" className="page-2-top">
                    <div className="featured">   
                        <div className="avatar-1"><img src={avatar1} alt="" />
                            <h4 className="tips">Tips</h4>
                        </div>
                        <div className="featured-icon"><i className="fas fa-star"></i> Featured</div>
                    </div> 
    
                <div className="blog-card-middle">
                    <h4 className="blog-card-1-title">
                         <span className="traffic">
                            <span role="img" aria-label="traffic">&#128678;</span> 
                         </span>
                     Getting started with your Beacons profile
                    </h4>
                </div>
                    <div className="blog-card-bottom">
                    <h6>7 months ago &bull;<span> 3 min read</span></h6>
                    </div>
            </Link>

                <Link to="featuring a video.html" className="page-2-top-2">
                    <div className="card-2">
                     <img src={blog12} alt="" className="blog-card-img" />
                     <img src={avatar1} alt="" className="card-avatar" />
                            <div className="card-2-info">
                                <div>
                                    <h5>Your Beacons digital store 
                                        <span role="img" aria-label="store"> &#127974;</span>
                                    </h5>
                                </div>
                                <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 min read</span></h6></div>
                            </div>     
                    </div>
                </Link>
        </section>

       
        <div className="blog-pg2-card-container">
                <Link to="featuring a video.html" className="blog-pg2-card blog-pg2-card-1">
                    <img src={blog13} alt="Loading..." className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1 blog-pg-card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                        <div>
                           <h5>Taking Commissions 
                            <span role="img" aria-label="store">&#128104;</span> 
                           </h5>
                        </div>
                        <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                </Link>

     
                <Link to="featuring a video.html" className="blog-pg2-card blog-pg2-card-4">
                        <img src={blog14} alt="" className="main-card-img" />
                        <img src={avatar1} alt="" className="card-avatar-1 blog-pg-card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                    <div>
                      <h5> 
                        <span role="img" aria-label="store">&#128184;</span> How much money do Youtubers really make?
                      </h5>
                    </div>
                    <div>
                       <h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6>
                    </div>
                </Link>

               

                <Link to="getting started.html" className="blog-pg2-card blog-pg2-card-5">
                    <img src={blog15} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1 blog-pg-card-avatar-1"/>
                    <h2 className="tips-card">Tips</h2>
                    <div>
                       <h5> <span role="img" aria-label="store">&#128678;</span> Getting started with your Beacons profile</h5>
                    </div>
                    <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                </Link>

              
                <Link to="getting started.html" className="blog-pg2-card blog-pg2-card-6">
                    <img src={blog2} alt="" className="main-card-img" />
                    <img src={avatar1} alt="" className="card-avatar-1 blog-pg-card-avatar-1" />
                    <h2 className="tips-card">Tips</h2>
                    <div>
                      <h5>Optimizing your links for clicks <span role="img" aria-label="store" >&#128170;</span> </h5>
                    </div>
                        <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>
            </div>
            <div className="page-btn">
                <div>
                    <p><Link to="/blog1">
                     <i className="fas fa-arrow-left page-arrow"></i></Link>Page 2 of 2
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
    )
}

export default Blog2
