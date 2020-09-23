var count = 1
const sayim = Math.random()*10;
const roundedNumber = Math.round(sayim);
const input = document.getElementById("input")
const button = document.getElementById("btn")
const result = document.getElementById("print")
const result_2 = document.getElementById("print_2")
button.addEventListener("click", showResult)
function showResult(){
    
    if (roundedNumber == (input.value)){
        result.style.color = "green"
        result_2.style.color = "green"
        result.innerHTML = "You must be Nostradamus!!!"
        result_2.innerHTML = `You found the number ${count}. attempt...`
        
        setTimeout(refresh,5000)
         
        count++;
        count > 3? result.innerHTML ="" : result.innerHTML = "You must be Nostradamus!!!"
    
    }


    else if(roundedNumber < (input.value)){
        result.innerHTML = "Take it easy, go down!"
        reset()
        count++;
        input.focus()
    }

    else{result.innerHTML="Come on! A little bit high..."
        reset()
        count++;
        input.focus()
    }
   

function reset(){
    input.value="";
    
    
}

function reload(){

}
function refresh(){
    document.location.reload();}}
