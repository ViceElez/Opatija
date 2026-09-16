import Image from 'next/image';
import styles from './styles/Specialties.module.css';

export default function SpecialtiesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/food/img7.webp"
                    alt="Lunch Image"
                    fill
                    sizes="100vw"
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.kicker}>RECOMMENDATIONS</h3>
                <h2 className={styles.title}>OPATIJA SPECIALTIES</h2>
                <div className={styles.item}>
                    <h4 className={styles.name}>Oborita Riba</h4>
                    <p className={styles.desc}>Whole fresh fish, oven-roasted the traditional way with potatoes and Dalmatian herbs</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Plata &quot;Opatija&quot; za Dvije Osobe</h4>
                    <p className={styles.desc}>Our signature meat platter for two, grilled to perfection and served with all the trimmings</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Crni Rižot od Sipe</h4>
                    <p className={styles.desc}>Adriatic black cuttlefish risotto, slow-cooked in its own ink for deep coastal flavor</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Škampi</h4>
                    <p className={styles.desc}>Fresh Adriatic scampi, simply prepared to let the sweetness of the sea shine through</p>
                </div>
                <div className={styles.item}>
                    <h4 className={styles.name}>Biftek na Žaru</h4>
                    <p className={styles.desc}>Chargrilled beef fillet, tender and smoky, a house favorite among meat lovers</p>
                </div>
            </div>
        </section>
    );
}