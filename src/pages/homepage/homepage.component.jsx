import "./homepage.styles.scss";
import  Directory  from "../../components/directory/directory.component";
import { SECTIONS_DATA } from "../../data/directory.data";
import { useState, useEffect } from "react";

const HomePage = () => { 
  const [sections, setSection] = useState([]);
  useEffect(() => {
    setSection(SECTIONS_DATA);
  }, []);
  return (
    <div className="homepage">
      <Directory sectionsData={sections}/>
    </div>
  );
};
export default HomePage;
