import * as React from "react";

import SummaryCard from "../../homepage/SummaryCard";
import RDUProvinceChart from "../../homepage/RDUProvinceChart";
import RDUProvinceMap from "../../homepage/RDUProvinceMap";
import RDUProvinceList from "../../homepage/RDUProvinceList";
import RDUCountryInfo from "../../homepage/RDUCountryInfo";
import RDUHospitalChart from "../../homepage/RDUHospitalChart";
import RDUPCUChart from "../../homepage/RDUPCUChart";
import PrivateHospitalChart from "../../homepage/PrivateHospitalChart";
import DrugStoreGPPChart from "../../homepage/DrugStoreGPPChart";
import HPVCInfoChart from "../../homepage/HPVCInfoChart";
import TAWAIChart from "../../homepage/TAWAIChart";
import PrivateClinicChart from "../../homepage/PrivateClinicChart";

type HomePageProps = {
  //
};

const HomePage: React.FC<any> = () => {
  return (
    <>
      <div>การพัฒนาประเทศสู่ประเทศที่มีการใช้ยาอย่างสมเหตุผล</div>
      <br />
      <div>
        <SummaryCard />
      </div>
      <br />
      <div>
        <RDUProvinceChart />
      </div>
      <br />
      <div>
        <RDUProvinceMap />
      </div>
      <br />
      <h2>จังหวัดที่มีการใช้ยาอย่างสมเหตุผล</h2>
      <br />
      <div>
        <RDUProvinceList />
      </div>
      <br />
      <div>
        <RDUHospitalChart />
      </div>
      <br />
      <div>
        <RDUPCUChart />
      </div>
      <br />
      <div>
        <PrivateHospitalChart />
      </div>
      <br />
      <div>
        <PrivateClinicChart />
      </div>
      <br />
      <div>
        <DrugStoreGPPChart />
      </div>
      <br />
      <div>
        <HPVCInfoChart />
      </div>
      <br />
      <div>
        <TAWAIChart />
      </div>
      <br />
      <h2>แนวทางการพัฒนาประเทศใช้ยาอย่างสมเหตุผล</h2>
      <br />
      <div>
        <RDUCountryInfo />
      </div>
    </>
  );
};

export default HomePage;
