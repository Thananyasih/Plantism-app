import React from "react";
import data from "./ListData.json";

const List = (props) => {
  const filteredData = data.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <div>
      {filteredData.map((item) => (
        <a key={item.id} href={item.link} style={{ display: "flex" }}>
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default List;
