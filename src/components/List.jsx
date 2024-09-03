import React, { useState } from "react";
import Item from "./Item";
export default function List(props) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const onsub = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("ADD TITLE AND DESC");
    }
    props.Addjob(title, desc);
  };

  let listitem = props.list.map((e) => {
    <li key={e.sno}>
      <Item todo={e}></Item>
    </li>;
  });
  // console.log(listitem);
  return (
    <div>
      <h2 style={{ margin: "0 2rem", color: "black" }}>AddToToDoList</h2>
      <form style={{ margin: "3rem" }} onSubmit={onsub}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Todo Title</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Task Desc</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter Desc"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h2 style={{ margin: "0 2rem", color: "black" }}>ToDoList</h2>
      {props.list.length === 0 ? (
        <div style={{ margin: "0 2rem", color: "black" }}>NO TODOS</div>
      ) : (
        props.list.map((e) => {
          return (
            <div key={e.sno} style={{ margin: "2rem" }}>
              <Item todo={e} ondel={props.ondel}></Item>
            </div>
          );
        })
      )}
    </div>
  );
}
