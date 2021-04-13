import React from 'react';

const Terminal = (props) => {
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
                <p className="terminalName">sydnee.woodhouse@ubuntu<span style={style.whiteFont}>:</span><span style={style.blueFont}>~</span><span style={style.whiteFont}>$ {props.pageName}</span><span id="cursor">_</span></p>
            <div style={style.paddingStyle}>{props.text}</div>
            </div>
        )
    }


export default Terminal
