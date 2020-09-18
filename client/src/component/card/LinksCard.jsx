import React from 'react'
import { Link } from 'react-router-dom'
import blog2 from '../../images/blog-card-2.jpg'
import blog3 from '../../images/blog-card-3.jpg'
import blog4 from '../../images/blog-card-4.jpg'
import blog5 from '../../images/blog-card-5.jpg'
import blog6 from '../../images/blog-card-6.jpg'
import blog7 from '../../images/blog-card-7.jpg'
import blog8 from '../../images/blog-card-8.jpg'
import blog9 from '../../images/blog-card-9.jpeg'
import blog10 from '../../images/blog-card-10.jpg'
import blog13 from '../../images/blog-card-13.jpg'
import blog14 from '../../images/blog-card-14.jpg'
import blog15 from '../../images/blog-card-15.jpg'
import avatar1 from '../../images/avatar-1.png'


const linkscard = () => {
    return (
        <div>
        <div>
             <div className="gliders">
                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src={blog13} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Taking Commissions <span role="img" aria-label="comission">&#128104;</span></h5></div>
                        <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src={blog2} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Optimizing your links for clicks</h5></div>
                        <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>
            
                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src={blog3} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Leveling up your links <span role="img" aria-label="links">&#128279;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src={blog4} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Customizing your page <span role="img" aria-label="page">&#127912;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src={blog5} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Your weekly update email 
                    <span role="img" aria-label="email">&#129299;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src={blog6} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Enabling visitors to support your content 
                        <span role="img" aria-label="content"> &#129395;</span></h5></div>
                        <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                <Link to="getting started.html" className="res-card">
                <img src={blog7} alt="" className="res-card-img"/>
                <img src={avatar1} alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>Featuring a video <span role="img" aria-label="video">&#127916;</span></h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                </Link>
                </div>


                <div className="card">
                <Link to="featuring a video.html" className="res-card">
                <img src={blog8} alt="" className="res-card-img"/>
                <img src={avatar1} alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>Setting up with stripe 
                     <span role="img" aria-label="stripe">&#127970;</span></h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                </Link>
                </div>

                <div className="card">
                <Link to="getting started.html" className="res-card">
                <img src={blog9} alt="" className="res-card-img"/>
                <img src={avatar1} alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>The Smart Link</h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>
                </div>

                <div className="card">
                <Link to="featuring a video.html" className="res-card">
                <img src={blog10} alt="" className="res-card-img"/>
                <img src={avatar1} alt="" className="res-avatar"/>
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
                    <img src={blog13} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Taking Commissions 
                      <span role="img" aria-label="comission">&#128104;</span></h5>
                    </div>
                        <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src={blog2} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Optimizing your links for clicks</h5></div>
                        <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>
         
                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src={blog3} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Leveling up your links 
                      <span role="img" aria-label="links">&#128279;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src={blog4} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Customizing your page <span role="img" aria-label="page">&#127912;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="getting started.html" className="res-card">
                    <img src={blog5} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Your weekly update email <span role="img" aria-label="email">&#129299;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src={blog6} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Enabling visitors to support your content 
                        <span role="img" aria-label="content">&#129395;</span></h5></div>
                        <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                    </Link>
                </div>

              
                <div className="card">
                <Link to="getting started.html" className="res-card">
                <img src={blog7} alt="" className="res-card-img"/>
                <img src={avatar1} alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>Featuring a video <span role="img" aria-label="video">&#127916;</span></h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                </Link>
                </div>

                <div className="card">
                <Link to="featuring a video.html" className="res-card">
                <img src={blog8} alt="" className="res-card-img"/>
                <img src={avatar1} alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>Setting up with stripe 
                   <span role="img" aria-label="stripe">&#127970;</span></h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
                </Link>
                </div>

                <div className="card">
                <Link to="getting started.html" className="res-card">
                <img src={blog9} alt="" className="res-card-img"/>
                <img src={avatar1} alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div><h5>The Smart Link</h5></div>
                    <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
                </Link>
                </div>

              
                <div className="card">
                <Link to="featuring a video.html" className="res-card">
                <img src={blog10} alt="" className="res-card-img" />
                <img src={avatar1} alt="" className="res-avatar" />
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
                    
    )
}

export default linkscard
