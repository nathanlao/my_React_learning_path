import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="card">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}