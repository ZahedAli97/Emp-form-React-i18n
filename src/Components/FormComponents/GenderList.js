import React, { useState } from "react";
import { connect } from "react-redux";
import { change_input } from "../../ActionCreators/EmployeeFormAC";

function GenderList(props) {
  // const [option, setOption] = useState("male");

  const list = [
    { id: "male", name: "male", value: "Male" },
    { id: "female", name: "female", value: "Female" },
    { id: "other", name: "other", value: "Other" }
  ];

  const handleClick = option => {
    props.dispatch(change_input("gender", option));
  };
  return (
    <>
      {list.map(gender => {
        return (
          <div key={gender.id}>
            <input
              type="radio"
              id={gender.id}
              name={gender.name}
              value={gender.value}
              checked={props.gender === gender.name}
              onChange={() => {
                handleClick(gender.name);
              }}
            />
            <label htmlFor={gender.name}>{gender.value}</label>
          </div>
        );
      })}
    </>
  );
}

function mapStateToProps(state) {
  return { gender: state.gender };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(GenderList);
