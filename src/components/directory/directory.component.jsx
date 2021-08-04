import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import { useState } from "react";

const Directory = (props) => {
  const [sections, setSections] = useState([
    {
      name: "home",
      id: 1,
      linkUrl: "./",
    },
    {
      name: "movie search",
      id: 2,
      linkUrl: "movieSearch",
    },
    {
      name: "suggestions",
      id: 3,
      linkUrl: "suggestions",
    },
    {
      name: "your collection",
      id: 4,
      linkUrl: "yourCollection",
    },
  ]);

  return (
    <div className='directory'>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
