import './App.css';
import {Title} from './components/title/title';
import {Picture} from './components/picture/picture';
import {Info} from './components/info/info';

import image from'./components/picture/public/img/img.jpeg';
import img from './components/info/public/img/image.jpg';


function App() {

  let charlotte ={ 
    nom: "Landuyt",
    age: "24 ans",
    src: img,
    taille: "164 cm", 
  };


  return (
    <div className="App">
        <Title param_1={"titre"} param_2={"paragraphe"}/> 
        <Picture param_1={image} param_2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaJXLIFVRz6AvuYBJc-mQpRG9gMJT6TFeTg&usqp=CAU"}/>
        <Info param_1={charlotte.src} param_2={charlotte.nom} param_3={charlotte.age} param_4={charlotte.taille}/>
    </div>
  );
}

export default App;
