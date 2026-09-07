const body = document.querySelector("body")
const outside = document.createElement("div")
const inside = document.createElement("div")
outside.classList.add("zone", "outside")
inside.classList.add("zone", "inside")
body.append(outside)
body.append(inside)
const size = 20;
let currentCharacter = null
let lastX = 0;
let lastY = 0;
let rect = inside.getBoundingClientRect();

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
addEventListener("mousemove", (event) => {
    lastX = event.clientX;
    lastY = event.clientY;
    if(currentCharacter){
        rect = inside.getBoundingClientRect();
        if(currentCharacter.classList.contains("follow")){
            currentCharacter.style.left = event.clientX - size / 2 + "px"
            currentCharacter.style.top = event.clientY - size / 2  + "px"
        }
        if(event.clientX >= rect.left && event.clientX <= rect.right){
            currentCharacter.classList.add("trapped")
        }else if(currentCharacter.classList.contains("trapped")){
            const edgeX = clamp(event.clientX, rect.left, rect.right);
            const edgeY = clamp(event.clientY, rect.top, rect.bottom);
            currentCharacter.style.left = (edgeX - size / 2)+10 + "px";
            currentCharacter.style.top  = (edgeY - size / 2) + "px";
            currentCharacter.classList.remove("follow")
            currentCharacter = null;
        }
    }
})

addEventListener("keydown", (event) =>{
    if(event.key === "Escape"){
        document.querySelectorAll(".character").forEach(el => el.remove());
        currentCharacter = null;
        return;
    }
    if (event.key >= 'a' && event.key <= 'z') {

        if(currentCharacter){
            currentCharacter.classList.remove("follow")
            currentCharacter = null
        }

        const character = document.createElement("div")
        character.classList.add('character', 'follow')
        character.style.height = size + "px"
        character.style.width = size + "px"
        character.style.left = (lastX - size / 2) + "px";
        character.style.top  = (lastY - size / 2) + "px";
        currentCharacter = character
        if(lastX >= rect.left && lastY <= rect.right){
            currentCharacter.classList.add("trapped")
        }
        // character.style.left = event.clientX - size / 2 + "px"
        // character.style.top = event.clientY - size / 2  + "px"
        character.append(event.key)
        console.log(event.key)

        body.append(character)
    }
})