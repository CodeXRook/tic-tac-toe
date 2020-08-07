import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { render } from '@testing-library/react';

class Square extends React.Component {
    render(){
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }
}

render( {
    const status = 'Next player: ';

    return(
        <div>
            <div className="status">{status}</div>
        </div>
    )
}