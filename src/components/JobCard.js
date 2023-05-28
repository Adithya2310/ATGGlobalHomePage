import React from 'react'

const JobCard = ({title,content,company,location,buttonText,authorimage,authorname,authorviews}) => {
  return (
    <div className="post">
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
                    <p><i className="fas fa-bag-shopping"></i> {company}</p>
                    <p><i className="fas fa-location"></i> {location}</p>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      color: "#02B875",
                      border: "0.7px dashed #a9aeb8",
                      borderRadius: "8px",
                      padding: "10px",
                      cursor: "pointer",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                  {buttonText}
                  </button>
                </div>
                <div className="author">
                  <div style={{display: "flex", gap: "15px"}}>
                    <img src={authorimage} alt="" />
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

export default JobCard