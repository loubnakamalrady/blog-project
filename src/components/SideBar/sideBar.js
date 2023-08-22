import React, { useState, useEffect } from 'react';
import './sideBar.css';
import Card from '../UI/Card/card';

import blogPost from '../../blogJson/blog.json';
import { NavLink } from 'react-router-dom';

/*
The Sidebar component represents a sidebar section of a website.
It imports CSS styles from sideBar.css and a Card component from the specified file path.
The component uses the useState and useEffect hooks to manage the state of posts.
The blogPost variable is imported from a JSON file containing blog post data.
On component mount, the posts state is set with the data from the blogPost variable.
The rendered output includes multiple instances of the Card component with different content.
The sidebar displays information such as an "About Us" section, a profile image, a "Social Network" section, and a list of recent blog posts.
The recent blog posts are dynamically rendered using the map function on the posts array, creating a NavLink component for each post.
*/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://www.freepik.com/free-psd/3d-rendered-facebook-post-mockup-isolated_36106028.htm#query=react&position=0&from_view=keyword&track=sph" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">This is the blog project of go my code:)</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar