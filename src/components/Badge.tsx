function Badge(props:{text:string}) {
    return (
        <div className={`text-white text-center px-2 py-1 rounded`}>
            {props.text}
        </div>
    );
};

export default Badge;