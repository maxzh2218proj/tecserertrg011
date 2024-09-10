import React, {useContext, useEffect, useState} from "react";
import { useParams, useNavigate, matchRoutes, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

function MaterialsReader(){

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
        axios.delete(`http://192.168.168.209:3001/materials/${id}`, {
            headers: {accessToken: localStorage.getItem('accessToken')},
        }).then(() => {
            setMaterials(materials.filter((val) => {
                return val.id != id
            }))
        });
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

    return(
        <div className="materialPage">
            <Link to="/clients" className="ListCl">Список заказчиков</Link>
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
                        </tr>
                        <tbody>
                            {materials.map((usr, i) => (
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
                            </tr>
                                
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default MaterialsReader;