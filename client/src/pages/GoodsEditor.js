import React, {useContext, useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

function GoodsReader(){

  let {id} = useParams()
  const [clientObject, setClientObject] = useState({})
  const [goods, setGoods] = useState([])
  const [productname, setProductname] = useState("")
  const [heattreatment, setHeattreatment] = useState("")
  const [othersdocs, setOthersdocs] = useState("")
  const [technicalsolution, setTechnicalsolution] = useState("")
  const [vsrnm, setVsrnm] = useState("")
  const [reportingpassport, setReportingpassport] = useState("")
  const [heattreatment2, setHeattreatment2] = useState("")
  const [othersdocs2, setOthersdocs2] = useState("")
  const [technicalsolution2, setTechnicalsolution2] = useState("")
  const [vsrnm2, setVsrnm2] = useState("")
  const [reportingpassport2, setReportingpassport2] = useState("")
  const [control, setControl] = useState("")
  const {authState} = useContext(AuthContext)

  const [uproductname, usetProductname] = useState("")
  const [uheattreatment, usetHeattreatment] = useState("")
  const [uothersdocs, usetOthersdocs] = useState("")
  const [utechnicalsolution, usetTechnicalsolution] = useState("")
  const [uvsrnm, usetVsrnm] = useState("")
  const [ureportingpassport, usetReportingpassport] = useState("")
  const [uheattreatment2, usetHeattreatment2] = useState("")
  const [uothersdocs2, usetOthersdocs2] = useState("")
  const [utechnicalsolution2, usetTechnicalsolution2] = useState("")
  const [uvsrnm2, usetVsrnm2] = useState("")
  const [ureportingpassport2, usetReportingpassport2] = useState("")
  const [ucontrol, usetControl] = useState("")
  const [editId, setEditID] = useState(-1)

    let history = useNavigate();

    useEffect(() => {

        axios.get(`http://192.168.168.209:3001/clients/byId/${id}`).then((response) => {
            setClientObject(response.data)
        });

        axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
        });

    }, []);

    const initialValues = {
      productname: "",
      heattreatment: "",
      othersdocs: "",
      technicalsolution: "",
      vsrnm: "",
      reportingpassport: "",
      heattreatment2: "",
      othersdocs2: "",
      technicalsolution2: "",
      vsrnm2: "",
      reportingpassport2: "",
      control: "",
  }

    const addGood = async (event) => {
        event.preventDefault();
        //const id = goods[goods.length-1].id+1;
        await axios
            .post("http://192.168.168.209:3001/goods", {
              productname: productname,
              heattreatment: heattreatment,
              othersdocs: othersdocs,
              technicalsolution: technicalsolution,
              vsrnm: vsrnm,
              reportingpassport: reportingpassport,
              heattreatment2: heattreatment2,
              othersdocs2: othersdocs2,
              technicalsolution2: technicalsolution2,
              vsrnm2: vsrnm2,
              reportingpassport2: reportingpassport2,
              control: control,
              ClientId: id,
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
                    const goodToAdd = {productname: productname, heattreatment: heattreatment, othersdocs: othersdocs, technicalsolution: technicalsolution, vsrnm: vsrnm, reportingpassport: reportingpassport, control: control, heattreatment2: heattreatment2, othersdocs2: othersdocs2, technicalsolution2: technicalsolution2, vsrnm2: vsrnm2, reportingpassport2: reportingpassport2, control: control};
                    setGoods([...goods, goodToAdd]);
                    setProductname("");
                    setHeattreatment("");
                    setOthersdocs("");
                    setTechnicalsolution("");
                    setVsrnm("");
                    setReportingpassport("");
                    setHeattreatment2("");
                    setOthersdocs2("");
                    setTechnicalsolution2("");
                    setVsrnm2("");
                    setReportingpassport2("");
                    setControl("");
                }
                
            });

            await axios.get(`http://192.168.168.209:3001/clients/byId/${id}`).then((response) => {
                setClientObject(response.data)
            });
    
            await axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
                setGoods(response.data)
            });

    };

    const deleteGood = (id) => {

        if(window.confirm("ВНИМАНИЕ!!! Вы подтверждаете удаление? ОТМЕНИТЬ НЕВОЗМОЖНО!!!")){

            axios.delete(`http://192.168.168.209:3001/goods/${id}`, {
                headers: {accessToken: localStorage.getItem('accessToken')},
            }).then(() => {
                setGoods(goods.filter((val) => {
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
        axios.get('http://192.168.168.209:3001/goods/'+id)
        .then((response) => {
          console.log(response.data)
          usetProductname(response.data.productname)
          usetHeattreatment(response.data.heattreatment)
          usetOthersdocs(response.data.othersdocs)
          usetTechnicalsolution(response.data.technicalsolution)
          usetVsrnm(response.data.vsrnm)
          usetReportingpassport(response.data.reportingpassport)
          usetHeattreatment2(response.data.heattreatment2)
          usetOthersdocs2(response.data.othersdocs2)
          usetTechnicalsolution2(response.data.technicalsolution2)
          usetVsrnm2(response.data.vsrnm2)
          usetReportingpassport2(response.data.reportingpassport2)
          usetControl(response.data.control)
        })
        .catch(er => console.log(er))
        setEditID(id)
      }
    
      const handleUpdate1 = async () => {

        const formData = new FormData()

        
        formData.append('uheat', uheattreatment)
    
        await axios.patch(`http://192.168.168.209:3001/goods/he/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const handleUpdate12 = async () => {

        const formData = new FormData()

        
        formData.append('uheat2', uheattreatment2)
    
        await axios.patch(`http://192.168.168.209:3001/goods/he2/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }



      const handleUpdate5 = async () => {

        const formData = new FormData()

        formData.append('uother', uothersdocs)
    
        await axios.patch(`http://192.168.168.209:3001/goods/updateotherdocs/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const handleUpdate52 = async () => {

        const formData = new FormData()

        formData.append('uother2', uothersdocs2)
    
        await axios.patch(`http://192.168.168.209:3001/goods/updateotherdocs2/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      

      const handleUpdate7 = async () => {

        const formData = new FormData()

        formData.append('utechsol', utechnicalsolution)
    
        await axios.patch(`http://192.168.168.209:3001/goods/updatetechsol/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const handleUpdate72 = async () => {

        const formData = new FormData()

        formData.append('utechsol2', utechnicalsolution2)
    
        await axios.patch(`http://192.168.168.209:3001/goods/updatetechsol2/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const handleUpdate8 = async () => {

        const formData = new FormData()

        formData.append('uvsr', uvsrnm)
    
        await axios.patch(`http://192.168.168.209:3001/goods/updatevsrnm/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const handleUpdate82 = async () => {

        const formData = new FormData()

        formData.append('uvsr2', uvsrnm2)
    
        await axios.patch(`http://192.168.168.209:3001/goods/updatevsrnm2/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const handleUpdate9 = async () => {

        const formData = new FormData()

        formData.append('ureppas', ureportingpassport)
    
        await axios.patch(`http://192.168.168.209:3001/goods/updatereppas/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const handleUpdate92 = async () => {

        const formData = new FormData()

        formData.append('ureppas2', ureportingpassport2)
    
        await axios.patch(`http://192.168.168.209:3001/goods/updatereppas2/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const deleteHeattreatment = async (heatId) => {

        try{
            await axios.delete(`http://192.168.168.209:3001/goods/he/${heatId}`).then(response => {
              alert('Архив удалён');
          })
        }catch(error){
            console.log(error)
        }

      }

      const deleteOthersdocs = async (otherId) => {

        try{
            await axios.delete(`http://192.168.168.209:3001/goods/updateotherdocs/${otherId}`).then(response => {
              alert('Архив удалён');
          })
        }catch(error){
            console.log(error)
        }

      }

      const deleteTechnicalsolution = async (techId) => {

        try{
            await axios.delete(`http://192.168.168.209:3001/goods/updatetechsol/${techId}`).then(response => {
              alert('Архив удалён');
          })
        }catch(error){
            console.log(error)
        }

      }

      const deleteVsrnm = async (vsnrmId) => {

        try{
            await axios.delete(`http://192.168.168.209:3001/goods/updatevsrnm/${vsnrmId}`).then(response => {
              alert('Архив удалён');
          })
        }catch(error){
            console.log(error)
        }

      }

      const deleteReportingpassport = async (reportId) => {

        try{
            await axios.delete(`http://192.168.168.209:3001/goods/updatereppas/${reportId}`).then(response => {
              alert('Архив удалён');
          })
        }catch(error){
            console.log(error)
        }

      }




    return(
      <div className="clientPage">
            <Link to="/shdclientsqdt" className="ListCl">Список заказчиков</Link>
            <Link to="/" className="Out">Выйти из ЛК</Link>
            <div className="leftSide">
                <div className="client" id="individual">
                <div className="nameHeader">{clientObject.name}</div>
                    {/*<div className="footer">
                        <button onClick={() => {deleteClient(clientObject.id)}}>Удалить ВСЮ ТАБЛИЦУ</button>
                    </div>*/}
                </div>
            </div>
            <div className="rightSide">
                <form action="" initialValues={initialValues} onSubmit={addGood}>
                    <input name="productname" placeholder="наименование изделия" autoComplete="off" value={productname} onChange={e => {setProductname(e.target.value)}} />
                    <input name="heattreatment" placeholder="термообработка" autoComplete="off" value={heattreatment} onChange={e => {setHeattreatment(e.target.value)}} />
                    <input name="othersdocs" placeholder="прочие документы" autoComplete="off" value={othersdocs} onChange={e => {setOthersdocs(e.target.value)}} /><br /><br />
                    <input name="technicalsolution" placeholder="тех.решение" autoComplete="off" value={technicalsolution} onChange={e => {setTechnicalsolution(e.target.value)}} />
                    <input name="vsrnm" placeholder="ВСРНМ" autoComplete="off" value={vsrnm} onChange={e => {setVsrnm(e.target.value)}} />
                    <input name="reportingpassport" placeholder="отчётный паспорт" autoComplete="off" value={reportingpassport} onChange={e => {setReportingpassport(e.target.value)}} />
                    <input name="control" placeholder="вид контроля" autoComplete="off" value={control} onChange={e => {setControl(e.target.value)}} />
                    <button type="submit" className="addGood">Добавить изделие</button>
                </form>
                <div className="listOfGoods">
                    <table border={1} width="100%">
                        <tr>
                            <th>Технический сервер АО "ВЗМЭО"</th>
                            <th>термообработка</th>
                            <th>прочие документы</th>
                            <th>тех.решение</th>
                            <th>ВСРНМ</th>
                            <th>отчётный паспорт</th>
                            <th>вид контроля</th>
                            <th>Редактирование</th>
                            <th>Удаление</th>
                        </tr>
                        <tbody>
                        {goods.map((usr, i) => (
                                usr.id === editId ?
                                <tr>
                                    <td>
                                        {usr.productname}<br />
                                    </td>
                                    <td>
                                        {usr.heattreatment}<br />
                                        <input type="file" name="uheat" onChange={e => usetHeattreatment(e.target.files[0])}/>
                                        <button onClick={handleUpdate1}>Обновить</button>
                                        <button onClick={()=>deleteHeattreatment(usr.id)}>Удалить</button>
                                    </td>
                                    {/*<td>
                                        {usr.heattreatment2}<br />
                                        <input type="file" name="uheat2" onChange={e => usetHeattreatment2(e.target.files[0])}/>
                                        <button onClick={handleUpdate12}>Обновить</button>
                                    </td>*/}
                                    <td>
                                        {usr.othersdocs}<br />
                                        <input type="file" name="uother" onChange={e => usetOthersdocs(e.target.files[0])}/>
                                        <button onClick={handleUpdate5}>Обновить</button>
                                        <button onClick={()=>deleteOthersdocs(usr.id)}>Удалить</button>
                                    </td>
                                    {/*<td>
                                        {usr.othersdocs2}<br />
                                        <input type="file" name="uother2" onChange={e => usetOthersdocs2(e.target.files[0])}/>
                                        <button onClick={handleUpdate52}>Обновить</button>
                                    </td>*/}
                                    <td>
                                        {usr.technicalsolution}<br />
                                        <input type="file" name="utechsol" onChange={e => usetTechnicalsolution(e.target.files[0])}/>
                                        <button onClick={handleUpdate7}>Обновить</button>
                                        <button onClick={()=>deleteTechnicalsolution(usr.id)}>Удалить</button>
                                    </td>
                                    {/*<td>
                                        {usr.technicalsolution2}<br />
                                        <input type="file" name="utechsol2" onChange={e => usetTechnicalsolution2(e.target.files[0])}/>
                                        <button onClick={handleUpdate72}>Обновить</button>
                                    </td>*/}
                                    <td>
                                        {usr.vsrnm}<br />
                                        <input type="file" name="uvsr" onChange={e => usetVsrnm(e.target.files[0])}/>
                                        <button onClick={handleUpdate8}>Обновить</button>
                                        <button onClick={()=>deleteVsrnm(usr.id)}>Удалить</button>
                                    </td>
                                    {/*<td>
                                        {usr.vsrnm2}<br />
                                        <input type="file" name="uvsr2" onChange={e => usetVsrnm2(e.target.files[0])}/>
                                        <button onClick={handleUpdate82}>Обновить</button>
                                    </td>*/}
                                    <td>
                                        {usr.reportingpassport}<br />
                                        <input type="file" name="ureppas" onChange={e => usetReportingpassport(e.target.files[0])}/>
                                        <button onClick={handleUpdate9}>Обновить</button>
                                        <button onClick={()=>deleteReportingpassport(usr.id)}>Удалить</button>
                                    </td>
                                    {/*<td>
                                        {usr.reportingpassport2}<br />
                                        <input type="file" name="ureppas2" onChange={e => usetReportingpassport2(e.target.files[0])}/>
                                        <button onClick={handleUpdate92}>Обновить</button>
                                    </td>*/}
                                    <td>
                                        {usr.control}<br />
                                        <input type="text" onChange={e => usetControl(e.target.value)}/>
                                    </td>
                                </tr>
                                :
                                <tr key={i}>
                                    <td className="productlink" onClick={() => {history(`/shdmaterialsqdt/${usr.id}`);}}>{usr.productname}</td>
                                    <td><a href={"../Texserveroriginal/Термообработка/"+usr.heattreatment} target="_blank">{usr.heattreatment}</a></td>
                                    {/*<td><a href={"../Texserveroriginal/Термообработка/"+usr.heattreatment2} target="_blank">{usr.heattreatment2}</a></td>*/}
                                    <td><a href={"../Texserveroriginal/Прочиедокументы/"+usr.othersdocs} target="_blank">{usr.othersdocs}</a></td>
                                    {/*<td><a href={"../Texserveroriginal/Прочиедокументы/"+usr.othersdocs2} target="_blank">{usr.othersdocs2}</a></td>*/}
                                    <td><a href={"../Texserveroriginal/Технологическиерешения/"+usr.technicalsolution} target="_blank">{usr.technicalsolution}</a></td>
                                    {/*<td><a href={"../Texserveroriginal/Технологическиерешения/"+usr.technicalsolution2} target="_blank">{usr.technicalsolution2}</a></td>*/}
                                    <td><a href={"../Texserveroriginal/ВСНРМ/"+usr.vsrnm} target="_blank">{usr.vsrnm}</a></td>
                                    {/*<td><a href={"../Texserveroriginal/ВСНРМ/"+usr.vsrnm2} target="_blank">{usr.vsrnm2}</a></td>*/}
                                    <td><a href={"../Texserveroriginal/Отчётныйпасп/"+usr.reportingpassport} target="_blank">{usr.reportingpassport}</a></td>
                                    {/*<td><a href={"../Texserveroriginal/Отчётныйпасп/"+usr.reportingpassport2} target="_blank">{usr.reportingpassport2}</a></td>*/}
                                    <td onClick={() => {history(`/shdcontrolqdt/${usr.id}`);}} className="control">Перейти</td>
                                    <td>
                                        <button onClick={() => handleEdit(usr.id)} className="edit">редактировать</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>deleteGood(usr.id)} className="delete">удалить</button>
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

export default GoodsReader;