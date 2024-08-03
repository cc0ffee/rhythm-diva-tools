import { useState } from 'react';
import Badge from './Badge'

function SongCard(props: {image: any, title: string, artist: string, producer: string, bpm: string, difficulty: string, color: any, sub: string}) {
    const [bgColor, setBgColor] = useState(props.color);
    const [pickText, setPickText] = useState('');

    const handleClick = () => {
        if (bgColor === 'bg-gray-900') {
            setBgColor('bg-green-900');
            setPickText('Picked!');
        } else if (bgColor === 'bg-green-900') {
            setBgColor('bg-red-900');
            setPickText('Vetoed!');
        } else {
            setBgColor('bg-gray-900');
            setPickText('');
        }
    };

    const labelColor = pickText === 'Picked!' ? 'bg-green-500' : 'bg-red-500';

    return <button className={'w-200 h-200 rounded overflow-hidden shadow-lg m-2 bg-gray-900 border border-gray-700 relative'} onClick={handleClick}>
        <div className="relative h-80 w-80">
            <img className="h-full w-full object-cover" src={props.image} alt={props.title} />
            <div className={`absolute inset-0 ${bgColor} bg-opacity-60 flex flex-col justify-center items-center px-4 py-2`}>
                <div className="font-bold text-lg text-white text-center">{props.title}</div>
                {props.sub !== "" && (<div className="font-bold text-sm text-white text-center mb-2">{props.sub}</div>)}
                <p className="text-xs text-white text-center">{props.artist}</p>
                <div className="absolute bottom-4 w-full flex justify-center">
                    {pickText !== "" && (
                        <p className={`text-ms text-white ${labelColor} px-2 py-1 rounded`}>{pickText}</p>
                    )}
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-900">
            <Badge text={`${props.bpm} BPM`}/>
            <Badge text={`${props.difficulty}`}/>
        </div>
    </button>
}
export default SongCard;