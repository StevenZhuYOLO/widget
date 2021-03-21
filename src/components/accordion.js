import React, { useState } from "react";

const Accordion = ({ itemsArray }) => {
  const [selectedIndex, selectIndex] = useState(null);
  const onTitleClicked = (idx) => {
    selectIndex(idx);
  };

  const renderItems = itemsArray.map((item, idx) => {
    const active = idx === selectedIndex && "active";
    return (
      <React.Fragment key={idx}>
        <div className={`title ${active}`} onClick={() => onTitleClicked(idx)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderItems}
    </div>
  );
};

export default Accordion;
