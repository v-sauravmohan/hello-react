import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const lakeList = [
  { id: "lake1", name: "Vembanad Cruise", organizedBy: "Untitled Emotions" },
  {
    id: "desert1",
    name: "Jaisalmeer Dune Smashing",
    organizedBy: "Haris Amir Ali",
  },
  {
    id: "himalaya1",
    name: "Srinagar Ka Taza Swas",
    organizedBy: "Sujith Bhakthan And Bros",
  },
];

function LakesChapter({ lakes }) {
  return (
    <div>
      <span>
        {lakes.map((lake) => (
          <div key={lake.id}>
            <h1>{lake.name}</h1>
            <p>Organized By {lake.organizedBy} </p>
          </div>
        ))}
      </span>
    </div>
  );
}

function StateChapter() {
  const [year, setYear] = useState(2020);

  return (
    <>
      <div key="yearSelecter">
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>+</button>
        <button onClick={() => setYear(year - 1)}>-</button>
      </div>
    </>
  );
}

function Checkbox() {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    console.log(`checked: ${checked.toString()}`);
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "Checked" : "Not Checked"}
    </>
  );
}

function MulltipleSetStates() {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  useEffect(() => {
    console.log(`Name ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`Phonenumber ${phonenumber}`);
  }, [phonenumber]);

  return (
    <>
      <span>
        <label>Name: </label>
        <input
          type="text"
          key="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </span>
      <br />
      <span>
        <label>Phonenumber: </label>
        <input
          type="text"
          key="PhoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </span>
    </>
  );
}

function GitHubUser({ userName }) {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
    .then((res) => res.json())
    .then(setData)
    .catch(console.error);
  },[userName]);

  return(
    <>
      <h1>Fetch From API using useEffect</h1>
      <div>
        <h1>{data?.name}</h1>
        <img src={data?.avatar_url} alt="User Avatar" width='100'/>
      </div>
    </>
  )
}

function CheckboxWithReducer() {

  const [checked, toggleChecked] = useReducer(checked => !checked, false);

  return (
    <>
      <h1>Checkbox using Reducer</h1>
      <input
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={toggleChecked}
      />
      {checked ? "Checked" : "Not Checked"}
    </>
  );
}

function App() {
  return (
    <>
      <CheckboxWithReducer ></CheckboxWithReducer>
      <hr class="solid" />
      <GitHubUser userName="v-sauravmohan" ></GitHubUser>
      <hr class="solid" />
      <MulltipleSetStates></MulltipleSetStates>
      <hr class="solid" />
      <br />
      <Checkbox></Checkbox>
      <hr class="solid" />
      <StateChapter></StateChapter>
      <hr class="solid" />
      <LakesChapter lakes={lakeList}></LakesChapter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
