import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import IssuesList from "./ApiIssueList";
import Issues from "./RealTimeIssueList";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <img src={logo} className="App-logo" alt="logo" />
            <IssuesList/>
            <p>------</p>
            <Issues/>
            <Footer />
        </div>
    );
}

export default App;