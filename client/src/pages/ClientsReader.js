import React, { useContext } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from "../helpers/AuthContext";

function ClientsReader() {
  const [listOfClients, setListOfClients] = useState([]);
  const { authState } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [uname, usetName] = useState("");
  const [editId, setEditID] = useState(-1)

  let history = useNavigate();

  useEffect(() => {
    axios.get(`http://192.168.168.209:3001/clients`).then((response) => {
      setListOfClients(response.data)
    });
  }, []);

  const initialValues = {
    name: "",
  }

  /*const onSubmit = async (data) => {
    await axios.post("http://localhost/clients", data)
    await axios
      .get("http://localhost/clients", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setListOfClients(response.data);
      });
  }*/

  const onSubmit = (event) => {
    event.preventDefault();
    //const id = listOfClients[listOfClients.length-1].id+1;
    axios.post("http://192.168.168.209:3001/clients",
      {name: name},
      {headers: {
        accessToken: sessionStorage.getItem("accessToken")
      }}
    )
    .then(res => console.log(res))
    .catch(er => console.log(er))
  }

  const deleteClient = async (id) => {

    await axios.delete(`http://192.168.168.209:3001/clients/${id}`);
    await axios
      .get("http://192.168.168.209:3001/clients", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setListOfClients(response.data);
      });

  }

  const handleEdit = (id) => {
    axios.get('http://192.168.168.209:3001/clients/'+id)
    .then((response) => {
      console.log(response.data)
      usetName(response.data.name)
    })
    .catch(er => console.log(er))
    setEditID(id)
  }

  const handleUpdate = () => {

    axios.patch("http://192.168.168.209:3001/clients/"+editId, {id: editId, name: uname})
    .then(res => {
      console.log(res)

      axios.get(`http://192.168.168.209:3001/clients`).then((response) => {
        setListOfClients(response.data)
      });

      //location.reload()
      setEditID(-1)
    }).catch(err => console.log(err))

  }

  return (
    <div>
      {/*<Link to="/clients" className="ListCl">Список заказчиков</Link>*/}
      <Link to="/" className="Out">Выйти из ЛК</Link>
      {listOfClients.map((value, key) => {
        return (
          <div key={key} className="client">
            <div
              className="bodyClient"
              onClick={() => {
                history(`/client/${value.id}`);
              }}
            >
              {value.name}
            </div>
            {/*<button onClick={()=>deleteClient(value.id)}>delete</button>*/}
          </div>
        );
      })}
    </div>
  );
}

export default ClientsReader;