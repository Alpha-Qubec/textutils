import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let noOfWords = 0;
  if (text.match(/\s*\S+\s*/g)) {
    noOfWords = text.match(/\s*\S+\s*/g).length;
  } else {
    noOfWords = 0;
  }
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to upper case", "success");
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to upper case", "success");
  };
  const handleChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Text Cleared", "success");
  };
  //To copy
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Removed Spaces", "success");
  };
  return (
    <>
      <div
        className="container mx-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Convert to Upper case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Spaces
        </button>
      </div>
      <div
        className="container my-3 mx-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your summary is here</h2>
        <p>
          {noOfWords} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).length} Minutes required to read</p>
        <h3> Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something here..!!"}</p>
      </div>
    </>
  );
}
