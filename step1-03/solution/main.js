var button = document.querySelector('button');
// var btnReset = document.getElementById("reset")
button.addEventListener("click", getFavs, false)
// btnReset.addEventListener("click", resetFavs, false)

function getFavs() {
    var favList = []
    const inputs = document.querySelectorAll('input')

    for (const input of inputs) {
        if (input.checked === true) {
            favList.push(input.parentNode.textContent)
        } else {
            console.log("nothing clicked")
        }
    }
    document.querySelector('.favorites').textContent = favList.join(' ');

}

////////////////////////////////////////////////
// var favList = [];

// function getFavs() {

// const inputs = document.querySelectorAll('input')

// for (const input of inputs) {
//     if (input.checked === true) {
//         favList.push(input.parentNode.textContent)
//     } else {
//         console.log("nothing clicked")
//     }
// }

// var favorites = document.querySelector('.favorites')
// var list = document.createElement('ul');
// favorites.appendChild(list);


// favList.forEach(function(fav){
//     var li = document.createElement('li');
//     li.textContent = fav;
//     list.appendChild(li);
//     // list.innerHTML += fav;
// });
// button.disabled = true
// }

// function resetFavs() {
//     var favList = []
//     btnReset.disabled = false
// }
