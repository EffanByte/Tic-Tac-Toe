const gameboard = () => {
    const board = document.querySelector(".gameboard");
    let rawslots = Array.from(board.children);
    let slots = [];

    for (let i = 0; i < 3; i++) {
        slots.push(rawslots.slice(i * 3, i * 3 + 3));
    }

    rawslots.forEach(slot => {
        slot.addEventListener("click", () => {
            if (slot.innerHTML === "") {
                slot.innerHTML = currentplayer;
                console.log(slots);
                console.log(_checkForWinner(slots));
                switchplayer();
            }
        });
    });

    return slots;
}


console.log(gameboard())
const p1 = () => {
    let press = "x"
    return press;
}
const p2 = () => {
    let press = "O"
    return press;
}

let currentplayer = p1();

function switchplayer(){
    if (currentplayer == p1()){
        currentplayer = p2();
    }
    else
    currentplayer = p1();
}

const _checkForWinner = (slots) => {
    for (let i = 0; i < 3; i++) {
        if (
            slots[i][0].innerHTML !== "" &&
            slots[i][0].innerHTML === slots[i][1].innerHTML &&
            slots[i][0].innerHTML === slots[i][2].innerHTML
        ) {
            return slots[i][0].innerHTML;
        } else if (
            slots[0][i].innerHTML !== "" &&
            slots[0][i].innerHTML === slots[1][i].innerHTML &&
            slots[0][i].innerHTML === slots[2][i].innerHTML
        ) {
            return slots[0][i].innerHTML;
        }
    }
    
    if (
        slots[0][0].innerHTML !== "" &&
        slots[0][0].innerHTML === slots[1][1].innerHTML &&
        slots[0][0].innerHTML === slots[2][2].innerHTML
    ) {
        return slots[0][0].innerHTML;
    } else if (
        slots[0][2].innerHTML !== "" &&
        slots[0][2].innerHTML === slots[1][1].innerHTML &&
        slots[0][2].innerHTML === slots[2][0].innerHTML
    ) {
        return slots[0][2].innerHTML;
    }
    
    return undefined; // No winner yet
}

const reset = document.querySelector(".reset")
reset.addEventListener("click", () => {
    window.location.reload();
});