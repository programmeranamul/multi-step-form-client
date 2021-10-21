import React, { useState } from "react";
import FormHeader from "./FormHeader";
import TextField from "@material-ui/core/TextField";
import { BiErrorCircle } from "react-icons/bi";
import Button from "@material-ui/core/Button";

const datas = [
  {
    name: "yourId",
    title: " מספר מזהה שלך",
  },
  {
    name: "otherId",
    title: "מספר מזהה של הצד השני",
  },
];

const MachCouplePage = () => {
  const [values, setValues] = useState({ yourId: "", otherId: "" });
  const [showError, setShowError] = useState([]);

  const handelChange = (e) => {
    console.log(e.target.parentElement);
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

  const handelSubmit = () => {
    console.log("object", datas.length);
    const errorList = [];
    for (let index = 0; index < datas.length; index++) {
      const name = datas[index].name;
      const value = values[name];
      console.log(name);

      if (value.length < 1) {
        errorList.push(name);
      }
    }
    if (errorList.length > 0) {
      setShowError(errorList);
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
          variant="contained"
          className="custom-bg fw-bold fs-12 text-white"
          onClick={handelSubmit}
        >
          שליחה
        </Button>
      </div>
    </div>
  );
};

export default MachCouplePage;
