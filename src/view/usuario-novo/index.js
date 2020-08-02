import React, { useState } from 'react';
import './usuario-novo.css';

import firebase from '../../config/firebase';
import 'firebase/auth';

function NovoUsuario() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar() {
        
        setCarregando(1);
        setMsgTipo(null);

        if(!email || !senha) {
            setCarregando(0);
            setMsgTipo('erro');
            setMsg('Você precisa informar o e-mail e a senha para fazer o cadastro.');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setCarregando(0);
            setMsgTipo('sucesso');
        }).catch(erro => {
            setCarregando(0);
            setMsgTipo('erro');
            setMsg(''+erro);
        });
    }
    

    return (
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 font-weight-bold">Cadastro</h1>

                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="E-mail" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />

                {carregando ? <div className="spinner-border mt-3 mb-5 spinner-cadastro"></div>
                    : <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>}
                

                <div className="msg-cadastro text-center my-4">
                    {msgTipo === 'sucesso' && <span className="d-block text-success"><strong>Wow!</strong> Usuário cadastrado com sucesso! :)</span>}
                    {msgTipo === 'erro' && <span className="d-block text-danger"><strong>Ops!</strong> {msg}</span>}
                </div>
            </form>
        </div>
    ) 
}

export default NovoUsuario;