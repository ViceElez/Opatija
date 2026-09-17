import styles from './MenuPageStyle.module.css';

const menuSections = [
    {
        kicker: "TO START",
        title: "PREDJELA / APPETIZERS",
        items: [
            { name: "Dalmatinski pršut (100g)", price: "9,00 €", desc: "Dalmatian Prosciutto (100 g)", badge: "" },
            { name: "Selekcija dalmatinskih sireva (100g)", price: "8,00 €", desc: "Selection of Dalmatian Cheeses (100 g)", badge: "" },
            { name: "Salata od hobotnice", price: "15,00 €", desc: "Octopus Salad", badge: "" },
            { name: "Pašteta od tune", price: "8,00 €", desc: "Tuna Pâté", badge: "" },
            { name: "Pohani sir", price: "8,00 €", desc: "Breaded Cheese", badge: "" },
        ]
    },
    {
        kicker: "FROM THE POT",
        title: "JUHE / SOUPS",
        items: [
            { name: "Goveđa juha", price: "4,00 €", desc: "Beef Soup", badge: "" },
            { name: "Riblja juha", price: "4,00 €", desc: "Fish Soup", badge: "" },
        ]
    },
    {
        kicker: "HOMEMADE",
        title: "TJESTENINE I RIŽOTI / PASTA & RISOTTO",
        items: [
            { name: "Špageti carbonara", price: "14,00 €", desc: "Spaghetti Carbonara", badge: "" },
            { name: "Makaruni sa kozicama", price: "16,00 €", desc: "Macaroni with Prawns", badge: "" },
            { name: "Tagliatelle sa biftekom i tartufatom", price: "20,00 €", desc: "Tagliatelle with Beef Tenderloin & Truffle Sauce", badge: "" },
            { name: "Crni rižot od sipe", price: "14,00 €", desc: "Black Cuttlefish Risotto", badge: "" },
            { name: "Rižot od kozica", price: "16,00 €", desc: "Prawn Risotto", badge: "" },
            { name: "Rižot od povrća", price: "12,00 €", desc: "Vegetable Risotto", badge: "" },
        ]
    },
    {
        kicker: "FROM THE ADRIATIC",
        title: "MORSKA JELA / SEAFOOD DISHES",
        items: [
            { name: "Oborita riba", price: "70,00 €", desc: "Whole Fresh Fish (market catch)", badge: "" },
            { name: "Lignje na žaru (1 kg)", price: "60,00 €", desc: "Grilled Squid (1 kg)", badge: "" },
            { name: "Lignje frigane (300 g)", price: "22,00 €", desc: "Fried Squid (300 g)", badge: "" },
            { name: "Filet oborite ribe (200 g)", price: "35,00 €", desc: "Grilled Fresh Fish Fillet (200 g)", badge: "" },
            { name: "Škampi (1 kg)", price: "65,00 €", desc: "Scampi (1 kg)", badge: "" },
            { name: "Školjke (1 kg)", price: "30,00 €", desc: "Mussels (1 kg)", badge: "" },
        ]
    },
    {
        kicker: "FROM THE GRILL",
        title: "MESNA JELA / MEAT DISHES",
        items: [
            { name: "Piletina sa žara", price: "14,00 €", desc: "Grilled Chicken", badge: "" },
            { name: "Ražnjići", price: "16,00 €", desc: "Grilled Meat Skewers", badge: "" },
            { name: "Čevapi", price: "13,00 €", desc: "Čevapi", badge: "" },
            { name: "Punjena pljeskavica", price: "15,00 €", desc: "Stuffed Burger Patty", badge: "" },
            { name: "Pljeskavica", price: "12,00 €", desc: "Grilled Burger Patty", badge: "" },
            { name: "Naravni odrezak", price: "16,00 €", desc: "Grilled Pork Loin Steak", badge: "" },
            { name: "Miješano meso", price: "20,00 €", desc: "Mixed Grilled Meat", badge: "" },
            { name: "Bečki odrezak", price: "16,00 €", desc: "Wiener Schnitzel", badge: "" },
            { name: "Plata \u201cOpatija\u201d za dvije osobe", price: "50,00 €", desc: "\u201cOpatija\u201d Platter for Two", badge: "" },
            { name: "Cordon bleu", price: "16,00 €", desc: "Cordon Bleu", badge: "" },
            { name: "Teleći kotlet", price: "16,00 €", desc: "Veal Cutlet", badge: "" },
            { name: "Ramstek na žaru", price: "24,00 €", desc: "Grilled Rump Steak", badge: "" },
            { name: "Punjeni ramstek", price: "28,00 €", desc: "Stuffed Rump Steak", badge: "" },
            { name: "Biftek na žaru", price: "29,00 €", desc: "Grilled Beef Tenderloin Steak", badge: "" },
        ]
    },
    {
        kicker: "FOR OUR YOUNGEST GUESTS",
        title: "ZA MALE GOSTE / FOR OUR LITTLE GUESTS",
        items: [
            { name: "Pohana piletina", price: "8,00 €", desc: "Breaded Chicken", badge: "" },
            { name: "Tjestenina milanese", price: "6,00 €", desc: "Pasta Milanese", badge: "" },
        ]
    },
    {
        kicker: "FRESH & LIGHT",
        title: "SALATE / SALADS",
        items: [
            { name: "Salata s piletinom", price: "14,00 €", desc: "Chicken Salad", badge: "" },
            { name: "Salata s ramstekom", price: "16,00 €", desc: "Rump Steak Salad", badge: "" },
            { name: "Grčka salata", price: "8,00 €", desc: "Greek Salad", badge: "" },
            { name: "Sezonska salata", price: "5,00 €", desc: "Seasonal Salad", badge: "" },
        ]
    },
    {
        kicker: "ON THE SIDE",
        title: "PRILOZI / SIDE DISHES",
        items: [
            { name: "Pomfrit", price: "4,00 €", desc: "French Fries", badge: "" },
            { name: "Povrće na žaru", price: "5,00 €", desc: "Grilled Vegetables", badge: "" },
            { name: "Riža", price: "3,50 €", desc: "Rice", badge: "" },
            { name: "Blitva s krumpirom", price: "5,00 €", desc: "Swiss Chard with Potatoes", badge: "" },
        ]
    },
    {
        kicker: "SWEET FINISH",
        title: "DESERTI / DESSERTS",
        items: [
            { name: "Palačinke s čokoladom", price: "6,00 €", desc: "Pancakes with Chocolate", badge: "" },
            { name: "Palačinke s marmeladom", price: "6,00 €", desc: "Pancakes with Jam", badge: "" },
            { name: "Sladoled", price: "4,00 €", desc: "Ice Cream", badge: "" },
            { name: "Dnevni kolač", price: "5,00 €", desc: "Cake of the Day", badge: "" },
        ]
    },
    {
        kicker: "EXTRAS",
        title: "DODATCI / EXTRAS",
        items: [
            { name: "Kečap / Majoneza / Ajvar / Tartar / Senf", price: "1,00 €", desc: "Ketchup / Mayonnaise / Ajvar / Tartar Sauce / Mustard", badge: "" },
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