import React,{ useState } from 'react'
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import {Calcul} from './CalcuFonction'
import '../css/Home.css'

export function Home() {
    const [tonNom, setTonNom] = useState('');
    const [sonNom, setSonNom] = useState('');

    function handleCalcule (){
        Calcul(tonNom,sonNom)}
    return (
        <div className="container">
            <div className="title1">
                <h1>LOVE CALCULATOR</h1>
                <LoyaltyIcon/>
            </div>

            <h2 className="title1">Trouve ton % d'AMOUR</h2>
            <div className="form-contain">
                <div className="form">
                    <div className="form-row">
                        <h3>vous</h3>
                        <input
                            type="text"
                            placeholder="entrez votre nom"
                            value={tonNom}
                            onChange={e => setTonNom(e.target.value)}
                        />
                    </div> 
                    
                    <div className="form-row">
                        <h3>votre crush</h3>
                        <input
                            type="text"
                            placeholder="entrez son nom"
                            value={sonNom}
                            onChange={e => setSonNom(e.target.value)}
                        />
                    </div>
                </div>
                <button onClick={() => Calcul(tonNom,sonNom)}>CALCULATE LOVE %</button>
            </div>
            <h1 className="pourcentage">...</h1>
            <h2>sgksglsj</h2>
        </div>
    )
}

export default Home
