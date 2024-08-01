import { useState } from 'react';

const DEFAULT_TOTAL_CARDS_DRAWN = 9;

function Header(props:{action:any, handleValue:any}) {

    const [inputValue, setInputValue] = useState<number>(DEFAULT_TOTAL_CARDS_DRAWN);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(event.target.value);
        if (value < 1) value = 1;
        if (value > 16) value = 16;
        setInputValue(value);
        props.handleValue(value);
    }

    return <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div>
            <h1 className="text-xl font-bold">cc00ffee's Diva Tools</h1>
            <p className="text-xs text-gray-400">bootleg ddrtools for a project diva tournament</p>
        </div>
        <div className="flex items-center space-x-4">
            <input type="number" value={inputValue} onChange={handleInputChange} className="p-2 rounded bg-gray-700 text-white w-20" placeholder='Deck count'/>
            <button onClick={props.action} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Draw
            </button>
        </div>
    </header>
};
export default Header;