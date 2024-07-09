function Button({ text, width, height, url}) {
    return (
        <>
            <a href={url}>
                <button className="bg-[#4485E7] text-white rounded-[9px] text-2xl " style={{ width: width, height: height }}>
                    {text}
                </button>
            </a>
        </>
    )
}

export default Button