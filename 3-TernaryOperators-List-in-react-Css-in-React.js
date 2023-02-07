//Implementing CSS in component js file
import 'css file path'

//in component js file
className = 'name'

//in  component css file
.name{

}
//-----------------------------------
//Conditional Rendering

//normal
const age = 15

if(age>=18){
  console.log('Overage');
}
else{
  console.log('Underage');
}
//Ternary version
age>=18 ? console.log("Overage"): console.log("Underage");

//Conditional rendering in react

function App(){
  const age = 19
  const isGreen = True;

  return(
  <div className='App'>
    {age>=18 ? <h1>Overage</h1> : <h1>Underage</h1>}

    <h1 style={{color: isGreen ? "green" : "red"}}> This Has Color</h1>

    {isGreen && <button>Show button</button> }
  </div>)
}
//--------------------------------------------------------

//Working With Lists in React

//Array
function App() {
  const names = ['pedro', 'jake', 'paul', 'mike', 'dustin']

  return(
    <div className='App'>
      {names.map((name, key)=>{
        return <h1 key={key}>{name}</h1>
      })}
    </div>
  )
}
//Object
function App(){

  const users = [
    {name: 'pedro', age: 21},
    {name: 'Jake', age: 23},
    {name: 'Paul', age: 45},
  ]
}
 return(
  <div className='App'>
    {users.map((user,key)=>{
      return(
        <User name={user.name} age={user.age}></User>
      )
    })}
  </div>
 )

 const User = (props) =>{
  return(
    <div>
      {props.name} {props.age}
    </div>
  )
 }

//Exercise : List of planet given , looping them and show them if true  with conditional rendering
function App(){

  const planets = [
    {name: 'Mars', isGasPlanet: false},
    {name: 'Earth', isGasPlanet: false},
    {name: 'Jupiter', isGasPlanet: true},
    {name: 'Venus', isGasPlanet: false},
    {name: 'Neptune', isGasPlanet: true},
    {name: 'Uranus', isGasPlanet: true}
  ]
  return(
    <div className="App">
      {planets.map((planet, key)=>{
        planet.isGasPlanet && <Planet name={planet.name}></Planet>
      })}
    </div>
  )
}

const Planet = (props) =>{
  return(
    <div>
      {props.name}
    </div>
  )
}

