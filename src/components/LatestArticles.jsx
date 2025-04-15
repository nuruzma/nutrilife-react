import React from "react";


const articlesData = [
    {
        id: 1,
        category: 'Nutrition',
        date: 'March 10, 2025',
        title: 'The benefits of a Gluten-Free Diet',
        description: 'Discover how incorporating more gluten-free food into your diet can improve your health and benefit the environment.',
        image: '/images/glutten free diet.jpg'
    },

    {
        id: 2,
        category: 'Fitness',
        date: 'March 10,2025',
        title: 'HIIT vs. Steady-State Cardio',
        description: 'Compare the benefits and drawbacks of high-intensity interval training and traditional steady-state cardio workouts',
        image: '/images/hiit-workouts.jpg'
    },

    {
        id: 3,
        category: 'Mental-health',
        date: 'March 10, 2025',
        title: 'Mindfulness Meditation for Beginners',
        description: 'Learn simple mindfulness meditation techniques that you can incorporate into your daily routine',
        image: '/images/meditation.jpg'
    }
];

const LatestArticles = () => {
    return (
        <section className="latest-articles">
            <h2>Latest Articles</h2>
            <p>Stay up to date the latest trends and research in nutrition and healthy living. </p>
            <div className="articles-grid">
                {articlesData.map((article) => (
                    <div key={article.id} className="article-card">
                        <img src={article.image} alt={article.title} />
                        <div className="article-details">
                            <div className="article-meta">
                                <span className="category">
                                    {article.category}</span>
                                <span className="date">
                                    {article.date}</span>
                            </div>
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <button className="read-more">
                                Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestArticles;
