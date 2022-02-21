import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div>
        <h1>Edvora</h1>
      </div>
      <nav>
        <ul>
          <li>Dhruv Singh</li>
          <img
            src='http://placehold.jp/150x150.png'
            alt='image-holder'
            className={classes.img}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
