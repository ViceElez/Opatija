import Image from "next/image";
import styles from "./WinePageStyle.module.css";

const wineCategories = [
    {
        kicker: "VINSKA KARTA / WINE LIST",
        title: "PJENUŠAVO VINO / SPARKLING WINE",
        layout: "image-right",
        image: "/images/wine/sparkling.webp",
        items: [
            { name: "Kos – Anita – Brut", desc: "Bregovita Hrvatska 12,5% · Čaša 6 € · Boca 20 €" },
            { name: "Sacchetto, \u201cEtt. Nera\u201d Glera – Brut", desc: "Italija, Veneto · Čaša 5 € · Boca 18 €" },
        ]
    },
    {
        kicker: "VINSKA KARTA / WINE LIST",
        title: "BIJELA VINA / WHITE WINE",
        layout: "image-left",
        image: "/images/wine/white.webp",
        items: [
            { name: "Pavičić – Bogdanuša", desc: "0,75 l" },
            { name: "Kos – Kraljevina", desc: "Bregovita Hrvatska 12,5% · 0,75 l" },
            { name: "Kos – Sauvignon Blanc", desc: "Bregovita Hrvatska · 0,75 l" },
            { name: "Sladić Marko – Debit", desc: "Dalmacija, Šibenik · 0,75 l" },
            { name: "Smokvica – Pošip", desc: "Južna Hrvatska, otok Korčula · 0,75 l" },
            { name: "Montiron – Malvazija", desc: "Istra" },
        ]
    },
    {
        kicker: "VINSKA KARTA / WINE LIST",
        title: "CRNA VINA / RED WINE",
        layout: "image-right",
        image: "/images/wine/red.webp",
        items: [
            { name: "Ego, Fjaka – Babić 2021.", desc: "Kontinentalna Hrvatska, Slavonija" },
            { name: "Ruža Omiška – Plavac Mali", desc: "Srednja Dalmacija, Omiš" },
            { name: "Marlais Atento – Plavac Mali", desc: "Pelješac, južna Hrvatska" },
        ]
    },
];

export default function WinePage() {
    return (
        <div className={styles.page}>
            <div className="pageBanner pageBanner--wine">
                <img
                    src="/images/logo.png"
                    alt="Opatija Logo"
                    className="pageBannerLogo"
                />
                <div className="pageBannerContent">
                    <p className="pageBannerKicker">CURATED SELECTIONS</p>
                    <h1 className="pageBannerTitle">Wine</h1>
                </div>
            </div>
            <main className={styles.main}>
                {wineCategories.map((cat, i) => (
                    <section key={i} className={styles.category}>
                        <div className={`${styles.categoryBody} ${cat.layout === 'image-right' ? styles.imageRight : styles.imageLeft}`}>

                            <div className={styles.categoryContent}>
                                <p className={styles.kicker}>{cat.kicker}</p>
                                <h2 className={styles.titleLarge}>{cat.title}</h2>
                                <div className={styles.itemList}>
                                    {cat.items.map((item, j) => (
                                        <div key={j} className={styles.wineItem}>
                                            <div className={styles.wineItemInner}>
                                                <h4 className={styles.wineName}>{item.name}</h4>
                                                <div className={styles.wineLine} />
                                            </div>
                                            {item.desc && (
                                                <p className={styles.wineDesc}>{item.desc}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.categoryImage}>
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    priority
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>

                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}