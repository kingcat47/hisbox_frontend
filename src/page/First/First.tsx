import { InputComponent } from "../../components/Input";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { MusicComponents } from "../../components/MusicBox";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import MusicItem from "../../entity/music-entity";

export const First_page = () => {
  const navigate = useNavigate();
  const [serch_title, setSerch_title] = useState("");
  const [music, setMusic] = useState<MusicItem[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/signin");
      return;
    }

    const fetchMusic = async () => {
      try {
        const req = await axiosInstance.get("/musics/getall");
        if (req.data) {
          console.log("Music data:", req.data);
          console.log("Music data:", req);
          setMusic(req.data);
        }
      } catch (error) {
        console.error("Failed to fetch music:", error);
      }
    };

    fetchMusic();
  }, []);

  const printmusic =
    Array.isArray(music) && music.length >= 0 ? (
      music.map((i: MusicItem) => (
        <MusicComponents
          key={i.id} // unique key 추가
          title={i.title}
          link={i.link}
          onClick={() => navigate(`/more/:${i.id}`)}
        />
      ))
    ) : (
      <div>음악을 추가하세요</div>
    );

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
          <div className={styles.main}>{printmusic}</div>
        </div>
      </div>
    </>
  );
};
