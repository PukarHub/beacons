import React from 'react'
import { Link } from 'react-router-dom'
import blog2 from '../../../images/blog-card-2.jpg'
import blog8 from '../../../images/blog-card-8.jpg'
import blog9 from '../../../images/blog-card-9.jpeg'
import blog11 from '../../../images/blog-card-11.jpeg'
import beaconsDark from '../../../images/beacons-dark.png'
import useravatar from '../../../images/user-avatar.png'
import link1 from '../../../images/levelingupyourlinks-1.png'
import link2 from '../../../images/levelingupyourlinks-2.png'
import link3 from '../../../images/levelingupyourlinks-3.png'
import link4 from '../../../images/levelingupyourlinks-4.png'
import link5 from '../../../images/levelingupyourlinks-5.png'
import LinksCard from '../../../component/card/LinksCard';

const Links = () => {
    return (
        <div>
        <div>
            <Link to="/"><i className="fas fa-angle-up progressCounter fa-2x arrow" id="arrow"></i></Link>

                <div className="menu">
                <div id="content" className="dropdown-content">
                <div className="articles-container">
                    <h5 className="recent">Recent articles</h5>
                    <div className="articles-area">

                    <div className="each-article">
                        <Link to="/">
                        <img src={blog2} className="article-img" alt=""/>
                        <h4>Optimizing your links for clicks <span role="img" aria-label="links">&#128170;</span></h4>
                        <span>2 months ago</span>        
                        </Link>    
                        </div>


                     <div className="each-article">
                            <Link to="/">
                            <img src={blog11} className="article-img" alt=""/>
                            <h4>Building your email list <span role="img" aria-label="email">&#127969;</span>.</h4>
                            <span>6 months ago</span>             
                        </Link>    
                        </div>

                     
                        <div className="each-article">
                        <Link to="/">
                        <img src={blog9} className="article-img" alt=""/>
                        <h4>The Smart Link <span role="img" aria-label="link">&#9889;</span></h4>
                        <span>5 months ago</span>            
                        </Link>    
                        </div>

            
                        <div className="each-article">
                            <Link to="">
                            <img src={blog8} className="article-img" alt=""/>
                            <h4>Setting up with stripe <span role="img" aria-label="stripe">&#127970;</span></h4>
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
                        <Link to="index.html" className="blog-logo">
                        <img src={beaconsDark} alt=""/>
                        </Link>
                    </div>
                 
                    <div className="blog-navbar-items">
                    <Link to="/home" className="navbar-item">Beacons</Link>
                    <Link to="/blog1" className="navbar-item">Blogs</Link>
                    <Link to="#" className="navbar-item">Tips</Link>
                    <Link to="#" className="navbar-item">Research</Link>
                    <Link to="#" className="drop-down">
                     <i onclick="myfun()" id="clicks" className="dropdown fas fa-ellipsis-h"></i>
                    </Link>
                    </div>
                </div> 
                </section>


                <div className=" blog-image-2"></div>
                <div className="blog-card-content">
                <div className="card-content">
                    <h2 className="card-title">Leveling up your links 
                      <span role="img" aria-label="links">🔗</span>
                    </h2>
                    <p className="card-small"><Link to="/">Tips</Link>&nbsp; 
                     <span role="img" aria-label="links">&#9679;</span> Apr 26, 2020</p>
                    <div className="card-paragraph">
                    <div className="card-content-main">
                        <p>You might be wondering what all the other icons in each link component on your Links tab represents. You can tap on each to modify your link a different way!</p>
                        <div className="card-gif">
                        <img src={link1} alt=""/>
                        </div>


                    <ul>
                        <h4 className="followers-see">Starting from the left,
                        </h4>
                        <li>the lightning icon allows you to change link into a smart link. When visitors come to your Beacons page, they will automatically get forwarded to this one selected link for the scheduled time period. Read more about smart links here</li>
                        <li>the clock icon is a link scheduler, which launches a link on your page for a specific time interval. See below for more tips on link scheduling. Setting up a schedule is as easy as</li>
                        <div className="card-gif">
                        <img src={link2} alt=""/>
                        </div>

                        <li>the flare icon lets you animate the link</li>
                        <div className="card-gif">
                        <img src={link3} alt=""/>
                        </div>

                        <li>the image icon lets you set an image thumbnail for the link, for example a logo</li>
                        <div className="card-gif">
                            <img src={link4} alt=""/>
                            <p>Setting an image thumbnail for a link.
                            </p>

                            </div>
                            <div className="card-gif">
                            <img src={link5} alt=""/>
                            <p>Link with set image thumbnail.</p>
                            </div>

                            <li>the trash icon lets you delete the link completely</li>
                    </ul>

                    <h4 className="followers-see">Tips for link scheduling</h4>
                    <ul>
                        <li>Synchronize your link schedules with posts on your other social media profiles.
                        </li>
                        <li>Link schedules can also be used to for limited-time offers or new releases
                        </li>
                        <li>If you don't set a start time, your smart link will go into effect immediately.
                        </li>
                        <li>If you don't set an end time, your link will permanently stay smart.
                        </li>
                    </ul>       

                    </div>       
                </div>
                </div>
                </div>

                <div className="user-profile">
                <div className="user-avatar-box">
                <img src={useravatar} alt="" className="user-avatar"/>
                <h6>Jessie Zeng</h6>
                <p> Co-Founder, CTO</p>
                </div>
                </div>

                <div className="responsive-cards">  
                <h3 className="res-recommendation">Recommended For You</h3>
                <button className="gliders-prev">
                   <i className="fas fa-long-arrow-alt-left res-btn"></i>
                </button>
                  
                  <LinksCard/>

                
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
        </div>
       
       
    )
}

export default Links
