import { useState, useEffect } from "react";
import { newsFeedData } from "../../../dummyData";
import NewsFeedPostCard from "../../newsfeed/NewsFeedPostCard";
import NewsFeedCreatePost from "../../newsfeed/NewsFeedCreatePost";
import { NewsFeedCard, NewsFeedPosts } from "../../newsfeed/NewsFeedLoading";

const NewsFeeds = () => {
  const [newsData, setNewsData] = useState(newsFeedData[0].results);
  const [likeDislikeState, setLikeDislikeState] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with setTimeout
    setTimeout(() => {
      setNewsData(newsFeedData[0].results);
      setLoading(false);
    }, 1000);
  }, []);

  // console.log(newsData, "news data");

  return (
    <div className="">
      <NewsFeedCreatePost />

      {/* card */}
      {loading ? (
        <NewsFeedCard />
      ) : (
        <div className="bg-white rounded-2xl py-3 lg:w-5/6 h-[75vh] overflow-scroll scrollbar example">
          {newsData.map((item, index) => (
            <NewsFeedPostCard
              key={index}
              item={item}
              setLikeDislikeState={setLikeDislikeState}
              likeDislikeState={likeDislikeState}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsFeeds;
