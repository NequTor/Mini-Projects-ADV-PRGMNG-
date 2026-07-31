const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.webp",
];

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const result = document.getElementById("result");
const spinBtn = document.getElementById("spinBtn");

spinBtn.addEventListener("click", () => {

    result.textContent = "";
    spinBtn.disabled = true;

    let count = 0;

    const spin = setInterval(() => {

        slot1.src = images[Math.floor(Math.random()*images.length)];
        slot2.src = images[Math.floor(Math.random()*images.length)];
        slot3.src = images[Math.floor(Math.random()*images.length)];

        count++;

        if(count >= 20){

            clearInterval(spin);

            if(
                slot1.src === slot2.src &&
                slot2.src === slot3.src
            ){
                result.textContent = "🎉 JACKPOT!! 🎉";
                result.style.color = "green";
            }else{
                result.textContent = "😢 Try Again!";
                result.style.color = "red";
            }

            spinBtn.disabled = false;
        }

    },100);

});