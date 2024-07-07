function Button({ text, width, height, href }) {
    return (
        <>
            <a href={href}>
                <button className="bg-[#4485E7] text-white rounded-[9px] text-3xl " style={{ width: width, height: height }}>
                    {text}
                </button>
            </a>
        </>
    )
}

export default Button