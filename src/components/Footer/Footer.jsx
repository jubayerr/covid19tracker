import React from 'react';
import styles from './Footer.module.css'

const Copyright = 'https://showkatjubayer.netlify.app/'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.footerText}>Built By <b><a className={styles.footerLink} rel="noreferrer" target="_blank" href={Copyright}><i>Jubayer</i></a></b></p>
        </div>
    );
};

export default Footer;