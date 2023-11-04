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
  const [coverLetter, setCoverLetter] = useState("");
  const [referenceArray, setReferenceArray] = useState([]);
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
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
        <AboutComponent setCoverLetter={setCoverLetter}></AboutComponent>
        <ReferenceComponent
          setReferenceArray={setReferenceArray}
        ></ReferenceComponent>
        <ImageComponent image={image} setImage={setImage}></ImageComponent>
      </aside>
      <ResultComponent
        educations={educations}
        name={name}
        email={email}
        phone={phone}
        address={address}
        expertiseArray={expertiseArray}
        languagesArray={languagesArray}
        coverLetter={coverLetter}
        referenceArray={referenceArray}
        image={image}
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

  function addEducation() {
    if (!educationHeading) return;

    setEducations((curr) => [...curr, { educationHeading: educationHeading }]);

    setEducationheading("");
  }

  return (
    <div className="form-floating">
      <input
        type="text"
        className="form-control"
        id="floatingEducation"
        placeholder="Education"
        value={educationHeading}
        onChange={(e) => {
          setEducationheading(e.target.value);
        }}
      ></input>
      <label htmlFor="floatingEducation">Education</label>

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
          maxLength="300"
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

function AboutComponent({ setCoverLetter }) {
  const [letter, setLetter] = useState("");

  function handleCoverLetter() {
    if (!letter) return;
    setCoverLetter(letter);
    setLetter("");
  }
  return (
    <div>
      <div className="mb-3">
        <h1>Cover letter</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea3"
          rows="5"
          maxLength="300"
          value={letter}
          onChange={(e) => {
            return setLetter(e.target.value);
          }}
        ></textarea>
      </div>

      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handleCoverLetter}
      >
        Add
      </button>
    </div>
  );
}

function ReferenceComponent({ setReferenceArray }) {
  const [reference, setReference] = useState("");

  function handleRef() {
    if (!reference) return;

    setReferenceArray((ref) => [...ref, reference]);
    setReference("");
  }
  return (
    <div>
      <h1>Reference</h1>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingReference"
          placeholder="Reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        ></input>
        <label htmlFor="floatingReference">Reference</label>
      </div>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handleRef}
      >
        Add
      </button>
    </div>
  );
}

function ImageComponent({ image, setImage }) {
  const [imageUrl, setImageUrl] = useState("");

  async function handleImage(url) {
    if (!url) return;
    const res = await fetch(url);

    if (res.status !== 200) {
      alert("Failed to fetch image. Check the URL and try again.");
      return;
    }

    setImage(res.url);
    setImageUrl("");
  }

  return (
    <div>
      <h1>Image URL</h1>
      {/* Name */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput-image"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        ></input>
        <label htmlFor="floatingInput-image">Image URL</label>
      </div>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => {
          handleImage(imageUrl);
        }}
      >
        Set
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
  coverLetter,
  referenceArray,
  image,
}) {
  return (
    <div className="main-result-container">
      {/* ASIDE-RESULT*/}
      <div className="aside-result-container">
        <div className="img">
          <img src={image} alt="Profile"></img>
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
          <p>{coverLetter}</p>
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
          <div className="reference-div">
            {referenceArray.map((ref) => {
              return <div key={ref}>{ref}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
