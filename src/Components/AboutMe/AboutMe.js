import React from 'react';
import '../AboutMe/AboutMe.css';
const aboutme = () => {
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
        }
    }
    return (
        <div className="terminalStyle">
            <div className="terminalBorderStyle" style={style.center}> sydnee.woodhouse@ubuntu:~ </div>
            <div className="terminalBorderStyle" style={style.paddingStyle}>File  Edit  View  Search  Terminal  Help</div>
            <p className="terminalName">sydnee.woodhouse@ubuntu<span style={style.whiteFont}>:</span><span style={style.blueFont}>~</span><span style={style.whiteFont}>$ About Me</span><span id="cursor">_</span></p>
            <div style={style.paddingStyle}>
                <h2>Hello, my name is</h2>
                <h1 style={style.greenFont}>Sydnee Woodhouse</h1>
                <h2>I'm a software engineer based in Philadelphia, PA. I enjoy developing full scale applications. </h2>
                <p> Every since I was young, I have always has an interest in technology. 
                    With the passion I have in learning new things, I knew that prursuing a career in 
                    technology would be the right path</p>
                <p>When I am not working, I enjoy playing video games such as Overwatch and Persona5. I also enjoy shopping for the latest trends and traveling when I can.</p>
                <p> I primarly develop in the following: </p>
            </div>
        </div>
    )}

export default aboutme;