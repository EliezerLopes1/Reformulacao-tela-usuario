//import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import "./PopupEdicao.css"
import Axios from "axios";

const PopupEdicao = ({ setIsOpenPopup }, props) => {
  const [editar, setEditar] = useState({
    nome: props.nome,
    username: props.username
  })

  const handleChange = (values) => {
    setEditar((prevValues) => ({
      ...prevValues,
      [values.target.name]: values.target.value,
    }))
  }

  const handleEditarInfo = () => {
    Axios.put("http://localhost:3001/editar-info", {
      nome: editar.nome,
      username: editar.username
    }).then((response) => {
        alert(response.data.msg)
        setIsOpenPopup(this, false)
    })
    
  }

  return (
    <div className="primeiraDiv"
      // onClick={setIsOpenPopup.bind(this, false)}
    >
      {/* Content */}
      <div className="conteudo" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="header">
          {/* // style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }} */}
          <h1 className="h1">Editar informações</h1>
          <div className="titulo"
            // onClick={setIsOpenPopup.bind(this, false)}
          >
          </div>
        </div>

        {/* Body */}
        <div>
          <p>Nome completo</p>
          <input type="text" name="nome" onChange={handleChange}/>
          <p>Nome de usuário</p>
          <input type="text" name="username" onChange={handleChange}/>
        </div>
       {/* Footer */}
        <footer 
          style={{ borderTop: "1px solid lightgray", paddingTop: "8px" }} 
        >
        <button className="botao" type="button" onClick={setIsOpenPopup.bind(this, false)}><strong>Cancelar</strong></button>
        <button className="botao" type="button" onClick={handleEditarInfo}><strong>Salvar</strong></button>  
        </footer> 
      </div>
    </div>
  );
};
export default PopupEdicao;