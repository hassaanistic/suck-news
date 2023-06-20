import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [article, setarticle] = useState([])
  //article ki initial value empty hi thi ham na just Page bnany k lye sab lya tha us mn sample json
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  
  //function based component mn hamay apna functions k sath dataType lagana lazmi ha
  
  const   capitalized = (word) => {
    const str = word;
    const capital = str.charAt(0).toUpperCase() + str.slice(1);
    return capital;
  };

  const update = async () => {
    props.setProgress(10);
    //progress bar
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cetagory}&apiKey=ac8876d9623a44e1877f2be5f4e9885a&pageSize=${props.pageSize}&page=${page}`;
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
  
 const  fetchMoreData = async () => {
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cetagory}&apiKey=ac8876d9623a44e1877f2be5f4e9885a&pageSize=${props.pageSize}&page=${page+1}`;
   setpage(page + 1)  
    let data = await fetch(url);
    let parsedData = await data.json();
    
    setarticle(article.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)

  };

    return (
      <>
        <h1 className="d-flex justify-content-center" style={{marginTop:"90px"}}> 
        NewsMonkey's Top {capitalized(props.cetagory)} Headlines
        </h1>

        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3 ">
            <div className="row">
              {article.map((elem) => {
                return (
                  <div className="col md-4" key={elem.url}>
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

        </InfiniteScroll>

      </>
    );
}
// ham default pops and propTypes ko function based mn end pr likhte hain 
News.defaultProps = {
  country: "us",
  pageSize: 8,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  cetagory: PropTypes.string,
};

export default News;
