function changeColor({ text, colorWords, color }) {
    for (let word of colorWords) {
        if (text.includes(word)) {
            const replacement = `<span style="color: ${color};">${word}</span>`;
            text = text.replaceAll(word, replacement);
        }
    }
    return text;
}
export default changeColor //text-[#1557BB]