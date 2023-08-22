import React from 'react';
import Card from '../../components/UI/Card/card';
import BlogPost from '../../components/BlogPost/blogPost';
import Sidebar from '../../components/SideBar/sideBar';
import Layout from '../../components/Layout/layout';


/*
The Post component is defined, which is likely associated with individual blog post pages.
The Layout component is used to structure the post page layout.
The BlogPost, Sidebar, and Card components are rendered within the Layout, indicating their usage for displaying the blog post content, sidebar information, and additional cards.
 */

export const Post = (props) => {

    console.log(props);


  return(
        <Layout>
          <BlogPost {...props} />
          <Sidebar {...props}/>
          <Card {...props}/>
        </Layout>
   )

 }

export default Post;