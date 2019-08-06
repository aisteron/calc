import './add.js'; // добавление инпута в маршрут

/* управление активностью таб */
const headli = document.querySelectorAll('.tab-head ul li');
const areadiv = document.querySelectorAll('.tab-area > div');

headli.forEach((e) =>{
    e.addEventListener("click", ()=>{
        headli.forEach((el) => { el.classList.remove('active')})

        areadiv.forEach((s) =>{
            s.style.display="none";
            s.classList.remove('active');
        });
        document.querySelector(`.tab-area .${e.classList.value}`).classList.add('active');

        e.classList.add('active');

    })
});





