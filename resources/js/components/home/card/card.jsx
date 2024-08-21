import changeColor from "@/components/changeColor"

function card({ imageSrc, title, description, position, colorWords }) {
    const divClass = "w-full grid grid-cols-2 p-[5%] items-center justify-items-center"
    const imgClass = "w-[300px]"
    const h1Class = "text-[1.5em]"
    const childrenDivClass = "w-[50%]"

    
    changeColor({ text: title, colorWords:colorWords, color: "red" });
    

    if (position === "ImageRight") {
        return (
            <>
                <div className={divClass}>
                    <div className={childrenDivClass}>
                        <h1 className={h1Class} dangerouslySetInnerHTML={{ __html: title }}></h1>
                        <p>{description}</p>
                    </div>
                    <img src={imageSrc} alt="Home Images" className={imgClass} />
                </div>
            </>
        );
    } else if (position === "ImageLeft") {
        return (
            <>
                <div className={divClass}>
                    <img src={imageSrc} alt="Home Images" className={imgClass} />
                    <div className={childrenDivClass + " text-right"}>
                        <h1 className={h1Class} dangerouslySetInnerHTML={{ __html: title }}></h1>
                        <p>{description}</p>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <h1>Put the props - ImageLeft or ImageRight in position, title, description and imageSrc</h1>
            </>
        );
    }

}

export default card