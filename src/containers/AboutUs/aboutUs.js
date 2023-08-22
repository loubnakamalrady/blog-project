import React from 'react';
import './aboutUs.css';

/* 
The AboutUs component represents the content and information about the blog or the author.
Email contact information and social media links are included. 
*/

const AboutUs = (props) => {
    return (
        <div className='container'>
            {/* About Us content */}
            <h1 className='title'>NICE TO MEET YOU</h1>
            <div className='section'>
            <h2>Subscribe:</h2>
            <p>Stay updated with our latest blog posts by subscribing to our newsletter. Enter your email address below to receive regular updates and exclusive content.</p>
            </div>
            <div className='section'>
            <h2>About the Author::</h2>
            <p>Hi, I'm GMC, the author of this blog. I'm a react trainee with a deep passion for web developing. Through this blog, I aim to provide valuable insights, tips, and inspiration to help you incourage your achievements.
            </p>
            </div>
            <div>
            <h2>Subscribe:</h2>
            <p>Stay updated with our latest blog posts by subscribing to our newsletter. Enter your email address below to receive regular updates and exclusive content.</p>
            </div>
            <div className='section'>
            <h2>Contact</h2>
            <p>Got a question or suggestion? Feel free to reach out to me by email at abcdefg@gmail.com. I'd love to hear from you and engage in meaningful conversations.
            </p>
            </div>
            <div className='section'>
            <h2>Social Media Links:</h2>
            <p>Connect with us on social media to stay updated with our latest posts, industry news, and more. Follow us on facebook, instagram, twitter, and linked-in for daily inspiration and insights.</p>
            </div>
        </div>
    );
};

export default AboutUs;