const getColor =() => {
    const randomNumber = Math.floor( Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16)
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    //autocopy to clipboard
    navigator.clipboard.writeText(randomCode);
}

//event cal
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//init Call
getColor();