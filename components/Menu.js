import classes from './Menu.module.css';

const Menu = () => {
  return (
    <>
      <nav className={classes.menu}>
        <ul>
          <li>Nearest rides</li>
          <li>Upcomming rides (4)</li>
          <li>Past rides (2)</li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
