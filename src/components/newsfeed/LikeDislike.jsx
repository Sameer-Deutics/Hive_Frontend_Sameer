import { AiOutlineLike } from "react-icons/ai";
import { SlDislike } from "react-icons/sl";

const LikeDislike = ({ itemId, state, setState }) => {
  const activeButton = state[itemId]?.activeButton || false;
  const disLike = state[itemId]?.disLike || false;

  const handleLike = () => {
    setState((prevState) => ({
      ...prevState,
      [itemId]: { activeButton: true, disLike: false },
    }));
  };

  const handleDislike = () => {
    setState((prevState) => ({
      ...prevState,
      [itemId]: { activeButton: false, disLike: true },
    }));
  };

  return (
    <div className="mx-6 flex gap-2 mt-5">
      <button
        className={`${
          activeButton ? "bg-[#CCF0FD] border-[#09A5E0]" : "bg-white"
        } border px-5 py-2 rounded-2xl flex items-center gap-2`}
        onClick={handleLike}
        disabled={activeButton}
      >
        <AiOutlineLike
          className={`${activeButton ? "text-blue-500" : "text-black"} h-5 w-5`}
        />
        {activeButton ? 21 + 1 : "21"}
      </button>
      <button
        className={`${
          disLike ? "bg-[#CCF0FD] border-[#09A5E0]" : "bg-white"
        } border px-5 py-2 rounded-2xl flex items-center gap-2`}
        onClick={handleDislike}
        disabled={disLike}
      >
        <SlDislike
          className={`${disLike ? "text-blue-500" : "text-black"} h-5 w-5`}
        />
        {disLike ? 7 - 1 : "7"}
      </button>
    </div>
  );
};

export default LikeDislike;
