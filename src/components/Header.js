import React, { Component } from "react";
import image from "../assest/coverImage.jpg";
import styles from "./Style.module.css";

class header extends Component {
  render() {
    return (
      <header className={styles.MainHeader}>
        <img src={image} alt="sag to roh mweysam" />
      </header>
    );
  }
}

export default header;
