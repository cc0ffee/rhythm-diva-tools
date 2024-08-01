import Badge from './Badge'

function SongCard(props: {image: any, title: string, artist: string, producer: string, bpm: string, difficulty: string, color: any}) {

    return <div className='w-200 h-200 rounded overflow-hidden shadow-lg m-2 bg-gray-900 border border-gray-700 relative'>
        <div className="relative h-80 w-80">
            <img className="h-full w-full object-cover" src={props.image} alt={props.title} />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4 py-2">
                <div className="font-bold text-lg text-white text-center">{props.title}</div>
                <p className="text-xs text-white text-center">{props.artist}</p>
            </div>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-900">
            <Badge text={`${props.bpm} BPM`}/>
            <Badge text={`${props.difficulty}`}/>
        </div>
    </div>
}
export default SongCard;