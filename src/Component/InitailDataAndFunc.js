import FristStep from "./FristStep";
import StapeTwo from "./StapeTwo";
import StapeThree from "./StapeThree";
import SubmitForm from "./SubmitForm";
import { Alert } from "react-bootstrap";

export const initaleData = {
  step: 1,
  Name: "",
  dateOfBirth: "",
  residence: "",
  sex: "",
  drawerWrite: "",
  heightInCm: "",
  //lifestyle: "",
  weekSports: "",
  eatHealthy: "",
  meditate: "",
  smoke: "",
  likeDoAtWork: "",
  drink: "",
  listenInSpareTime: [],
  // second step
  complimentSpouse: "",
  iLoveYou: "",
  expressEmotionsVerbally: "",
  likeMassage: "",
  likeKiss: "",
  expressEmotionsTouch: "",
  smallRomanticGifts: "",
  makeRomanticGestures: "",
  coupleJointActivity: "",
  idealFrequencyForSex: "",
  idealTimeForSex: "",
  feelLovedInaRelationship: "",
  loveYourselfInTheMirror: "",
  feelingCriticism: "",
  criticismPartner: "",
  harmonyCouple: "",
  coupleTimeLongTogether: "",
  valuesImportantRelationship: [],
  //step three
  exercisingGetMoney: "",
  reasonsForTheSuccess: [],
  mainCauseOfFailure: "",
  manageReadWhatExcitesOtherPeople: "",
  importantThingInLife: "",
  nextWeekScheduleAdvance: "",
  enterNewField: "",
  routineYouNeed: "",
  likeToTryNewThings: "",
  needChangesInYourLife: "",
  mindTakingRisks: "",
  setGoalsAndAchieveThem: "",
  peopleAppreciateYou: "",
  youToBeManagerOrManager: "",
  cultivateRelationships: "",
  closeRelationshipsYouGivingParty: "",
  easilyIntegrateIntoTeamwork: "",
  needToGiveToOthers: "",
  interestedInPersonalDevelopment: "",
  likeToStudy: "",
  attendedAnyCourse: "",
  donateMoneyToCharity: "",
  volunteerInTheCommunity: "",
  contributingToOthersEssential: "",
  moreYouGive: "",
  whatWouldYouLikeToSeeHappen: "",
};

// swith steps
export const swithSteps = (
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
  id,
  answer,
  response,
  submitLoading,
  
) => {

  console.log("res from initalDtaa", response)


  switch (step) {
    case 1:
      return (
        <FristStep
          value={value}
          handelChange={handelChange}
          next={handelNext}
          showError={showError}
          setShowError={setShowError}
          requiredList={requiredList}
          setRequiredList={setRequiredList}
        />
      );
    case 2:
      return (
        <StapeTwo
          value={value}
          handelChange={handelChange}
          next={handelNext}
          previous={previous}
          showError={showError}
          setShowError={setShowError}
          requiredList={requiredList}
          setRequiredList={setRequiredList}
        />
      );
    case 3:
      return (
        <StapeThree
          value={value}
          handelChange={handelChange}
          previous={previous}
          showError={showError}
          setShowError={setShowError}
          requiredList={requiredList}
          setRequiredList={setRequiredList}
          handelSubmit={handelSubmit}
          submitLoading={submitLoading}
        />
      );
    case 4:
      return (
        <SubmitForm
          value={value}
          createNexFrom={createNexFrom}
          id={id}
          answer={answer}
          response = {response}
          
        />
      );
    default:
      return (
        <div className="mt-4">
          <div className="px-4">
            <Alert variant="danger" className=" text-center">
              Something went wrong. Please Refresh this page
            </Alert>
          </div>
        </div>
      );
  }
};
