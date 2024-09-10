import React, {useContext, useEffect, useState} from "react";
import { useParams, useNavigate, matchRoutes, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

function MaterialsEditorOtk(){

    let {id} = useParams()
    const [clientObject, setClientObject] = useState({})
    const [goods, setGoods] = useState([])
    const [materials, setMaterials] = useState([])
    const [materialname, setMaterialname] = useState("")
    const [code, setCode] = useState("")
    const [mass, setMass] = useState("")
    const [normgood, setNormgood] = useState("")
    const [normorder, setNormorder] = useState("")
    const [note, setNote] = useState("")
    const [pki, setPki] = useState("")
    const [account, setAccount] = useState("")
    const [datepay, setDatepay] = useState("")
    const [supplier, setSupplier] = useState("")
    const [datearrival, setDatearrival] = useState("")
    const [datevk, setDatevk] = useState("")
    const [dateotk, setDateotk] = useState("")
    const [sertificate, setSertificate] = useState("")
    const [dateclosesert, setDateclosesert] = useState("")
    const [dop1, setDop1] = useState("")
    const [dop2, setDop2] = useState("")
    const [dop3, setDop3] = useState("")
    const [dop4, setDop4] = useState("")
    const {authState} = useContext(AuthContext)

    const [umaterialname, usetMaterialname] = useState("")
    const [ucode, usetCode] = useState("")
    const [umass, usetMass] = useState("")
    const [unormgood, usetNormgood] = useState("")
    const [unormorder, usetNormorder] = useState("")
    const [unote, usetNote] = useState("")
    const [upki, usetPki] = useState("")
    const [uaccount, usetAccount] = useState("")
    const [udatepay, usetDatepay] = useState("")
    const [usupplier, usetSupplier] = useState("")
    const [udatearrival, usetDatearrival] = useState("")
    const [udatevk, usetDatevk] = useState("")
    const [udateotk, usetDateotk] = useState("")
    const [usertificate, usetSertificate] = useState("")
    const [udateclosesert, usetDateclosesert] = useState("")
    const [udop1, usetDop1] = useState("")
    const [udop2, usetDop2] = useState("")
    const [udop3, usetDop3] = useState("")
    const [udop4, usetDop4] = useState("")
    const [editId, setEditID] = useState(-1)

    let history = useNavigate();

    useEffect(() => {

        axios.get(`http://192.168.168.209:3001/clients/byId/${id}`).then((response) => {
            setClientObject(response.data)
        });

        axios.get(`http://192.168.168.209:3001/goods/${id}`).then((response) => {
            setGoods(response.data)
        });

        axios.get(`http://192.168.168.209:3001/materials/${id}`).then((response) => {
            setMaterials(response.data)
        });

    }, []);

    const initialValues = {
        materialname: "",
        code: "",
        mass: "",
        normgood: "",
        normorder: "",
        note: "",
        pki: "",
        account: "",
        datepay: "",
        supplier: "",
        datearrival: "",
        datevk: "",
        dateotk: "",
        sertificate: "",
        dateclosesert: "",
        dop1: "",
        dop2: "",
        dop3: "",
        dop4: "",
    }

    const addMaterial = (event) => {
        event.preventDefault();
        //const id = materials[materials.length-1].id+1;
        axios
            .post("http://192.168.168.209:3001/materials", {
                materialname: materialname,
                code: code,
                mass: mass,
                normgood: normgood,
                normorder: normorder,
                note: note,
                pki: pki,
                account: account,
                datepay: datepay,
                supplier: supplier,
                datearrival: datearrival,
                datevk: datevk,
                dateotk: dateotk,
                sertificate: sertificate,
                dateclosesert: dateclosesert,
                dop1: dop1,
                dop2: dop2,
                dop3: dop3,
                dop4: dop4,
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
                    const goodToAdd = {materialname: materialname, code: code, mass: mass, normgood: normgood, normorder: normorder, note: note, pki: pki, account: account, datepay: datepay, supplier: supplier, datearrival: datearrival, datevk: datevk, dateotk: dateotk, sertificate: sertificate, dateclosesert: dateclosesert, dop1: dop1, dop2: dop2, dop3: dop3, dop4: dop4};
                    setGoods([...goods, goodToAdd]);
                    setMaterialname("");
                    setCode("");
                    setMass("");
                    setNormgood("");
                    setNormorder("");
                    setNote("");
                    setPki("");
                    setAccount("");
                    setDatepay("");
                    setSupplier("");
                    setDatearrival("");
                    setDatevk("");
                    setDateotk("");
                    setSertificate("");
                    setDateclosesert("");
                    setDop1("");
                    setDop2("");
                    setDop3("");
                    setDop4("");
                }
                
            });
    };

    const handleFileUpload = (event) => {
        // get the selected file from the input
        const file = event.target.files[0];
        // create a new FormData object and append the file to it
        const formData = new FormData();
        formData.append("file", file);
        // make a POST request to the File Upload API with the FormData object and Rapid API headers
        axios
          .post("http://192.168.168.209:3001/materials", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            // handle the response
            console.log(response);
          })
          .catch((error) => {
            // handle errors
            console.log(error);
          });
      };

      const deleteMaterial = (id) => {
        if(window.confirm("ВНИМАНИЕ!!! Вы подтверждаете удаление? ОТМЕНИТЬ НЕВОЗМОЖНО!!!")){

            axios.delete(`http://192.168.168.209:3001/materials/${id}`, {
                headers: {accessToken: localStorage.getItem('accessToken')},
            }).then(() => {
                setMaterials(materials.filter((val) => {
                    return val.id != id
                }))
            });

        }
      };

    const deleteGood = (id) => {
        axios.delete(`http://192.168.168.209:3001/goods/${id}`, {
            headers: {accessToken: localStorage.getItem('accessToken')},
        }).then(() => {
            setGoods(goods.filter((val) => {
                return val.id != id
            }))
        });
    };

    const deleteClient = (id) => {
        axios.delete(`http://192.168.168.209:3001/clients/${id}`, {
            headers: {accessToken: localStorage.getItem('accessToken')},
        }).then(() => {
            history("/");
        })
    }

    const handleEdit = (id) => {
        axios.get('http://192.168.168.209:3001/materials/'+id)
        .then((response) => {
          console.log(response.data)
          usetMaterialname(response.data.materialname)
          usetCode(response.data.code)
          usetMass(response.data.mass)
          usetNormgood(response.data.normgood)
          usetNormorder(response.data.normorder)
          usetNote(response.data.note)
          usetPki(response.data.pki)
          usetAccount(response.data.account)
          usetDatepay(response.data.datepay)
          usetSupplier(response.data.supplier)
          usetDatearrival(response.data.datearrival)
          usetDatevk(response.data.datevk)
          usetDateotk(response.data.dateotk)
          usetSertificate(response.data.sertificate)
          usetDateclosesert(response.data.dateclosesert);
          usetDop1(response.data.dop1);
          usetDop2(response.data.dop2);
          usetDop3(response.data.dop3);
          usetDop4(response.data.dop4);
        })
        .catch(er => console.log(er))
        setEditID(id)
      }
    
      const handleUpdate = () => {
    
        axios.patch("http://192.168.168.209:3001/materials/"+editId, {id: editId, materialname: umaterialname, code: ucode, mass: umass, normgood: unormgood, normorder: unormorder, note: unote, pki: upki, account: uaccount, datepay: udatepay, supplier: usupplier, datearrival: udatearrival, datevk: udatevk, dateotk: udateotk, sertificate: usertificate, dateclosesert: udateclosesert, dop1: udop1, dop2: udop2, dop3: udop3, dop4: udop4})
        .then(res => {
          console.log(res)
    
          axios.get(`http://192.168.168.209:3001/materials/${id}`).then((response) => {
            setMaterials(response.data)
          });
    
          //location.reload()
          setEditID(-1)

          //history(`/updatemat`)

        }).catch(err => console.log(err))
    
      }

      const handleUpdate1 = async () => {

        const formData = new FormData()

        
        formData.append('upk', upki)
    
        await axios.patch(`http://192.168.168.209:3001/materials/pkii/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/materials/${id}`).then((response) => {
            setMaterials(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const handleUpdate2 = async () => {

        const formData = new FormData()

        
        formData.append('usert', usertificate)
    
        await axios.patch(`http://192.168.168.209:3001/materials/sert/${editId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(res => {
          console.log(res)


    
          axios.get(`http://192.168.168.209:3001/materials/${id}`).then((response) => {
            setMaterials(response.data)
          });
    
          //location.reload()
          setEditID(-1)
        }).catch(err => console.log(err))
    
      }

      const deletePki = async (pkiId) => {

        try{
            await axios.delete(`http://192.168.168.209:3001/materials/pkii/${pkiId}`).then(response => {
                alert('Архив удалён');
            })
        }catch(error){
            console.log(error)
        }

      }

      const deleteSert = async (sertId) => {

        try{
            await axios.delete(`http://192.168.168.209:3001/materials/sert/${sertId}`).then(response => {
                alert('Архив удалён');
            })
        }catch(error){
            console.log(error)
        }

      }



    return(
        <div className="materialPage">
            <Link to="/clientsotk" className="ListCl">Список заказчиков</Link>
            <Link to="/" className="Out">Выйти из ЛК</Link>
            <div className="leftSide">
                <div className="material" id="individual">
                <div className="name"></div>
                    {/*<div className="footer">
                        <button onClick={() => {deleteClient(clientObject.id)}}>Удалить ВСЮ ТАБЛИЦУ</button>
                    </div>*/}
                </div>
            </div>
            <div className="rightSide">
                <form action="" initialValues={initialValues} onSubmit={addMaterial}>
                    <input name="materialname" placeholder="Наименование,  сортамент и марка" autoComplete="off" value={materialname} onChange={(event) => {setMaterialname(event.target.value)}} />
                    <input name="code" placeholder="Код   ед-цы велич." autoComplete="off" value={code} onChange={(event) => {setCode(event.target.value)}} />
                    <input name="mass" placeholder="Масса на изделие" autoComplete="off" value={mass} onChange={(event) => {setMass(event.target.value)}} />
                    <input name="normgood" placeholder="Норма расхода на изделие" autoComplete="off" value={normgood} onChange={(event) => {setNormgood(event.target.value)}} />
                    <input name="normorder" placeholder="Норма расхода на заказ" autoComplete="off" value={normorder} onChange={(event) => {setNormorder(event.target.value)}} />
                    <input name="note" placeholder="Примечание" autoComplete="off" value={note} onChange={(event) => {setNote(event.target.value)}} />
                    <input name="pki" placeholder="№ ПКИ" autoComplete="off" value={pki} onChange={(event) => {setPki(event.target.value)}} /><br /><br />
                    <input name="account" placeholder="№ Счёта" autoComplete="off" value={account} onChange={(event) => {setAccount(event.target.value)}} />
                    <input name="datepay" placeholder="Дата оплаты" autoComplete="off" value={datepay} onChange={(event) => {setDatepay(event.target.value)}} />
                    <input name="supplier" placeholder="Поставщик" autoComplete="off" value={supplier} onChange={(event) => {setSupplier(event.target.value)}} />
                    <input name="datearrival" placeholder="Дата прихода" autoComplete="off" value={datearrival} onChange={(event) => {setDatearrival(event.target.value)}} />
                    <input name="datevk" placeholder="Дата предъявления на вход.контроль" autoComplete="off" value={datevk} onChange={(event) => {setDatevk(event.target.value)}} />
                    <input name="dateotk" placeholder="Дата сдачи ОТК" autoComplete="off" value={dateotk} onChange={(event) => {setDateotk(event.target.value)}} />
                    <input name="sertificate" placeholder="Сертификат (паспорт)" autoComplete="off" value={sertificate} onChange={(event) => {setSertificate(event.target.value)}} />
                    <input name="dateclosesert" placeholder="Дата закрытия сертификата" autoComplete="off" value={dateclosesert} onChange={(event) => {setDateclosesert(event.target.value)}} />
                    <input name="dop1" placeholder="Доп поле 1" autoComplete="off" value={dop1} onChange={(event) => {setDop1(event.target.value)}} />
                    <input name="dop2" placeholder="Доп поле 2" autoComplete="off" value={dop2} onChange={(event) => {setDop2(event.target.value)}} />
                    <input name="dop3" placeholder="Доп поле 3" autoComplete="off" value={dop3} onChange={(event) => {setDop3(event.target.value)}} />
                    <input name="dop4" placeholder="Доп поле 4" autoComplete="off" value={dop4} onChange={(event) => {setDop4(event.target.value)}} />
                    <button type="submit" className="addMaterial">Добавить материал</button>
                </form>
                <br /><br /><br />
                <input type="file" onChange={handleFileUpload} />
                <div className="listOfGoods">
                    <table border={1} width="100%">
                        <tr>
                            <th>Наименование,  сортамент и марка</th>
                            <th>Код   ед-цы велич.</th>
                            <th>Масса на изделие</th>
                            <th>Норма расхода на изделие</th>
                            <th>Норма расхода на заказ</th>
                            <th>Примечание</th>
                            <th>№ ПКИ</th>
                            <th>№ Счета</th>
                            <th>Дата   оплаты</th>
                            <th>Поставщик</th>
                            <th>Дата   прихода</th>
                            <th>Дата предъявл. на вход. контроль</th>
                            <th>Дата сдачи ОТК</th>
                            <th>Сертификат (паспорт)</th>
                            <th>Дата закрытия сертификата</th>
                            <th>Доп поле 1</th>
                            <th>Доп поле 2</th>
                            <th>Доп поле 3</th>
                            <th>Доп поле 4</th>
                            <th>Редактирование</th>
                            <th>Удаление</th>
                        </tr>
                        <tbody>
                            {materials.map((usr, i) => (
                                usr.id === editId ?
                                <tr key={i}>
                                    <td>
                                        {usr.materialname}<br />
                                    </td>
                                    <td>
                                        {usr.code}<br />
                                        <input type="text" onChange={e => usetCode(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.mass}<br />
                                        <input type="text" onChange={e => usetMass(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.normgood}<br />
                                        <input type="text" onChange={e => usetNormgood(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.normorder}<br />
                                        <input type="text" onChange={e => usetNormorder(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.note}<br />
                                        <input type="text" onChange={e => usetNote(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.pki}<br />
                                        <input type="file" name="upk" onChange={e => usetPki(e.target.files[0])}/>
                                        <button onClick={handleUpdate1}>Обновить</button>
                                        <button onClick={()=>deletePki(usr.id)}>Удалить</button>
                                    </td>
                                    <td>
                                        {usr.account}<br />
                                        <input type="text" onChange={e => usetAccount(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.datepay}<br />
                                        <input type="text" onChange={e => usetDatepay(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.supplier}<br />
                                        <input type="text" onChange={e => usetSupplier(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.datearrival}<br />
                                        <input type="text" onChange={e => usetDatearrival(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.datevk}<br />
                                        <input type="text" onChange={e => usetDatevk(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.dateotk}<br />
                                        <input type="text" onChange={e => usetDateotk(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.sertificate}<br />
                                        <input type="file" name="usert" onChange={e => usetSertificate(e.target.files[0])}/>
                                        <button onClick={handleUpdate2}>Обновить</button>
                                        <button onClick={()=>deleteSert(usr.id)}>Удалить</button>
                                    </td>
                                    <td>
                                        {usr.dateclosesert}<br />
                                        <input type="text" onChange={e => usetDateclosesert(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.dop1}<br />
                                        <input type="text" onChange={e => usetDop1(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.dop2}<br />
                                        <input type="text" onChange={e => usetDop2(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.dop3}<br />
                                        <input type="text" onChange={e => usetDop3(e.target.value)}/>
                                    </td>
                                    <td>
                                        {usr.dop4}<br />
                                        <input type="text" onChange={e => usetDop4(e.target.value)}/>
                                    </td>
                                    <td>
                                        <button onClick={handleUpdate} className="update">Обновить</button>
                                    </td>
                                </tr>
                                :
                                <tr key={i}>
                                    <td><b><i>{usr.materialname}</i></b></td>
                                    <td>{usr.code}</td>
                                    <td>{usr.mass}</td>
                                    <td>{usr.normgood}</td>
                                    <td>{usr.normorder}</td>
                                    <td>{usr.note}</td>
                                    <td><a href={"../Texserveroriginal/ПКИ/"+usr.pki+".pdf"} target="_blank">{usr.pki}</a></td>
                                    <td>{usr.account}</td>
                                    <td>{usr.datepay}</td>
                                    <td>{usr.supplier}</td>
                                    <td>{usr.datearrival}</td>
                                    <td>{usr.datevk}</td>
                                    <td>{usr.dateotk}</td>
                                    <td><a href={"../Texserveroriginal/Сертификаты/"+usr.sertificate+".pdf"} target="_blank">{usr.sertificate}</a></td>
                                    <td>{usr.dateclosesert}</td>
                                    <td>{usr.dop1}</td>
                                    <td>{usr.dop2}</td>
                                    <td>{usr.dop3}</td>
                                    <td>{usr.dop4}</td>
                                    <td>
                                        <button onClick={() => handleEdit(usr.id)} className="edit">редактировать</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>deleteMaterial(usr.id)} className="delete">удалить</button>
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

export default MaterialsEditorOtk;