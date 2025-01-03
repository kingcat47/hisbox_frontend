import styles from "./styles.module.scss";
import styled from "styled-components";

interface PhotoProps {
  className?: string;
  src?: string;
}

const ImgItem = styled.img``;

export const PhotoComponent = ({ className, src }: PhotoProps) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <ImgItem src={src}></ImgItem>
    </div>
  );
};
