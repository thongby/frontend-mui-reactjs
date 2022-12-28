import * as React from "react";
import AdmitAndDrugValueIPDHospital from "../../drugservice/AdmitAndDrugValueIPDHospital";
import DispensingAndDrugValueOPDHospital from "../../drugservice/DispensingAndDrugValueOPDHospital";
import DispensingAndDrugValuePCU from "../../drugservice/DispensingAndDrugValuePCU";
import DrugPer10000Admissions from "../../drugservice/DrugPer10000Admissions";
import HPVCSeriousAE from "../../drugservice/HPVCSeriousAE";
import Top100DrugDispensing from "../../drugservice/Top100DrugDispensing";

type DrugServicePageProps = {
  //
};

const DrugServicePage: React.FC<any> = () => {
  return (
    <>
    <div>สถิติบริการด้านยา</div>
    <br/>
    <div><DispensingAndDrugValueOPDHospital/></div>
    <br/>
    <div><AdmitAndDrugValueIPDHospital/></div>
    <br/>
    <div><DispensingAndDrugValuePCU/></div>
    <br/>
    <div><Top100DrugDispensing/></div>
    <br/>
    <div><DrugPer10000Admissions/></div>
    <br/>
    <div><HPVCSeriousAE/></div>
    </>
  );
};

export default DrugServicePage;
