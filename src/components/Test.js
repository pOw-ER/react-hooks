import React, { Component } from 'react';
import NewsCard from './NewsCard';


class Test extends Component {
  state = {
    count: 0,
    todos: [],
  }

  // increment = () => {
  //   this.setState({ count: this.state.count + 1 })
  // }
  getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ todos: data })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        {/* <button onClick={() => this.increment()}>increment</button> */}
        <button onClick={this.getTodos}>Todos</button>

        {this.state.todos === [] ? '' : this.state.todos.map((todo, i) => {
          return <NewsCard
            key={i}
            title={todo.title}
            user_id={todo.userId}
            completed={todo.completed}
          />
        })}

      </div>

    );
  }
}

export default Test;
