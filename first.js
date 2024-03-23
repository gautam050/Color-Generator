const getcolor = () => {
    const random = Math.floor(Math.random()*16777215)
    console.log(random)
      const randomCode = "#" + random.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("Color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode)
}

document.getElementById("button").addEventListener(
    "click",getcolor
)

