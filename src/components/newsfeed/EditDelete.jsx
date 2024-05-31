import React from "react";
import DeleteSvg from "../../assets/svgs//DeleteSvg";
import UpdateSvg from "../../assets/svgs/UpdateSvg";

const EditDelete = () => {
  return (
    <>
      <div className="flex mx-5">
        <h6 className="text-xs font-lighter mx-3">
          <DeleteSvg />
        </h6>
        <h6 className="text-xs font-lighter">
          <UpdateSvg />
        </h6>
      </div>
    </>
  );
};

export default EditDelete;
