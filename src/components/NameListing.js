import React from "react";
import Person from "./Person";

function NameListing() {
  //   let arrayOFName = ["Juniad", "Khazir", "Ali"];
  let person = [
    {
      id: 1,
      name: "junaid",
      age: "25",
      skill: "angular",
    },
    {
      id: 2,
      name: "tabrak",
      age: "43",
      skill: "react",
    },
    {
      id: 3,
      name: "ali",
      age: "43",
      skill: "Vue",
    },
  ];
  let personList = person.map((o) => <Person key={o.id} person={o} />);
  return <div>{personList}</div>;
}

export default NameListing;
