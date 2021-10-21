import React, { useEffect } from "react";
import { secondStepsDataList } from "./QueryData";
import FormHeader from "./FormHeader";
import { FormSubHeader } from "./FormSubHeader";
import Inputs from "./Inputs/Inputs";

const StapeTwo = ({
  value,
  handelChange,
  next,
  previous,
  showError,
  setRequiredList,
}) => {
  useEffect(() => {
    const reqiureds = secondStepsDataList.filter((datas) => datas.require);
    setRequiredList(reqiureds);
  }, [setRequiredList]);

  return (
    <>
      <FormHeader />
      <FormSubHeader />
      <Inputs
        showError={showError}
        datalist={secondStepsDataList}
        value={value}
        handelChange={handelChange}
        next={next}
        previous={previous}
      />
    </>
  );
};

export default StapeTwo;
