//JSX

function app(){

  const name= "Pedro"

  return(
    <div className="app">
      <h1>{name}</h1>
    </div>)
}

//COMPONENTS

const User = () =>{

  return(
    <div>
      <h1>Pedro</h1>
      <h1>Age</h1>
      <h1>Pedro@pedro.com</h1>
    </div>
  )
}

function App(){

  return(
    <div>
      <User></User>
      <User></User>
      <User></User>
    </div>
  )
}


//PROPS

const User = (props) =>{

  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}

function App(){

  return(
    <div>
      <GetNameComponent></GetNameComponent>
      <User name="pedro" age={21} email='pedro@pedro.com'></User>
      <User name="jake" age={23} email='jake@pedro.com'></User>
      <User name="paul" age={22} email='paul@pedro.com'></User>
    </div>
  )
}

//exercise : creating a job info component

function App(){
  return(
    <div className="app">
      <Job salary={90000} position='Senior SDE' company='Amazon'></Job>
      <Job salary={12000} position='Junior SDE' company='Google'></Job>
      <Job salary={10000} position='Project Manager' company='Netflix'></Job>
    </div>
  )
}

const Job = (props) =>{
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}

export default App;

