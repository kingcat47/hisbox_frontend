import { useState } from "react";
import { InputComponent } from "../../components/Input";
import styles from "./styles.module.scss";
import { ButtonComponent } from "../../components/Button";
import SvgIcon from "../../components/SvgIcon";
import PinkIcon from "../../assets/Icon/pink.svg";
import { ReactSVG } from "react-svg";
import { axiosInstance } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export const SignIn_page = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = async () => {
    try {
      if (id == "" || password == "") {
        alert("채워");
        return;
      }

      const req = await axiosInstance.post("/user/signin", {
        id: id,
        password: password,
      });

      localStorage.setItem("accessToken", req.data.data.accessToken);
      localStorage.setItem("refreshToken", req.data.data.refreshToken);

      navigate("/first");
    } catch (error) {
      alert("응 니 잘 못");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <SvgIcon
          color={"#fa92a5"}
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
          onClick={() => {
            signInUser();
          }}
        ></ButtonComponent>
        <ButtonComponent
          className={styles.buttonofunder}
          text={"회원가입"}
          onClick={() => {
            navigate("/signup");
          }}
        ></ButtonComponent>
      </div>
    </>
  );
};
