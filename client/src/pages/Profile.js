import React, {useEffect, useState} from "react"
import {useParams, useNavigate, Link} from "react-router-dom"
import axios from "axios"

function Profile(){

    let {id} = useParams();
    const [listOfClients, setListOfClients] = useState([]);

    let history = useNavigate();

    useEffect(() => {

        axios.get(`http://192.168.168.209:3001/clients/byclientId/${id}`).then((response) => {
            setListOfClients(response.data);
        });

    }, []);

    return(
        <div className="profilePageContainer">
            {/*<Link to="/clients" className="ListCl">Список заказчиков</Link>*/}
            <Link to="/" className="Out">Выйти из ЛК</Link>
            <div className="basicInfo">
                {" "}
            </div>
            <div className="listOfClients">
                {listOfClients.map((value, key) => {
                    return(
                        <div key={key} className="client">
                            <div className="name">{value.name}</div>
                            <div className="body" onClick={() => {
                                history.push(`/client/${value.id}`);
                            }}>
                                {value.name}
                            </div>
                            <div className="footer">
                                <div className="clientname"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Profile;