import Link from 'next/link';
import styles from './styles/About.module.css';

export default function AboutSection() {
    return (
        <section className={styles.section}>
            <div className={styles.bgLogo} aria-hidden="true" />

            <div className={styles.inner}>
                <p className={styles.kicker}>ABOUT THE RESTAURANT</p>

                <h2 className={styles.title}>OUR STORY</h2>

                <p className={styles.text}>
                    In the heart of Split, our restaurant brings together the flavours, warmth and
                    traditions of Dalmatia. At the centre of our kitchen is the open fire, where
                    carefully selected meat, fresh fish and seasonal ingredients are prepared over
                    the grill. Every weekend, our kitchen takes on a special tradition with
                    slow-roasted lamb, bringing family and friends together around the table.
                    We believe that great dining is about more than the food — it is about the
                    atmosphere, the fire, the people and the moments shared together. A genuine
                    taste of Dalmatia, served in the heart of Split.
                </p>

                <Link href="/about" className={styles.cta}>
                    READ MORE
                </Link>
            </div>
        </section>
    );
}
