import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  css_size,
  routeName,
  history,
  match,
}) => {
  return(<div
    className={`menu-item ${css_size != null ? css_size : ""}`}
    onClick={() => history.push(`${match.url}${(match.url[match.url.length-1]!=='/')?'/':''}${routeName}`)}
  >
    <div
      className="class-background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
)};
export default withRouter(MenuItem);
