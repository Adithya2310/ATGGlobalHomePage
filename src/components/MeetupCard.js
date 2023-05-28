import React from 'react'

const MeetupCard = ({postImage,title,content,date,location,website,authorimages,authorname,authorviews}) => {
  return (
    <div className="post">
    <div className="post_image">
      <img src={postImage} alt="" />
    </div>
    <div className="content" style={{padding: "10px 20px"}}>
      <h5>{title}</h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <h3>{content}</h3>
        <i className="fas fa-ellipsis-h" style={{cursor: "pointer"}}></i>
      </div>
      <div style={{display: "flex", gap: "20px"}}>
        <p><i className="fas fa-calendar"></i> {date}</p>
        <p><i className="fas fa-location"></i> {location}</p>
      </div>
      <button
        style={{
          width: "100%",
          marginTop: "10px",
          color: "#e56135",
          border: "0.7px dashed #a9aeb8",
          borderRadius: "8px",
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "#FFFFFF",
        }}
      >
        {website}
      </button>
    </div>
    <div className="author">
      <div style={{display: "flex", gap: "15px"}}>
        <img src={authorimages} alt="" />
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

export default MeetupCard