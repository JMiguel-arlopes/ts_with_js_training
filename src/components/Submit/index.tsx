import { FunctionComponent } from "react";
import styles from "./submit.module.css";

interface SubmitProps {
  text: string;
}

const Submit: FunctionComponent<SubmitProps> = ({ text }) => {
  return <input type="submit" value={text} className={styles.submit} />;
};

export default Submit;
