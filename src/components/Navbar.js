import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {

  return (

    <nav className={`navbar navbar-expand-lg bg-${props.themeColor} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={props.themeColor === 'dark' ? { color: 'white' } : { color: 'black' }}>


          {props.title}
        </Link>
        <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'><Link to='/about' className='nav-link'style={props.themeColor === 'dark' ? { color: 'white' } : { color: 'black' }} >About-Us</Link></li>
          </ul>
      </div>
      </div>
     

      <div className="form-check form-switch mx-3" >
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.anyFunction} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.themeColor === 'dark' ? { color: 'white' } : { color: 'black' }}>{props.themeLabel}</label>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  title: 'You forget to put title props'
}

export default Navbar;

