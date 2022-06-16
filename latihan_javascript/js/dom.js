document.write("halo");
document.write("<h2>halo</h2>");

const ul = document.createElement("ul");

const hobbies = ["berenang", "membaca", "menulis"];

hobbies.forEach((hobby) => {
    const li = document.createElement("li");
    li.innerHTML = hobby;
    ul.appendChild(li);
});
// document.write(ul);


// function for delete element from array
function deleteElement() {

    const li = document.querySelectorAll("li");
    console.log(li);
    // li.remove();
    li.forEach((item) => {
        item.remove();
    })
    // return arr.slice(0, index).concat(arr.slice(index + 1));
}

document.body.appendChild(ul);




    const bgColor = document.getElementById('bg-color');
    bgColor.addEventListener('change', () => {
        document.body.style.backgroundColor = bgColor.value;
    });
    
    const textColor = document.getElementById('text-color');
    textColor.addEventListener('change', () => {
        document.body.style.color = textColor.value;
    });




// alert(document.title)

