
const countDate = new Date('jan 22, 2023 00:00:00').getTime();
const $ = document.querySelector.bind(document);
function newYear () {
    const now = new Date().getTime();
    
    gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const d = Math.floor(gap / day)
    const h = Math.floor((gap%day)/hour)
    const m = Math.floor((gap%hour)/minute)
    const s = Math.floor((gap%minute)/second)

    $('.d').innerHTML = d;
    $('.h').innerHTML = h;
    $('.m').innerHTML = m;
    $('.s').innerHTML = s;
}
setInterval(newYear, 1000);
if(screen.width <= 740) {
    $('.logo').innerHTML = `
    <p>HAPPY NEW YEAR</p>
    <p>2023</p>
    `;
}

console.log(screen.width)
