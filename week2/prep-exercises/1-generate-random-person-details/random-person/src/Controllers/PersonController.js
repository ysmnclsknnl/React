import React from "react";
import { useState, useEffect } from "react";
import Person from "./Person";
const API_URL = "https://www.randomuser.me/api?results=";

const PersonController = () => {
  const [person, setPerson] = useState(null);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPerson();
    getPeople(10);
  }, []);

  const fetchPeople = async (numberOfPeople) => {
    const res = await fetch(`${API_URL}${numberOfPeople}`);
    const { results } = await res.json();
    const newPeople = results.map((result) => {
      return {
        name: result.name.first,
        lastName: result.name.last,
        email: result.email,
        phoneNumber: result.phone,
      };
    });
    return newPeople;
  };

  //To Get One Person and Set Person State . Instead of This Function I could only use getPeople.
  const getPerson = async () => {
    const newPerson = await fetchPeople(1);
    setPerson(...newPerson);
  };

  //To Get More Than One Person and Set People State
  const getPeople = async (numberOfPeople) => {
    const newPeople = await fetchPeople(numberOfPeople);
    setPeople(newPeople);
  };

  return (
    <>
      <button
        onClick={(e) => {
          getPerson();

          //Lets have a little fun get random number of random people!!
          getPeople(Math.ceil(Math.random() * 20));
        }}
      >
        Get Random Person
      </button>

      <ul>{person && <Person person={person} />}</ul>
      <div>
        {people.length > 0 &&
          people.map((item, index) => (
            <ul key={index}>
              <Person person={item} />
            </ul>
          ))}
      </div>
    </>
  );
};

export default PersonController;
