import React from 'react';
import Card from '../../components/UI/Card/card';
import BlogPost from '../../components/BlogPost/blogPost';
import Sidebar from '../../components/SideBar/sideBar';
import Layout from '../../components/Layout/layout';

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