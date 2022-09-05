import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type RDUCountryInfoProps = {
  //
};

const RDUCountryInfo: React.FC<any> = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>ประเทศใช้ยาอย่างสมเหตุผล</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          หมายถึง ประเทศที่มีระบบกลไกให้เกิดการใช้ยาอย่างสมเหตุผล สอดคล้องตามแนวทางขององค์การอนามัยโลก
                ตั้งแต่ต้นน้าํ (ผู้ผลิตยา/บริษัทยา/ หน่วยกำกับ ดูแลด้านยา) กลางนํ้า (สถานบริการสุขภาพทั้งรัฐ เอกชนทุกระดับ/ ผู้ประกอบวิชาชีพด้านสุขภาพ)
                และ ปลายน้าํ (ประชาชน ครอบครัว และชุมชน) ประกอบด้วย 3 กลไกหลัก คือ การสร้างจิตสำนึกที่ดีและความตระหนักรู้ของบุคคล
                การบริหารจัดการที่ดี และการกำกับ ดูแลที่มีประสิทธิภาพ ทั้งนี้ในกลไกทั้ง 3 ส่วน จะเชื่อมโยงระหว่างกัน เพื่อให้เกิดการพัฒนา
                และแก้ปัญหาอย่างต่อเนื่อง ครอบคลุมทั้งยาแผนปัจจุบันและยาสมุนไพร
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>นโยบายประเทศใช้ยาอย่างสมเหตุผลโดยชุมชนเป็นศูนย์กลาง</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          หมายถึง การมุ่งจัดการระบบยาโดยมีชุมชน เป็นศูนย์กลาง เพื่อให้ประชาชนมีความปลอดภัยในการใช้ยา มีคุณภาพชีวิตที่ดีและสามารถ
                พึ่งตนเองด้านสุขภาพได้โดยสร้างการมีส่วนร่วมของชุมชน หน่วยงานรัฐ และเอกชน ในการ ออกแบบระบบสุขภาพชุมชน
                มีระบบการเฝ้าระวังเพื่อเตือนภัย มีการสร้างความรอบรู้ด้านการ ใช้ยาอย่างสมเหตุผล และมีความสามารถในการดูแลตนเองเบื้องต้นเมื่อเจ็บป่วย
                (เอกสาร สมัชชาสุขภาพแห่งชาติครั้งที่ 12)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography>การใช้ยาอย่างสมเหตุผล</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          หมายถึง ประชาชนมีความรู้ความเข้าใจ ในการใช้ยาเพื่อดูแล สุขภาพตนเองเบื้องต้น ตามความจำเป็น
                และใช้ยาที่ได้รับจากหน่วยบริการสุขภาพได้อย่างถูกต้อง คุ้มค่า ปลอดภัย เหมาะสมกับแต่ละบุคคล ทั้งในเรื่องโรค ขนาดยา
                วิธีใช้ และ ระยะเวลาตามที่กำหนด (เอกสารสมัชชาสุขภาพแห่งชาติครั้งที่ 12)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography>ความหมายของ ยา</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          หมายถึง ยา (รวมถึงวัคซีน) และผลิตภัณฑ์สมุนไพรที่ใช้เป็นยาตามกฎหมายว่าด้วยยา กฎหมายว่าด้วยผลิตภัณฑ์สมุนไพร ตลอดจนวัตถุออกฤทธิ์ต่อจิตและประสาท
                และยาเสพติด ให้โทษ ที่นำ มาใช้ทางยา รวมถึงผลิตภัณฑ์สุขภาพที่มุ่งหมายใช้เป็นยา (เอกสารสมัชชาสุขภาพ แห่งชาติ ครั้งที่ 12)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RDUCountryInfo;
