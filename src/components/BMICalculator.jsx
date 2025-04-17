import React, { useState} from "react";


const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState(null);

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBMI(calculatedBMI);
        }
    };

    return (
        <section id="calculators" className="bmi-calculator">
        <h2>BMI Calculator</h2>
        <div className="calculator-form">
        <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}/>
        <input 
        type="number"
        placeholder="weight (kg)"  
        value={weight}      
        onChange={(e) => setWeight(e.target.value)}/>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && <p>Your BMI: {bmi}</p>}
        </div>
        </section>
    );

};

export default BMICalculator;