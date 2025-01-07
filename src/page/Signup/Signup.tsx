import { useState } from "react";
import { InputComponent } from "../../components/Input";
import styles from "./styles.module.scss";
import { ButtonComponent } from "../../components/Button";
import SvgIcon from "../../components/SvgIcon";
import PinkIcon from "../../assets/Icon/pink.svg";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp_page = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const SignUpUser = async () => {
    try {
      if (id == "" || password == "") {
        alert("채워");
        return;
      }

      const req = await axios.post("http://localhost:3000/user/signup", {
        id: id,
        password: password,
        username: username,
      });
      localStorage.setItem("accessToken", req.data.data.accessToken);
      localStorage.setItem("refreshToken", req.data.data.refreshToken);
      alert("회원가입 성공");
      navigate("/signin");
    } catch (error) {}
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
            placeholder="유저이름"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
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
          text={"회원가입"}
          onClick={SignUpUser}
        ></ButtonComponent>
        <ButtonComponent
          className={styles.buttonofunder}
          text={"로그인"}
          onClick={() => {
            navigate("/signin");
          }}
        ></ButtonComponent>
      </div>
    </>
  );
};
