const randomColor=function(){
    const hex ='0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
const changeColor=function(){
    let intervalId = setInterval(changeBackgroundColor,1000);
    function changeBackgroundColor(){
        document.body.style.backgroundColor=randomColor();
    }

};

const stopChangingCOlor=function() {
    clearInterval(intervalId);
};

document.getElementById('start').addEventListener('click', startchangeColor);

document.getElementById('stop').addEventListener('click',stopChangingCOlor);