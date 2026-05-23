
function saudacao(props){
    return <h1>ola, {props.nome}! </h1>;
}

<saudacao nome="thiago"/>


function produto(props){
     return(
        <div>
            <h2> {props.nome}</h2>
            <p> R$  {props.preco} </p>


        </div>
     );
}

<produto nome= "Notebook" preco="3500"/>



function botao(props){
    return(
        <button>
            {props.texto}
        </button>
    );
}

<botao texto="Salvar"/>



//(Desestruturaçao)

function saudacao2({nome}) {
    let nome = props.nome
}

function ususario({nome,idade,cidade}) {
    return(
        <div>
        <h1>{nome} </h1>
        <p> {idade} </p>
        <p> {cidade} </p>
        </div>
    );
}

<ususario
    nome = "thiago"
    idade = {35}
    cidade = "SP"
/>




//useState
function Contador() {
    let numero = 0;

    function aumentar() {
        numero++
        console.log("numero")
    }
    return(
        <div>
            <h1> {numero}</h1>
            <button>onClick ={aumentar}aumentar</button>
        </div>
    )
}

import { useState } from "react";
function Contador() {
     const [Contador, setContador]  = useState(0)
     return(
      <div>
        <p>Voce clicou {Contador}</p>
        <button onClick= {() => setContador(Contador + 1)}>Clique aqui</button>
      </div>

     )

}


function Nome() {
    const [Nome, setNome,] = useState("");
    return(
        <div>
            <input onChange={(e) => setNome(e.target.value)} />
            <h1> {nome}</h1>
        </div>
    )
}



function FormularioLogin() {
    const  = [emial, setEmail] = useState("");
        const [senha, setSenha] = useState("");


        function enviarFormulario(event){
            event.preventDefault();
            console.log("Email, email")
            console.log("Senha, senha")
        }
        return(
            <form onSubmit={enviarFormulario}>
            <input type="email"value={email} onChange={(e)=>setEmail(e.target.value)} />
            placheholder ="Digite seu email"/

            <input type="password"value="senha"> onChange = {(e) => setSenha(e.target.value)}
            placheholder = "Digite a senha"
            
            
            </input>

            <button type = "submit">
             
            </button>
            
            </form>

 
        )
    
}


