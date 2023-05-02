import PropTypes from 'prop-types'

function Navbar(props){
return(
    
<nav className="p-3 text-bg-dark ">
<div className="container-fluid">
  <a className="navbar-brand" href="/">
    {/* <img src="./images/textmodifier.png" alt="Darks Text Modifier Application logo" width="30" height="24" className="d-inline-block align-text-top"/> */}
    {props.title}
  </a>
</div>
</nav>
)
}


Navbar.propTypes={
    title:PropTypes.string
};
Navbar.propTypes={
    title:PropTypes.string.isRequired
};
Navbar.defaultProps ={
    title:'You forget to put title props'
}

export default Navbar;

