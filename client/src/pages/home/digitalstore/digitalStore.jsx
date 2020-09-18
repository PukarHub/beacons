import React from 'react'
import {Link} from 'react-router-dom'
import '../homeblogstyle/homepageblog.css';
import '../homeblogstyle/homepageblog.scss';
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
import blog13 from '../../../images/blog-card-13.jpg'
import blog14 from '../../../images/blog-card-14.jpg'
import blog15 from '../../../images/blog-card-15.jpg'
import beaconsDark from '../../../images/beacons-dark.png'
import avatar1 from '../../../images/avatar-1.png'
import useravatar from '../../../images/user-avatar.png'
import store1 from '../../../images/digital-store-1.png'
import store2 from '../../../images/digital-store-2.png'
import store4 from '../../../images/digital-store-4.png'
import store5 from '../../../images/digital-store-5.png'
import store6 from '../../../images/digital-store-6.png'
import store7 from '../../../images/digital-store-7.png'
import store8 from '../../../images/digital-store-8.png'
import store9 from '../../../images/digital-store-9.png'

const digitalStore = () => {
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
                      <Link to="">
                        <img src={blog2} className="article-img" alt="Loading"/>
                        <h4>Optimizing your links for clicks <span role="img" aria-label="link">&#128170;</span></h4>
                        <span>2 months ago</span>        
                      </Link>    
                    </div>

                    <div className="each-article">
                      <Link to="">
                        <img src={blog11} className="article-img" alt="" />
                        <h4>Building your email list <span role="img" aria-label="email">&#127969;</span>.</h4>
                        <span>6 months ago</span>             
                      </Link>    
                  </div>

                  <div className="each-article">
                      <Link to="">
                      <img src={blog9} className="article-img" alt="" />
                      <h4>The Smart Link <span role="img" aria-label="link">&#9889; </span></h4>
                      <span>5 months ago</span>            
                      </Link>    
                  </div>

        
                  <div className="each-article">
                    <Link to="">
                      <img src={blog8} className="article-img" alt="" />
                      <h4>Setting up with stripe <span role="img" aria-label="link">&#127970; </span></h4>
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
                      <img src={beaconsDark} alt="" />
                      </Link>
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
                <h2 className="card-title">Your ASMI digital store <span role="img" aria-label="store">🏪</span> </h2>
                <p className="card-small">
                  <Link to="/">Tips</Link>&nbsp; <span role="img" aria-label="link">&#9679;</span>Apr 15, 2020
                </p>
            <div className="card-paragraph">
              <div className="card-content-main">
                <p>Trying to add some more personality to your Beacons page? You can embed a Youtube or Tiktok video right onto the page.</p>
                <p className="paragraph-list">
                  Before we get into the details of how to set up your store, here's an example from Brittany Noelle to illustrate how this product looks on a live website:
                </p>
                <div className="card-gif">
                  <img src={store1} alt=""/>
                <p className="small">A workout video from Brittany.</p>
                </div>
                <div className="card-title-left">
                  <h2>Setting up your store </h2>
                  <span>Getting started</span>
                    <ul>
                      <li>Visit your <Link to="/">ASMI account</Link> and go to the Store tab</li>
                        <li>Click the 
                        <Link to="/">Setup Stripe Account button</Link>
                          if you haven't already setup your Stripe account. Click here to read over how to setup your Stripe account.
                        </li>
                    </ul>
                    <div className="card-gif">
                      <img src={store2} alt="" />
                    </div>
                </div>

                 <div className="card-tips">
                   <span>Uploading Items</span>
                  <ul>
                    <li> 1. Once you have your Stripe account setup, you'll be able to upload digital files. Click the Add New Item button and choose a file.</li>
                        <div className="card-gif">
                          <img src={store2} alt="" />
                        </div>
                      <li>2. After a successful file upload, a popup will appear where you can customize the store item:</li>
                     <ul className="no-dot">
                      <li>a) Change Placeholder Image lets you change the image people will see for your item.</li>

                      <li> b) Title is the main title for your item.</li>
                        
                        <li>c) Description is additional information people will see after opening the item for more information.</li>
                        
                        <li>d) Price is the amount you want to charge for this item. There is a price calculator at the bottom of this post to see the split between you, Beacons, and Stripe (for credit card fees).</li>
                        
                        <li>e) Available is a switch to turn the item on and off for sale.</li>

                        <div className="card-gif">
                          <img src={store4} alt="" />
                          </div>

                    </ul>
                    <li>3. After you finish customizing the item, it will show up in the Store tab dashboard.</li>
                </ul>

                <h4 className="followers-see">What your followers will see</h4>
                <ul>
                  <li>1. The Store is one of the sections that you can customize on your page. It looks like this:</li>
                    <div className="card-gif">
                      <img src={store5} alt="" />
                    </div>
                    <li>2. When they click Download Now they will be able to buy the file:</li>
                    <div className="card-gif">
                       <img src={store6} alt="" />
                    </div>

                    <li>3. After successful payment, we'll give them a link to immediately download the file. We'll also send an email with the link so they can download it later.</li>
                      <div className="card-gif">
                        <img src={store7} alt="" />
                        </div>
                      <div className="card-gif">
                        <img src={store8} alt="" />
                        </div>

                      <li>4. When someone buys one of your videos, we'll also let you know by sending
                           you  an email.
                          <div className="card-gif">
                            <img src={store9} alt="" />
                          </div>
                      </li>
                </ul>
                <h4 className="followers-see">Tips</h4>
                <ul>
                  <li>1. You can highlight your Store by moving the Store section to the top of your page.</li>

                  <li> One way to make your followers aware of your store offerings is through an Instagram story swipe-up</li>

                    <li> Adding an attractive thumbnail, title, and description helps consumers understand what you're offering and make their purchase decision.</li>
                </ul>
                <h4>
                  What percentage of the selling prices goes to the creator?</h4>
                  <blockquote>After the Stripe processing fee, Beacons takes 10% and the rest goes to the creator. For a $5 purchase, $4.09 goes to the creator, $0.46 goes to Beacons, and $0.45 goes to Stripe (yes, Stripe has a great business <span role="img" aria-label="smile" >😉</span> ).</blockquote>
              </div>
              </div>       
          </div>
          </div>
        </div>

            <div className="user-profile">
                  <div className="user-avatar-box">
                    <img src={useravatar} alt="" className="user-avatar" />
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
                  <img src={blog13} alt="" className="res-card-img"/>
                  <img src={avatar1} alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                  <div>
                    <h5>Taking Commissions <span role="img" aria-label="comission">&#128104;</span></h5>
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
                <img src={blog3} alt="" className="res-card-img" />
                <img src={avatar1} alt="" className="res-avatar" />
                <h2 className="res-header">Tips</h2>
                <div>
                  <h5>Leveling up your links <span role="img" aria-label="links">&#128279;</span></h5>
                </div>
                <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
              </Link>
          </div>

          <div className="card">
              <Link to="featuring a video.html" className="res-card">
               <img src={blog4} alt="" className="res-card-img" />
               <img src={avatar1} alt="" className="res-avatar" />
               <h2 className="res-header">Tips</h2>
                <div>
                  <h5>Customizing your page <span role="img" aria-label="links">&#127912</span></h5>
                </div>
                <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
              </Link>
          </div>

          <div className="card">
            <Link to="getting started.html" className="res-card">
              <img src={blog5} alt="" className="res-card-img" />
              <img src={avatar1} alt="" className="res-avatar" />
              <h2 className="res-header">Tips</h2>
                <div>
                  <h5>Your weekly update email <span role="img" aria-label="email">&#129299;</span></h5>
                </div>
                  <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
            </Link>
          </div>

          <div className="card">
            <Link to="featuring a video.html" className="res-card">
              <img src="/img/blog-card-6.jpg" alt="" className="res-card-img"/>
              <img src="/img/avatar-1.png" alt="" className="res-avatar"/>
              <h2 className="res-header">Tips</h2>
                <div>
                 <h5>Enabling visitors to support your content <span role="img" aria-label="content">&#129395;</span></h5>
                </div>
                  <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
            </Link>
          </div>

          <div className="card">
          <Link to="getting started.html" className="res-card">
            <img src={blog7} alt="" className="res-card-img" />
            <img src={avatar1} alt="" className="res-avatar" />
            <h2 className="res-header">Tips</h2>
            <div><h5>Featuring a video <span role="img" aria-label="video">&#127916;</span></h5></div>
                <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
          </Link>
          </div>

          <div className="card">
          <Link to="featuring a video.html" className="res-card">
            <img src={blog8} alt="" className="res-card-img" />
            <img src={avatar1} alt="" className="res-avatar" />
            <h2 className="res-header">Tips</h2>
            <div><h5>Setting up with stripe <span role="img" aria-label="stripe">&#127970;</span></h5></div>
                <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
          </Link>
          </div>

          <div className="card">
            <Link to="getting started.html" className="res-card">
              <img src={blog9} alt="" className="res-card-img" />
              <img src={avatar1} alt="" className="res-avatar" />
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
        <button className="gliders-next"><i className="fas fa-long-arrow-alt-right res-btn"></i>
        </button>
        </div>


        <div className="responsive-cards" id="responsive-hide">  
          <h3 className="res-recommendation">Recommended For You</h3>
          <button className="glider-prev">
            <i className="fas fa-long-arrow-alt-left res-btn"></i>
          </button>
        <div className="glider res-glider">
              <div className="card">
                <Link to="getting started.html" className="res-card">
                  <img src={blog13} alt="" className="res-card-img"/>
                  <img src={avatar1} alt="" className="res-avatar"/>
                  <h2 className="res-header">Tips</h2>
                  <div>
                    <h5>Taking Commissions <span role="img" aria-label="video">&#128104;</span></h5>
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
                <div>
                  <h5>Leveling up your links <span role="img" aria-label="video">&#128279;</span></h5>
                </div>
                <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
            </Link>
          </div>

          <div className="card">
            <Link to="featuring a video.html" className="res-card">
              <img src={blog4} alt="" className="res-card-img"/>
              <img src={avatar1} alt="" className="res-avatar"/>
              <h2 className="res-header">Tips</h2>
                <div>
                 <h5>Customizing your page <span role="img" aria-label="page">&#127912;</span></h5>
                </div>
              <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
            </Link>
          </div>

          <div className="card">
            <Link to="getting started.html" className="res-card">
              <img src={blog5} alt="" className="res-card-img"/>
              <img src={avatar1} alt="" className="res-avatar"/>
              <h2 className="res-header">Tips</h2>
              <div>
                <h5>Your weekly update email <span role="img" aria-label="email">&#129299;</span></h5>
              </div>
              <div><h6>4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
            </Link>
          </div>

        
          <div className="card">
            <Link to="featuring a video.html" className="res-card">
              <img src={blog6} alt="" className="res-card-img"/>
              <img src={avatar1} alt="" className="res-avatar"/>
              <h2 className="res-header">Tips</h2>
              <div>
                <h5>Enabling visitors to support your content <span role="img" aria-label="email">&#129395;</span></h5>
              </div>
                  <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span></h6></div>
            </Link>
          </div>


        <div className="card">
          <Link to="getting started.html" className="res-card">
            <img src={blog7} alt="" className="res-card-img"/>
            <img src={avatar1} alt="" className="res-avatar"/>
            <h2 className="res-header">Tips</h2>
            <div>
              <h5>Featuring a video <span role="img" aria-label="email">&#127916;</span></h5>
            </div>
            <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
          </Link>
        </div>

        <div className="card">
          <Link to="featuring a video.html" className="res-card">
            <img src={blog8} alt="" className="res-card-img" />
            <img src={avatar1} alt="" className="res-avatar" />
            <h2 className="res-header">Tips</h2>
              <div>
              <h5>Setting up with stripe <span role="img" aria-label="email">&#127970;</span></h5>
              </div>
                <div><h6>5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
          </Link>
        </div>

            <div className="card">
              <Link to="getting started.html" className="res-card">
                <img src={blog9} alt="" className="res-card-img"/>
                <img src={avatar1} alt="" className="res-avatar"/>
                <h2 className="res-header">Tips</h2>
                <div>
                  <h5>The Smart Link</h5></div>
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
            <button className="glider-next">
              <i className="fas fa-long-arrow-alt-right res-btn"></i>
            </button>
         </div>

       
          <div className="recommendation" id="responsive-hide" >
            <h3 className="recommendation">Recommended For You</h3>
          </div>

    
         <div className="card-container" id="responsive-hide">
                <Link to="/comission" className="main-card">
                  <img src={blog13} alt="" className="main-card-img"/>
                  <img src={avatar1} alt="" className="card-avatar-1"/>
                  <h2 className="tips-card">Tips</h2>
                  <div>
                    <h5>Taking Commissions <span role="img" aria-label="comission">&#128104;</span></h5>
                  </div>
                  <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                </Link>

             <Link to="/featuring-video" className="main-card main-card-4">
              <img src={blog14} alt="" className="main-card-img"/>
              <img src={avatar1} alt="" className="card-avatar-1"/>
              <h2 className="tips-card">Tips</h2>
               <div>
                 <h5> <span role="img" aria-label="comission">&#128184;</span>How much money do Youtubers really make?</h5>
                </div>
                  <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
            </Link>

            <Link to="/getting-started" className="main-card main-card-5">
              <img src={blog15} alt="" className="main-card-img"/>
              <img src={avatar1} alt="" className="card-avatar-1"/>
              <h2 className="tips-card">Tips</h2>
              <div>
                <h5> <span role="img" aria-label="comission">&#128678;</span>Getting started with your Beacons profile</h5></div>
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

export default digitalStore
