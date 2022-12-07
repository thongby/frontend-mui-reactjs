import * as React from "react";
import ChangwatProfile from "../ChangwatProfile";
import TargetAmphoe from "../TargetAmphoe";
import TargetGroceries from "../TargetGroceries";
import TeamRDUAmphoe from "../TeamRDUAmphoe";
import TeamRDUProvince from "../TeamRDUProvince";

type AdminDashboardPageProps = {
  //
};

const AdminDashboardPage: React.FC<any> = () => {
  return (
    <>
      <div>AdminDashboardPage</div>
      <br />
      <h2>ข้อมูลจังหวัด</h2>
      <ChangwatProfile />
      <br />
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
    </>
  );
};

export default AdminDashboardPage;
