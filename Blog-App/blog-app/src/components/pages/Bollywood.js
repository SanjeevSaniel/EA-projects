import { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import Photo from "../Images/Brahmastra.jpg";

const Bollywood = () => {
  const [articles, setArticles] = useState([]);
  const [ads, setAds] = useState([]);
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/Bollywood.json").then((response) => {
      setArticles(response.data);
    });
  }, [articles]);

  useEffect(() => {
    axios.get("/api/BollywoodAds.json").then((response) => {
      setAds(response.data);
    });
  }, [ads]);

  useEffect(() => {
    axios.get("/api/BollywoodTopPosts.json").then((response) => {
      setTopPosts(response.data);
    });
  }, [topPosts]);

  // if (!articles || !ads || (!articles && !ads)) return null;

  return (
    <div className="Bollywood">
      <ArticlesVertical
        ads={ads}
        articles={articles}
        topPosts={topPosts}
        articleLink="https://www.google.com/search?client=firefox-b-d&q=Brahmastra"
        category="Bollywood"
        photo={Photo}
        title="Brahmastra Part One: Shiva"
        date="September 9 2022"
      />
      <ScrollToTop className="scroll-arrow" color="white" smooth />
    </div>
  );
};

export default Bollywood;
