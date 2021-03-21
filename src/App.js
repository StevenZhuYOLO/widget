import React, { useState } from "react";
import Accordion from "./components/accordion";
import WikiSearch from "./components/wikiSearch";
import Dropdown from "./components/dropdown";
import Translate from "./components/translate";
import Route from "./components/route";
import Header from "./components/header";

const itemsArray = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework.",
  },
  {
    title: "Why use React",
    content: "React is a favorite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

const dropDownOptions = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The Shadeof Blue",
    value: "blue",
  }
];


// const showAccordion = () => {
//   if(window.location.pathname === '/') {
//     return <Accordion itemsArray={itemsArray} />;
//   };
// };
// const showWikiSearch = () => {
//   if (window.location.pathname === "/wiki") {
//     return <WikiSearch />;
//   }
// };
// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") {
//     return <Dropdown dropDownOptions={dropDownOptions} />;
//   }
// };
// const showTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };


const App = () => {
  const [selectedColor, setselectedColor] = useState(dropDownOptions[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion itemsArray={itemsArray} />
      </Route>
      <Route path="/wiki">
        <WikiSearch />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          dropDownOptions={dropDownOptions}
          label="Select a Color"
          selected={selectedColor}
          onSelect={setselectedColor}
        />
      </Route>
    </div>
  );
};

export default App;
