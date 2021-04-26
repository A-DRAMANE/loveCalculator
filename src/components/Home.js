import React,{useState} from 'react'
import {Calcul} from './CalcuFonction'

export function Home() {
    const [tonNom, setTonNom] = useState('');
    const [sonNom, setSonNom] = useState('');

    const handleCalcule = async (tonNom,sonNom) =>{
        const respons = await Calcul(tonNom,sonNom)
        console.log(respons);
    }
    return (
        <div className="container">
            <h1>LOVE CALCULATOR</h1>
            <h2>Trouve ton % d'AMOUR</h2>
            <div className="form-contain">
                <div className="form">
                    <div className="form-row">
                        <h3></h3>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            value={tonNom}
                            onChange={e => setTonNom(e.target.value)}
                        />
                    </div>
                    <div className="form-row midel"></div>
                    <div className="form-row">
                        <h3></h3>
                        <input
                            type="text"
                            placeholder="Son nom"
                            value={sonNom}
                            onChange={e => setSonNom(e.target.value)}
                        />
                    </div>
                </div>
                <button onClick={handleCalcule}>CALCULATE LOVE %</button>
            </div>
            <h1>{}</h1>
        </div>
    )
}

export default Home
