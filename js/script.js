function rng(){
   return Math.floor(Math.random() * 100) + 1
}

let Array_rng = [];

for (i=1; i<=5; i++){
    Array_rng.push(rng());   
}

let row_num = document.getElementById("number");

for (i=0; i<=Array_rng.length; i++){
    let span_num = document.createElement("span");
    span_num.textContent = Array_rng[i]
    row_num.appendChild(span_num);
    span_num.classList.add("num_rng")
}

let timer_watch = document.getElementById("timer");

let timer_totale = 3

let Array_num_pg = [""]

let point = 0 

let intervallo = setInterval(function(){
    timer_watch.innerHTML = "Secondi Rimasti:  <br>" + (timer_totale);
    timer_watch.classList.add("timer")
    timer_totale--;
    console.log(timer_totale)

    if(timer_totale == 0){
       clearInterval(intervallo);
       row_num.innerHTML = " ";
       timer_watch.innerHTML = " ";
    }

    if(timer_totale == 0){
        setTimeout(function(){
        for(i=0; i<2; i++){
            let num_pg = parseInt(prompt("Inserisci i numeri apparsi nei 30 secondi"));
             Array_num_pg.push(num_pg)
             console.log(Array_num_pg.length)
       }
            if(Array_num_pg.length == 3){
              console.log("ciao")
              for(i=0; i<Array_rng.length; i++){
                    if(Array_rng.includes(Array_num_pg[i])){
                        point++
                        console.log(point)
        }
        

     }}}
       
       , 1000)}

       

     
       console.log(timer_totale)

}, 1000)



console.log(Array_rng)