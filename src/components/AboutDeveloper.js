import developerImg from '../images/devImage.jpg'
function AboutDeveloper(props) {
    

   
    // creating function to open Image in new tab
    let openInNewTab = () => {
        console.log('Clicking');
        window.open(developerImg, '_blank', 'noreferrer');

    }
    return (
        <div className="container my-3" style={props.themeColor==='dark'?{backgroundColor:'#182028',color:'white'}:{color:'black',backgroundColor:'white'}} >
            <h1 >About-Us</h1>
            <div className="card" style={props.themeColor==='dark'?{backgroundColor:'#182028',color:'white'}:{color:'black',backgroundColor:'white'}} >
                <img src={developerImg} onClick={openInNewTab} className="card-img-top" alt="Developer " style={{ width: '200px', cursor: 'pointer' }} />
                <div className="card-body" >
                    <h5 className="card-title">{props.developerName}</h5>
                    <p className="card-text">I Develop this web-app just for fun and it is also usefull. Because it is use to modified your text characteristics like to change cases of text or counting the words and letters and much more things like that'</p>
                </div>
            </div>
        </div>
    )
}
export default AboutDeveloper;