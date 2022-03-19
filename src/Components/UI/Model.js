import { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./Model.module.css";
const BackDrop = (props) => {
  return <div onClick={props.onClose} className={styles.backdrop}></div>;
};
const OverLays = (props) => {
  return (
    <div className={styles.modal}>
      {props.children}
    </div>
  );
};
const modelElement = document.getElementById("overlays");
const Model = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop onClose ={props.onClose}></BackDrop>, modelElement)}
      {ReactDom.createPortal(
        <OverLays>{props.children}</OverLays>,
        modelElement
      )}
    </Fragment>
  );
};
export default Model;
