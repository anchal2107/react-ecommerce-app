import { useState, useEffect } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { SECTIONS_DATA } from "../../data/directory.data";
const Directory = () => {
  const [sections, setSection] = useState([]);
  useEffect(() => {
    setSection(SECTIONS_DATA);
  }, []);
  return (
    <div className="directory-menu">
      {sections.map(
        ({ id, title, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps}/>
        ))
      }
    </div>
  );
};

export default Directory;
