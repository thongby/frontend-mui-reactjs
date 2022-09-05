import * as React from "react";

import SummaryCard from '../../homepage/SummaryCard'
import RDUProvinceChart from '../../homepage/RDUProvinceChart'
import RDUProvinceMap from '../../homepage/RDUProvinceMap'
import RDUProvinceList from '../../homepage/RDUProvinceList'
import RDUCountryInfo from "../../homepage/RDUCountryInfo";

type HomePageProps = {
  //
};

const HomePage: React.FC<any> = () => {
  return (
    <>
      <div>HomePage</div>
      <div><SummaryCard/></div>
      <div><RDUProvinceChart/></div>
      <div><RDUProvinceMap/></div>
      <div><RDUProvinceList/></div>
      <div><RDUCountryInfo/></div>
    </> 
  );
};

export default HomePage;
