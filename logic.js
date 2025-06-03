
const aaa = prompt('Bol kiti pahije?');

const count = aaa*aaa;

const container = document.querySelector('.grid-box');

container.setAttribute("style", `width: 960px; height: 960px;`)

for (let index = 0; index < count; index++) {
    let boxWidthHeight;
    const box = document.createElement("div");  
    boxWidthHeight = 960 / aaa;
    box.classList.add("box")
    box.setAttribute("style", "color: blue; background-color: red;");
    box.style.margin = "0";
    box.style.padding = "0";
    box.style.width = `${boxWidthHeight}px`
    box.style.height = `${boxWidthHeight}px`
    box.style.border = "1px solid white"
    box.style.boxSizing = "border-box"
    container.appendChild(box);
}

const boxLists = document.querySelectorAll(".box");

boxLists.forEach(( box ) => {
    box.addEventListener("mouseover", () => {
        const colors = ['red' , 'blue', 'green']
        let choose = Math.floor(Math.random * 3)
        box.style.backgroundColor = colors[choose];
    })
});

