import "./menu-item.styles.scss";

import { withRouter } from "react-router-dom";

const MenuItem = ({ name, linkUrl, history, match }) => {
  console.log(history, match);
  return (
    <div
      className={`menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className='content'>
        <h2 className='title'>{name.toUpperCase()}</h2>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
