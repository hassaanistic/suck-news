import React from 'react'

const NewsItem =(props)=> {
  //we cam do this destructuring in function based also
    let { title, description, ImgUrl, newsUrl, source, author, date, color } = props;
    return (
      <div className='container d-flex justify-content-center'  >
        <div className="card my-3   " style={{ width: "18rem" ,height:"26rem" }}>
          <div style={{ display: "flex", justifyContent: 'flex-end', position: 'absolute', right: "0" }}>
            <span className={` badge rounded-pill bg-${color}`}>
              {source}
            </span>
          </div>

          <img src={!ImgUrl ? "https://img1.s3wfg.com/web/img/images_uploaded/d/3/ep_archivo_-_tienda_apple_store_en_nueva_york.jpg" : ImgUrl} className="card-img-top" style={{ height: "180px", width: "auto", display: "flex", justifyContent: "center", alignContent: "center" }} alt="..." />

          <div className="card-body d-flex justify-content-between flex-column">

            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} at {date}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }

export default NewsItem