document.querySelector('.route').style.display = "none";
document.querySelector('.salary').style.display = "none";

const tabli = document.querySelectorAll('.tab-head ul li');
tabli.forEach((e) =>{
    e.addEventListener("click", function(){
        e.classList.remove('active');
        this.classList.add('active');
    })
})