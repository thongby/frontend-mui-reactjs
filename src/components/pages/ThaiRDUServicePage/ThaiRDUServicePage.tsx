import * as React from "react";
import ThaiRDUDownload from "../../thairdu/ThaiRDUDownload";
import ThaiRDUFeature from "../../thairdu/ThaiRDUFeature";
import ThaiRDUQA from "../../thairdu/ThaiRDUQA";

type ThaiRDUServicePageProps = {
  //
};

const ThaiRDUServicePage: React.FC<any> = () => {
  return (
    <>
      <div>ThaiRDUServicePage</div>
      <br/>
      <ThaiRDUFeature/>
      <br />
      <ThaiRDUDownload/>
      <br/>
      <ThaiRDUQA/>
    </>
  );
};

export default ThaiRDUServicePage;
