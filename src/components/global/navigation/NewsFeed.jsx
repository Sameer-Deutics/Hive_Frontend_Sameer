import { useState } from "react";
import Profile from "../../newsfeed/Profile";
import Description from "../../newsfeed/Description";
import EditDelete from "../../newsfeed/EditDelete";
import LikeDislike from "../../newsfeed/LikeDislike";
import PictureCarousel from "../../newsfeed/PictureCarousel";
import Poll from "../../newsfeed/Poll";
import { newsFeedData } from "../../../dummyData";
import NewsFeedPostCard from "../../newsfeed/NewsFeedPostCard";
import NewsFeedCreatePost from "../../newsfeed/NewsFeedCreatePost";

const NewsFeeds = () => {
  const [newsData, setNewsData] = useState(newsFeedData[0].results);
  const [likeDislikeState, setLikeDislikeState] = useState({});

  console.log(newsData, "news data");

  return (
    <div className="">
      <NewsFeedCreatePost />

      {/* card */}
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
    </div>
  );
};

export default NewsFeeds;
