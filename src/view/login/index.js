import React, { useState } from 'react';
import './login.css';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    function logar() {
        
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');
        }).catch(erro => {
            setMsgTipo('erro');
        });

    }

    return(
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="E-mail" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
                
                <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Logar</button>

                <div className="msg-login text-white text-center my-4">
                    {msgTipo === 'sucesso' && <span className="d-block"><strong>Wow!</strong> Você está conectado! :)</span>}
                    {msgTipo === 'erro' && <span className="d-block"><strong>Ops!</strong> Verifique se o e-mail e a senha estão corretos.</span>}
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <a href="#" className="mx-2">Recuperar senha</a>
                    <a href="#" className="mx-2">Cadastrar</a>
                </div>
            </form>
        </div>
    )
}

export default Login;