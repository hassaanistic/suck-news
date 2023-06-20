import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

const News = (props) => {

  const [article, setarticle] = useState([
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "Apple’s new ‘Personal Voice’ feature can create a voice that sounds like you or a loved one in just 15 minutes",
      "description": "As part of its preview of iOS 17 accessibility updates coming this year, Apple announced a pair of new features called Live Speech and Personal Voice. Live Speech allows users to type what they want to say and have it be spoken out. \nPersonal Voice, on the ot…",
      "url": "https://9to5mac.com/2023/06/10/apple-personal-voice-creation-feature-ios-17/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/live-speech-personal-voice.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-06-11T00:59:30Z",
      "content": "As part of its preview of iOS 17 accessibility updates coming this year, Apple announced a pair of new features called Live Speech and Personal Voice. Live Speech allows users to type what they want … [+5165 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "Apple Releases Tool to Help Developers Port Windows Games to Mac",
      "description": "Apple at WWDC this week announced a new toolkit that makes it easier for game developers to port Windows games to the Mac. The toolkit provides an emulation environment that allows developers to run their existing, unmodified Windows game on the Mac and quick…",
      "url": "https://www.macrumors.com/2023/06/10/apple-releases-mac-game-porting-toolkit/",
      "urlToImage": "https://images.macrumors.com/t/PceI4dMoTAvLNuGiYRohWpFdtcw=/1600x/article-new/2023/06/Mac-Gaming.jpg",
      "publishedAt": "2023-06-11T01:28:43Z",
      "content": "Apple at WWDC this week announced a new toolkit that makes it easier for game developers to port Windows games to the Mac. The toolkit provides an emulation environment that allows developers to run … [+1219 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Caschys Blog"
      },
      "author": "André Westphal",
      "title": "Immer wieder sonntags KW 23",
      "description": "Ich hoffe, dass ihr bisher ein schönes Wochenende verbringen konntet? Frühaufstehern und natürlich auch denjenigen, die etwas später in diesen Beitrag hereinlesen, biete ich hier wie immer einen kleinen Wochenrückblick an. Obendrein erfahrt ihr auch, welche A…",
      "url": "https://stadt-bremerhaven.de/immer-wieder-sonntags-kw-23-9/",
      "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Kaffee-Sonntags.jpg",
      "publishedAt": "2023-06-11T04:30:57Z",
      "content": "Ich hoffe, dass ihr bisher ein schönes Wochenende verbringen konntet? Frühaufstehern und natürlich auch denjenigen, die etwas später in diesen Beitrag hereinlesen, biete ich hier wie immer einen klei… [+3051 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Srad.jp"
      },
      "author": "headless",
      "title": "Windows 11、英国版などで「ZIP」ファイルを「郵便番号」ファイルと表現",
      "description": "Windows 11 のエクスプローラーではファイルのコンテキストメニューに「ZIPファイルに圧縮」という項目が追加されているが、英国英語版では「ZIP」が「postcode」(英国英語の「郵便番号」) と訳されていることが話題となっている\n(Neowin の記事)。\n\nこの項目は米国英語版で「Compress to ZIP file」となっており、英国英語版では「Compress to postcode file」と表示される。「ZIP」には「ZIP code」(米国英語の「郵便番号」) の意味もあるが、「ZI…",
      "url": "https://idle.srad.jp/story/23/06/11/0342225/",
      "urlToImage": "https://srad.jp/static/articles/23/06/11/0342225-2-thumb.png",
      "publishedAt": "2023-06-11T04:05:00Z",
      "content": "Windows 11 ZIPZIPpostcode() \r\n(Neowin )Compress to ZIP fileCompress to postcode fileZIPZIP code() ZIP fileMicrosoft Windows 10 Fall Creators UpdateWindows 10 Autumn Creators Update\r\nCompress to postc… [+58 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Appbank.net"
      },
      "author": "テクノロジー記事班",
      "title": "次世代「iPhone 15 Pro」最新リークとデザイン予測",
      "description": "今年登場する見込みの「iPhone 15 Pro」の、リークをもとにした予測デザインを、海外YouTubeチャンネル「Technizo Concept」が掲載しています。 *Category:テクノロジー Technol […]",
      "url": "https://www.appbank.net/2023/06/11/technology/2485128.php",
      "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/06/2023-0609-iPhone-15-pro-thumb-1.jpeg",
      "publishedAt": "2023-06-11T02:48:45Z",
      "content": "iPhone 15 ProYouTubeTechnizo Concept\r\n*Category:\r\n Technology *SourceMacRumors ,Technizo Concept\r\niPhone 15 ProCG\r\niPhone 15 ProCGiPhone 14 Pro\r\nApple\r\nUSB-C\r\nDynamic Island\r\nMacRumorsiPhone 15 Pro\r\n… [+152 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techbang.com"
      },
      "author": "Hsuann",
      "title": "Apple宣佈2023年Apple設計大獎獲獎者",
      "description": "Apple 揭曉年度 Apple 設計大獎獲獎者，為 12 款一流的 app 和遊戲喝采。今年的獲獎開發者團隊來自世界各地，他們全都創造了設計傑出的創意和新穎 app。Apple 揭曉年度 Apple 設計大獎獲獎者，為 12 款一流的 app 和遊戲喝采。今年的獲獎開發者團隊來自世界各地，他們全都創造了設計傑出的創意和新穎 app。多元包容類、趣味體驗類、互動交流類、社會影響類、視覺藝術類和創新思維類等六個類別，各有一款 app 和遊戲獲獎。這些獲獎者是從 36 款入圍作品中選出。\n<ul>\n<li>延伸閱讀：…",
      "url": "https://www.techbang.com/posts/107043-apple-announces-winners-of-the-2023-apple-design-awards",
      "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/107043/original/7d349038bfebe53d7b6cd958f4de45d8.jpg?1686212580",
      "publishedAt": "2023-06-11T00:30:00Z",
      "content": "Apple Apple 12 app app app 36 \r\nApple Susan Prescott App Apple Apple app \r\nAppUniverse Website BuilderUniverse Exploration Company\r\nUniverse app Universe\r\nstitch.Lykke Studios\r\n Apple Arcade stitch.\r… [+1306 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Fstoppers"
      },
      "author": "Brad Wendes",
      "title": "Is Apple Vision Pro the Future?",
      "description": "Like many tech enthusiasts, I’ve been eagerly awaiting the announcements at Apple’s Worldwide Developer Conference 2023. There had been wild rumors of a new Mac Pro, and a new AR/VR product which would be an absolute game-changer in the world of consumer tech…",
      "url": "https://fstoppers.com/gear/apple-vision-pro-future-634189",
      "urlToImage": "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2023/06/vision-pro-lead.jpg",
      "publishedAt": "2023-06-11T00:04:01Z",
      "content": "Like many tech enthusiasts, Ive been eagerly awaiting the announcements at Apples Worldwide Developer Conference 2023. There had been wild rumors of a new Mac Pro, and a new AR/VR product which would… [+6293 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Taisy0.com"
      },
      "author": "taisy0",
      "title": "｢macOS｣のIntel Macのサポートはいつまで?? ｰ 早ければ来年リリースの｢macOS 15｣が最後か",
      "description": "Appleは先週の「WWDC23」で新型「Mac Pro」を発表し、IntelチップからAppleシリコンへの移行を完了しましたが、9To5Macが、macOSにおけるIntelチップ搭載Macのサポート終了時期を予想し ...",
      "url": "https://taisy0.com/2023/06/11/172859.html",
      "urlToImage": "https://taisy0.com/wp-content/uploads/2020/10/MacSeries2020.jpg",
      "publishedAt": "2023-06-11T01:37:13Z",
      "content": "AppleWWDC23Mac ProIntelApple9To5MacmacOSIntelMac\r\nApple2005PowerPCIntel200662007Intel Mac200618Mac ProIntel\r\n2007PowerPC MacMac OS X Leopard2009PowerPC MacIntel MacMac OS X Snow LeopardAppleIntel Mac… [+701 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hvg.hu"
      },
      "author": "hvg@hvg.hu",
      "title": "Elvitelre #18: A Herczeg-sztori, egy hercegi esküvő és a Himalája királyai",
      "description": "Elvitelre - a podcast, amelyben az adott hét legjobb HVG hetilapos és hvg360-as anyagaiból válogatunk – csak indítsa el a háttérben és hallgassa meg szerzőink legjobb írásait! Ezen a héten: a Herczeg Zoltán-sztori hátterét, a serpák történetét és egy jordánia…",
      "url": "https://hvg.hu/itthon/20230611_Elvitelre_18_Herczeg_Zoltan_Himalaja_Serpak_Jordania_eskuvo",
      "urlToImage": "https://api.hvg.hu/Img/7fcefbf8-ac48-4ee6-aef5-32203afa118c/0a4160c3-ee2d-40d7-aaad-adba86c86f60.jpg",
      "publishedAt": "2023-06-11T04:00:00Z",
      "content": "Elvitelre - a podcast, amelyben az adott hét legjobb HVG hetilapos és hvg360-as anyagaiból válogatunk csak indítsa el a háttérben és hallgassa meg szerzink legjobb írásait! Ezen a héten: a Herczeg Zo… [+573 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Vnexpress.net"
      },
      "author": "VnExpress",
      "title": "Sếp Apple chơi guitar điện điêu luyện",
      "description": "Craig Federighi, Phó chủ tịch cấp cao về phần mềm của Apple, chơi guitar điện điêu luyện đến mức nhiều người nghi ngờ.",
      "url": "https://vnexpress.net/sep-apple-choi-guitar-dien-dieu-luyen-4615981.html",
      "urlToImage": "https://vcdn1-sohoa.vnecdn.net/2023/06/10/Screenshot20230610at150530-168-2213-3634-1686384434.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=cA3U0A2lylNfjIl_C-c95A",
      "publishedAt": "2023-06-11T02:00:00Z",
      "content": "Craig Federighi, Phó ch tch cp cao v phn mm ca Apple, chi guitar in iêu luyn n mc nhiu ngi nghi ng.Ti WWDC 2023 din ra t ngày 5 n 9/6, bên cnh kính thc t o Vision Pro mi, s kin còn thu hút chú ý khi … [+1406 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Casey Clark",
      "title": "8 colorful and long-wearing makeup products to wear to all of your Pride celebrations",
      "description": "Show up to celebrate the LGBTQ+ community this Pride Month with colorful makeup looks that'll last through your festivities.",
      "url": "https://www.usatoday.com/story/money/reviewed/2023/06/10/pride-makeup/70308217007/",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/iGMfaCTV6qy33Wp2jobT1g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/usa_today_money_325/e4dc5705c50651e66773c331fabf61b0",
      "publishedAt": "2023-06-11T01:12:10Z",
      "content": "8 colorful and long-wearing makeup products to wear to all of your Pride celebrations.\r\n Recommendations are independently chosen by Reviewed's editors. Purchases made through the links below may ear… [+5889 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Bengals Wire",
      "title": "Best NFL free agents left and whether Bengals should be interested",
      "description": "A look at the top free agents and whether the Bengals should be interested.",
      "url": "https://bengalswire.usatoday.com/lists/nfl-free-agents-bengals-interest/",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/UIqucadJ5Zk2ssIdHnVd5A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/cincinnati_bengals_wire_usa_today_sports_articles_393/d53c913af874dacb07823eacd7b1dc89",
      "publishedAt": "2023-06-11T03:45:23Z",
      "content": "The Cincinnati Bengals dont figure to get active in free agency much over the summer as training camp gets underway.\r\nTheres always a chance they go after more help at a position like running back or… [+2299 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Cardinals Wire",
      "title": "Cardinals predicted to win only 2 games in 2023",
      "description": "NFL.com's Adam Rank predicts the Cardinals' only wins will come against the Rams and the Ravens.",
      "url": "https://cardswire.usatoday.com/2023/06/10/cardinals-predicted-to-won-only-2-games-in-2023/",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/GvEyb0N.yltWCs9aOwFJdQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/arizona_cardinals_wire_usa_today_sports_articles_662/97a32161d208b2f56e3c8accaccdda8d",
      "publishedAt": "2023-06-11T04:01:37Z",
      "content": "The Arizona Cardinals are expected to struggle in 2023. How bad will they be?\r\nPersonally, while I dont think they will be good, I think they will be better than most believe, as I expect Kyler Murra… [+817 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applech2.com"
      },
      "author": "applech2",
      "title": "Microsoft、AppleのApp Storeでも「Microsoft 365」のサブスクリプション価格を値上げ。",
      "description": "MicrosoftがAppleのApp Storeでも「Microsoft 365」の価格を値上げしています。詳細は以下から。 　Microsoftは日本時間2023年05月12日、06月01日よりコンシューマ向け「M\nThe post Microsoft、AppleのApp Storeでも「Microsoft 365」のサブスクリプション価格を値上げ。 first appeared on AAPL Ch..",
      "url": "https://applech2.com/archives/20230611-microsoft-office-356-new-price.html",
      "urlToImage": "https://applech2.com/wp-content/uploads/2023/06/Microsoft-356-for-iOS-new-prices-June-2023.jpg",
      "publishedAt": "2023-06-11T00:37:41Z",
      "content": "MicrosoftAppleApp StoreMicrosoft 365\r\nMicrosoft202305120601Microsoft 365 (Office)/05AppleMac/App Store\r\nMicrosoft 365 Office \r\n Microsoft 365 Office Microsoft Blog\r\nApp StoreMicrosoft 36514~15%Mac Ap… [+376 chars]"
    },
  
   
  ])
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
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cetagory}&apiKey=bc7191feb8fb4e1b88ad3923c66f505e&pageSize=${props.pageSize}&page=${page - 1}`;
    setpage(page - 1)
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
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cetagory}&apiKey=bc7191feb8fb4e1b88ad3923c66f505e&pageSize=${props.pageSize}&page=${page + 1}`;
    setpage(page + 1)
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
        <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={prevbtn} >PrevBtn</button>
        <button type="button" className="btn btn-dark " disabled={page === (Math.ceil(totalResults / props.pageSize))} onClick={nextbtn} >Nextbtn</button>
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
