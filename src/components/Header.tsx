function Header(props:{action:any}) {
    return <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div>
            <h1 className="text-xl font-bold">cc00ffee's Diva Tools</h1>
            <p className="text-xs text-gray-400">bootleg ddrtools for a project diva tournament</p>
        </div>
        <button onClick={props.action} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Draw
            </button>
    </header>
};
export default Header;