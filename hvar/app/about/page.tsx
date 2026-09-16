import "./AboutPageStyle.css";

export default function About() {
    return (
        <div>
            <div className="pageBanner pageBanner--about">
                <img
                    src="/images/logo.png"
                    alt="Opatija Logo"
                    className="pageBannerLogo"
                />
                <div className="pageBannerContent">
                    <p className="pageBannerKicker">A TASTE OF DALMATIA IN SPLIT</p>
                    <h1 className="pageBannerTitle">About</h1>
                </div>
            </div>

            <div>
                <section className="aboutWrap" aria-label="About Opatija">
                    <p className="aboutKicker">OUR STORY</p>
                    <h2 className="aboutTitle">Opatija</h2>

                    <div className="aboutBody">
                        <p>
                            Located in the heart of Split, <strong>Opatija</strong> is a restaurant
                            built around good food, open fire and the simple pleasure of gathering
                            around the table. Our kitchen draws inspiration from the traditions of
                            Dalmatia, bringing familiar flavours and quality ingredients together in
                            a warm and welcoming setting.
                        </p>

                        <p>
                            At the heart of our kitchen is the grill. Meat, fish and seasonal
                            ingredients are prepared over an open fire, allowing the quality of each
                            ingredient to speak for itself. The aroma of the fire, the sound of the
                            grill and the atmosphere of the restaurant are all part of the experience.
                        </p>

                        <p>
                            Weekends at <strong>Opatija</strong> have their own tradition. Our
                            slow-roasted lamb is prepared with care and served as a special occasion
                            to bring people together. It is the kind of meal meant to be shared —
                            around a full table, with good company and plenty of time to enjoy it.
                        </p>

                        <p>
                            We believe the best meals do not need to be complicated. They start with
                            good ingredients, honest cooking and a kitchen that respects tradition.
                            From the grill to the table, every dish is prepared with attention to
                            flavour, quality and the character of Dalmatian cuisine.
                        </p>

                        <p>
                            Whether you are joining us for a relaxed lunch, a weekend gathering or
                            an evening with friends, <strong>Opatija</strong> is a place to eat well,
                            slow down and enjoy the moment. In the heart of Split, we invite you to
                            take a seat, gather around the table and experience our way of doing
                            things.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

