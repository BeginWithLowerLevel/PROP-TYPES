import React, { Component } from "react";
import PropTypes from "prop-types";

const FuncComp = (props) => {
  return (
    <>
      <h1>{props.str}</h1>
      <p>{props.age}</p>
      <p>{typeof props.strOrNumber === "number" ? "Number" : "String"}</p>
      <ul>
        {props.array.map((value) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
      <ul>
        {props.arrayObjects.map((value) => {
          return (
            <li key={value.name}>
              {value.name} : {value.marks}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default class App extends Component {
  render() {
    return (
      <div>
        <FuncComp
          str={"sahan"}
          age={23}
          strOrNumber={10}
          array={["react", "redux", "aws"]}
          arrayObjects={[
            { name: "OSSA", marks: 80 },
            { name: "OOP", marks: 78 },
            { name: "ITP", marks: 90 },
          ]}
        />
      </div>
    );
  }
}

FuncComp.propTypes = {
  str: PropTypes.string.isRequired,
  age: PropTypes.number,
  strOrNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  array: PropTypes.arrayOf(PropTypes.string),
  arrayObjects: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, marks: PropTypes.number })
  ),
};
