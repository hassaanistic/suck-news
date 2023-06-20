import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
  import PropTypes from "prop-types";

const News = (props) => {

  const [article, setarticle] = useState([])
  //article ki initial value empty hi thi ham na just Page bnany k lye sab lya tha us mn sample json
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  //function based component mn hamay apna functions k sath dataType lagana lazmi ha

  const capitalized = (word) => {
    const str = word;
    const capital = str.charAt(0).toUpperCase() + str.slice(1);
    return capital;
  };

  const update = async () => {
    props.setProgress(10);
    //progress bar
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cetagory}&apiKey=bc7191feb8fb4e1b88ad3923c66f505e&pageSize=${props.pageSize}&page=${page}`;
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);

    setarticle(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)

    props.setProgress(100);
  }

  // async componentDidMount() {
  // this.update( )
  // }

  // instead of ComponentDidMount
  useEffect(() => {
    document.title = `${capitalized(props.cetagory)} -NewsMonkey`;
    //pehla title change ho ga then phr page
    update();
  }, [])

  
  const prevbtn = async () => {
    props.setProgress(10);
    //progress bar
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cetagory}&apiKey=bc7191feb8fb4e1b88ad3923c66f505e&pageSize=${props.pageSize}&page=${page-1}`;
    setpage(page -1)
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);

    setarticle(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)

    props.setProgress(100);
  

  };
  const nextbtn = async () => {
    props.setProgress(10);
    //progress bar
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cetagory}&apiKey=bc7191feb8fb4e1b88ad3923c66f505e&pageSize=${props.pageSize}&page=${page+1}`;
    setpage(page +1)
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);

    setarticle(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)

    props.setProgress(100);
  };
  return (
    <>
      <h1 className="d-flex justify-content-center" style={{ marginTop: "90px" }}>
        NewsMonkey's Top {capitalized(props.cetagory)} Headlines
      </h1>

        <div className="container d-flex justify-content-center my-3 ">
          <div className=" container d-flex justify-content-center  row">
            {article.map((elem) => {
              return (
                <div className="col md-3" key={elem.url}>
                  <NewsItem
                    title={elem.title ? elem.title.slice(0, 40) : ""}
                    description={
                      elem.description ? elem.description.slice(0, 50) : ""
                    }
                    ImgUrl={elem.urlToImage}
                    newsUrl={elem.url}
                    author={elem.author}
                    date={elem.publishedAt}
                    source={elem.source.name}
                    color={props.color}
                  />
                </div>
              );
            })}
          </div>
        </div>


      <div className="container d-flex justify-content-between  px-5 ">
        <button type="button" disabled={page<=1} className="btn btn-dark" onClick={prevbtn} >PrevBtn</button>
        <button type="button"  className="btn btn-dark " disabled={page===(Math.ceil(totalResults/props.pageSize))}  onClick={nextbtn} >Nextbtn</button>
      </div>
    </>
  );
}
// ham default pops and propTypes ko function based mn end pr likhte hain 
News.defaultProps = {
  country: "us",
  pageSize: 6,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  cetagory: PropTypes.string,
};

export default News;
