import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Contacts</Link></li>
          <li><Link to="/history">Message History</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
