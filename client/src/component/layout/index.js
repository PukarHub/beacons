import React from 'react'
import {Link} from 'react-router-dom'

const index = () => {
    return (
 <div className="container">
     {/* <!-- first-section --> */}
    <section className="first-section">
        <div className="navbar"
            <div>
                <Link to="/" className="logo"><img src="img/Capture.png" alt="Loading.." /></Link>
                <Link to="/" className="logo-only"><img src="/img/logo-only.PNG" alt="Loading.." /></Link>
            </div>
          {/* <!-- navbar-items --> */}
            <div className="navbar-items">
            <Link to="blogs.html" className="navbar-item">Blog</Link>
            <Link to="/" className="navbar-item">Gallery</Link>
            <Link to="/shop.html" className="navbar-item">Shop</Link>
            <Link to="/"className="navbar-item">Merchants</Link>
            </div>
        </div>
        {/* <!-- signin button --> */}
        <div className="drop-down-container">
          <div className="signin">
            <Link to="/">Sign In</Link>
          </div> 
        </div>
       

        {/* <!-- menubar --> */}
        <div className="dropdown">
           <button onclick="show_hide()" className="button">&/9776;</button>
           {/* <!-- drop-content --> */}
           <div style="display: none;" id="drop-content">
                <div className="drop-list">
                <Link to="blogs.html"><span>Blog</span></Link>
                <Link to="/"><span>Gallery</span></Link>
                <Link to="/"><span>Shop</span></Link>
                <Link to="/"><span>Merchants</span></Link>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- second section --> */}
     <section className="second-section">
        <div className="circle circle-1"></div>    
        <div className="circle circle-2"></div>    
        <div className="circle circle-3"></div>
    <div className="two-parts">
        <div className="left-main">
            <div className="left-part">
              <div className="main-heading-block">
                 <h1 className="main-heading">The best mobile website for creators.</h1>
               </div>
            </div>   
         {/* <!-- landing waitlist btn --> */}
         <div className="waitlist-btn">
            <form>
              <input type="email" name="email" placeholder=" Your email" />
              <Link to="/" className="waitlist-btn-1"> <input type="submit" name="submit" value="Join Waitlist" /> </Link>
            </form>
         </div>   
        </div>
            <div className="right-part">
                <div className="circle-4"></div>
                <div className="circle-5"></div>
                <div className="circle-6"></div>
            </div>
        </div>      
    </section>


     <section class="third-section">
     <div class="third-section-title">Start building your business today. <br/> Free Forever.</div>
      <div class="third-section-picture">
       <Link to="digital store.html"><div class="picture-info">
          <div class="picture-position">
            <img src="img/picture-1.png" class="picture" alt="1"/>
          <h5>Sell digital and physical products</h5>
          </div>
        </div></Link>
        <Link to="taking commissions.html"><div class="picture-info">
          <div class="picture-position">
            <img src="img/picture-2.png" class="picture picture-2" alt="2" />
          <h5>Set up paid commissions</h5>
          </div>
        </div></Link>
        <div class="picture-info"><a href="leveling up your links.html">
          <div class="picture-position">
            <img src="img/picture-3.png" class="picture picture-3" alt="3" />
            <h5>Link to anywhere</h5>
          </div></a>        
        </div>
      </div>
    </section>
    {/* <!-- footer-section --> */}
    <section className="footer">
      <div className="footer-first-part">
        <h5>By invite only.</h5>
        <form className="footer-form">
          <input type="email" name="email" id="email" placeholder="Enter your email" />
          <Link to="/"><button type="submit" className="btn-submit">Join Waitlist</button></Link>
        </form>
      </div>
        <div className="footer-second-part"> <Link to="/">Privacy Policy |</Link>        
            <Link to="/">Terms of Service |</Link>         
            <Link to="/">Contact</Link>          
        </div>     
    </section>
    </div>
    
 )
    }
export default index
