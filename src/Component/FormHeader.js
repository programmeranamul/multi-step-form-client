import React from "react";
import "./Form.css";

const FormHeader = ({ rtl1, rtl2, rtl3, rtl4 }) => {
  return (
    <div className="">
    {/* <div className="container"> */}
      <div className=" form__header before__border mt-4 p-4  bg-white">
      {/* <div className=" form__header before__border col-lg-8 mx-auto mt-4 p-4  bg-white"> */}
        <h3 className="fw-600">בדיקת התאמה לזוגיות ארוכת טווח</h3>
        <div>
          <p className="mb-2 small" dir="rtl">
            {rtl1}
          </p>
          <p dir="rtl" className="small mb-0">
            {rtl2}
          </p>
          <p dir="rtl" className="small mb-0">
            {rtl3}
          </p>
          <p dir="rtl" className="small mb-0">
            {rtl4}
          </p>
        </div>
        <p className="text-danger mb-0">* חובה לענות</p>
      </div>
    </div>
  );
};

export default FormHeader;
