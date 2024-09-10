import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://192.168.168.209:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
        if(username=="editor" || username=="editoromts"){
          history("/shdclientsqdt");
        }else if(username=="editorotk"){
          history("/clientsotk");
        }else if(username=="tester"){
          history("/clientstester");
        }else{
          history("/clients")
        }
      }
    });
  };
  return (
    <div className="loginContainer">
      {/*<Link to="/">Выйти из ЛК</Link>*/}
      {/*<Link to="/registration"> Зарегистрировать нового пользователя в системе</Link>*/}
      <br />
      <br />
      <br />
      <label><b><i>Логин:</i></b></label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <br />
      <br />
      <br />
      <label><b><i>Пароль:</i></b></label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <br />
      <br />

      <button onClick={login} className="loginBtn"> Войти в ЛК </button>

    </div>
  );
}

export default Login;