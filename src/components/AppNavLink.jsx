import { Link, NavLink } from 'react-router-dom';

const AppNavLink = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="page1">Page1</NavLink>
        </li>
        <li>
          <NavLink to="page2">Page2</NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to="page2/page2.1">Page2.1</NavLink>
              </li>
              <li>
                <NavLink to="/page2/page2.2">Page2.2</NavLink>
              </li>
            </ul>
          </nav>
        </li>
        <li>
          <Link to="page3">Page3</Link>
          <ul>
            <li>
              <NavLink to="page3.1">Page3.1</NavLink>
            </li>
            <li>
              <NavLink to="/page3/page3.2/12345">Page3.2</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <Link to="page4">Page4</Link>
        </li>
        <li>
          <Link to="page434">Error page</Link>
        </li>
      </ul>
    </nav>
  );
};
export default AppNavLink;
