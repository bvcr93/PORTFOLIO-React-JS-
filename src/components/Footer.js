import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
        </div>
        <div className="bottom-container">
        <p> &copy; 2020 darelbvcr.com</p>
        <h3> Email: darelbavcar1@gmail.com</h3>
        </div>
    </div>
  )
}

export default Footer