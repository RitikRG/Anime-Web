document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id), 
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),     
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }

        }, step);
    }
    counter( "hrs", 0, 264, 3000);
    counter( "episodes", 0, 720, 3500);
    counter( "anime", 0, 1, 4000);

    
})