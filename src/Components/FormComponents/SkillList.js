import React, { useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { connect } from "react-redux";
import { change_input } from "../../ActionCreators/EmployeeFormAC";

function SkillList(props) {
  const options = [
    { value: "java", label: "Java" },
    { value: "c", label: "C" },
    { value: "c++", label: "C++" },
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "scala", label: "Scala" },
    { value: "react", label: "React" }
  ];

  //const [option, setOption] = useState(null);

  const handleChange = option => {
    props.dispatch(change_input("skills", option));
  };
  return (
    <CreatableSelect
      className="text-dark"
      isMulti
      value={props.skills}
      onChange={handleChange}
      options={options}
    />
  );
}

function mapStateToProps(state) {
  return { skills: state.skills };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(SkillList);
