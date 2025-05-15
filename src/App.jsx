import { useState } from "react"; 
import "./style.css";


function App() {
  const [itemList, setItemList] = useState([]);
  const [inputText, setInputText] = useState("");


  function handleAdicionarItem() {
    const textoSemEspaços = inputText.trim()
    if(textoSemEspaços == "")
      return;

    let newItem = {
      id: Date.now(),
      itemLista: textoSemEspaços,
    }; 

    setItemList([...itemList, newItem])
    setInputText("");
  }

  function handleExcluirItem(item) {
    setItemList(prevList => prevList.filter(lista => lista != item))
  }

  return( 
    <div className="container">
      <div>
        <input 
           type="text" 
           value={inputText}
           onChange={(e) => setInputText(e.target.value)}>
        </input>
        <button className="BotaoAdicionarItem" onClick={handleAdicionarItem}>Adicionar</button>
      </div>
      
      
      <ul className="lista">
        {itemList.map((item)=> ( 
        <li className="item" key={item.id}>
          {item.itemLista} <button className="excluirItem" onClick={()=>handleExcluirItem(item)}>X</button>
        </li>
      ))}
      </ul>
    </div>
  );
}              

export default App;