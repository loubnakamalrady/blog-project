import React from 'react';
import './recentPosts.css';
import Card from '../../../components/UI/Card/card';


const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card classname="card">
            <div className='content'>

                <span>Featured</span>
                <h2>Blog Project</h2>
                <span>posted on August 21, 2006 by GMC</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat imperdiet sed euismod nisi porta. Tincidunt dui ut ornare lectus sit amet est placerat in. Sapien nec sagittis aliquam malesuada bibendum arcu. Netus et malesuada fames ac turpis. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Neque gravida in fermentum et sollicitudin ac. Eget arcu dictum varius duis at consectetur lorem donec massa. Viverra suspendisse potenti nullam ac tortor. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Amet mattis vulputate enim nulla aliquet.</p>
            
                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   );

 }

export default RecentPosts;