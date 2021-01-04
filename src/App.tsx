import React from 'react'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import './App.css'
const App = () => {
  return (
    <div className="main">
      <TodoInsert />
      <TodoList />
    </div>
  )
}


export default App;