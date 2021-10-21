import React from "react";


const SubmitForm = ({createNexFrom, id}) => {
 
  return (
    // <div className="container">
      <div className=" mt-4 p-4 rounded roubded-7px before__border  bg-white">
       <h2>בדיקת התאמה לזוגיות ארוכת טווח</h2>
       <p>Your response has been recorded.</p>
       <p>Your Id  <span className="text-danger fw-bold"> { id}</span></p>
       <button className="linkBtn" onClick={createNexFrom}>Submit another response</button>
      </div>
    // </div>
  );
};

export default SubmitForm;
