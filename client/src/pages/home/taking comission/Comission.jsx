import React from 'react'
import { Link } from 'react-router-dom'

const Comission = () => {
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
                        <h4>Optimizing your links for clicks <span role="img" aria-label="link">&#128170;</span></h4>
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
                        <Link to="">
                        <img src="img/blog-card-9.jpeg" className="article-img" alt="" />
                        <h4>The Smart Link <span role="img" aria-label="link">&#9889;</span></h4>
                        <span>5 months ago</span>            
                        </Link>    
                    </div>

                        <div className="each-article">
                                    <Link to="/">
                                    <img src="img/blog-card-8.jpg" className="article-img" alt=""/>
                                    <h4>Setting up with stripe <span role="img" aria-label="link" >&#127970;</span></h4>
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
                    <Link to="index.html" className="blog-logo"><img src="img/beacons-dark.png" alt=""/></Link>
                    </div>
                
                    <div className="blog-navbar-items">
                    <Link to="index.html" className="navbar-item">Beacons</Link>
                    <Link to="blogs.html" className="navbar-item">Blogs</Link>
                    <Link to="tips.html" className="navbar-item">Tips</Link>
                    <Link to="research.html"className="navbar-item">Research</Link>
                    <Link to="#" className="drop-down">
                        <i onclick="myfun()" id="clicks" className="dropdown fas fa-ellipsis-h"></i>
                    </Link>
                    </div>
                </div> 
                </section>


               
                <div className="blog-image"></div>
                <div className="blog-card-content">
                <div className="card-content">
                    <h2 className="card-title">Taking commissions 
                       <span role="img" aria-label="link">👨‍💼</span>
                    </h2>
                    <p className="card-small">
                       <Link to="#">Tips</Link>&nbsp; 
                       <span role="img" aria-label="link"> &#9679; </span>Feb 24, 2020
                    </p>
                    <div className="card-paragraph">
                    <div className="card-content-main">
                        <p>Creators receive questions and requests from fans all the time. You can use Beacons to get paid while taking all kinds of commissions from visitors, for example:</p>
                    <ul>
                        <li>Making personalized shoutout videos</li>
                        <li>Drawing a custom picture</li>
                        <li> Answering a question about your creative process</li>
                        <li>Giving feedback on someone's workout form</li>
                    </ul>

                    <p>In addition to videos, we let you submit images, pdfs, audio files, etc as responses. This post will cover what the whole process looks like from both the creator and fan perspectives!</p>
                    <h4 className="followers-see" >Set up your request form</h4>

                    <p>
                      <Link to="#">Sign in </Link>and go to the Requests tab. 
                      <Link to="#">Connect your Stripe account</Link>  
                       if you haven't already. Turn your form on and explain the types of commissions you're taking.
                    </p>
                        <div className="card-gif">
                        <img src="/img/takingcommissions-1.png" alt=""/>
                        <p>You can add multiple options just by hitting "Add Item.</p>
                        </div>
                        <div className="card-gif">
                        <img src="/img/takingcommissions-2.png" alt=""/>
                        </div>
                        <h4 className="followers-see" >Visitors can now submit requests to you
                        </h4>
                        <p>When visitors come to your Beacons page, they'll be able to see a commission form.</p>
                        <div className="card-gif">
                            <img src="/img/takingcommissions-3.png" alt=""/>
                            </div>
                            <p>The visitor will also need to fill out their name, email address, and credit card information. Additionally, they can choose to make their request private, which means that your response will not be featured on your profile page – more on this later.</p>
                            <h4 className="followers-see" >Responding to commissions
                            </h4>
                            <p>After the request is processed, you'll receive an email.</p>
                            <div className="card-gif">
                            <img src="/img/takingcommissions-4.png" alt=""/>
                            </div>

                            <p>Clicking on the "Click to respond" button will take you to a page where you'll be able to easily upload or record a response.</p>
                            <div className="card-gif">
                                <img src="/img/takingcommissions-5.png" alt=""/>
                                </div>
                                <h4 className="followers-see">Finishing up
                                </h4>
                                <p>After your response is processed, the requester's credit card charge will be captured, and part of the charge will automatically be transferred to your Stripe Account. If the request was not set to private, then it will be featured in the Community section of your page.</p>
                                <div className="card-gif">
                                <img src="/img/takingcommissions-6.png" alt=""/>
                                </div>
                                <h4 className="followers-see">FAQs</h4>
                                
                <blockquote>Can requests be free?</blockquote>
                <p>Yes! Just set the price to $0. Free responses cannot be private.</p> 

                <blockquote>How long do I have to respond?</blockquote>
                <p>7 days before the credit card charge expires. We'll send you a reminder for outstanding requests in your weekly update email.</p>  

                <blockquote>How does the fan get my response?</blockquote>
                <p>We'll send the requester their their download link to the email they submitted after your response is processed.</p> 

                <blockquote>How do I make sure that I don't get inappropriate requests?</blockquote>
                <p>During request processing, we make sure the submitted request is appropriate. This may take up to a few hours.</p>


                <blockquote>As a fan, how do I know that the response is appropriate?</blockquote>
                <p>During response processing, we make sure the submitted response is appropriate, which may also take up to a few hours.</p>


                <blockquote>When does the requester's credit card get charged?</blockquote>
                <p>The visitor's credit card will not be charged until after your response is processed.</p> 

                <blockquote>What are some best practices for personalized video shoutouts?
                </blockquote>
                <p> <span role="img" aria-label="link">🆓</span> Make it easy for your fans to start engaging with you! Start by setting your price to $0 and making a couple videos for free.</p>

                <p><span role="img" aria-label="link">🎓</span>This engages your audience and shows them how it works, while getting some videos on your page. This initial content will give people more ideas.</p>


                <p> <span role="img" aria-label="link">🎨 </span>Personalize your request form - make videos that make sense for you! You know your audience better than anyone 
                <span role="img" aria-label="link">🤙</span></p> 

                <blockquote> How much goes to the creator?</blockquote>
                <p>You can use the calculator below to figure out how much you'd make for videos of different prices. Beacons takes a 10% cut after processing fees.</p> 
                </div>       
                </div>
                </div>
                </div>

                <div className="user-profile">
                <div className="user-avatar-box">
                    <img src="/img/user-avatar.png" alt="" className="user-avatar"/>
                    <h6>David Zeng</h6>
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
                    <div>
                      <h5>Taking Commissions  
                      <span role="img" aria-label="comission">&#128104;</span>
                      </h5>
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
                    <div><h5>Leveling up your links <span role="img" aria-label="comission">&#128279;</span></h5></div>
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
                    <div><h5>Your weekly update email <span role="img" aria-label="email"> &#129299;</span></h5></div>
                        <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                    </Link>
                </div>

                <div className="card">
                    <Link to="featuring a video.html" className="res-card">
                    <img src="/img/blog-card-6.jpg" alt="" className="res-card-img"/>
                    <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
                    <h2 className="res-header">Tips</h2>
                    <div><h5>Enabling visitors to support your content <span role="img" aria-label="content">&#129395;</span></h5></div>
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
                <span role="img" aria-label="stripe">&#127970;</span>
                </h5></div>
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
                <button className="gliders-next">
                 <i className="fas fa-long-arrow-alt-right res-btn"></i>
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
                    <div><h5> <span role="img" aria-label="hello">&#128678;</span>Getting started with your Beacons profile</h5></div>
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

export default Comission