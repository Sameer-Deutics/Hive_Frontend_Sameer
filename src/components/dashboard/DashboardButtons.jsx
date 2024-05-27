import {useState} from 'react'


const Dashboardbuttons = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index); // Update active button index
  };
  return (
    <>
         <div className="flex gap-5 lg:flex-row md:flex-row sm:flex-row ">
      <button
        className={`px-7 py-1 rounded-2xl text-sm ${
          activeButton === 0 ? 'bg-[#08A5DE] text-white' : 'bg-gray-100 text-gray-400'
        }`}
        onClick={() => handleButtonClick(0)}
      >
        ACE Coordinator Report
      </button>
      <button
        className={`px-7 py-1 rounded-2xl text-sm ${
          activeButton === 1 ? 'bg-[#08A5DE] text-white' : 'bg-gray-100 text-gray-400'
        }`}
        onClick={() => handleButtonClick(1)}
      >
        Career Advisor Report
      </button>
    </div>
    </>
  )
}

export default Dashboardbuttons