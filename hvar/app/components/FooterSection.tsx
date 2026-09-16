import styles from './styles/Footer.module.css';

export default function FooterSection() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.col}>
                    <h4 className={styles.heading}>OPENING HOURS</h4>
                    <p className={styles.text}>Tuesday – SUnday</p>
                    <p className={styles.text}>11:00 – 24:00</p>
                    <div className={styles.socials}>
                        <a
                            href="https://www.instagram.com/restaurant.opatija"
                            className={styles.socialLink}
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={styles.col}>
                    <h4 className={styles.heading}>LOCATION</h4>
                    <p className={styles.text}>Fausta Vrančića 1</p>
                    <p className={styles.text}>21000, Split</p>
                    <p className={styles.text}>Hrvatska</p>
                    <p className={styles.text}>021 288 222</p>
                    <p className={styles.text}>099 744 0488</p>
                    <a
                        href="https://www.google.com/maps/place/Restaurant+Opatija/@43.5132554,16.46147,17.77z/data=!4m9!1m2!2m1!1sFausta+Vrančića+1,+21000,+Split,+Hrvatska!3m5!1s0x13355e179a750b6b:0x841aac409d85726d!8m2!3d43.5120579!4d16.4620334!16s%2Fg%2F11cn7rtxj7?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D"
                        className={styles.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        VIEW ON MAP
                    </a>
                </div>

            </div>
        </footer>
    );
}