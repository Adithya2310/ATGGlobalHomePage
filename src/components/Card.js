import React from 'react';

const Card = ({postImage,title,content,authorimage,authorname,authorviews}) => {
    console.log(postImage)
  return (
    <div className="post">
        <div className="post_image">
          <img src={postImage} alt="image"/>
        </div>
        <div className="content" style={{padding: "10px 20px"}}>
          <h5><i className="fas fa-pen"></i> {title}</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>
              {content}
            </h3>
            <i className="fas fa-ellipsis-h" style={{cursor: "pointer"}}></i>
          </div>
          <p>
            I’ve worked in UX for the better part of a decade. From now
            on, I plan to rei…
          </p>
        </div>
        <div className="author">
          <div style={{display: "flex", gap: "15px"}}>
            <img src={authorimage} alt=""/>
            <div style={{display: "flex", flexDirection: "column"}}>
              <span style={{fontWeight: "bold"}}>{authorname}</span>
              <span>Views: {authorviews}</span>
            </div>
          </div>
          <div>
            <button><i className="fas fa-share-nodes"></i> Share</button>
          </div>
        </div>
    </div>
  )
}

export default Card