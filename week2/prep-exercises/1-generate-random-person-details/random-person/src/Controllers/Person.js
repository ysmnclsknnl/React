import React from "react";

const Person = ({ person }) => {
  const { name, lastName, email, phoneNumber } = person;
  return (
    <>
      <li>Name: {name}</li>
      <li>Surname: {lastName}</li>
      <li>E-mail: {email}</li>
      <li>Phone: {phoneNumber}</li>
    </>
  );
};

export default Person;
