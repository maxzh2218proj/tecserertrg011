import React, {useContext, useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

function ControlOtk(){

    let {id} = useParams()
    const [clientObject, setClientObject] = useState({})
    const [goods, setGoods] = useState([])
    const [controls, setControls] = useState([])
    const [controltype, setControltype] = useState("")
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
                controltype: controltype,
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
                    const controlToAdd = {controltype: controltype, directionnum: directionnum, directionlink: directionlink, datedir: datedir, opinionnum: opinionnum, dateop: dateop, opinionlink: opinionlink};
                    setControls([...controls, controlToAdd]);
                    setControltype("");
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
            setGoods(response.data)
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

      const deleteDirection = async (directionId) => {

        try{
            await axios.delete(`http://192.168.168.209:3001/controlo/directionlinkupdate/${directionId}`).then(response => {
                alert('Архив удалён');
            })
        }catch(error){
            console.log(error)
        }

      }

      const deleteOpinion = async (opinionId) => {

        try{
            await axios.delete(`http://192.168.168.209:3001/controlo/opinionlinkupdate/${opinionId}`).then(response => {
                alert('Архив удалён');
            })
        }catch(error){
            console.log(error)
        }

      }

      return(
        <div className="clientPage">
            <Link to="/clientsotk" className="ListCl">Список заказчиков</Link>
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
                <form action="" initialValues={initialValues} onSubmit={addControl}>
                    <input name="controltype" placeholder="вид контроля" autoComplete="off" value={controltype} onChange={e => {setControltype(e.target.value)}} />
                    <input name="directionnum" placeholder="№ направления" autoComplete="off" value={directionnum} onChange={e => {setDirectionnum(e.target.value)}} />
                    <input name="directionlink" placeholder="ссылка на направление" autoComplete="off" value={directionlink} onChange={e => {setDirectionlink(e.target.value)}} />
                    <input name="datedir" placeholder="дата" autoComplete="off" value={datedir} onChange={e => {setDatedir(e.target.value)}} />
                    <input name="opinionnum" placeholder="№ заключения" autoComplete="off" value={opinionnum} onChange={e => {setOpinionnum(e.target.value)}} />
                    <input name="dateop" placeholder="дата" autoComplete="off" value={dateop} onChange={e => {setDateop(e.target.value)}} />
                    <input name="opinionlink" placeholder="ссылка на заключение" autoComplete="off" value={opinionlink} onChange={e => {setOpinionlink(e.target.value)}} /><br /><br />
                    <button type="submit" className="addControl">Добавить контроль</button>
                </form>
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
                            <th>Редактирование</th>
                            <th>Удаление</th>
                        </tr>
                        <tbody>
                            {controls.map((usr, i) => (
                                usr.id === editId ?
                                <tr>
                                    <td>
                                        {usr.controltype}
                                    </td>
                                    <td>
                                        {usr.directionnum}<br />
                                        <input type="text" onChange={e => usetDirectionnum(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.directionlink}<br />
                                        <input type="file" name="dirlink" onChange={e => usetDirectionLink(e.target.files[0])}/>
                                        <button onClick={controlUpdate1}>Обновить</button>
                                        <button onClick={()=>deleteDirection(usr.id)}>Удалить</button>
                                    </td>
                                    <td>
                                        {usr.datedir}<br />
                                        <input type="text" onChange={e => usetDatedir(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.opinionnum}<br />
                                        <input type="text" onChange={e => usetOpinionnum(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.dateop}<br />
                                        <input type="text" onChange={e => usetDateop(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.opinionlink}<br />
                                        <input type="file" name="opinlink" onChange={e => usetOpinionlink(e.target.files[0])}/>
                                        <button onClick={controlUpdate2}>Обновить</button>
                                        <button onClick={()=>deleteOpinion(usr.id)}>Удалить</button>
                                    </td>
                                    <td>
                                        <button onClick={handleUpdate} className="update">Обновить</button>
                                    </td>
                                </tr>
                                :
                                <tr key={i}>
                                    <td><b><i>{usr.controltype}</i></b></td>
                                    <td>{usr.directionnum}</td>
                                    <td><a href={"../Texserver/Направления/"+usr.directionlink} target="_blank">{usr.directionlink}</a></td>
                                    <td>{usr.datedir}</td>
                                    <td>{usr.opinionnum}</td>
                                    <td>{usr.dateop}</td>
                                    <td><a href={"../Texserver/Заключения/"+usr.opinionlink} target="_blank">{usr.opinionlink}</a></td>
                                    <td>
                                        <button onClick={() => handleEdit(usr.id)} className="edit">редактировать</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>deleteControl(usr.id)} className="delete">удалить</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default ControlOtk;