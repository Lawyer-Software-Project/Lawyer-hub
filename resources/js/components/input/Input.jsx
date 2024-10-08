export default function input({ label, width, height, placeholder, value }) {
    return (
        <>

            <label className="text-[#555555] text-left self-start font-['Poppins-Regular',_sans-serif] text-base font-normal">{label}
                <input value={value}placeholder={placeholder} className="bg-[#f1f3f6] outline-0 rounded-lg block" style={{ width: width, height: height }} />
            </label>
        </>
    )
}