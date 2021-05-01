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
        ({ id, title, subtitle, imageUrl,css_size }) => (
          <MenuItem key={id} title={title.toUpperCase()} subtitle={subtitle}  imageUrl={imageUrl} css_size={css_size}/>
        ))
      }
    </div>
  );
};

export default Directory;
