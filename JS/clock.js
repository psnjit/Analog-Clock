const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');

function setDate(){
    const now= new Date();
    const secs= now.getSeconds();
    const mins= now.getMinutes();
    const hrs= now.getHours();

    const secDeg=getDegree(secs, 'secs');
    const minDeg=getDegree(mins, 'mins', secDeg);
    const hrDeg=getDegree(hrs, 'hours', minDeg);
    
    console.log(minDeg);
    secondHand.style.transform = `rotate(${secDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hrDeg}deg)`;
}
function getDegree(value, unit, other=0){
    if(unit==='secs' || unit==='mins')
        return 360/60*value+90;
    if(unit==='mins')
        return 360/60*value+90;
    if(unit==='hours')
        return 360/12*value+90+other/360*30;
}
setInterval(setDate, 1000);
