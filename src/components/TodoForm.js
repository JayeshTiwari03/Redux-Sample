import React, { useState } from "react";
//useState to store things in state temporarily

import { FormGroup, Form, Input, InputGroupAddon, Button } from "reactstrap";
import { v4 } from "uuid";

//Redux things
//connect used in export with 2 methods map and dispatch
import { connect } from "react-redux";
//addTodo function
import { addTodo } from "../action/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Add a todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);
    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Next todo"
          name="todo"
          id="todo"
        />
        <InputGroupAddon addonType="prepend">
          <Button color="primary" onClick={handleSubmit}>
            ADD
          </Button>
        </InputGroupAddon>
      </FormGroup>
    </Form>
  );
};

//2 methods of redux talking to state, pass info to redux

//Bring data from central state into component
//empty because not bringing anything in this app
const mapStateToProps = (state) => ({});

//Disptach takes everthing from component and dispatch to action for action to be taken/or payload to be carried
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

//connecting to redux using connect
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm); //connect used here
