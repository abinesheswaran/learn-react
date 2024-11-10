import { NavLink } from 'react-router-dom';

const AppNavLink = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/page1">Page1</NavLink>
        </li>
        <li>
          <NavLink to="/page2">Page2</NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to="/page2/page2.1">Page2.1</NavLink>
              </li>
              <li>
                <NavLink to="/page2/page2.2">Page2.2</NavLink>
              </li>
            </ul>
          </nav>
        </li>
      </ul>
    </nav>
  );
};
export default AppNavLink;
