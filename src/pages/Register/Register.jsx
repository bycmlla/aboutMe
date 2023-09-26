import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./Register.css";
// import Placeblack from '../../assets/place-black.png'

const Register = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/paises")
      .then((response) => response.json())
      .then((data) => {
        const options = data.map((country) => {
          return {
            value: country.id,
            label: country.nome,
          };
        });
        setCountries(options);
      });
  }, []);

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmite = (event) => {
    event.preventDefault();
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "",
      border: "0.5px solid rgba(202, 196, 196, 0.502)",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "black",
      color: "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "white" : "black",
      color: state.isSelected ? "black" : "white",
      ":hover": {
        ...provided[":hover"],
        backgroundColor: state.isSelected ? "white" : "gray",
        color: state.isSelected ? "black" : "white",
      },
    }),
  };
  return (
    <div className="body-register">
      <div className="div-register">
        <form onSubmit={handleSubmite} className="form-register">
          <h1>Register</h1>
          <div>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Type your name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <span>Phone</span>
              <input
                type="text"
                name="c-phone"
                placeholder="Type your phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label>
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                placeholder="Type your e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Country</span>
              <Select
                options={countries}
                id="select"
                placeholder="Select your country"
                styles={customStyles}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Type your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">
              <a href="/login">done</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
