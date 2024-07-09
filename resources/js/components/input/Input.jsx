export default function input({label,width,height,placeholder}){
    return(
        <>  
        
            <label className="text-[#555555] text-left self-start font-['Poppins-Regular',_sans-serif] text-base font-normal">{label}
            <input placeholder={placeholder} className="outline-none outline-offset-0 bg-[#f1f3f6] outline-0 rounded-lg block" style={{ width: width, height: height }}/>
            </label>
        </>
    )
}