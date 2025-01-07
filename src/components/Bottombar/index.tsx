import styles from "./styles.module.scss";
import AddIcon from "../../assets/Icon/add.svg?react";
import AddFilledIcon from "../../assets/Icon/addFill.svg";
import GroupIcon from "../../assets/Icon/group.svg";
import GroupFilledIcon from "../../assets/Icon/groupFill.svg";
import SwordsIcon from "../../assets/Icon/swords.svg";
import SwordsFilledIcon from "../../assets/Icon/swordsFill.svg";
import BottomBarItem from "./ButtomBarItem";

function BottomBar() {
  return (
    <>
      <div className={styles.container}>
        <BottomBarItem
          path={"add"}
          icon={<GroupIcon />}
          filledIcon={<GroupFilledIcon />}
        />
        <BottomBarItem
          path={"first"}
          icon={<AddIcon />}
          filledIcon={<AddFilledIcon />}
        />
        <BottomBarItem
          path={"more"}
          icon={<SwordsIcon />}
          filledIcon={<SwordsFilledIcon />}
        />
      </div>
    </>
  );
}

export default BottomBar;
