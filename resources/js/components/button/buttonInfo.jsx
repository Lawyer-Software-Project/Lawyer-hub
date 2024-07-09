function Button({ text, width, height, advogado}) {
    
    const url = advogado ? '/cadform/true' : '/cadform/false';
    return (
            <>
            <a href={url}>
                <button className="bg-[#4485E7] text-white rounded-[9px] text-2xl hover:scale-105 transition ease-in-out delay-100" style={{ width, height }}>
                    {text}
                </button>
            </a>
            </>
    )
}

export default Button