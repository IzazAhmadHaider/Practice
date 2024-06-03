import React, { useState } from "react";

function Dropdown() {
  const [inputs, setInputs] = useState([]);
  const [istval, setIstval] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [objsize, setObjsize] = useState({});
  const [objcolor, setObjcolor] = useState({});
  const [mappingDoneSize, setMappingDoneSize] = useState(false);
  const [showdd, setShowdd] = useState(false);
  const [editsize, setEditsize] = useState(false);
  const [editcolor, setEditcolor] = useState(false);
  const [showtable, setShowtable] = useState(false);
  const [mappingDoneColor, setMappingDoneColor] = useState(false);
  const [expandedSizes, setExpandedSizes] = useState({});

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (istval === "") {
      setIstval(selectedValue);
    }
    setSelectedOption(selectedValue);
    setInputs([{ id: 0, value: "" }]);
    if (selectedValue === "size") {
      setEditsize(false);
      setObjsize({ [selectedValue]: [] });
    } else if (selectedValue === "color") {
      setObjcolor(false);
      setObjcolor({ [selectedValue]: [] });
    }
  };

  const handleInputChange = (index, event) => {
    const newInputs = inputs.map((input, i) =>
      i === index ? { ...input, value: event.target.value } : input
    );

    setInputs(newInputs);

    if (selectedOption === "size") {
      setObjsize((prevObj) => ({
        ...prevObj,
        [selectedOption]: newInputs.map((input) => input.value),
      }));
    } else if (selectedOption === "color") {
      setObjcolor((prevObj) => ({
        ...prevObj,
        [selectedOption]: newInputs.map((input) => input.value),
      }));
    }

    if (index === inputs.length - 1 && inputs.length === index + 1) {
      addInput();
    }
  };

  const addInput = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      { id: prevInputs.length, value: "" },
    ]);
  };

  const handleBtnClick = (sizeIndex) => {
    setExpandedSizes((prevExpandedSizes) => ({
      ...prevExpandedSizes,
      [sizeIndex]: !prevExpandedSizes[sizeIndex],
    }));
  };

  const handleDoneClick = () => {
    setInputs([]);
    setSelectedOption("");
    setShowtable(true);
    setShowdd(false);

    // Check if either objsize or objcolor is empty
    if (Object.keys(objsize).length > 0) {
      setEditsize(true);
    }
    if (Object.keys(objcolor).length > 0) {
      setEditcolor(true);
    }

    setMappingDoneSize(true);
    setMappingDoneColor(true);
  };

  const addNewVariant = () => {
    setShowdd(true);
  };

  return (
    <>
      <div className="font-mono w-[60vw] m-auto border bg-[#ffffffd8] shadow-md rounded-lg mt-10 ">
        <span className=" p-2">Variants</span>
        {editsize && <OptionList title="Size" data={objsize} />}
        {editcolor && <OptionList title="Colors" data={objcolor} />}

        <div className="font-mono m-auto bg-[#fffff] flex items-center justify-center flex-col mt-3 ">
          {showdd ? (
            <div className="w-full mx-6 bg-white p-6 rounded shadow-md flex flex-col space-y-4">
              <DropdownSelect
                selectedOption={selectedOption}
                handleSelectChange={handleSelectChange}
                handleInputChange={handleInputChange}
                inputs={inputs}
                handleDoneClick={handleDoneClick}
              />
            </div>
          ) : (
            <p
              onClick={addNewVariant}
              className="text-blue-600 p-2 underline font-medium text-[14px] cursor-pointer w-full text-left"
            >
              + Add new variants Size/Colors
            </p>
          )}

          {showtable && (
            <>
              <div className="w-full p-2">
                <div className="flex items-center w-fit space-x-4">
                  <span className="text-gray-700 font-medium">Group BY</span>
                  <select
                    value={istval}
                    onChange={(e) => {
                      setIstval(e.target.value);
                      console.log(istval);
                    }}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-primary transition duration-300 ease-in-out"
                  >
                    <option disabled value="">
                      Select value
                    </option>
                    <option value="size">Size</option>
                    <option value="color">Color</option>
                  </select>
                </div>
              </div>
              <table className="overflow-hidden rounded-md w-full">
                <thead className="border-[1.8px] bg-gray-100 border-[#ebebeb] m-4">
                  <tr className="rounded-t-md">
                    <th className="w-[5%]">
                      <input type="checkbox" />
                    </th>
                    <th className="w-[65%] text-start text-sm font-bold p-2">
                      Variant
                    </th>
                    <th className="w-[400px] text-start text-sm font-bold p-2">
                      Price
                    </th>
                    <th className="w-[200px] text-start text-sm font-bold p-2">
                      Available
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {mappingDoneSize &&
                    Object.entries(istval === "size" ? objsize : objcolor).map(
                      ([optionKey, optionValues]) =>
                        optionValues
                          .filter((optionValue) => optionValue !== "")
                          .map((optionValue, optionIndex) => (
                            <React.Fragment key={`${optionKey}-${optionIndex}`}>
                              <tr
                                onClick={() =>
                                  handleBtnClick(`${optionKey}-${optionIndex}`)
                                }
                                className="border-[1.8px] border-[#ebebeb] cursor-pointer hover:bg-slate-200"
                              >
                                <td className="w-[5%]">
                                  <input type="checkbox" />
                                </td>
                                <td className="text-start text-sm font-medium p-2">
                                  <input type="image" src="" alt="" />
                                  {optionValue}
                                </td>
                                <td className="px-5 py-2 shadow-sm text-center">
                                <input placeholder="Rs. 0.00" className="border rounded-xl py-1 pl-4 placeholder:text-black placeholder:opacity-70 border-black" type="text" />
                                </td>
                                <td className="px-5 py-2 shadow-sm text-center">
                                <input placeholder="00" className="border rounded-xl py-1 pl-4 placeholder:text-black placeholder:opacity-70 border-black" type="text" />
                                </td>
                              </tr>
                              {expandedSizes[`${optionKey}-${optionIndex}`] &&
                                mappingDoneColor &&
                                Object.entries(
                                  istval === "color" ? objsize : objcolor
                                ).map(([subOptionKey, subOptionValues]) =>
                                  subOptionValues
                                    .filter(
                                      (subOptionValue) => subOptionValue !== ""
                                    )
                                    .map((subOptionValue, subOptionIndex) => (
                                      <tr
                                        key={`${optionKey}-${optionIndex}-${subOptionKey}-${subOptionIndex}`}
                                        className="border-b hover:bg-slate-50 border-gray-200 scale-95"
                                      >
                                        <td className="w-[5%]">
                                          <input type="checkbox" />
                                        </td>
                                        <td className="text-start text-sm font-medium p-2">
                                          {subOptionValue}
                                        </td>
                                        <td className="px-5 py-2 shadow-sm text-center">
                                          <input placeholder="Rs. 0.00" className="border rounded-xl py-1 pl-4 placeholder:text-black placeholder:opacity-70 border-black" type="text" />
                                        </td>
                                        <td className="px-5 py-2 shadow-sm text-center">
                                        <input placeholder="00" className="border rounded-xl py-1 pl-4 placeholder:text-black placeholder:opacity-70 border-black" type="text" />
                                        </td>
                                      </tr>
                                    ))
                                )}
                            </React.Fragment>
                          ))
                    )}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dropdown;

const DropdownSelect = ({
  selectedOption,
  handleSelectChange,
  handleInputChange,
  inputs,
  handleDoneClick,
  keyy,
}) => {
  return (
    <>
      <div key={keyy} className="flex flex-col space-y-1">
        <h1 className="ml-2">Option name</h1>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleSelectChange}
          className="rounded-lg appearance-none border-[1.5px] border-stroke bg-transparent py-1 mr-4 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        >
          <option value="">select</option>
          <option value="size">Size</option>
          <option value="color">Color</option>
        </select>

        <>
          {inputs.length > 0 && <p className="ml-2">Option Values</p>}

          {inputs.map((input, index) => (
            <input
              key={input.id}
              type="text"
              value={input.value}
              onChange={(event) => handleInputChange(index, event)}
              className="rounded-lg border-[1.5px] border-stroke bg-transparent py-1 mr-4 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              placeholder={`Enter ${selectedOption}`}
            />
          ))}
        </>
        <button
          className="inline-flex w-fit px-3 items-center justify-center rounded-md bg-black p-1 text-center font-medium text-white hover:bg-opacity-90"
          onClick={handleDoneClick}
        >
          DONE
        </button>
      </div>
    </>
  );
};

const OptionList = ({ title, data }) => (
  <div className="scale-90">
    <p>{title}</p>
    <ul className="flex p-2 space-x-3 rounded-full  px-2 py-0.5">
      {Object.entries(data).flatMap(([key, values]) =>
        values
          .filter((value) => value !== "")
          .map((value, index) => <li className="flex p-2 w-fit space-x-3 rounded-full border border-gray-200 bg-gray-100 px-2 py-0.5" key={`${key}-${index}`}>{value}</li>)
      )}
    </ul>
  </div>
);
