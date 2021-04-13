import React from 'react';
import '../Contact/Contact.css';
import Terminal from '../Terminal/Terminal'

const contact = () => {
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
            <div className="terminalBorderStyle">  File  Edit  View  Search  Terminal  Help</div>
            <p className="terminalName">sydnee.woodhouse@ubuntu<span style={style.whiteFont}>:</span><span style={style.blueFont}>~</span><span style={style.whiteFont}>$ Contact Me</span><span id="cursor">_</span></p>
            <div style={style.paddingStyle}>
                <h3>I am always open to any new opportunities so please reach out whether its to ask me a question, 
                    feedback on how to improve my website or even just to say hi, my inbox is always open.</h3>
                <h3 style={style.greenFont}>Email: svwoodhouse@gmail.com</h3>
            </div>
        </div>
    )
}

export default contact;