import "./menu-item.styles.scss";

const MenuItem = ({ name }) => {
  return (
    <div className='menu-item'>
      <div className='content'>
        <h2 className='title'>{name}</h2>
      </div>
    </div>
  );
};

export default MenuItem;
