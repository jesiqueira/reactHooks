import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

function App() {
  // const [ativo, setAtivo] = React.useState(false);
  // const [dados, setDados] = React.useState({ nome: "Edmar", idade: "38" });

  // function handleClick() {
  //   setAtivo(!ativo);
  //   setDados({...dados, faculdade: 'Possiu Faculdade'})
  // }

  const [modal, setModal] = React.useState(false);
  let [items, setItems] = React.useState("Teste");

  function handleClick() {
    setItems('outros')

  }
  return (
    <div>
      {/* <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button> */}
      {/* <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div> */}
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
      {items}
      <button onClick={handleClick} >Clicar</button>
    </div>
  );
}

export default App;
