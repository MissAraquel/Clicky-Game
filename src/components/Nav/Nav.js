import React from "react";
import "./Nav.css";

const Nav = props => (

    <div className="jumbotron">
        <nav>
            <ul>
                <div>
                    <h1>{props.title}</h1>
                </div>
                <div>
                    <strong></strong> {props.rightWrong}
                </div>
                <div className="score">
                    Score:{props.score}
                </div>
                <div>
                    Best Score:{props.bestScore}
                </div>

            </ul>
        </nav>
    </div>

);

export default Nav;