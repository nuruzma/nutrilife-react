import React from 'react';


const dietData = [
    {
        name : 'Vegetarian & vegan',
        image : '/images/vegetarian and vegan.jpg'
    },

    {
        name : 'Low Carb',
        image : '/images/low carb.jpg'
    },

    {
        name : 'Gluten Free',
        image : '/images/gluten-free.jpg'
    },

    {
        name : 'Low Fat',
        image : '/images/Low Fat Diet.jpg'
    }
];

const DietCategories = () => {
    
    return (
        <section className='diet-categories'>
                <h2>Explore Diet Categories</h2>
                <p> We provide various diet categories to help you achieve your health goals. </p>
                <div className='category-grid'> {dietData.map((category,index) => (
                    <div key={index} className='category-card'><img src={category.image} alt={category.name} />
                    <h3>{category.name}</h3></div>))};
                </div>
        </section>
        
    );
};

export default DietCategories;