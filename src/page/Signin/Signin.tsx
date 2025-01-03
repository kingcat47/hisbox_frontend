import { useState } from "react";
import { InputComponent } from "../../components/Input";
import styles from "./styles.module.scss";
import { ButtonComponent } from "../../components/Button";
import SvgIcon from "../../components/SvgIcon";
import PinkIcon from "../../assets/Icon/pink.svg";
import { ReactSVG } from "react-svg";

export const Sign_page = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className={styles.container}>
        <SvgIcon
          color={"#f3647e"}
          icon={<ReactSVG src={PinkIcon} />}
          width={200}
          height={200}
        />
        <div className={styles.sang}>
          <InputComponent
            placeholder="아이디"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <InputComponent
            placeholder="비밀번호"
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <ButtonComponent
          className={styles.button}
          text={"로그인"}
        ></ButtonComponent>
      </div>
    </>
  );
};
