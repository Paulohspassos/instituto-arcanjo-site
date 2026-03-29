const counters = document.querySelectorAll(".impact-number");
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const counter = entry.target;
            let target = counter.innerText.replace("+","");
            let count = 0;
            let speed = target / 100;
            function updateCount(){
                count += speed;
                if(count < target){
                    counter.innerText = Math.floor(count);
                    setTimeout(updateCount,20);
                }else{
                    counter.innerText = target + "+";
                }
            }
            updateCount();
            observer.unobserve(counter);
        }
        });
},{
    threshold:0.5
});
    counters.forEach(counter => {
    observer.observe(counter);
});
