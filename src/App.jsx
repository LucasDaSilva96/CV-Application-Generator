import { useState } from "react";
import "./App.css";

export default function App() {
  const [educations, setEducations] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div>
      <ContactComponent
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        address={address}
        setAddress={setAddress}
      ></ContactComponent>
      <EducationComponent
        educations={educations}
        setEducations={setEducations}
      ></EducationComponent>
    </div>
  );
}

function ContactComponent({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
}) {
  return (
    <div>
      <h1>Kontakt</h1>
      {/* Name */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput-name"
          placeholder="För och efternamn"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label htmlFor="floatingInput-name">För och efternamn</label>
      </div>
      {/* Email */}
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingEmail"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label htmlFor="floatingEmail">Email</label>
      </div>
      {/* Phonenumber */}
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingPhone"
          placeholder="Telefonnummer"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>
        <label htmlFor="floatingPhone">Telefonnummer</label>
      </div>
      {/* Address */}
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingAddress"
          placeholder="Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></input>
        <label htmlFor="floatingAddress">Address</label>
      </div>
    </div>
  );
}

function EducationComponent({ educations, setEducations }) {
  const [isOpenInput, setIsOpenInput] = useState(false);
  return (
    <div>
      <h1>Utbildning</h1>
      <button
        type="button"
        className={`btn btn-outline-${isOpenInput ? "danger" : "primary"}`}
        onClick={() => setIsOpenInput((state) => !state)}
      >
        {isOpenInput ? "Stäng" : "Lägg till utbildning"}
      </button>

      <ul>
        {isOpenInput && <Education setEducations={setEducations}></Education>}
      </ul>
    </div>
  );
}

function Education({ setEducations }) {
  const [educationHeading, setEducationheading] = useState("");
  const [educationInfo, setEducationInfo] = useState("");

  function addEducation() {
    setEducations((curr) => [
      ...curr,
      { educationHeading: educationHeading, educationInfo: educationInfo },
    ]);
  }

  return (
    <li className="form-floating">
      <input
        type="text"
        className="form-control"
        id="floatingEducation"
        placeholder="Ex: 2023 - 2025 Computer Science-Bachelor, Havard"
        value={educationHeading}
        onChange={(e) => {
          setEducationheading(e.target.value);
        }}
      ></input>
      <label htmlFor="floatingEducation">
        Ex: 2023 - 2025 Computer Science-Bachelor, Havard
      </label>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Beskrivning
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          value={educationInfo}
          onChange={(e) => {
            setEducationInfo(e.target.value);
          }}
        ></textarea>
      </div>

      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => {
          addEducation();
        }}
      >
        Lägg till
      </button>
    </li>
  );
}
