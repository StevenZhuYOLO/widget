import React, { useState } from 'react';
import Dropdown from "./dropdown";
import Convert from "./convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Chinese",
    value: "zh",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "German",
    value: "de",
  }
];

const Translate = () => {
  const [language, setlanguage] = useState(options[0]);
  const [text, settext] = useState('')
  return (
    <div>
      <div className="ui form">
        <div className="field">
        <label>Enter Text</label>
          <input value={text} onChange={(e) => settext(e.target.value)} />
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelect={setlanguage}
        dropDownOptions={options}
        label={"Select a Language"}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;