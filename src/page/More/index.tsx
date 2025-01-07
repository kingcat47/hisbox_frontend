import { MoreBoxComponent } from "../../components/MoreBox";
import styles from "./styles.module.scss";
export const More_Page = () => {
  return (
    <>
      <div className={styles.container}>
        <MoreBoxComponent
          title={"title이요"}
          text={"아무튼 좋은 노래임"}
          link={"asfdsd"}
        />
      </div>
    </>
  );
};
