import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-one px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-one px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-one px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-one px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-one px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-one px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("rebeccapurple")}
            className="outline-one px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "rebeccapurple" }}
          >
            Rebeccapurple
          </button>
          <button
            onClick={() => setColor("tan")}
            className="outline-one px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: " tan" }}
          >
            Tan
          </button>
          <button
            onClick={() => setColor("aqua")}
            className="outline-one px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "aqua" }}
          >
            Aqua
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-one px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("lime")}
            className="outline-one px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lime" }}
          >
            Lime
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
