
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({sectionsData}) => {
  return (
    <div className="directory-menu">
      {sectionsData.map(
        ({ id, title, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps}/>
        ))
      }
    </div>
  );
};

export default Directory;
