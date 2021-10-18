import './App.css';
import Title from './components/Title';
import Button from './components/Button';

function App() {

// before the return we can write our functions
  const clicked = () => {
    console.log("clicked")
  }

  const students = [
    { name: "Johann", age: 29, hasPets: false},
    { name: "Juan", age: 34, hasPets: true},
    { name: "Martina", age: 78, hasPets: false},
    { name: "Ekaterina", age: 2, hasPets: true}
  ]

  return (
    <div className="App">
      {/* <h1 >Hello, React!</h1> */}
      <Title text="Title from props"/>
      <Title text="Another title"/>

      <Button/>
      {/* inline styling */}
      <p style={{color: "blue"}}>My first paragraph</p>
      {/* we can either call the function on the button */}
      {/* o define it on the button directly */}
      <button onClick={clicked}>Click Me</button>
      {/* one way of mapping */}
      {students.map(student => <h3>{student.name}</h3>)}

     {/* inline styling */}
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
      {students.map(student => {
        console.log("student", student)
        return(
          <div >
            <h2>{student.name}</h2>
            {/* converting booleans to values we can display*/}
            <p>{student.hasPets ? "has pets" : "no pets"}</p>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;