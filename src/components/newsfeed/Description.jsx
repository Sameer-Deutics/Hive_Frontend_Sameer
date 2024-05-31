const Description = ({ item }) => {
  console.log(item);
  return (
    <div className="mx-6 mt-2">
      <p className="font-light  ">{item ? item.text : ""}</p>
      {/* md:w-[300px] sm:w-auto*/}
    </div>
  );
};

export default Description;
