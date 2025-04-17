import React, {useState} from "react";




const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };


    return (
        <header>
            <nav>
                    <div className="logo">
                        <div className="logo-icon"></div>
                        <span>NutriLife</span>
                    </div>

                    <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Mobile menu toggle">☰
                        <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                        </div>
                    </button>
        


                    <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                        <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                        <li><a href="#categories" onClick={() => setMobileMenuOpen(false)}>Categories</a></li>
                        <li><a href="#articles" onClick={() => setMobileMenuOpen(false)}>Articles</a></li>
                        <li><a href="#calculators" onClick={() => setMobileMenuOpen(false)}>Calculators</a></li>
                        <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                    </ul>
            </nav> 
        

            <div id="home"  className="hero">
                <h1>Your Guide to Healthy Living</h1>
                <p>Discover the perfect balance of nutrition, fitness, and mindfulness</p>
            </div>
        </header>
    );
};

export default Header; 


