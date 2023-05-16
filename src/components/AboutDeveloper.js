function AboutDeveloper(props) {

    let developerPictureLink = 'https://media.licdn.com/dms/image/D4D03AQEU2M0O0eGneg/profile-displayphoto-shrink_800_800/0/1671514154451?e=1688601600&v=beta&t=y0USMnNKYDQDgSBNxjVh1RvAkZ6miQ6mUL3o5hApuL8';
    // creating function to open Image in new tab
    let openInNewTab = () => {
        console.log('Clicking');
        window.open(developerPictureLink, '_blank', 'noreferrer');

    }
    return (
        <div className="container" style={props.themeColor==='dark'?{backgroundColor:'#182028',color:'white'}:{color:'black',backgroundColor:'white'}} >
            <h1 >About-Us</h1>
            <div className="card" style={props.themeColor==='dark'?{backgroundColor:'#182028',color:'white'}:{color:'black',backgroundColor:'white'}} >
                <img src={developerPictureLink} onClick={openInNewTab} className="card-img-top" alt="Developer " style={{ width: '200px', cursor: 'pointer' }} />
                <div className="card-body" >
                    <h5 className="card-title">{props.developerName}</h5>
                    <p className="card-text">I Develop this web-app just for fun and it is also usefull. Because it is use to modified your text characteristics like to change cases of text or counting the words and letters and much more things like that'</p>
                </div>
            </div>
        </div>
    )
}
export default AboutDeveloper;