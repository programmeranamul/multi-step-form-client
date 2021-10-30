import React, { useState } from "react";
import FormHeader from "./FormHeader";
import TextField from "@material-ui/core/TextField";
import { BiErrorCircle } from "react-icons/bi";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import CoupleMatchResult from "./CoupleMatchResult";
import { Alert } from "react-bootstrap";

const datas = [
  {
    name: "firstSingleId",
    title: " מספר מזהה שלך",
  },
  {
    name: "secondSingleId",
    title: "מספר מזהה של הצד השני",
  },
];

const MachCouplePage = () => {
  const [values, setValues] = useState({
    firstSingleId: "",
    secondSingleId: "",
  });
  const [showError, setShowError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [resError, setResError] = useState(null);

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
      setLoading(true);
      setSuccess(false);
      setResult(null);
      setError(false);
      setResError(null);
      try {
        const res = await axios.post(
          `http://couplesurveybackend-env.eba-cxjumfpr.me-south-1.elasticbeanstalk.com/CoupleSurvey?firstSingleId=${values.firstSingleId}&secondSingleId=${values.secondSingleId}`
        );
        console.log(res);
        setResult(res?.data);
        setSuccess(true);
        setLoading(false);
      } catch (e) {
        setResError(e?.response?.data);
        setLoading(false);
        setError(true);
        setSuccess(false);
        setResult(null);
      }
    }
  };

  return (
    <div>
      <FormHeader />

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
          disabled={loading ? true : false}
          variant="contained"
          className="custom-bg fw-bold fs-12 text-white"
          onClick={handelSubmit}
        >
          {loading ? <FaSpinner className="spinner fs-19" /> : "שליחה"}
        </Button>
      </div>
      <div className="mt-3">
        {success && <CoupleMatchResult result={result} />}
        {error && (
          <Alert variant="danger" className="ltr">
            {resError}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default MachCouplePage;
