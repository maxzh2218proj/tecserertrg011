import React, { useContext, useEffect } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function CreateClient(){

    const {authState} = useContext(AuthContext)

    let history = useNavigate();

    const initialValues = {
        name: "",
    }

    /*useEffect(() => {
        if (!localStorage.getItem("accessToken")){
            history.push("/login");
        }
    }, [])*/

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("You must input a Title"),
    })

    const onSubmit = (data) => {
        axios.post("http://192.168.168.209:3001/clients", data)
        .then((response) => {
            history("/");
        })
    }

    return (
        <div className="createClientPage">
            {/*<Link to="/clients" className="ListCl">Список заказчиков</Link>*/}
            <Link to="/" className="Out">Выйти из ЛК</Link>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">

                    <label>Title: </label>
                    <ErrorMessage name="name" component="span" />
                    <Field id="inputCreateClient" name="name" placeholder="(Ex. Title...)" />

                    <button type="submit" className="addClient">Добавить заказчика</button>

                </Form>
            </Formik>
        </div>
    )

}

export default CreateClient;