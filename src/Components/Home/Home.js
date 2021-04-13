import React from 'react';
import picOfMe from '../../assets/me.jpg'; 

const Home = () => {
    const style = {
        whiteFont : {
            'color': 'white'
        },
        blueFont : {
            'color': 'lightblue'
        },
        greenFont : {
            'color':'rgb(136, 255, 112)',
            'paddingLeft': '30px'
        },
        center : {
            'textAlign': 'center'
        },
        right : {
            'textAlign': 'right',
            'verticalAlign': 'right'
        },
        paddingStyle : {
            'paddingLeft': '15px'
        },
        imgStyle : {
            'height': '50vh'
        },
        spanStyle: {
            'paddingLeft': '50px'
        }
    }
    return (
        <div className="terminalStyle">
        <div className="terminalBorderStyle" style={style.center}> sydnee.woodhouse@ubuntu:~ </div>
        <div className="terminalBorderStyle" style={style.paddingStyle}>File  Edit  View  Search  Terminal  Help</div>
        <p className="terminalName">sydnee.woodhouse@ubuntu<span style={style.whiteFont}>:</span><span style={style.blueFont}>~</span><span style={style.whiteFont}>$ Home</span><span id="cursor">_</span></p>
        <div style={style.paddingStyle}>
            <h1 style={style.greenFont}>Hello and Welcome To My Website</h1>
            <img style={style.imgStyle} src={picOfMe}/>
            <p>**Please Note this website is being worked on daily </p>
        </div>
    </div>
    )
}

export default Home;