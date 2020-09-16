import React from 'react'
import { Link } from 'react-router-dom'

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
                        <img src="img/blog-card-2.jpg" className="article-img" alt=""/>
                        <h4>Optimizing your links for clicks <span role="img" aria-label="links">&#128170;</span></h4>
                        <span>2 months ago</span>        
                        </Link>    
                        </div>


                     <div className="each-article">
                            <Link to="/">
                            <img src="img/blog-card-11.jpeg" className="article-img" alt=""/>
                            <h4>Building your email list <span role="img" aria-label="email">&#127969;</span>.</h4>
                            <span>6 months ago</span>             
                        </Link>    
                        </div>

                     
                        <div className="each-article">
                        <Link to="/">
                        <img src="img/blog-card-9.jpeg" className="article-img" alt=""/>
                        <h4>The Smart Link <span role="img" aria-label="link">&#9889;</span></h4>
                        <span>5 months ago</span>            
                        </Link>    
                        </div>

            
                        <div className="each-article">
                            <Link to="">
                            <img src="img/blog-card-8.jpg" className="article-img" alt=""/>
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
                        <img src="img/beacons-dark.png" alt=""/>
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
                        <img src="/img/levelingupyourlinks-1.png" alt=""/>
                        </div>


                    <ul>
                        <h4 className="followers-see">Starting from the left,
                        </h4>
                        <li>the lightning icon allows you to change link into a smart link. When visitors come to your Beacons page, they will automatically get forwarded to this one selected link for the scheduled time period. Read more about smart links here</li>
                        <li>the clock icon is a link scheduler, which launches a link on your page for a specific time interval. See below for more tips on link scheduling. Setting up a schedule is as easy as</li>
                        <div className="card-gif">
                        <img src="/img/levelingupyourlinks-2.png" alt=""/>
                        </div>

                        <li>the flare icon lets you animate the link</li>
                        <div className="card-gif">
                        <img src="/img/levelingupyourlinks-3.png" alt=""/>
                        </div>

                        <li>the image icon lets you set an image thumbnail for the link, for example a logo</li>
                        <div className="card-gif">
                            <img src="/img/levelingupyourlinks-4.png" alt=""/>
                            <p>Setting an image thumbnail for a link.
                            </p>

                            </div>
                            <div className="card-gif">
                            <img src="/img/levelingupyourlinks-5.png" alt=""/>
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
                <img src="/img/user-avatar.png" alt="" className="user-avatar"/>
                <h6>Jessie Zeng</h6>
                <p> Co-Founder, CTO</p>
                </div>
                </div>

                <div className="responsive-cards">  
                <h3 className="res-recommendation">Recommended For You</h3>
                <button className="gliders-prev">
                   <i className="fas fa-long-arrow-alt-left res-btn"></i>
                </button>
                <div className="gliders">
                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src="/img/blog-card-13.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Taking Commissions <span role="img" aria-label="comission">&#128104;</span></h5></div>
                        <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src="/img/blog-card-2.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Optimizing your links for clicks</h5></div>
                        <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>
            
                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src="/img/blog-card-3.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Leveling up your links <span role="img" aria-label="links">&#128279;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src="/img/blog-card-4.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Customizing your page <span role="img" aria-label="page">&#127912;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src="/img/blog-card-5.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Your weekly update email 
                    <span role="img" aria-label="email">&#129299;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src="/img/blog-card-6.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Enabling visitors to support your content 
                        <span role="img" aria-label="content"> &#129395;</span></h5></div>
                        <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                <Link to="getting started.html" className="res-card">
                <img src="/img/blog-card-7.jpg" alt="" className="res-card-img"/>
                <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>Featuring a video <span role="img" aria-label="video">&#127916;</span></h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                </Link>
                </div>


                <div className="card">
                <Link to="featuring a video.html" className="res-card">
                <img src="/img/blog-card-8.jpg" alt="" className="res-card-img"/>
                <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>Setting up with stripe 
                     <span role="img" aria-label="stripe">&#127970;</span></h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                </Link>
                </div>

                <div className="card">
                <Link to="getting started.html" className="res-card">
                <img src="/img/blog-card-9.jpeg" alt="" className="res-card-img"/>
                <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>The Smart Link</h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>
                </div>

                <div className="card">
                <Link to="featuring a video.html" className="res-card">
                <img src="/img/blog-card-10.jpg" alt="" className="res-card-img"/>
                <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>Monetization for content creators</h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>
                </div>
                </div>
                <button className="gliders-next"><i className="fas fa-long-arrow-alt-right res-btn"></i>
                </button>
                </div>


                <div className="responsive-cards" id="responsive-hide">  
                <h3 className="res-recommendation">Recommended For You</h3>
                <button className="glider-prev"><i className="fas fa-long-arrow-alt-left res-btn"></i>
                </button>
                <div className="glider res-glider">
                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src="/img/blog-card-13.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Taking Commissions 
                      <span role="img" aria-label="comission">&#128104;</span></h5>
                    </div>
                        <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src="/img/blog-card-2.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Optimizing your links for clicks</h5></div>
                        <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>
         
                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src="/img/blog-card-3.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Leveling up your links 
                      <span role="img" aria-label="links">&#128279;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src="/img/blog-card-4.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Customizing your page <span role="img" aria-label="page">&#127912;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src="/img/blog-card-5.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Your weekly update email <span role="img" aria-label="email">&#129299;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src="/img/blog-card-6.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Enabling visitors to support your content 
                        <span role="img" aria-label="content">&#129395;</span></h5></div>
                        <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                    </Link>
                </div>

              
                <div className="card">
                <Link to="getting started.html" className="res-card">
                <img src="/img/blog-card-7.jpg" alt="" className="res-card-img"/>
                <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>Featuring a video <span role="img" aria-label="video">&#127916;</span></h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                </Link>
                </div>

                <div className="card">
                <Links to="featuring a video.html" className="res-card">
                <img src="/img/blog-card-8.jpg" alt="" className="res-card-img"/>
                <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>Setting up with stripe 
                   <span role="img" aria-label="stripe">&#127970;</span></h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                </Links>
                </div>

                <div className="card">
                <Link to="getting started.html" className="res-card">
                <img src="/img/blog-card-9.jpeg" alt="" className="res-card-img"/>
                <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>The Smart Link</h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>
                </div>

              
                <div className="card">
                <Link to="featuring a video.html" className="res-card">
                <img src="/img/blog-card-10.jpg" alt="" className="res-card-img" />
                <img src="/img/avatar-1.png" alt="" className="res-avatar" />
                <h2 className="res-header">Tips</h2>
                <div><h5>Monetization for content creators</h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>
                </div>
                </div>
                <button className="glider-next"><i className="fas fa-long-arrow-alt-right res-btn"></i>
                </button>
                </div>

                <div className="recommendation" id="responsive-hide" >
                <h3 className="recommendation">Recommended For You</h3>
                </div>

            
                <div className="card-container" id="responsive-hide">
          
                    <Link to="featuring a video.html" className="main-card">
                    <img src="/img/blog-card-13.jpg" alt="" className="main-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="card-avatar-1"/>
                    <h2 className="tips-card">Tips</h2>
                    <div><h5>Taking Commissions <span role="img" aria-label="comission">&#128104;</span></h5></div>
                        <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>

                    <Link to="featuring a video.html" className="main-card main-card-4">
                    <img src="/img/blog-card-14.jpg" alt="" className="main-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="card-avatar-1"/>
                    <h2 className="tips-card">Tips</h2>

                    <div><h5> <span role="img" aria-label="hello">&#128184;</span>How much money do Youtubers really make?</h5></div>
                        <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                    </Link>

                    <Link to="getting started.html" className="main-card main-card-5">
                    <img src="/img/blog-card-15.jpg" alt="" className="main-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="card-avatar-1"/>
                    <h2 className="tips-card">Tips</h2>
                    <div><h5> <span role="img" aria-label="hello">&#128678;</span> Getting started with your Beacons profile</h5></div>
                        <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
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

export default Links
