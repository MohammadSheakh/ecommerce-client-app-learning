import React from "react";
import Header from "../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
function HomeScreen() {
    // window.scrollTo(0, 0);
    console.log("HOmeScreen ⌛⌛");
    return (
        <div>
            fdf
            <Header />
            <ShopSection />
            <CalltoActionSection />
            <ContactInfo />
            <Footer />
        </div>
    );
}
export default HomeScreen;
