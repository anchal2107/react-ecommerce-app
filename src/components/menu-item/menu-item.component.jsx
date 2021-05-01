import "./menu-item.styles.scss";
const MenuItem = ({ title, subtitle, imageUrl, css_size }) => (
  <div className={`menu-item ${(css_size!=null)? css_size: ''}`} >
   <div className='class-background-image' style={{ backgroundImage: `url(${imageUrl})` }}/>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);
export default MenuItem;
