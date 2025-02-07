import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav>
        <div className='nav-container'>
            <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/about"> About</Link>
        </div>
    </nav>
  );
}

export default Navbar;