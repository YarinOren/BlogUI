import '../Styles/Post.css';
import React from 'react';
  
  function Posts() {
    return (
      <div>
        <div className="post-container">
            <div className="post">
                <h3 className="post-title">Blog Post #1</h3>
                <p className="post-content">My <span className="bold">first blog post</span> is all about <span className="red">my blog</span> post and how to write a new post in my blog, you can find it <a href="">her</a>.</p>
                <img width="90" height="90" className="post-image" src='https://www.pngarts.com/files/1/X-Shape-PNG-High-Quality-Image.png'/>
                <label className="post-footer">Published 3 days ago by Israel Israeli</label>
            </div>
        </div>
        <div className="post-container">
          <div className="post">
            <h3 className="post-title">Blog Post #2</h3>
            <p className="post-content">My <span className="bold">second blog post</span> is all about my blog post.</p>
            <img width="90" height="90" className="post-image" src='https://www.pngarts.com/files/1/X-Shape-PNG-High-Quality-Image.png'/>
            <label className="post-footer">Published 2 days ago by Joe</label>
          </div>
        </div>
        <div className="post-container">
          <div className="post">
            <h3 className="post-title">Blog Post #3</h3>
            <p className="post-content">My <span className="bold">third blog post</span> is all about my blog post.</p>
            <img width="90" height="90" className="post-image" src='https://www.pngarts.com/files/1/X-Shape-PNG-High-Quality-Image.png'/>
            <label className="post-footer">Published 1 day ago by Yarin</label>
          </div>
        </div>
    </div>
    )
  }
  
  export default Posts;