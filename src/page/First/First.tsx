import { InputComponent } from "../../components/Input";
import { useState } from "react";
import styles from "./styles.module.scss";

export const First_page = () => {
  const [serch_title, setSerch_title] = useState("");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.serchbar}>
          <InputComponent
            placeholder="노래 제목 입력"
            value={serch_title}
            onChange={(e) => {
              setSerch_title(e.target.value);
            }}
          />
          <div className={styles.selectionzon}>선택하는곳</div>
          <div className={styles.main}>음악목록 나오는곳</div>
          <p>음악추가버튼도 필요</p>
        </div>
      </div>
      <h1>First Page</h1>
    </>
  );
};
