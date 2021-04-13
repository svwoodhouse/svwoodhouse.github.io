import React from 'react';
import {Card, CardGroup, Button} from 'react-bootstrap'
import '../Projects/Projects.css';
import tictactoe from '../../assets/tictactoe.png';
import overwatch from '../../assets/overwatch.png';
import diamond from '../../assets/diamond.jpg'; 

const projects = () => {
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
        cardPadding : {
            'paddingLeft': '15px',
            'paddingRight': '15px',
            'paddingBottom': '15px',
            'color': 'black',
        },
        cardStyle : {
            'padding': '15px',
        },
        cardImg : {
          'height': '300px'
        }
    }
    return (
        <div className="terminalStyle">
            <div className="terminalBorderStyle" style={style.center}> sydnee.woodhouse@ubuntu:~ </div>
            <div className="terminalBorderStyle" style={style.paddingStyle}>File  Edit  View  Search  Terminal  Help</div>
            <p className="terminalName">sydnee.woodhouse@ubuntu<span style={style.whiteFont}>:</span><span style={style.blueFont}>~</span><span style={style.whiteFont}>$ Projects</span><span id="cursor">_</span></p>
            <CardGroup style={style.cardPadding}>
                <Card style={{ width: '18rem', margin:'15px' }}>
                    <Card.Img style={style.cardImg} variant="top" src={tictactoe} />
                    <Card.Body>
                        <Card.Title>Tic Tac Toe with Minimax Algorithm</Card.Title>
                        <Card.Text style={{color: 'black'}}>
                        This Tic Tac Toe application is created in Java using the NetBeans IDE and Java Swing Framework. 
                        With this application, you can play against a local friend, against AI or a friend across the globe!
                        </Card.Text>
                        <Button variant="primary" onClick={() => window.open('https://github.com/svwoodhouse/TicTacToe/')}>Github</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Implemented using: Java</small>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '18rem', margin:'15px' }}> 
                  <Card.Img  style={style.cardImg} variant="top" src={overwatch} />
                  <Card.Body>
                    <Card.Title>Overwatch Statistics Comparison Application</Card.Title>
                    <Card.Text>
                      This application extracts data of the players of the game Overwatch and compares the statistics between them.
                    </Card.Text>
                    <Button variant="primary" onClick={() => window.open('https://github.com/svwoodhouse/OverwatchMetricsApplication')}>Github</Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Implemented using: Python</small>
                  </Card.Footer>
                </Card>
                <Card style={{ width: '18rem', margin:'15px' }}>
                  <Card.Img  style={style.cardImg} variant="top" src={diamond}  />
                  <Card.Body>
                    <Card.Title>Project Diamond</Card.Title>
                    <Card.Text>
                    Project Diamond is essentially a loop that never ends in which each component sends data or a message to another component. 
                    The component receives the data, converts it to another format, then sends it to the next component.
                    </Card.Text>
                    <Button variant="primary" onClick={() => window.open('https://github.com/svwoodhouse/Project-Diamond')}>Github</Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Implemented using: Python</small>
                  </Card.Footer>
                </Card>
              </CardGroup>
        </div>
    )

}

export default projects;