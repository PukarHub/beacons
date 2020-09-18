import React from 'react'
import { Link } from 'react-router-dom'
import LinksCard from '../../component/card/LinksCard'
import blog2 from '../../images/blog-card-2.jpg'
import blog8 from '../../images/blog-card-8.jpg'
import blog9 from '../../images/blog-card-9.jpeg'
import blog11 from '../../images/blog-card-11.jpeg'
import blog13 from '../../images/blog-card-13.jpg'
import blog14 from '../../images/blog-card-14.jpg'
import blog15 from '../../images/blog-card-15.jpg'
import avatar1 from '../../images/avatar-1.png'
import '../featuringvideo/featuring-video.scss'
import '../featuringvideo/featuring-video.css'

const featuringvideo = () => {
    return (
        <div>
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

      <Link to="/"><i className="fas fa-angle-up progressCounter fa-2x arrow" id="arrow"></i></Link>
    
        <section className="first-section">
            <div className="navbar">
              <div className="logo-div">
                <Link to="index.html" className="blog-logo"><img src="img/beacons-dark.png" alt=""/></Link>
              </div>
              <div className="blog-navbar-items">
                <Link to="blogs.html" className="navbar-item">Blog</Link>
                <Link to="#" className="navbar-item">Gallery</Link>
                <Link to="#" className="navbar-item">Shop</Link>
                <Link to="#"className="navbar-item">Merchants</Link>
                <Link to="#" className="drop-down">
                  <i onclick="myfun()" id="clicks" className="dropdown fas fa-ellipsis-h">
                  </i>
                </Link>
              </div>
            </div> 
          </section>
 
        <div className="blog-image"></div>
 
      <div className="blog-card-content">
        <div className="card-content">
          <h2 className="card-title">Featuring a video<span role="img" aria-label="video">&#127916;</span></h2>
          <p className="card-small"><Link to="/">Tips</Link>&nbsp; <span role="img" aria-label="tips">&#9679;</span> Apr 15, 2020</p>
          <div className="card-paragraph">
            <div className="card-content-main">
              <p>Trying to add some more personality to your Beacons page? You can embed a Youtube or Tiktok video right onto the page.</p>
              <ul className="paragraph-list">
              <li>1. <Link to="/">Sign in</Link> and go the the Featured Video section under  the drop-down menu (or click <Link to="/">here</Link>)</li>
              <li>2. Turn the video toggle switch on and enter a Youtube or TikTok link:</li>
              </ul>
              <div className="card-gif">
              <img src="/blog-gif/gif-1.gif" alt=""/>
              </div>

              <p>Your video will be at the top of your page by default, but you can move it around by clicking "change featured video position:. Here's an example with a TikTok video:" </p>

              <div className="card-gif">
              <img src="/blog-gif/gif-2.gif" alt=""/>
              </div>
              <div className="card-tips">
              <h4>Tips</h4>
              <ul>
                <li>Record a video introducing yourself or explaining your Beacons page to visitiors. This is a great way to drive attention to certain parts of your page, for example your <Link to="/">Store</Link>,your<Link to="/">Support Form</Link>, your <Link to="/">Request Form</Link>, or certain links.
                  <li>If you create content on YouTube, add your latest video, or your channel trailer</li>
                  <li>Removing the video is as easy as turning the "On" switch off. Or by saving a blank entry in the text field</li>
                </li>
              </ul>
            </div>
            </div>       
        </div>
        </div>
      </div>

    <div className="user-profile">
      <div className="user-avatar-box">
        <img src="/img/user-avatar.png" alt="" className="user-avatar"/>
        <h6>Jesse Zhang</h6>
        <p>Co-founder, Beacon. Hakuna Matata</p>
        <span>8 posts &#9679; San Francisco</span>
      </div>
    </div>

      <div className="responsive-cards">  
        <h3 className="res-recommendation">Recommended For You</h3>
      <button className="gliders-prev"><i className="fas fa-long-arrow-alt-left res-btn"></i>
      </button>
     
     <LinksCard />

     <div className="recommendation" id="responsive-hide" >
                <h3 className="recommendation">Recommended For You</h3>
                </div>

            
                <div className="card-container" id="responsive-hide">
          
                    <Link to="featuring a video.html" className="main-card">
                    <img src={blog13} alt="" className="main-card-img"/>
                    <img src={avatar1} alt="" className="card-avatar-1"/>
                    <h2 className="tips-card">Tips</h2>
                    <div><h5>Taking Commissions <span role="img" aria-label="comission">&#128104;</span></h5></div>
                        <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>

                    <Link to="featuring a video.html" className="main-card main-card-4">
                    <img src={blog14} alt="" className="main-card-img"/>
                    <img src={avatar1} alt="" className="card-avatar-1"/>
                    <h2 className="tips-card">Tips</h2>

                    <div><h5> <span role="img" aria-label="hello">&#128184;</span>How much money do Youtubers really make?</h5></div>
                        <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                    </Link>

                    <Link to="getting started.html" className="main-card main-card-5">
                    <img src={blog15} alt="" className="main-card-img"/>
                    <img src={avatar1} alt="" className="card-avatar-1"/>
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

export default featuringvideo
