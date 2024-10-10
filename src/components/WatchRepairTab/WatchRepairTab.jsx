import "./WatchRepairTab.css"
import React from 'react'
import Select from 'react-select'
const options = [
    { value: 'accurist', label: 'Accurist' },
    { value: 'anne_klein', label: 'Anne Klein' },
    { value: 'audemars_piguet', label: 'Audemars Piguet' },
    { value: 'avia', label: 'Avia' },
    { value: 'balmain', label: 'Balmain' },
    { value: 'baume_mercier', label: 'Baume & Mercier' },
    { value: 'bering', label: 'Bering' },
    { value: 'blanc_pain', label: 'Blanc Pain' },
    { value: 'breitling', label: 'Breitling' },
    { value: 'bulova', label: 'Bulova' },
    { value: 'calvin_klein', label: 'Calvin Klein' },
    { value: 'cartier', label: 'Cartier' },
    { value: 'certina', label: 'Certina' },
    { value: 'chanel', label: 'Chanel' },
    { value: 'chopard', label: 'Chopard' },
    { value: 'christian_dior', label: 'Christian Dior' }
];

export const WatchRepairTab = ()=>{
    
    return(
        <div className="pricing-section">
            <h1>Watch Repair Pricing</h1>
            <p>Select your watch brand to see pricing options, alternatively, you can <a className="link-to-pricing" href="#">request a repair quote</a> for your watch</p>
            <Select placeholder="sélectionner la marque" className="select-container"options={options} />
        </div>
    )
}