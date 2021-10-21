import React, { useEffect } from "react";
import { genaredDataList } from "./QueryData";
import FormHeader from "./FormHeader";
import Inputs from "./Inputs/Inputs";

const FristStep = ({
  value,
  handelChange,
  next,
  showError,
  setRequiredList,
}) => {
  useEffect(() => {
    const reqiureds = genaredDataList.filter((datas) => datas.require);
    setRequiredList(reqiureds);
  }, [setRequiredList]);

  return (
    <>
      <FormHeader
        rtl1="אין תשובות לא נכונות, הכול נכון."
        rtl2="מטרת הבדיקה למצוא התאמה לצד השני מבחינת הצרכים והערכים שלך."
        rtl3="השאלון בשבילך ולוקח בערך 20 דק, פנו לכם זמן."
        rtl4="בסוף השאלון מתקבל ניתוח תוצאות ראשוני שלך ומזהה התאמה."
        rtl5="מזהה התאמה ישמש לבדיקת התאמה לאחר שהצד השני גם ימלא את השאלון."
      />

      <Inputs
        showError={showError}
        datalist={genaredDataList}
        value={value}
        handelChange={handelChange}
        next={next}
      />
    </>
  );
};

export default FristStep;
