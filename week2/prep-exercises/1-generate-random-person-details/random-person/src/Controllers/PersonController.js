import React from "react";
import { useState, useEffect } from "react";
import Person from "./Person";
const API_URL = "https://www.randomuser.me/api?results=1";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    console.log("rendered use effect");
    getPerson();
  }, []);

  const getPerson = async () => {
    const res = await fetch(API_URL);
    const { results } = await res.json();
    const newPerson = results.map((result) => {
      return {
        name: result.name.first,
        surname: result.name.last,
        email: result.email,
      };
    });
    setPerson(...newPerson);

    console.log("statechanged");
  };

  if (!person) {
    return;
  }
  return (
    <ul>
      <Person person={person} />
    </ul>
  );
};

export default PersonController;
