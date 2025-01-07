import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import BottomBar from "./components/Bottombar";
import styles from "./App.module.scss";

function App() {
  const location = useLocation();

  const isLogin = location.pathname != "/signin" || "/signup";
  return (
    <>
      <div className={styles.container}>
        <Outlet />
        {/* {isLogin && <BottomBar />} */}
      </div>
    </>
  );
}

export default App;
