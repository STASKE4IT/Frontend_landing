let days = document.querySelectorAll(".timer_value")[0]
let hours = document.querySelectorAll(".timer_value")[1]
let minuts = document.querySelectorAll(".timer_value")[2]
let seconds = document.querySelectorAll(".timer_value")[3]

let deadlineDate = new Date(2024,1,10,23,59,59)

function countDown(){
let newDate = new Date()
let resultDate = deadlineDate-newDate
    if(resultDate<=0){
        clearInterval(timer)
    }
    else{
        let daysVale=Math.floor(resultDate/(24*60*60*1000))
        let hoursValue=Math.floor((resultDate%(24*60*60*1000))/(60*60*1000))
        let minutsValue=Math.floor((resultDate%( 60*60*1000))/(60*1000))
        let seconValue=Math.floor((resultDate%(60*1000))/1000)
        hold(daysVale,days)
        hold(hoursValue,hours)
        hold(minutsValue,minuts)
        hold(seconValue,seconds)
        days.innerHTML=daysVale
        hours.innerHTML=hoursValue
        minuts.innerHTML=minutsValue
        seconds.innerHTML=seconValue
    }


}

let timer = setInterval(countDown,1000)

countDown()

function hold(elem, value){
    if(elem<10){
        value.innerHTML=`0${elem}`
    }
    else{
        value.innerHTML=elem
    }
}


