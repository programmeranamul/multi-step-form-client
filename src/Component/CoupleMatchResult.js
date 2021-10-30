import React from "react";

const CoupleMatchResult = ({ result }) => {
  console.log("rea", result);

  return (
    <div className="pb-5 mb-3">
      {result && (
        <div>
          <h6>firstName : {result.firstName}</h6>
          <h6>secondName : {result.secondName}</h6>
          <h6>totalAnswers : {result.totalAnswers}</h6>
          <h6>matchAnswers : {result.matchAnswers}</h6>
          <h6>unMatchAnswers : {result.totalAnswers - result.matchAnswers}</h6>
          <h6>percentageMatchAnswers : {result.percentageMatchAnswers}% </h6>
          <h6>sexNeedsText : {result.sexNeedsText}</h6>
          <h6>commonText : {result.commonText}</h6>
          <h6>sameGiverTakerText : {result.sameGiverTakerText}</h6>
          <h6>sameLoveLanguageText : {result.sameLoveLanguageText}</h6>
          <h6>sameHabitsText : {result.sameHabitsText}</h6>
          <h6>samePrimaryNeedText : {result.samePrimaryNeedText}</h6>
          <h6>sameSecondNeedText : {result.sameSecondNeedText}</h6>
        </div>
      )}
      {/* <h3>
        Match between: <b className="text-danger">{result?.percent}%</b>
      </h3>
      <h5>
        Answer Match : <b>{result?.matchCount}</b>
      </h5>
      <div>
        {result?.unmatchArray.map((res, index) => (
          <div className="bg-white rounded p-2 mb-2" key={index}>
            <p className="mb-0">Field Name: {res.fildName}</p>
            <p className="mb-0">
              First Answer:{" "}
              {typeof res.firstAnswer === "object"
                ? res.firstAnswer.map((r) => r)
                : res.firstAnswer}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CoupleMatchResult;
