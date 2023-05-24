window.onload = () => {
    const h1Tag = document.getElementsByTagName("h1")[0];
    const counterDiv = document.getElementById("counter");
    counterDiv.innerHTML = 0;

    h1Tag.onclick = (event) => {
        console.log("click h1")
        counterDiv.innerHTML = parseInt(counterDiv.innerHTML) + 1
    }
}