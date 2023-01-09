import React, { useEffect, useState } from 'react';
import { List, Checkbox, Input, Button } from 'antd';
import classes from "./Todo.module.css"
import { setInputValue, createTodo, fetchTodos, updateTodo, deleteTodoById } from './Todo.slice'
import { useAppSelector, useAppDispatch } from '../../hooks/typedHooks';

const Todo: React.FC = () => {

  const inputValue = useAppSelector((state) => state.todo.inputValue);
  const data = useAppSelector((state) => state.todo.data);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const handleChange = (checked: boolean, todo: API.TodoItem) => {
    dispatch(updateTodo({id: todo.id, name: todo.name, done: checked}))
  }

  return (
    <div className={classes.container} aria-label='test-todo'>
      <Input
        placeholder="请输入todo"
        aria-label='create-todo'
        value={inputValue}
        onChange={(e) => dispatch(setInputValue(e.target.value))}
        onPressEnter={(e) => {
          if(!inputValue) return;
          dispatch(createTodo())
        }}
      />
      <List
        itemLayout="horizontal"
        split={false}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item className={item.done ?'done' : ''}>
            <Checkbox aria-label={`todo-checkbox-${index}`} checked={item.done} onChange={(e) => handleChange(e.target.checked, item)} />
            <span>{item.name}</span>
            <Button onClick={() => {dispatch(deleteTodoById(item.id))}} >删除</Button>
          </List.Item>
        )}
      />
    </div>
  )
};

export default Todo;
