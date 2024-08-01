function SongCard(props: {image: any, title: string, artist: string, producer: string, bpm: string, difficulty: string}) {

    return <div className='max-w-sm rounded overflow-hidden border border-gray-300 dark:border-gray-600 m-2'>
        <img className="h-20 w-full object-cover" src={ props.image }/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl">{ props.title }</div>
            <p className="text-gray-600 text-sm mb-2">{ props.artist }</p>
            <p className="text-gray-700 text-base mb-2">{ props.difficulty }</p>
        </div>
    </div>
}
export default SongCard;