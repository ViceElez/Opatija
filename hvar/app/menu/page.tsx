import styles from './MenuPageStyle.module.css';

const menuSections = [
    {
        kicker: "TO START",
        title: "HLADNA PREDJELA / COLD STARTERS",
        items: [
            { name: "Dalmatinski pršut (100g)", price: "9 €", desc: "", badge: "" },
            { name: "Selekcija dalmatinskih sireva (100g)", price: "8 €", desc: "", badge: "" },
            { name: "Salata od hobotnice", price: "15 €", desc: "", badge: "" },
            { name: "Pašteta od tune", price: "8 €", desc: "", badge: "" },
        ]
    },
    {
        kicker: "FROM THE POT",
        title: "JUHE / SOUPS",
        items: [
            { name: "Goveđa juha", price: "4 €", desc: "", badge: "" },
            { name: "Riblja juha", price: "4 €", desc: "", badge: "" },
        ]
    },
    {
        kicker: "HOMEMADE",
        title: "TJESTENINE I RIŽOTI / PASTA & RISOTTO",
        items: [
            { name: "Špageti carbonara", price: "13 €", desc: "", badge: "" },
            { name: "Makaruni sa kozicama", price: "", desc: "", badge: "" },
            { name: "Tagliatelle sa biftekom i tartufatom", price: "20 €", desc: "", badge: "" },
            { name: "Crni rižot od sipe", price: "14 €", desc: "", badge: "" },
            { name: "Rižot od kozica", price: "16 €", desc: "", badge: "" },
            { name: "Rižot od povrća", price: "12 €", desc: "", badge: "" },
        ]
    },
    {
        kicker: "FROM THE ADRIATIC",
        title: "MORSKA JELA / SEAFOOD",
        items: [
            { name: "Oborita riba", price: "70 €", desc: "", badge: "" },
            { name: "Lignje na žaru (1 kg)", price: "60 €", desc: "", badge: "" },
            { name: "Lignje frigane (300 g)", price: "22 €", desc: "", badge: "" },
            { name: "Filet oborite ribe (200 g)", price: "35 €", desc: "", badge: "" },
            { name: "Škampi (1 kg)", price: "65 €", desc: "", badge: "" },
            { name: "Školjke (1 kg)", price: "30 €", desc: "", badge: "" },
        ]
    },
    {
        kicker: "FROM THE GRILL",
        title: "MESNA JELA / MEAT DISHES",
        items: [
            { name: "Piletina sa žara", price: "14 €", desc: "", badge: "" },
            { name: "Miješano meso", price: "18 €", desc: "", badge: "" },
            { name: "Ražnjići", price: "12 €", desc: "", badge: "" },
            { name: "Čevapi", price: "12 €", desc: "", badge: "" },
            { name: "Punjena pljeskavica", price: "14 €", desc: "", badge: "" },
            { name: "Pljeskavica", price: "12 €", desc: "", badge: "" },
            { name: "Plata \u201cOpatija\u201d za dvije osobe", price: "50 €", desc: "", badge: "" },
            { name: "Naravni odrezak", price: "16 €", desc: "", badge: "" },
            { name: "Bečki odrezak", price: "16 €", desc: "", badge: "" },
            { name: "Cordon bleu", price: "16 €", desc: "", badge: "" },
            { name: "Ramstek na žaru", price: "24 €", desc: "", badge: "" },
            { name: "Punjeni ramstek", price: "26 €", desc: "", badge: "" },
            { name: "Biftek na žaru", price: "30 €", desc: "", badge: "" },
            { name: "Teleći kotlet", price: "16 €", desc: "", badge: "" },
            { name: "Pohani sir", price: "12 €", desc: "", badge: "" },
        ]
    },
    {
        kicker: "FOR OUR YOUNGEST GUESTS",
        title: "ZA MALE GOSTE / KIDS' MENU",
        items: [
            { name: "Pohana piletina", price: "8 €", desc: "", badge: "" },
            { name: "Tjestenina milanese", price: "6 €", desc: "", badge: "" },
        ]
    },
    {
        kicker: "FRESH & LIGHT",
        title: "SALATE / SALADS",
        items: [
            { name: "Salata s piletinom", price: "14 €", desc: "", badge: "" },
            { name: "Salata s ramstekom", price: "16 €", desc: "", badge: "" },
            { name: "Grčka salata", price: "", desc: "", badge: "" },
            { name: "Sezonska salata", price: "5 €", desc: "", badge: "" },
        ]
    },
    {
        kicker: "ON THE SIDE",
        title: "PRILOZI / SIDE DISHES",
        items: [
            { name: "Pomfrit", price: "4 €", desc: "", badge: "" },
            { name: "Povrće na žaru", price: "5 €", desc: "", badge: "" },
            { name: "Riža", price: "3,5 €", desc: "", badge: "" },
            { name: "Blitva s krumpirom", price: "5 €", desc: "", badge: "" },
        ]
    },
    {
        kicker: "SWEET FINISH",
        title: "DESERTI / DESSERTS",
        items: [
            { name: "Palačinke s čokoladom", price: "6 €", desc: "", badge: "" },
            { name: "Palačinke s marmeladom", price: "6 €", desc: "", badge: "" },
            { name: "Sladoled", price: "4 €", desc: "", badge: "" },
            { name: "Dnevni kolač", price: "5 €", desc: "", badge: "" },
        ]
    },
];

export default function Menu() {
    return (
        <div className={styles.page}>
            <div className="pageBanner pageBanner--menu">
                <img
                    src="/images/logo.png"
                    alt="Opatija Logo"
                    className="pageBannerLogo"
                />
                <div className="pageBannerContent">
                    <p className="pageBannerKicker">FROM OUR KITCHEN</p>
                    <h1 className="pageBannerTitle">Menu</h1>
                </div>
            </div>

            <main className={styles.main}>
                {menuSections.map((section, i) => (
                    <section key={i} className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <p className={styles.kicker}>{section.kicker}</p>
                            <h2 className={styles.title}>{section.title}</h2>
                        </div>

                        <div className={styles.grid}>
                            {section.items.map((item, j) => (
                                <div key={j} className={styles.item}>
                                    <div className={styles.itemHeader}>
                                        <div className={styles.nameRow}>
                                            <h3 className={styles.name}>{item.name}</h3>
                                            {item.badge && (
                                                <span className={styles.badge}>{item.badge}</span>
                                            )}
                                        </div>
                                        {item.price && <span className={styles.price}>{item.price}</span>}
                                    </div>
                                    {item.desc && <p className={styles.desc}>{item.desc}</p>}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}