import { useState } from "react";
import { InputComponent } from "../../components/Input";
import styles from "./styles.module.scss";
import { ButtonComponent } from "../../components/Button";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export const AddMusic_Page = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [text, setText] = useState("");

  const createMusic = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/signin");
      return;
    }
    try {
      if (title == "" || link == "") {
        alert("채워");
        return;
      }
      const req = await axiosInstance.get("/musics");
      console.log(req.data);
      setTitle("");
      setLink("");
      setText("");
    } catch (error) {
      alert("실패해버림;;");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>노래를 추가해보세요!</h1>
        <div className={styles.main}>
          <div className={styles.sang}>
            <InputComponent
              placeholder={"제목"}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></InputComponent>
            <InputComponent
              placeholder={"링크"}
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            ></InputComponent>

            <InputComponent
              placeholder={"설명"}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></InputComponent>
            <ButtonComponent
              text={"저장"}
              onClick={() => {
                createMusic();
              }}
              className={styles.buttonofunder}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
};
