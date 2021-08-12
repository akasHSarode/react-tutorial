import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  constructor(props) {
    // All React component classes that have a constructor should start with a super(props) call.
    super(props);

    // React components can have state by setting this.state in their constructors.
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button 
        className="square"

        // vanilla js syntax, anonymous function
        // onClick={function() { console.log('click') }}

        // ES6 arrow function syntax
        // onClick={() => { console.log('click') }}

        // MISTAKE: forgetting to pass a function () => {}
        // would evaluate whatever expression is inside {} right away,
        // logging 'click' whenever component renders
        // onClick={console.log('click')}

        // update state to trigger re-render of the component
        onClick={() => this.setState({ value: 'X' })}
      >
        {/* access index passed as value prop */}
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    // pass i as value prop to square
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
