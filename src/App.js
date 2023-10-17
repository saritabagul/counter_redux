import React from "react";
import "./styles.css";
import { increment, decrement } from "./actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  increment_count = () => {
    this.props.store.dispatch(increment());
  };

  decrement_count = () => {
    this.props.store.dispatch(decrement());
  };

  render() {
    const count = this.props.store.getState();

    return (
      <div className="App">
        <h1>Count: {count}</h1>
        <h2>
          <button onClick={this.increment_count}>+</button>
          <button onClick={this.decrement_count}>-</button>
        </h2>
      </div>
    );
  }
}

export default App;
