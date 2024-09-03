import React, { useState } from "react";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import List from "./components/List";
export default function App() {
  const ondel = function (todo) {
    return setlist(
      list.filter((e) => {
        return e != todo;
      })
    );
  };
  const Addjob = function (title, desc) {
    console.log(title, desc);
    const newtodo = {
      sno: list.length + 1,
      title: title,
      desc: desc,
    };
    console.log(newtodo);
    return setlist([...list , newtodo]);
  };
  const [list, setlist] = useState([
    {
      sno: 1,
      title: "WakeUp",
      desc: "wake up early",
    },
    {
      sno: 2,
      title: "Gym",
      desc: "Go to gym",
    },
    {
      sno: 3,
      title: "Job",
      desc: "do your job",
    },
  ]);
  // console.log(list);
  return (
    <div>
      <TopNav style={{ position: "absolute" }} />
      <List list={list} ondel={ondel} Addjob={Addjob} />
      <Footer />
    </div>
  );
}
