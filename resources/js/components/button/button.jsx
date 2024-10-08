function Button({ text, width, height, url, type}) {
    return (
        <>
            <a href={url}>
                <button type={type} className="bg-[#4485E7] text-white rounded-[9px] text-2xl " style={{ width: width, height: height }}>
                    {text}
                </button>
            </a>
        </>
    )
}

export default Button