import { useState, useEffect } from "react";
import Select from "react-select";
import axiosInstance from "../../utils/apiCalls/axiosInstance";

const DashboardFilters = ({ setFilters }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState(null);

  const [region, setRegion] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axiosInstance(access_token).get(
          "/utils/query/region/"
        );
        setRegion(response.data.results);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, []);

  // console.log(region, "region");

  const regionData = [
    { id: 1, title: "North" },
    { id: 2, title: "South" },
    { id: 3, title: "East" },
    { id: 4, title: "West" },
  ];

  const cityData = [
    { id: 1, title: "Lahore" },
    { id: 2, title: "Islamabad" },
    { id: 3, title: "Karachi" },
    { id: 4, title: "Multan" },
  ];

  const campusData = [
    { id: 1, title: "United States" },
    { id: 2, title: "Canada" },
    { id: 3, title: "France" },
    { id: 4, title: "Germany" },
  ];

  const optionsRegion = region.map((region) => ({
    value: region?.region_id,
    label: region?.region_name,
  }));
  const optionsCity = cityData.map((city) => ({
    value: city.id,
    label: city.title,
  }));
  const optionsCampus = campusData.map((campus) => ({
    value: campus.id,
    label: campus.title,
  }));

  const handleChangeRegion = (selectedOption) => {
    setSelectedRegion(selectedOption);
  };

  // const handleChangeRegion = (selectedOption) => {
  //   setSelectedRegion(selectedOption);
  // };

  const handleChangeCity = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const handleChangeCampus = (selectedOption) => {
    setSelectedCampus(selectedOption); // Set the selected option object directly
  };

  const fetchData = () => {
    setFilters([selectedCampus, selectedCity, selectedRegion]);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      maxWidth: "9rem", // lg:w-36
      minWidth: "9rem", // md:w-28
      padding: "", // p-2.5
      fontSize: "0.75rem", // text-xs
      borderRadius: "1.875rem", // rounded-3xl
      color: "black", // text-black
      borderColor: "#D1D5DB", // gray-300
      boxShadow: "none",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black", // text-black
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "27px", // 27px border-radius for menu
      backgroundColor: "#fff", // bg-white
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      borderRadius: "27px", // Ensures the menu list items also respect the border-radius
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#fff" : "#fff", // Selected option background color
      color: state.isSelected ? "black" : "black", // Selected option text color
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "black",
    }),
    options: (provided, state) => ({
      ...provided,
      color: "black",
    }),
  };

  return (
    <div className="flex flex-wrap items-center">
      <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap">
        <form className="max-w-xs">
          <Select
            value={selectedRegion}
            onChange={handleChangeRegion}
            options={optionsRegion}
            isSearchable={false}
            placeholder="Region"
            styles={customStyles}
          />
        </form>
        <form className="max-w-xs">
          <Select
            value={selectedCity}
            onChange={handleChangeCity}
            options={optionsCity}
            isSearchable={false}
            placeholder="City"
            styles={customStyles}
          />
        </form>
        <form className="max-w-xs">
          <Select
            value={selectedCampus}
            onChange={handleChangeCampus}
            options={optionsCampus}
            isSearchable={false}
            placeholder="Campus"
            styles={customStyles}
          />
        </form>
        <button
          type="button"
          onClick={fetchData}
          className="bg-[#08A5DE] text-white py-1 rounded-[50px] px-6 sm:w-auto w-full mx-auto text-xs"
        >
          Show Results
        </button>
      </div>
    </div>
  );
};

export default DashboardFilters;
