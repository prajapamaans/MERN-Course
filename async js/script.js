// generate a random color

const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

console.log(randomcolor());
let intervalid
const startchangingColor = function(){
    if(!intervalid){

        intervalid = setInterval(changebgcolor, 1000)
    }

    function changebgcolor(){
        document.body.style.backgroundColor = randomcolor();
        intervalid = null
    }
};
const stopchangingColor = function(){
clearInterval(intervalid)
};


document.querySelector('#start').addEventListener('click',startchangingColor)
document.querySelector('#stop').addEventListener('click',stopchangingColor)

