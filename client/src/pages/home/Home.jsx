import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Home.scss';
import Capture from '../../images/Capture.png'
import Logo from '../../images/logo-only.PNG'
import Picture1 from '../../images/picture-1.png'
import Picture2 from '../../images/picture-2.png'
import Picture3 from '../../images/picture-3.png'

const index = () => {
  return (
    <div className='container'>
      <section className='first-section'>
        <div className='navbar'>
          <div>
            <Link to='/' className='logo'>
              <img src={Capture} alt='Loading...' />
            </Link>
            <Link to='/' className='logo-only'>
              <img src={Logo} alt='Loading...' />
            </Link>
          </div>

          <div className='navbar-items'>
            <Link to='/blog1' className='navbar-item'>
              Blog
            </Link>
            <Link to='/' className='navbar-item'>
              Gallery
            </Link>
            <Link to='/shop.html' className='navbar-item'>
              Shop
            </Link>
            <Link to='/' className='navbar-item'>
              Merchants
            </Link>
          </div>
        </div>

        <div className='drop-down-container'>
          <div className='signin'>
            <Link to='/'>Sign In</Link>
          </div>
        </div>

        <div className='dropdown'>
          {/* <button onclick="show_hide()" className="button">&/9776;</button> */}
          <div style={{ display: 'none' }} id='drop-content'>
            <div className='drop-list'>
              <Link to='/blog1'>
                <span>Blog</span>
              </Link>
              <Link to='/'>
                <span>Gallery</span>
              </Link>
              <Link to='/'>
                <span>Shop</span>
              </Link>
              <Link to='/'>
                <span>Merchants</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='second-section'>
        <div className='circle circle-1'></div>
        <div className='circle circle-2'></div>
        <div className='circle circle-3'></div>
        <div className='two-parts'>
          <div className='left-main'>
            <div className='left-part'>
              <div className='main-heading-block'>
                <h1 className='main-heading'>
                  The best mobile website for creators.
                </h1>
              </div>
            </div>

            <div className='waitlist-btn'>
              <form>
                <input type='email' name='email' placeholder=' Your email' />
                <Link to='/' className='waitlist-btn-1'>
                  <input type='submit' name='submit' value='Join Waitlist' />
                </Link>
              </form>
            </div>
          </div>
          <div className='right-part'>
            <div className='circle-4'></div>
            <div className='circle-5'></div>
            <div className='circle-6'></div>
          </div>
        </div>
      </section>

      <section className='third-section'>
        <div className='third-section-title'>
          Start building your business today. <br /> Free Forever.
        </div>
        <div className='third-section-picture'>
          <Link to='/digitalstore'>
            <div className='picture-info'>
              <div className='picture-position'>
                <img src={Picture1} className='picture' alt='1' />
                <h5>Sell digital and physical products</h5>
              </div>
            </div>
          </Link>
          <Link to='/comission'>
            <div className='picture-info'>
              <div className='picture-position'>
                <img
                  src={Picture2}
                  className='picture picture-2'
                  alt='2'
                />
                <h5>Set up paid commissions</h5>
              </div>
            </div>
          </Link>
          <Link to='/link'>
            <div className='picture-info'>
              <div className='picture-position'>
                <img
                  src={Picture3}
                  className='picture picture-3'
                  alt='3'
                />
                <h5>Link to anywhere</h5>
              </div>
            </div>
          </Link>
           
        </div>
      </section>

      <section className='footer'>
        <div className='footer-first-part'>
          <h5>By invite only.</h5>
          <form className='footer-form'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
            />
            <Link to='/'>
              <button type='submit' className='btn-submit'>
                Join Waitlist
              </button>
            </Link>
          </form>
        </div>
        <div className='footer-second-part'>
          {' '}
          <Link to='/'>Privacy Policy |</Link>
          <Link to='/'>Terms of Service |</Link>
          <Link to='/'>Contact</Link>
        </div>
      </section>
    </div>
  );
};

export default index;
