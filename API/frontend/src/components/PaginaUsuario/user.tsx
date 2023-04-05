import React from "react";
import "./user.css"
import Tabela from "./tabela";

export default function User() {
  return (
    <div className="TabelaUser">
        <h1>Informações do Usuário</h1>
        <p>Nome: </p>
        <p>Email: </p>
        <p>Usuário: </p>    
        <p>Tipo: </p>
        <p>Criado em: </p>
        <button>Editar Informações</button>
        {/* <Tabela/> */}
    </div>
    
  );
}