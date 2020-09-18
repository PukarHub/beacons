import React from 'react'
import GettingStartedCard from '../../component/card/Getting-Started-Card'
import {Link} from 'react-router-dom'
import '../gettingstarted/getting-started.css'
import '../gettingstarted/getting-started.scss'
import blog2 from '../../images/blog-card-2.jpg'
import blog7 from '../../images/blog-card-7.jpg'
import blog8 from '../../images/blog-card-8.jpg'
import blog9 from '../../images/blog-card-9.jpeg'
import blog10 from '../../images/blog-card-10.jpg'
import blog11 from '../../images/blog-card-11.jpeg'
import blog13 from '../../images/blog-card-13.jpg'
import blog14 from '../../images/blog-card-14.jpg'
import blog15 from '../../images/blog-card-15.jpg'
import beaconsDark from '../../images/beacons-dark.png'
import avatar1 from '../../images/avatar-1.png'
import userAvatar from '../../images/user-avatar.png'
import blogContent from '../../images/blogcontent.png'

const gettingstarted = () => {
    return (
        <div>
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
              <h4>Building your email list <span role="img" aria-label="email"> &#127969;</span>.</h4>
              <span>6 months ago</span>             
              </Link>    
           </div>

          <div className="each-article">
                <Link to="/">
                <img src={blog9} className="article-img" alt=""/>
                <h4>The Smart Link <span role="img" aria-label="link">&#9889;</span> </h4>
                <span>5 months ago</span>            
                </Link>    
         </div>

            <div className="each-article">
                <Link to="/">
                <img src={blog8} className="article-img" alt=""/>
                <h4>Setting up with stripe  <span role="img" aria-label="stripe">&#127970;</span></h4>
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

        <div className="overlay">
          <div className="three-dots"onclick="openMenu()">&hellip;</div>
          <Link to="/index.html"><img src={beaconsDark} alt=""/></Link>
        </div>
 <div className="menu-container" id="navbar">
  <span className="closebtn" onclick="closeMenu()">&times;</span>
  <div className="menu-content">
    <div className="top-part">
      <Link to="/index.html">Beacons</Link>
      <Link to="/blogs.html">Blog</Link>
      <Link to="/tips.html">Tips</Link>
      <Link to="/research.html">Research</Link>
      </div>
      <h4>Recent articles</h4>

      <div className="middle-part">
      <div className="container">
        <div className="carousel">
          <div className="track">
            <div className="card-overlay">
              <Link to="/getting started.html" className="res-card">
                <img src={blog13} alt="" className="res-card-img"/>
                <img src={avatar1} alt="" className="res-avatar"/>
                <div className="overlay-header"><h5>Taking Commissions <span role="img" aria-label="comission" >&#128104;</span></h5></div>
                <div className="overlay-month"><h6>6 months ago</h6></div>
              </Link>
              </div>

              <div className="card-overlay">
                <Link to="/getting started.html" className="res-card">
                  <img src={blog7} alt="" className="res-card-img"/>
                  <img src={avatar1} alt="" className="res-avatar"/>
                  <div className="overlay-header"><h5>Featuring a video <span role="img" aria-label="video">&#127916;</span></h5></div>
                  <div className="overlay-month"><h6>5 months ago</h6></div>
                </Link>
                </div>

                <div className="card-overlay">
                  <Link to="/getting started.html" className="res-card">
                    <img src={blog8} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <div className="overlay-header"><h5>Setting up with stripe 
                       <span role="img" aria-label="stripe">&#127970;</span></h5></div>
                    <div className="overlay-month"><h6>5 months ago</h6></div>
                  </Link>
                  </div>

              <div className="card-overlay">
                <Link to="/getting started.html" className="res-card">
                  <img src={blog9} alt="" className="res-card-img"/>
                  <img src={avatar1} alt="" className="res-avatar"/>
                  <div className="overlay-header"><h5>The Smart Link</h5></div>
                  <div className="overlay-month"><h6>5 months ago</h6></div>
                </Link>
                </div>

                <div className="card-overlay">
                  <Link to="/getting started.html" className="res-card">
                    <img src={blog10} alt="" className="res-card-img"/>
                    <img src={avatar1} alt="" className="res-avatar"/>
                    <div className="overlay-header"><h5>Monetization for content creators</h5></div>
                    <div className="overlay-month"><h6>4 months ago</h6></div>
                  </Link>
                  </div>

                  <div className="card-overlay">
                    <Link to="/getting started.html" className="res-card">
                      <img src={blog2} alt="" className="res-card-img"/>
                      <img src={avatar1} alt="" className="res-avatar"/>
                      <div className="overlay-header"><h5>Optimizing your links for clicks</h5></div>
                      <div className="overlay-month"><h6>7 months ago</h6></div>
                    </Link>
                  </div>
            </div>
          </div>
        </div>
      </div>
                <div className="bottom-part">
                    <p>Tags</p>
                    <Link to="/#">Research</Link>
                    <Link to="/#">Tips</Link>
                </div>
      </div>
    </div>
  </div>
  

  <Link to="/"><i className="fas fa-angle-up progressCounter fa-2x arrow" id="arrow"></i></Link>
    <section className="first-section" id="responsive-hide">
        <div className="navbar">
          <div className="logo-div">
            <Link to="/index.html" className="blog-logo"><img src={beaconsDark} alt=""/></Link>
          </div>
          <div className="blog-navbar-items">
            <Link to="/blogs.html" className="navbar-item">Blog</Link>
            <Link to="/gallery.html" className="navbar-item">Gallery</Link>
            <Link to="/#" className="navbar-item">Shop</Link>
            <Link to="/merchants.html"className="navbar-item">Merchants</Link>
            <Link to="/#" className="drop-down">
               <i onclick="myfun()" id="clicks" className="dropdown fas fa-ellipsis-h"></i>
            </Link>
          </div>
        </div> 
      </section>

     <div className="blog-image"></div>

   <div className="blog-card-content">
     <div className="card-content">
       <h2 className="card-title"><span role="img" aria-label="hello">&#128678;</span>Getting Started with your Beacons Profile</h2>
         <p className="card-small"><Link to="/">Tips</Link>&nbsp; <span role="img" aria-label=""> &#9679;</span> Jan 23, 2020</p>
          <div className="card-paragraph">
        <div className="card-content-main">
          <p>We're about to walk through everything you need to get off to a good start on Beacons — let's do this <span role="img" aria-label="body">💪</span> </p>
         <p> <span role="img" aria-label="body"> ⏱️</span> &nbsp;This whole thing should take less than 10 minutes — next to each step, we'll give you a time estimate so that you can be sure to stay on track.
        </p>    
        <div className="each-content">
          <div className="each-content-paragraph">
            <h6> <span role="img" aria-label="one">1️⃣ </span> Sign up</h6>
            <p> <span role="img" aria-label="hello">&#9201;</span>  Estimated time: 1 minute</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nesciunt quia ipsa odit. Voluptatum, quidem sed architecto sint temporibus consequatur!</p>
            <p>  <span role="img" aria-label="body">💌</span>  In cases where your email isn't linked, you'll need to link your Facebook or Google account so that we can reach you — no spam, we promise!</p>

            <p>You're in! It only gets better from here. <span role="img" aria-label="body"> 😎</span></p>

          </div>

      
          <div className="each-content-paragraph">
            <h6> <span role="img" aria-label="body">2️⃣</span> Personalize your page <span role="img" aria-label="fire">🔥🔥🔥</span></h6>
             <p> ⏱ Estimated time: 1 minute</p>
              
             <p> You should be in your <Link to="/">Account</Link> page now on the Appearance tab. Try clicking on one of the preset themes, or one of the high-res photos.</p>
              
              <p> <span role="img" aria-label="hello">💡</span> Pro tip: The live preview changes instantly to show you exactly what's going on!</p>
              
             <p> There's a lot to explore here but let's move on for now — remember that you can always come back later and really make your profile shine.</p>
          </div>
          
            <div className="each-content-paragraph">
            <h6> <span role="img" aria-label="hello">3️⃣</span> Add some links <span role="img" aria-label="links">🔗</span></h6>
             <p><span role="img" aria-label="clock">⏱</span>Estimated time: 2 minutes</p>
              
             <p> Now click on the Links tab next to Appearance at the top of your <Link to="/">Account</Link> page.</p>
              
              <p>Here you can drive traffic from your Beacons profile to affiliate links, content, or anywhere else you want your audience to go. Click the "Add new link" button to try adding a link!</p>
              
             <p> <span role="img" aria-label="smile">😉</span> Try linking to Beacons at https://beacons.ai if you can't think of anything else.</p>

             <p>Farther down the page you can enter your social handles. Using icons that people recognize increases click-through rates!</p>
          </div>
          <div className="each-content-paragraph">
            <h6><span role="img" aria-label="hello">4️⃣</span>  Activate your email list 
            <span role="img" aria-label="hello">📬</span> </h6>
             <p><span role="img" aria-label="hello"> ⏱</span>Estimated time: like, 0.1 minutes?</p>
              
             <p> On the Links tab, you'll also see your email list. Toggle it on to add a rectangular text field to your page where visitors can leave their emails with you! You can move the text field above the other links by going to the Account section under the menu.</p>            
          </div>
     
          <div className="each-content-paragraph">
            <h6>    <span role="img" aria-label="hello">5️⃣</span> Engage your audience
             <span role="img" aria-label="🎥"></span></h6>
             <p> <span role="img" aria-label="⏱"></span> Estimated time: 1 minute</p>
              
             <p> Welcome to the first monetization tool on your Beacons page: the Requests tab.</p>   
             <p>This is the coolest feature that we've built so far — a way for you to engage with your audience through all kinds of commissions. In addition to videos, we let you submit images, pdfs, audio files, etc as responses.</p>        
             <p>The most common use case is personalized video shoutouts. You can give advice, wish people happy birthday, or just open it up for questions. It's also up to you whether you want to charge for your videos, or just engage for free and build deeper connections with your fans     <span role="img" aria-label="hello">🌈</span> </p>
             <p>Check out <Link to="/">Suki's Profile</Link> for some great examples. Every creator is different though, so we're excited to see where your imagination leads!</p>
          </div>
          <div className="each-content-paragraph">
            <h6> <span role="img" aria-label="hello">6️⃣</span> Stock your store <span role="img" aria-label="">🏪</span> </h6>
             <p> ⏱ Estimated time: 2 minutes</p>            
             <p> The second monetization tool is the Store tab. You can upload and sell digital goods like how-to video tutorials, workout videos, ebooks, and more! <span role="img" aria-label="smile">🤩</span> </p>            
          </div>
          <div className="each-content-paragraph">
            <h6> <span role="img" aria-label="hello">7️⃣</span> Post your Beacons link 🏁</h6>
             <p> Your Beacons profile is now ready to go! Here's what you need to do to get it in front of an audience:</p>            
             <ul>
               <li>1. Find your personalized link at the top of the live preview</li>
               <li>2. Click the "Copy Link" button</li>
               <li>3. Go to your Instagram profile and click "Edit Profile"</li>
               <li>4. Paste your Beacons link in "Website"</li>
             </ul>     
             <p> <span role="img" aria-label="hello">⭐️</span>  You're done! Best of all, your Beacons link works like any other link, so you can put it anywhere.</p>   
          </div>
          <div className="each-content-paragraph">
            <h6> <span role="img" aria-label="hello"> 🏆 </span>Bonus: Animate your links!</h6>
             <p> Wow, give yourself a pat on the back for making it this far <span role="img" aria-label="">👏</span> </p>            
             <p>To highlight links on your page, you can add a thumbnail or an animation (for example, making the link bounce up and down) by clicking on the symbols to the left of the trash can on each link.
            </p>            
            <div>
              <img src={blogContent} alt=""/>
              <span>The red symbol lets you add an animation and the green one lets you add a thumbnail.
              </span>
            </div>
             <br/>
            
            <p>Check out my <Link to="/">page</Link> for an example, and email me anytime at
              <Link to="/">neal@beacons.ai</Link> if you need some help!</p>
          </div>
        </div>      
     </div>
     
    </div>
    </div>
  </div>

 
    <div className="user-profile">
    <div className="user-avatar-box">
    <img src={userAvatar} alt="" className="user-avatar"/>
    </div>
    <div className="user-info">
    <h6>Neal Jean</h6>
    <p>Co-founder, Beacon. Shoot your shot</p>
    <span>8 posts &#9679; San Francisco</span>
    </div>  
</div>


    
    <div className="responsive-cards small-screen">  
      <h3 className="res-recommendation">Recommended For You</h3>
    <button className="gliders-prev"><i className="fas fa-long-arrow-alt-left res-btn"></i>
    </button>
     
     
     <GettingStartedCard/>

   <div className="recommendation" id="responsive-hide">
      <h3 className="recommendation">Recommended For You</h3>
    </div>

<div className="card-container" id="responsive-hide">
      <Link to="/featuring a video.html" className="main-card">
        <img src={blog13} alt="" className="main-card-img"/>
        <img src={avatar1} alt="" className="card-avatar-1"/>
        <h2 className="tips-card">Tips</h2>
        <div><h5>Taking Commissions <span role="img" aria-label="comission">&#128104;</span></h5></div>
            <div><h6>6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
      </Link>

      <Link to="/featuring a video.html" className="main-card main-card-4">
        <img src={blog14} alt="" className="main-card-img"/>
        <img src={avatar1} alt="" className="card-avatar-1"/>
        <h2 className="tips-card">Tips</h2>

        <div><h5> <span role="img" aria-label="hello">&#128184;</span>How much money do Youtubers really make?</h5></div>
            <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span></h6></div>
      </Link>

      <Link to="/getting started.html" className="main-card main-card-5">
        <img src={blog15} alt="" className="main-card-img"/>
        <img src={avatar1} alt="" className="card-avatar-1"/>
        <h2 className="tips-card">Tips</h2>
        <div><h5> <span role="img" aria-label="hello">&#128678;</span>Getting started with your Beacons profile</h5></div>
            <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
      </Link>
</div>
  
  <section className="footer">
      <p>Beacons Blog &copy;2020&nbsp; &bull; &nbsp;Published with Ghost</p>
     <Link to="/https://www.facebook.com/beaconsai">
       <i className="fab fa-facebook-square fb fa-2x"></i>
      </Link>
     <Link to="/https://twitter.com/beaconsai">
       <i className="fab fa-twitter fa-2x twitter"></i>
       </Link>
      <p>Javascript license information</p>
  </section>
        </div>
        </div>
    )
}

export default gettingstarted
