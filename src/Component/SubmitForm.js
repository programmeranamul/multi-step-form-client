import React from "react";
import { useHistory } from "react-router-dom";

const keys = [
  "giverTakerText",
  "primaryNeedText",
  "secondNeedText",
  "loveLanguageText",
  "strongHabitsText",
  "singleId",
];

const SubmitForm = ({ createNexFrom, id, value, answer, response }) => {
  // const response = [];

  // if (value) {
  //   for (let val in value) {
  //     if (val === "step") {
  //       continue;
  //     }

  //     if (typeof value[val] === "object") {
  //       const asnwer = value[val].join();
  //       const obj = { key: val, value: asnwer };
  //       response.push(obj);
  //     }

  //     const obj = { key: val, value: value[val] };
  //     response.push(obj);
  //   }
  // }

  const history = useHistory();

  return (
    <>
      <div className=" mt-4 p-4 rounded roubded-7px before__border  bg-white">
        <h2>בדיקת התאמה לזוגיות ארוכת טווח</h2>
        <p>Your response has been recorded.</p>
        {/* <p>
          Your Id <span className="text-danger fw-bold"> {id}</span>
        </p> */}
        <button className="linkBtn" onClick={createNexFrom}>
          Submit another response
        </button>
      </div>
      {/* {answer && ( */}
      <div>
        <h3 className="text-danger">Your Answer</h3>
        {/* <div>
          {
            response.length > 0 && response.map((res, index) => <div key={index}>
              <h5>{res.key}:<span className="text-danger"> {res.value}</span></h5>              
            </div>)
          }
        </div> */}
        <div>
          {keys.map((key, index) => (
            <div key={index}>
              <p
                className={`fw-bold ${
                  key === "singleId" ? "cursor_pointer" : " "
                }`}
                onClick={() =>
                  key === "singleId" && history.push("/match-couple")
                }
              >
                {key}
                <span className="text-danger">.{response[`${key}`]}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default SubmitForm;
