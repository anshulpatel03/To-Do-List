import React from 'react'
import Button from 'react-bootstrap/Button';
export default function Item(props) {
    
  return (
    <div>
        <h4>{props.todo.title}</h4>
        <div>{props.todo.desc}</div>
        <Button variant="danger" onClick= {()=>props.ondel(props.todo)}>Delete</Button>
    </div>
  )
}
