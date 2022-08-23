import logo from './logo.svg';
import './App.css';

function ImagenAvatar(props){
  return(
    <>
      <img src='https://images.8tracks.com/cover/i/010/264/850/Persona-5-Protagonist-Gameplay-Teaser-Trailer-9452.jpg?rect=627,6,652,652&q=98&fm=jpg&fit=max' height={200} width={200}/>
    </>
  )
}

function Datos(){
  return(
    <>
      <br/>
      <p><b>Nombre: </b>Henry Bryan Gutierrez Solorzano</p>
      <p><b>Carrera: </b>Ingenieria en ciencias de la computacion</p>
    </>
  )
}

function Skills(){
  return(
    <>
      <br/>
      <p>Skill en programacion</p>
      <ul>
        <li>C#</li>
        <li>React</li>
        <li>Node js</li>
      </ul>
    </>
  )
}

function App() {
  return (
    <>
      <ImagenAvatar></ImagenAvatar>
      <Datos></Datos>
      <Skills></Skills>
    </> 
  );
}

export default App;
