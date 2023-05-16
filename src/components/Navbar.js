import PropTypes from 'prop-types'

function Navbar(props){
  
return(
    
<nav className={`navbar navbar-expand-lg bg-${props.themeColor} `}>
<div className="container-fluid">
  <a className="navbar-brand" href="/" style={props.themeColor==='dark'?{color:'white'}:{color:'black'}}>
 
    {/* <img src="./images/textmodifier.png" alt="Darks Text Modifier Application logo" width="30" height="24" className="d-inline-block align-text-top"/> */}
    {props.title}
  </a>
</div>

      <div className="form-check form-switch mx-3" >
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.anyFunction}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"style={props.themeColor==='dark'?{color:'white'}:{color:'black'}}>{props.themeLabel}</label>
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

