import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./logo.module.css"

const Logo = () => {
    return <NavLink className={styles.logo} to="/">EasyWay</NavLink>
};

export default Logo;