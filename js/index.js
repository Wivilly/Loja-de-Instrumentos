function changeFontSize(pixel) {

    const body = document.body;
    const currentFontSize = window.getComputedStyle(body).fontSize;
    const fontSizeValue = parseFloat(currentFontSize);

    const newFontSize = fontSizeValue + pixel;

    body.style.fontSize = `${newFontSize}px`;
}