import { useState } from 'react';
import closingArrow from '../assets/arrow_close.svg';
import openingArrow from '../assets/arrow_open.svg';

export default function DropDown({title, description}) {
    const [ isOpen, setIsOpen ] = useState(false);

    return isOpen ? (
        <div className="dropDown">
            <button onClick={() => setIsOpen(false)}>
                {title}
                <img src={openingArrow} alt=" Icon flèche ouvrante. "/>
            </button>
            <div className='adDescription'>
                {title === 'Equipements' ? description.map(equipement => <span key={equipement}>{equipement}</span>) : description}
            </div>
            
        </div>
    ) : (
        <div className="dropDown">
            <button onClick={() => setIsOpen(true)}>
                {title}
                <img src={closingArrow} alt=" Icon flèche fermante. "/>
            </button>
        </div>
        
    )
}