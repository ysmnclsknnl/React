import React from "react";

const Person = ({ person }) => {
  const { name, surname, email } = person;
  return (
    <>
      <li>{name}</li>
      <li>{surname}</li>
      <li>{email}</li>
    </>
  );
};

export default Person;
