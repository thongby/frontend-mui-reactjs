import * as React from "react";
import AdmitAndDrugValueIPDHospital from "../../drugservice/AdmitAndDrugValueIPDHospital";
import DispensingAndDrugValueOPDHospital from "../../drugservice/DispensingAndDrugValueOPDHospital";
import DispensingAndDrugValuePCU from "../../drugservice/DispensingAndDrugValuePCU";
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
    </>
  );
};

export default DrugServicePage;
