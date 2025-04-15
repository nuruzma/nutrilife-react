import React from 'react';
import Header from './components/Header.jsx';
import DietCategories from './components/DietCategories.jsx';
import LatestArticles from './components/LatestArticles.jsx';
import BMICalculator from './components/BMICalculator.jsx';
import NewsletterSignup from './components/NewsletterSignup.jsx';
import Footer from './components/Footer.jsx';
import './styles/Global.css';


function App () {
    return (
        <>
       <div className='App'>
        <Header />

        <main>
            <DietCategories />
            <LatestArticles />
            <BMICalculator />
            <NewsletterSignup />
            
        </main>

        <Footer />
       </div>
       </>
    );
};

export default App;