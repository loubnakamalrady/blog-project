import React, { useState, useEffect } from 'react';
import './blogPost.css';
import Card from '../UI/Card/card';
import blogData from '../../blogJson/blog.json';

/**
The BlogPost component represents an individual blog post.
The component receives the slug parameter from the route to identify the specific blog post to display.
The blogData variable is imported from a JSON file, presumably containing data about blog posts.
The component uses the useState and useEffect hooks to fetch and set the blog post data based on the provided slug.
The blog post information, such as category, title, author, date, image, and text, is stored in the post state.
The rendered output displays the blog post content within a Card component.
The blog post image is loaded dynamically using the require function with the path imported from the JSON data.
The blog post content, including the title and text, is displayed within the postContent section.
 */

export const BlogPost = (props) => {
  const [post, setPost] = useState({
    id: '',
    blogCategory: '',
    blogTitle: '',
    postedOn: '',
    author: '',
    blogImage: '',
    blogText: '',
  });
  const [slug, setSlug] = useState('');

  useEffect(() => {
    const slug = props.match.params.slug;
    const postData = blogData.data.find((post) => post.slug === slug);
    setPost(postData);
    setSlug(slug);
  }, [props.match.params.slug]);

  if (post.blogImage === '') return null;

  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">
            Posted on {post.postedOn} by {post.author}
          </span>
        </div>

        <div className="postImageContainer">
          <img src={require('../../blogImages/' + post.blogImage)} alt="Post Image" />
        </div>

        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;