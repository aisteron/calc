let usd = document.querySelector('#usd');
let eur = document.querySelector('#eur');
let rub = document.querySelector('#rub');
let byn = document.querySelector('#byn');

fetch('http://www.nbrb.by/API/ExRates/Rates?Periodicity=0')
    .then(response => response.json())
    .then(data => {
            data.forEach((e) => {
                switch(e.Cur_Abbreviation) {
                    case 'USD':
                        usd.value = e.Cur_OfficialRate;
                        usd.setAttribute('data-rate', e.Cur_OfficialRate);
                        break;

                    case 'EUR':
                        eur.value = e.Cur_OfficialRate;
                        eur.setAttribute('data-rate', e.Cur_OfficialRate);
                        break;

                    case 'RUB':
                        rub.value = e.Cur_OfficialRate;
                        rub.setAttribute('data-rate', e.Cur_OfficialRate);
                        break;

                }
            })
    });
let rateInputs = document.querySelectorAll('.rates .row input');
rateInputs.forEach((e) => {
    e.addEventListener("keyup", rateMe)
});

function rateMe() {
    let id = this.getAttribute('id');
    switch (id) {
        case 'usd':
        case 'eur':
            byn.value = (this.dataset.rate * this.value).toFixed(2);
            break;
        case 'rub':
            byn.value = (this.value/100*this.dataset.rate).toFixed(2);
            break;
        case 'byn':
            break;
    }
    restMe(id);


}

function restMe(id)
{
    rateInputs.forEach((e) => {

        switch(e.getAttribute('id')) {
            case id:
                return;
            case 'eur':
                eur.value = (byn.value/eur.dataset.rate).toFixed(2);
                break;
            case 'usd':
                usd.value = (byn.value/usd.dataset.rate).toFixed(2);
                break;
            case 'rub':
                rub.value = (byn.value/rub.dataset.rate*100).toFixed(2);
                break;
        }


    //
     })
}



