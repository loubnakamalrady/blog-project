import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>Blog Project</h2>
                <span>posted on August 21, 2006 by GMC</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat imperdiet sed euismod nisi porta. Tincidunt dui ut ornare lectus sit amet est placerat in. Sapien nec sagittis aliquam malesuada bibendum arcu. Netus et malesuada fames ac turpis. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Neque gravida in fermentum et sollicitudin ac. Eget arcu dictum varius duis at consectetur lorem donec massa. Viverra suspendisse potenti nullam ac tortor. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Amet mattis vulputate enim nulla aliquet.</p>
                <p>Odio morbi quis commodo odio aenean sed adipiscing diam. Amet est placerat in egestas erat imperdiet sed euismod. Dolor morbi non arcu risus quis. Tellus integer feugiat scelerisque varius. Suscipit adipiscing bibendum est ultricies integer. Libero nunc consequat interdum varius. Nunc vel risus commodo viverra. Donec massa sapien faucibus et molestie ac feugiat. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Donec ultrices tincidunt arcu non sodales neque. Adipiscing bibendum est ultricies integer quis auctor elit sed. Massa id neque aliquam vestibulum morbi blandit. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Nunc sed augue lacus viverra vitae. Sed elementum tempus egestas sed. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Ultricies leo integer malesuada nunc vel. Amet mattis vulputate enim nulla aliquet. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Sit amet cursus sit amet dictum sit amet justo.</p>
                <p>Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Nibh venenatis cras sed felis eget. Nibh tellus molestie nunc non blandit. Fringilla ut morbi tincidunt augue. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. In metus vulputate eu scelerisque felis imperdiet. In hac habitasse platea dictumst quisque sagittis purus sit. Mi in nulla posuere sollicitudin aliquam ultrices. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Velit dignissim sodales ut eu sem integer vitae. Feugiat pretium nibh ipsum consequat nisl.</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts