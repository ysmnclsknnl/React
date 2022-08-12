import React from "react";

const Person = ({ person }) => {
  const { name, lastName, email } = person;
  return (
    <>
      <li>Name: {name}</li>
      <li>Surname: {lastName}</li>
      <li>E-mail: {email}</li>
    </>
  );
};

export default Person;
