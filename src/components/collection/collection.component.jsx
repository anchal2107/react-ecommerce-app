import "./collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.components";
const Collection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()} </h1>
      <div className="preview">
        {items.map((item) => (         
            <CollectionItem key={item.id}  {...item} />
       
        ))}
      </div>
    </div>
  );
};
export default Collection;

