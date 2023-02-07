import './App.css';
import {Title} from './components/title/title';
import {Picture} from './components/picture/picture';
import {Info} from './components/info/info';
import {Bouton} from './components/bouton/bouton';
import {Imc} from './components/IMC/imc';

import image from'./components/picture/public/img/img.jpeg';
import img from './components/info/public/img/image.jpg';


function App() {

  let charlotte = { 
    nom: "Landuyt",
    age: "24 ans",
    src: img,
    taille: "164 cm", 
  };

  let Hugues = {
    nom: "Hugues",
    taille: 1.84,
    poids: 95,
  }

  let Jeanne = {
    nom: "Jeanne",
    taille: 1.64,
    poids: 54
  }

  let Nathan = {
    nom: "Nathan",
    taille: 1.86,
    poids: 75
  }

  let tab = [Hugues,Jeanne,Nathan];
  

  return (
    <div className="App">
        <Title param_1={"titre"} param_2={"paragraphe"}/> 
        <Picture param_1={image} param_2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaJXLIFVRz6AvuYBJc-mQpRG9gMJT6TFeTg&usqp=CAU"}/>
        <Info param_1={charlotte.src} param_2={charlotte.nom} param_3={charlotte.age} param_4={charlotte.taille}/>

        <Bouton param_1="button" param_2={function ma_fonction(){console.log("bonjour");}} param_3="bonjour"/>
        <Bouton param_1="submit" param_3="click"/>

        {tab.map((personne)=>(
            <Imc param_1={personne.nom} param_2={personne.taille} param_3={personne.poids}/>
        ))}
        
        
    </div>
  );
}

export default App;
