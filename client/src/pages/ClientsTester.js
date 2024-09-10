import React, { useContext } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from "../helpers/AuthContext";

function ClientsTester() {
  const [listOfClients, setListOfClients] = useState([]);
  const { authState } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [uname, usetName] = useState("");
  const [editId, setEditID] = useState(-1)

  let history = useNavigate();

  useEffect(() => {
    axios.get(`http://192.168.168.209:3001/clientstester`).then((response) => {
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

      const onSubmit = async (event) => {
        event.preventDefault();
        //const id = listOfClients[listOfClients.length-1].id+1;
        await axios.post("http://192.168.168.209:3001/clientstester",
          {name: name},
          {headers: {
            accessToken: sessionStorage.getItem("accessToken")
          }}
        )
        .then(res => console.log(res))
        .catch(er => console.log(er))
    
        await axios.get(`http://192.168.168.209:3001/clientstester`).then((response) => {
          setListOfClients(response.data)
        });
    
      }

      const deleteClient = async (id) => {

        if(window.confirm("ВНИМАНИЕ!!! Вы подтверждаете удаление? ОТМЕНИТЬ НЕВОЗМОЖНО!!!")){
    
          await axios.delete(`http://192.168.168.209:3001/clientstester/${id}`);
          await axios
            .get("http://192.168.168.209:3001/clientstester", {
              headers: { accessToken: localStorage.getItem("accessToken") },
            })
            .then((response) => {
              setListOfClients(response.data);
            });
    
        }
    
      }

  const handleEdit = (id) => {
    axios.get('http://192.168.168.209:3001/clientstester/'+id)
    .then((response) => {
      console.log(response.data)
      usetName(response.data.name)
    })
    .catch(er => console.log(er))
    setEditID(id)
  }

  const handleUpdate = () => {

    axios.patch("http://192.168.168.209:3001/clientstester/"+editId, {id: editId, name: uname})
    .then(res => {
      console.log(res)

      axios.get(`http://192.168.168.209:3001/clientstester`).then((response) => {
        setListOfClients(response.data)
      });

      //location.reload()
      setEditID(-1)
    }).catch(err => console.log(err))

  }

  return (
    <div>
      {/*<Link to="/clientsotk" className="ListCl">Список заказчиков</Link>*/}
      <Link to="/" className="Out">Выйти из ЛК</Link>
      <div className="createClientPage">
            <form action="" initialValues={initialValues} onSubmit={onSubmit}>
              <input name="name" onChange={e => setName(e.target.value)} />
              <button type="submit" className="addClient">Добавить заказчика</button>
            </form>
        </div>
      {listOfClients.map((value, key) => {
        return (
          value.id === editId ?
          <div>
            <div><input type="text" value={uname} onChange={e => usetName(e.target.value)}/></div>
            <div>
              <a className="bodyClientButton" onClick={handleUpdate}>Обновить</a>
            </div>
          </div>
          :
          <div key={key} className="client">
            <div
              className="bodyClient"
              onClick={() => {
                history(`/clienttester/${value.id}`);
              }}
            >
              {value.name}
            </div>
            <a className="bodyClientButton2" onClick={() => handleEdit(value.id)}>редактировать</a>
            <a className="bodyClientButton" onClick={()=>deleteClient(value.id)}>Удалить</a>
          </div>
        );
      })}
    </div>
  );
}

export default ClientsTester;