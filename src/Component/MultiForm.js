import React from "react";
import { useState } from "react";
import { initaleData, swithSteps } from "./InitailDataAndFunc";
import axios from "axios";

const MultiForm = () => {
  const [states, setStates] = useState(initaleData);
  const [showError, setShowError] = useState([]);
  const [requiredList, setRequiredList] = useState([]);
  const [id, setId] = useState("")
  const { step } = states;
  const value = states;

  // process next stape
  const next = () => {
 
    const { step } = states;
    setStates({ ...states, step: step + 1 });
  };

  // process previous stape
  const previous = () => {
    const { step } = states;
    setStates({ ...states, step: step - 1 });
  };

  //go next setps
  const handelNext = () => {
    const errorList = [];
    for (let i = 0; i < requiredList.length; i++) {
      const inputeName = requiredList[i].name;
      const inputValue = value[inputeName];
      if (inputValue.length < 1) {
        errorList.push(inputeName);
      }
    }
    if (errorList.length > 0) {
      setShowError(errorList);
    } else {
      next();
    }
  };

  // submit from
  const handelSubmit = async () => {
    const errorList = [];
    for (let i = 0; i < requiredList.length; i++) {
      const inputeName = requiredList[i].name;
      const inputValue = value[inputeName];
      if (inputValue.length < 1) {
        errorList.push(inputeName);
      }
    }
    if (errorList.length > 0) {
      setShowError(errorList);
    } else {      
      const res = await axios.post(
        //"https://guarded-inlet-71859.herokuapp.com/addData",
        // "http://localhost:9090/addData",
        "https://arcane-fortress-43890.herokuapp.com/addData",
        //"https://localhost:5001/SingleSurvey",
        // "http://couplesurveybackend-env.eba-cxjumfpr.me-south-1.elasticbeanstalk.com/SingleSurvey",
        value
      );
      if (res.status === 201) {
        setId(res.data._id)
        next();
      }
    }
  };

  // createNexFrom after submit from
  const createNexFrom = () => {
    setStates(initaleData);
  };

  // handel filed change
  const handelChange = (e) => {
    const isRequired = requiredList.find(
      (required) => required.name === e.target.name
    );
    if (isRequired) {
      if (e.target.value) {
        const item = showError.find((err) => err === e.target.name);
        if (item) {
          const newError = showError.filter((err) => err !== item);
          setShowError(newError);
        }
      } else {
        const item = showError.find((err) => err === e.target.name);
        console.log(item, "g");
        if (!item) {
          setShowError([...showError, e.target.name]);
        }
      }
    }
  //if the fild is checkbox    
    if (e.target.type === "checkbox") {
      const namess = e?.target?.name;
      if (e.target.checked) {
        const found = states[namess].find(
          (element) => element === e.target.value
        );
        if (!found) {
          setStates({
            ...states,
            [e.target.name]: [...states[namess], e.target.value],
          });
        }
      } else {
        const found = states[namess].find(
          (element) => element === e.target.value
        );
        const filter = states[namess].filter((element) => element !== found);
        setStates({ ...states, [e.target.name]: filter });
      }
      return;
    }
    setStates({ ...states, [e.target.name]: e.target.value });
  };

  return (
    <>
      {swithSteps(
        step,
        value,
        handelChange,
        previous,
        showError,
        requiredList,
        setRequiredList,
        handelSubmit,
        setShowError,
        createNexFrom,
        handelNext,
        id
      )}
    </>
  );
};

export default MultiForm;
