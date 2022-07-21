import React from 'react';
import InputField from './components/InputField';
import { useState } from 'react';
import './App.css';
import { Todo } from './model';
import TodoList from './components/TodoList';

// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string]

// type Person = {
//   name: string;
//   age: number;
// }

// let person: Person = {
//   name: 'shokes',
//   age: 25
// }

// const printName = function (name: string) {
//   console.log(name);
// };

// printName('oshoke');

// you can define a function

// let printName = (name: string) => void

// interface Person  {
//   name: string;
//   age: number;
// }

// type X = Person & {
//   a:string;
//   b: number;
// }

const App: React.FC = function () {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  // console.log(todos);

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default App;
