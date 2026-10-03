import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [javascript, setJavascript] = useState(false);

  const [gender, setGender] = useState();
  const [fisrtName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [qualification, setQualification] = useState("");
  const [skills, setSkills] = useState("");

  return (
    <div>
      <h1 className="heading">Student Registration Form</h1>
      <form>
        <h4>First Name: {fisrtName}</h4>
        <input
          type="text"
          placeholder="Enter First Name"
          className="fisrtName"
          value={fisrtName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br />
        <h4>Last Name: {lastName}</h4>
        <input
          type="text"
          placeholder="Enter your last Name"
          value={lastName}
          className="lastName"
          required
          onChange={(e) =>{
            setLastname(e.target.value);
          }}
        />
        <br />
        Mobile no.:
        <input type="tel" placeholder="Enter your phone no." required />
        <br />
        Email:
        <input type="email" placeholder="Enter your email id" required />
        <br />
        <p>Gender: {gender}</p>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => {
            if (e.target.checked) {
              setGender(e.target.value);
            }
          }}
        />
        Male
        <br></br>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => {
            if (e.target.checked) {
              setGender(e.target.value);
            }
          }}
        />
        Female
        <br />
        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={(e) => {
            if (e.target.checked) {
              setGender(e.target.value);
            }
          }}
        />
        Others
        <br />
        <p>Qualifications: {qualification}</p>
        <select name="qualifications" id="qualifications" required
        onChange={(e) =>{
            setQualification(e.target.value)
        }}>
          <option value="opt">Select</option>
          <option value="10th Passed">10th Passed</option>
          <option value="12th Passed">12th Passed</option>
          <option value="1st year">1st year</option>
          <option value="2nd year">2nd year</option>
          <option value="3rd year">3rd year</option>
          <option value="Graduate">Graduate</option>
        </select>
        <br />
        <h3>Skills :</h3>
        <input
          type="checkbox"
          value="html"
          checked={html}
          onChange={(e) => {
            setHtml(e.target.checked);
            console.log(e.target.value);
          }}
        />{" "}
        HTML
        <br />
        <input
          type="checkbox"
          value="css"
          checked={css}
          onChange={(e) => {
            setCss(e.target.checked);
            console.log(e.target.value);
          }}
        />
        Css
        <br />
        <input
          type="checkbox"
          value="javascript"
          checked={javascript}
          onChange={(e) => {
            setJavascript(e.target.checked);
            console.log(e.target.value);
          }}
        />
        JavaScript
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
