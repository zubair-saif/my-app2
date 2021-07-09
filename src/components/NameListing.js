import React from "react";
import Person from "./Person";

function NameListing() {
//   let arrayOFName = ["Juniad", "Khazir", "Ali"];
  let person = [
    {
      name: "junaid",
      age: "25",
      skill: "angular",
    },
    {
      name: "tabrak",
      age: "43",
      skill: "react",
    },
    {
      name: "ali",
      age: "43",
      skill: "Vue",
    },
  ];
  let personList = person.map((o) => <Person person={o}/>);
  return <div>{personList}</div>;
}

export default NameListing;
