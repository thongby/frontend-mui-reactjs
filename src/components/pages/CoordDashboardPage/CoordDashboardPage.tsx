import * as React from "react";
import CoordSummaryCard from "../../coorddashboard/CoordSummaryCard";
import RDUProvinceMap from "../../homepage/RDUProvinceMap";
import TargetAmphoe from "../TargetAmphoe";
import TargetGroceries from "../TargetGroceries";
import TeamRDUAmphoe from "../TeamRDUAmphoe";
import TeamRDUProvince from "../TeamRDUProvince";

type CoordDashboardPageProps = {
  //
};

const CoordDashboardPage: React.FC<any> = () => {
  return (
    <>
      <CoordSummaryCard />
      <br />
      <RDUProvinceMap />
      <h2>อำเภอเป้าหมาย</h2>
      <TargetAmphoe />
      <br />
      <h2>ร้านชำเป้าหมาย</h2>
      <TargetGroceries />
      <br />
      <h2>ผู้ประสานงานจังหวัด</h2>
      <TeamRDUProvince />
      <br />
      <h2>ผู้ประสานงานอำเภอ</h2>
      <TeamRDUAmphoe />
      <br />
      <h2>โรงพยาบาล</h2>
      <TargetGroceries />
      <br />
      <h2>รพ.สต.</h2>
      <TargetGroceries />
      <br />
      <h2>โรงพยาบาลเอกชน</h2>
      <TargetGroceries />
      <br />
      <h2>คลินิกเอกชน</h2>
      <TargetGroceries />
      <br />
      <h2>ร้านขายยา GPP</h2>
      <TargetGroceries />
    </>
  );
};

export default CoordDashboardPage;
