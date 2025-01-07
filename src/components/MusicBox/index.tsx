import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import SvgIcon from "../SvgIcon";
import { ReactSVG } from "react-svg";
import PinkIcon from "../../assets/Icon/pink.svg";

interface MusicBoxProps {
  title: string;
  link: string;
  onClick: () => void;
}

export const MusicComponents = ({ title, link }: MusicBoxProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <SvgIcon
          color={"#fa92a5"}
          icon={<ReactSVG src={PinkIcon} />}
          width={100}
          height={100}
        />
        <Link to={link}>바로가기</Link>
      </div>
    </>
  );
};
