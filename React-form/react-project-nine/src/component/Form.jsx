import React from "react";
import { useState } from "react";
import './Form.css'

function Form(){

const [html, setHtml] = useState(false);
const [css, setCss] = useState(false);
const [javascript, setJavascript] = useState(false);

const [gender, setGender] = useState();

    return(
        <div>
            <h1 className="heading">Student Registration Form</h1>
            <form>
                First Name: <input
                    type="text"
                    placeholder="Enter your name"
                    className="firstName"
                    required
                />
                <br/>

                Last Name: <input
                type='text'
                placeholder="Enter your surname"
                className="lastName"
                required
                />
                <br/>
                Mobile no.:<input 
                type='tel'
                placeholder="Enter your phone no."
                required
                />
                <br/>
                 Email:<input
                type='email'
                placeholder="Enter your email id"
                required
                />
                <br/>

                <p>Gender: {gender}</p>

                <input
                type='radio'
                name='gender'
                value='Male'
                onChange={(e) => {
                   if(e.target.checked){
                    setGender(e.target.value);
                   }
                }}
                />Male
                <br>
                </br>
                <input
                type='radio'
                name='gender'
                value='Female'
                onChange={(e)=>{
                    if(e.target.checked){
                        setGender(e.target.value);
                    }
                }}
                />Female
                <br/>
                <input type='radio'
                name='gender'
                value='Other'
                onChange={(e) =>{
                    if(e.target.checked){
                        setGender(e.target.value);
                    }
                }}
                />Others
                <br/>
                Qualifications: 
                <select name="qualifications" id="qualifications" required>
                <option value="opt">Select</option>
                <option value="opt1">10th Passed</option>
                <option value="opt2">12th Passed</option>
                <option value="opt3">1st year</option>
                <option value="opt4">2nd year</option>
                <option value="opt5">3rd year</option>
                <option value="opt6">Graduate</option>
                </select>
                <br/>

                <h3>Skills :</h3>
                <input
                type='checkbox'
                value="html"
                checked = {html}
                onChange={(e)=>{
                    setHtml(e.target.checked);
                    console.log(e.target.value);
                }}
                /> HTML

                <br/>
                <input
                type='checkbox'
                value="css"
                checked ={css}
                onChange={(e) =>{
                    setCss(e.target.checked);
                    console.log(e.target.value);
                }}
                />Css

                <br/>
                <input type='checkbox'
                value="javascript"
                checked = {javascript}
                onChange={(e) =>{
                    setJavascript(e.target.checked);
                    console.log(e.target.value);
                }}
                />JavaScript

                <br/>
               
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default Form;