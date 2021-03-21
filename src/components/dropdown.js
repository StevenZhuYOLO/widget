import React, { useEffect, useState, useRef } from 'react';

const Dropdown = ({ dropDownOptions, selected, onSelect, label }) => {
  const [dropDownOpen, setdropDownOpen] = useState(false);
  const dropDownRef = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
        if (dropDownRef.current && dropDownRef.current.contains(event.target)) {
          return null;
        }
        setdropDownOpen(false);
      };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick)
    };
  }, [])

  const renderOptions = dropDownOptions.map((option) => {
    if(option.value === selected.value){
      return null;
    }
    return (
      <div key={option.value} className="item" onClick={() => onSelect(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={dropDownRef} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setdropDownOpen(!dropDownOpen)}
          className={`ui selection dropdown ${dropDownOpen && "visible active"}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${dropDownOpen && "visible transition"}`}>{renderOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
