import React, { useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { connect } from "react-redux";

function SkillList(props) {
  let oldskills = localStorage.getItem("customskills");
  oldskills = JSON.parse(oldskills);

  let storeOptions = "";
  const options = [
    { value: "java", label: "Java" },
    { value: "c", label: "C" },
    { value: "c++", label: "C++" },
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "scala", label: "Scala" },
    { value: "react", label: "React" }
  ];

  const handleChange = option => {
    storeOptions = JSON.stringify(option);
    localStorage.setItem("customskills", storeOptions);
    props.onChange(option);
  };
  return (
    <CreatableSelect
      className="text-dark"
      isMulti
      value={oldskills}
      onChange={handleChange}
      options={options}
    />
  );
}

function mapStateToProps(state) {
  return {};
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(SkillList);
