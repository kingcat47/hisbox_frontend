import styles from "./styles.module.scss";

import * as React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SvgIcon from "../../SvgIcon";

interface BottomBarItemProps {
  path: "add" | "first" | "more";
  icon: React.ReactElement;
  filledIcon: React.ReactElement;
}

export default function BottomBarItem({
  path,
  icon,
  filledIcon,
}: BottomBarItemProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentPage = location.pathname.startsWith(`/${path}`);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/${path}`);
      setIsTransitioning(false);
    }, 150); // transition 시간의 절반으로 설정
  };

  const getText = () => {
    switch (path) {
      case "add":
        return "추가";

      case "first":
        return "메인";

      case "more":
        return "더보기";
    }
  };

  return (
    <div
      className={styles.item}
      onClick={handleClick}
      style={{
        opacity: isTransitioning ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      {isCurrentPage ? (
        <SvgIcon icon={filledIcon} color={"#2871ff"} />
      ) : (
        <SvgIcon icon={icon} color={"#afafaf"} />
      )}

      <p
        className={[styles.text, isCurrentPage && styles.activeText].join(" ")}
      >
        {getText()}
      </p>
    </div>
  );
}
