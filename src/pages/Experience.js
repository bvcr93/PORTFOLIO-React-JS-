import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008-2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Secondary school for electrical engineering and computing, Rijeka
          </h3>
          <p>high school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015-2022"
          iconStyle={{ background: "lightcoral", color: "#fff" }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            HOPS.doo. Matulji
          </h3>
          <p>Electrical service technician</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-present"
          iconStyle={{ background: "royalblue", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IT Academy, Beograd
          </h3>
          <p>Online web developer learning course</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
