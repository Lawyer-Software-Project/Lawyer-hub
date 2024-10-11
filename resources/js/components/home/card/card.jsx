function card({ imagePath, title, description, linkPath}) {
    return (<>
        <div className="bg-white rounded-lg shadow-lg w-[25%] hover:scale-105 transition-all">
            <a href={linkPath}>
                <img src={imagePath} alt={title} className="h-[25vh] w-full " />
                <h1 className="text-[#1557BB] text-2xl m-3">{title}</h1>
                <p className="m-4">{description}</p>
            </a>
        </div>
    </>)
}

export default card