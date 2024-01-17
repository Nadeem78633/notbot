import { Switch } from "@mui/material";

import clockIcon from "./assets/img/icon-clock.svg";
import message from "./assets/img/share-icon-message.svg";
import email from "./assets/img/share-icon-email.svg";
import linkedin from "./assets/img/share-icon-linkedin.svg";
import facebook from "./assets/img/share-icon-facebook.svg";
import twitter from "./assets/img/share-icon-twitter.svg";

const DataComponent = () => {
  return [
    {
      id: 1,
      time: "15 Minute Meeting",
      otherTime: "/ 15-minute-meeting",
      copyLink: "Copy Link",
      clockIcon: clockIcon,
      minute: "15 minutes",
      meeting: "Book a meeting with me for 15 minutes",
      share: [message, email, linkedin, facebook, twitter],
      switch: <Switch defaultChecked style={{ height: "100%" }} />,
      booking: "Booking is ON",
    },
    {
      id: 2,
      time: "30 Minute Meeting",
      otherTime: "/ 30-minute-meeting",
      copyLink: "Copy Link",
      clockIcon: clockIcon,
      minute: "30 minutes",
      meeting: "Book a meeting with me for 15 minutes",
      share: [message, email, linkedin, facebook, twitter],
      switch: <Switch defaultChecked style={{ height: "100%" }} />,
      booking: "Booking is ON",
    },
    {
      id: 3,
      time: "60 Minute Meeting",
      otherTime: "/ 60-minute-meeting",
      copyLink: "Copy Link",
      clockIcon: clockIcon,
      minute: "1 hour",
      meeting: `Book a meeting with me for 15 minutes`,
      share: [message, email, linkedin, facebook, twitter],
      switch: <Switch style={{ height: "100%" }} />,
      booking: "Booking is OFF",
    },
  ];
};

export default DataComponent;
