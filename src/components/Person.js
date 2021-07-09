import React from "react";

export default function Person(props) {
  let { name, age, skill } = props.person;
  return (
    <div>
      <h3>
        {name} {age} old and having skill {skill}
      </h3>
    </div>
  );
}
