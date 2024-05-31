import { useState } from "react";

const Poll = () => {
  const initialOptions = [
    { text: "Lorem ipsum dolor sit amet", percentage: 67, selected: true },
    { text: "Lorem ipsum dolor sit amet", percentage: 17, selected: false },
    { text: "Lorem ipsum dolor sit amet", percentage: 10, selected: false },
  ];

  const [options, setOptions] = useState(initialOptions);

  const handleOptionClick = (index) => {
    const newOptions = options.map((option, i) => ({
      ...option,
      selected: i === index,
    }));
    setOptions(newOptions);
  };

  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <div
          key={index}
          className="relative  flex items-center w-full p-2 rounded-full shadow-lg bg-white cursor-pointer"
          onClick={() => handleOptionClick(index)}
        >
          <div
            className={`absolute top-0 left-0 h-full rounded-full ${
              option.selected ? "bg-[#CCF0FD]" : "bg-[#ECECEC]"
            }`}
            style={{ width: `${option.percentage}%`, zIndex: 1 }}
          />
          <div className="relative flex items-center w-full z-10">
            <div
              className={`w-5 h-5 rounded-full mr-2 ${
                option.selected
                  ? "bg-[#0592C6] border-2 border-white"
                  : "bg-[#D8D8D8] "
              }`}
            />
            <div className="flex-grow">{option.text}</div>
            <div className="w-16 text-right">{`${option.percentage}%`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Poll;
