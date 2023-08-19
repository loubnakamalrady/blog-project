import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts';

import blogData from '../../blogJson/blog.json';
import Layout from '../../components/Layout';

// Component for displaying a side image
const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}px`, marginBottom: '10px' }}>
      <img src={props.src} alt="" style={{ width: '100%' }} />
    </div>
  );
};

// Component for displaying image gallery
const ImageGallery = (props) => (
  <div className="galleryPost" style={props.galleryStyle}>
    <section style={{ width: props.largeWidth, paddingRight: '15px' }}>
      <div className="mainImageWrapper">
        <img src={require('../../blogImages/' + props.imagesArray[1])} alt="" style={{ width: '100%' }} />
      </div>
    </section>
    <section className="sideImageWrapper" style={{ width: props.smallWidth }}>
      {props.imagesArray.map((image) => (
        <SideImage
          key={image}
          height={props.sideImageHeight}
          src={require('../../blogImages/' + image)}
          alt=""
        />
      ))}
    </section>
  </div>
);

const Home = (props) => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: `${galleryHeight}px`,
    overflow: 'hidden',
    marginBottom: '20px',
  };
  const sideImageHeight = galleryHeight / 3;
  const imageArray = blogData.data.map((post) => post.blogImage);

  return (
    <div>
      <Card>
        {/* Display the image gallery */}
        <ImageGallery
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          galleryStyle={galleryStyle}
          imagesArray={imageArray}
        />
      </Card>
      <Layout>
        {/* Display recent posts */}
        <RecentPosts style={{ width: '70%' }} />
      </Layout>
    </div>
  );
};

export default Home;