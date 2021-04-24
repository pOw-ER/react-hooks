import MY_API_KEY from "../config"
// import NewsCard from "./NewsCard";
import React, { useState, useEffect } from 'react';
// import Test from "./Test";


const Home = () => {
  const [newsData, setData] = useState([])
  const [thema, setThema] = useState('general')

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?category=${thema}&` +
      `apiKey=${MY_API_KEY}`;
    let req = new Request(url);
    fetch(req)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData([data])
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?category=${thema}&` +
      `apiKey=${MY_API_KEY}`;
    let req = new Request(url);
    fetch(req)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data.articles)
      })
      .catch(err => console.log(err))
  }, [thema])

  return (
    <div id="images">
      {/* <Test /> */}
      <button onClick={() => setThema('science')} >Science</button>
      {newsData.map((data, i) =>
        <div key={i}>
          <img src={data.urlToImage} alt="" />
        </div>
      )}
    </div>
  );
}

export default Home;


