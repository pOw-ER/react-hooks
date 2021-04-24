import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';


const Test = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTodos(data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setCount(count)
  }, [count])


  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <p>{count}</p>
      {todos === [] ? '' : todos.map((todo, i) => {
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


export default Test;
