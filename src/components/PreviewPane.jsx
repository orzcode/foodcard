import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/PreviewPane.css";

function PreviewPane() {
  const [count, setCount] = useState(0);

  const todos = [
    { task: "mow the yard", id: 1 },
    { task: "Work on Odin Projects", id: 2 },
    { task: "feed the cat", id: 3 },
  ];

  return (
    <div className="PreviewPane">
      <ul>
        {todos.map((todo) => (
          // here we are using the already generated id as the key.
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default PreviewPane;
