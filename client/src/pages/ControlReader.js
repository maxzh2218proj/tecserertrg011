import React, {useContext, useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

function ControlEditor(){

    let {id} = useParams()
    const [clientObject, setClientObject] = useState({})
    const [goods, setGoods] = useState([])
    const [controls, setControls] = useState([])
    const [directionnum, setDirectionnum] = useState("")
    const [directionlink, setDirectionlink] = useState("")
    const [datedir, setDatedir] = useState("")
    const [opinionnum, setOpinionnum] = useState("")
    const [dateop, setDateop] = useState("")
    const [opinionlink, setOpinionlink] = useState("")
    
    const {authState} = useContext(AuthContext)

    const [udirectionnum, usetDirectionnum] = useState("")
    const [udirectionlink, usetDirectionLink] = useState("")
    const [udatedir, usetDatedir] = useState("")
    const [uopinionnum, usetOpinionnum] = useState("")
    const [udateop, usetDateop] = useState("")
    const [uopinionlink, usetOpinionlink] = useState("")
    const [editId, setEditID] = useState(-1)

    let history = useNavigate();

    useEffect(() => {

        axios.get(`http://192.168.168.209:3001/clients/byId/${id}`).then((response) => {
            setClientObject(response.data)
        });

        axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
        });

        axios.get(`http://192.168.168.209:3001/controlo/${id}`).then((response) => {
            setControls(response.data)
        });

    }, []);

    const initialValues = {
        directionnum: "",
        directionlink: "",
        datedir: "",
        opinionnum: "",
        dateop: "",
        opinionlink: "",
    }

    const addControl = async (event) => {
        event.preventDefault();
        //const id = goods[goods.length-1].id+1;
        await axios
            .post("http://192.168.168.209:3001/controlo", {
                directionnum: directionnum,
                directionlink: directionlink,
                datedir: datedir,
                opinionnum: opinionnum,
                dateop: dateop,
                opinionlink: opinionlink,
                GoodId: id,
            },
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken")
                }
            }
            )
            .then((response) => {
                if(response.data.error){
                    console.log(response.data.error)
                }else{
                    const controlToAdd = {directionnum: directionnum, directionlink: directionlink, datedir: datedir, opinionnum: opinionnum, dateop: dateop, opinionlink: opinionlink};
                    setControls([...controls, controlToAdd]);
                    setDirectionnum("");
                    setDirectionlink("");
                    setDatedir("");
                    setOpinionnum("");
                    setDateop("");
                    setOpinionlink("");
                }
                
            });

            await axios.get(`http://192.168.168.209:3001/clients/byId/${id}`).then((response) => {
                setClientObject(response.data)
            });
    
            await axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
                setGoods(response.data)
            });

            await axios.get(`http://192.168.168.209:3001/controlo/${id}`).then((response) => {
                setControls(response.data)
            });

    };

    const deleteControl = (id) => {

        if(window.confirm("ВНИМАНИЕ!!! Вы подтверждаете удаление? ОТМЕНИТЬ НЕВОЗМОЖНО!!!")){

            axios.delete(`http://192.168.168.209:3001/controlo/${id}`, {
                headers: {accessToken: localStorage.getItem('accessToken')},
            }).then(() => {
                setControls(controls.filter((val) => {
                    return val.id != id
                }))
            });

        }

    };

    const deleteClient = (id) => {
        axios.delete(`http://192.168.168.209:3001/clients/${id}`, {
            headers: {accessToken: localStorage.getItem('accessToken')},
        }).then(() => {
            history("/");
        })
    }

    const handleEdit = (id) => {
        axios.get('http://192.168.168.209:3001/controlo/'+id)
        .then((response) => {
          console.log(response.data)
          usetDirectionnum(response.data.directionnum)
          usetDirectionLink(response.data.directionlink)
          usetDatedir(response.data.datedir)
          usetOpinionnum(response.data.opinionnum)
          usetDateop(response.data.dateop)
          usetOpinionlink(response.data.opinionlink)
        })
        .catch(er => console.log(er))
        setEditID(id)
      }
    
      const handleUpdate = async () => {
    
        await axios.patch("http://192.168.168.209:3001/controlo/"+editId, {id: editId, directionnum: udirectionnum, directionlink: udirectionlink, datedir: udatedir, opinionnum: uopinionnum, dateop: udateop, opinionlink: uopinionlink})
        .then(res => {
          console.log(res)
    
          axios.get(`http://192.168.168.209:3001/controlo/${id}`).then((response) => {
            setControls(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const controlUpdate1 = async () => {

        const formData = new FormData()

        
        formData.append('dirlink', udirectionlink)
    
        await axios.patch(`http://192.168.168.209:3001/controlo/directionlinkupdate/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/controlo/${id}`).then((response) => {
            setControls(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const controlUpdate2 = async () => {

        const formData = new FormData()

        
        formData.append('opinlink', uopinionlink)
    
        await axios.patch(`http://192.168.168.209:3001/controlo/opinionlinkupdate/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/controlo/${id}`).then((response) => {
            setControls(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

    return(
        <div className="clientPage">
            <Link to="/clients" className="ListCl">Список заказчиков</Link>
            <Link to="/" className="Out">Выйти из ЛК</Link>
            <div className="leftSide">
                <div className="client" id="individual">
                {/*<div className="nameHeader">{clientObject.name}</div>*/}
                    {/*<div className="footer">
                        <button onClick={() => {deleteClient(clientObject.id)}}>Удалить ВСЮ ТАБЛИЦУ</button>
                    </div>*/}
                </div>
            </div>
            <div className="rightSide">
                <div className="listOfGoods">
                    <table border={1} width="100%">
                        <tr>
                            <th>Вид контроля</th>
                            <th>№ направления</th>
                            <th>Ссылка на направление</th>
                            <th>Дата</th>
                            <th>№ заключения</th>
                            <th>Дата</th>
                            <th>Ссылка на заключение</th>
                        </tr>
                        <tbody>
                            {controls.map((usr, i) => (
                                <tr key={i}>
                                    <td><b><i>{usr.controltype}</i></b></td>
                                    <td>{usr.directionnum}</td>
                                    <td><a href={"../Texserveroriginal/Направления/"+usr.directionlink} target="_blank">{usr.directionlink}</a></td>
                                    <td>{usr.datedir}</td>
                                    <td>{usr.opinionnum}</td>
                                    <td>{usr.dateop}</td>
                                    <td><a href={"../Texserveroriginal/Заключения/"+usr.opinionlink} target="_blank">{usr.opinionlink}</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default ControlEditor;