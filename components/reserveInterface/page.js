import ReserveApartmanComponent from "./apartman/page";
import ReserveHouseComponent from "./house/page";
import styles from "./page.module.css";
import ReserveTopartComponent from "./topart/page";

export default function ReserveInterfaceComponent(props) {
  let { title } = props;

  return (
    <div className={styles.container}>
      <h1>
        {title}
      </h1>
      {title === "Dream House" ? (<ReserveHouseComponent></ReserveHouseComponent>) : (<></>)}
      {title === "Dream Apartman" ? (<ReserveApartmanComponent></ReserveApartmanComponent>) : (<></>)}
      {title === "Dream Tópart" ? (<ReserveTopartComponent></ReserveTopartComponent>) : (<></>)}
    </div>
  );
}
