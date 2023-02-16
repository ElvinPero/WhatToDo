
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from "./mycomp/Todos.js";
import Footer from "./mycomp/Footer.js";
import Header from "./mycomp/Header.js";
import AddTodo from "./mycomp/AddTodo.js";
import About from "./mycomp/About.js";
import React, { useState } from 'react';
import { useEffect } from 'react';

import './App.css';


function App() {
  let initTodo;
  if (localStorage.getItem("todos" === null)) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log('del', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // setTodos(todos.filter((e) => {
    //   return e != todo;
    // }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,

    }
    setTodos([...todos, myTodo]);
    console.log(title, desc, sno);


  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);
  return (
    <>

      <Header title=" My List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />


      <Footer />

    </>
  );
}

export default App;
