import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"

export default function App() {
    return (
        <div className="main">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}