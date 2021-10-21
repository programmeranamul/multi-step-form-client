import React, { useState } from "react";
import ContactHeader from "./ContactHeader";
import TextField from "@material-ui/core/TextField";
import { BiErrorCircle } from "react-icons/bi";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { FaSpinner } from 'react-icons/fa';

const datas = [
  {
    name: "email",
    title: "your email",
  },
  {
    name: "subject",
    title: "Subject",
  },
  {
    name: "message",
    title: "Message",
  },
];

const ContactPage = () => {
  const [values, setValues] = useState({ email: "", subject: "", message: "" });
  const [showError, setShowError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false)

  const handelChange = (e) => {
    const target = e.target;

    setValues({ ...values, [target.name]: target.value.trim() });
    if (target.value.length <= 0) {
      const name = target.name;
      showError.push(name);
    } else {
      const errorList = showError.filter((err) => err !== target.name);
      setShowError(errorList);
    }
  };

  const handelSubmit = async () => {
    const errorList = [];
    for (let index = 0; index < datas.length; index++) {
      const name = datas[index].name;
      const value = values[name];

      if (value.length < 1) {
        errorList.push(name);
      }
    }
    if (errorList.length > 0) {
      setShowError(errorList);
    } else {
        setLoading(true)
      try {
        // const { data } = await axios.post(
        //   "http://localhost:9090/contact",
        //   values
        // );
        const { data } = await axios.post(
          "https://arcane-fortress-43890.herokuapp.com/contact",
          values
        );
        setValues({ email: "", subject: "", message: "" })
        setResponse(data);
        setLoading(false)
        setSuccess(true);
        setTimeout(() => {
       setSuccess(false);
        }, 3000);
      } catch (e) {
        setResponse(e.response.data);
        setError(true);        
        setLoading(false)
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    }
  };
  return (
    < >
      <ContactHeader />
      <div className="mt-3">
          {
              success&& <Alert variant="success" className="text-start">{response}</Alert>
          }
          {
              error&& <Alert variant="danger">{response}</Alert>
          }
        </div>
      {datas.map((data, index) => (
        <div
          className={` form__header mt-4 p-4 bg-white ${showError.map((err) =>
            err === data.name ? " border-red " : ""
          )}`}
          key={index}
        >
          <p className="mb-0">
            {data.title}
            <span className="text-danger"> *</span>
          </p>
          <TextField
            id="standard-error-helper-text"
            label=""
            helperText={
              showError.find((err) => err === data.name) && (
                <span>
                  <BiErrorCircle className="fs-19" /> This filed is required
                </span>
              )
            }
            className={`w-50 ${
              showError.find((err) => err === data.name) && "error"
            }`}
            value={values[data.name]}
            name={data.name}
            onChange={handelChange}
          />
        </div>
      ))}
      <div className="mt-3">
        <Button
        disabled={loading? true : false}
          variant="contained"
          className="custom-bg fw-bold fs-12 text-white"
          onClick={handelSubmit}
        >{loading?<FaSpinner  className="spinner fs-19" /> : "שליחה"
        }         
        </Button>
      </div>
    </>
  );
};

export default ContactPage;
