import { Link, useNavigate } from "react-router-dom";
import SvgIcon from "../SvgIcon";
import styles from "./styles.module.scss";
import { ReactSVG } from "react-svg";
import PinkIcon from "../../assets/Icon/pink.svg";

interface MusicBoxProps {
  title: string;
  text: string;
  link: string;

  onClick?: () => void;
}

export const MoreBoxComponent = ({ title, text, link }: MusicBoxProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <SvgIcon
          color={"#fa92a5"}
          icon={<ReactSVG src={PinkIcon} />}
          width={150}
          height={150}
        />
        <div className={styles.text}>{text}</div>
        <div
          className={styles.link}
          onClick={() => {
            navigate(link);
          }}
        >
          바로가기
        </div>
      </div>
    </>
  );
};
