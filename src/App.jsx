import { useState } from "react";
import React from "react";
import "./App.css";

export default function App() {
  const [educations, setEducations] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [expertiseArray, setExpertiseArray] = useState([]);
  const [language, setLanguage] = useState("");
  const [languagesArray, setLanguagesArray] = useState([]);
  return (
    <main className="container">
      <aside>
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
        <ExpertiseComponent
          setExpertiseArray={setExpertiseArray}
        ></ExpertiseComponent>
        <LanguageComponent
          language={language}
          setLanguage={setLanguage}
          setLanguagesArray={setLanguagesArray}
        ></LanguageComponent>
      </aside>
      <ResultComponent
        educations={educations}
        name={name}
        email={email}
        phone={phone}
        address={address}
        expertiseArray={expertiseArray}
        languagesArray={languagesArray}
      ></ResultComponent>
    </main>
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
      <h1>Contact</h1>
      {/* Name */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput-name"
          placeholder="Full name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label htmlFor="floatingInput-name">Full name</label>
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
          placeholder="Phone number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>
        <label htmlFor="floatingPhone">Phone number</label>
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

function EducationComponent({ setEducations }) {
  const [isOpenInput, setIsOpenInput] = useState(false);
  return (
    <div>
      <h1>Education</h1>
      <button
        type="button"
        className={`btn btn-outline-${isOpenInput ? "danger" : "primary"}`}
        onClick={() => setIsOpenInput((state) => !state)}
      >
        {isOpenInput ? "Close" : "Add education"}
      </button>

      <div>
        {isOpenInput && <Education setEducations={setEducations}></Education>}
      </div>
    </div>
  );
}

function Education({ setEducations }) {
  const [educationHeading, setEducationheading] = useState("");
  const [educationInfo, setEducationInfo] = useState("");

  function addEducation() {
    if (!educationHeading) return;

    setEducations((curr) => [
      ...curr,
      { educationHeading: educationHeading, educationInfo: educationInfo },
    ]);

    setEducationheading("");
    setEducationInfo("");
  }

  return (
    <div className="form-floating">
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
          About
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
        Add
      </button>
    </div>
  );
}

function ExpertiseComponent({ setExpertiseArray }) {
  const [isOpenInput, setIsOpenInput] = useState(false);

  return (
    <div>
      <h1>Expertise</h1>
      <button
        type="button"
        className={`btn btn-outline-${isOpenInput ? "danger" : "primary"}`}
        onClick={() => setIsOpenInput((state) => !state)}
      >
        {isOpenInput ? "Close" : "Add expertise"}
      </button>

      {isOpenInput && (
        <Expertise setExpertiseArray={setExpertiseArray}></Expertise>
      )}
    </div>
  );
}

function Expertise({ setExpertiseArray }) {
  const [expertiseHeading, setExpertiseHeading] = useState("");
  const [expertiseInfo, setExpertiseInfo] = useState("");

  function handleExpertise() {
    if (!expertiseHeading) return;

    setExpertiseArray((arr) => [
      ...arr,
      { expertiseHeading: expertiseHeading, expertiseInfo: expertiseInfo },
    ]);
    setExpertiseHeading("");
    setExpertiseInfo("");
  }

  return (
    <React.Fragment>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingExpertise"
          placeholder="Expertise"
          value={expertiseHeading}
          onChange={(e) => {
            return setExpertiseHeading(e.target.value);
          }}
        ></input>
        <label htmlFor="floatingExpertise">Expertise</label>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea2" className="form-label">
          About
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea2"
          rows="5"
          value={expertiseInfo}
          onChange={(e) => {
            setExpertiseInfo(e.target.value);
          }}
        ></textarea>
      </div>

      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => {
          handleExpertise();
        }}
      >
        Add
      </button>
    </React.Fragment>
  );
}

function LanguageComponent({ language, setLanguage, setLanguagesArray }) {
  function handleLanguage() {
    if (!language) return;
    setLanguagesArray((arr) => [...arr, language]);

    setLanguage("");
  }
  return (
    <div>
      <h1>Language</h1>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingLanguage"
          placeholder="Language"
          value={language}
          onChange={(e) => {
            return setLanguage(e.target.value);
          }}
        ></input>
        <label htmlFor="floatingLanguage">Language</label>
      </div>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => {
          handleLanguage();
        }}
      >
        Add
      </button>
    </div>
  );
}

function ResultComponent({
  educations,
  name,
  email,
  phone,
  address,
  expertiseArray,
  languagesArray,
}) {
  return (
    <div className="main-result-container">
      {/* ASIDE-RESULT*/}
      <div className="aside-result-container">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
          ></img>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <em>Phone</em>
              <p>{phone}</p>
            </li>
            <li>
              <em>Email</em>
              <p>{email}</p>
            </li>

            <li>
              <em>Address</em>
              <p>{address}</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Education</h3>

          <ul>
            {educations.map((edu) => {
              return <li key={edu.educationHeading}>{edu.educationHeading}</li>;
            })}
          </ul>
        </div>

        <div>
          <h3>Expertise</h3>
          <ul>
            {expertiseArray.map((ex) => {
              return <li key={ex.expertiseHeading}>{ex.expertiseHeading}</li>;
            })}
          </ul>
        </div>

        <div>
          <h3>Language</h3>

          <ul>
            {languagesArray.map((lang) => {
              return <li key={lang}>{lang}</li>;
            })}
          </ul>
        </div>
      </div>
      {/* Main-Result*/}
      <div className="result-container">
        <div className="result-head-box">
          <h1>{name}</h1>
          <p>Some text about the person</p>
        </div>
        <div className="result-expertise-box">
          <h2>Expertise</h2>
          <div className="expertise-box">
            <ul className="expertise-result-ul">
              {expertiseArray.map((value) => {
                return (
                  <li key={value.expertiseHeading}>
                    <h3>{value.expertiseHeading}</h3>
                    <p>{value.expertiseInfo}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="reference-box">
          <h2>Reference</h2>
          <ul>{/* TDOD */}</ul>
        </div>
      </div>
    </div>
  );
}
