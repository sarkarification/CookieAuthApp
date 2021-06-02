import classes from "./Header.module.css";
import { GiNetworkBars } from "react-icons/gi";
import { FaWifi, FaBatteryThreeQuarters } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const Header = () => {
  return (
    <div className={classes.container}>
      12:00
      <GiNetworkBars className={classes.GiNetworkBars} />
      <FaWifi className={classes.FaWifi} />
      <FaBatteryThreeQuarters className={classes.FaBatteryThreeQuarters} />
      <HiLightningBolt className={classes.HiLightningBolt} />
    </div>
  );
};

export default Header;
