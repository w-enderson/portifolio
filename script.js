let loader = document.querySelector(".loader")
setTimeout(() => {
    loader.style.display = "none"
}, 500)

document.addEventListener("DOMContentLoaded", function() {
    let listTechs = document.querySelectorAll(".techs")
    listTechs.forEach(list => {
        if (list.children.length > 3) {
            for (let i = 2; i < list.children.length; i++) {
                list.children[i].style.display = "none";
            }

            let verMais = document.createElement("li")
            verMais.textContent = "ver mais"
            verMais.classList.add("verMais")
            verMais.addEventListener("click", () => {
                for (let i = 2; i < list.children.length-1; i++) {
                    if (list.children[i].style.display === "none"){
                        verMais.textContent = "ver menos"
                        list.children[i].style.display = "list-item";
                    } else {
                        verMais.textContent = "ver mais"
                        list.children[i].style.display = "none";
                    }
                }
            })

            list.appendChild(verMais)
        }
    })
})
