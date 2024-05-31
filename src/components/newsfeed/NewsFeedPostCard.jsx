import React from "react";
import Description from "./Description";
import EditDelete from "./EditDelete";
import LikeDislike from "./LikeDislike";
import PictureCarousel from "./PictureCarousel";
import Poll from "./Poll";
import Profile from "./Profile";

const NewsFeedPostCard = ({ item, setLikeDislikeState, likeDislikeState }) => {
  return (
    <>
      <div key={item.id} className="mt-3 bg-[#F2F2F2] rounded-2xl p-4">
        {item.type === "POST" ? (
          <div className="card">
            <div className="flex justify-between items-center">
              <Profile item={item} />
              <EditDelete item={item} />
            </div>
            <Description item={item} />
            <div className="mx-6 mt-5">
              <PictureCarousel item={item} />
            </div>
            <LikeDislike
              itemId={item.id}
              state={likeDislikeState}
              setState={setLikeDislikeState}
            />
          </div>
        ) : item.type === "POLL" ? (
          <div className="card">
            <div className="flex justify-between items-center p-2">
              <Profile item={item} />
              <EditDelete item={item} />
            </div>
            <Description item={item} />
            <div className="mx-auto w-[95%] mt-3">
              <Poll key={item.id} data={item} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NewsFeedPostCard;
