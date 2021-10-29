function nextPage() {
    let setPage =  document.querySelector("#nextMidia").attributes['data-set'].value;
    reset()
    switch (setPage) {
        case "1":
            document.querySelector(`#media > div > div > div > div:nth-child(3)`).classList.add('active');
            document.querySelector(`#media > div > div > div > div:nth-child(4)`).classList.add('active');
            document.querySelector("#nextMidia").attributes['data-set'].value = 2;
            document.querySelector("#beforeMidia").attributes['data-set'].value = 1;
            break;
        case "2":
            document.querySelector(`#media > div > div > div > div:nth-child(5)`).classList.add('active');
            document.querySelector(`#media > div > div > div > div:nth-child(1)`).classList.add('active');
            document.querySelector("#nextMidia").attributes['data-set'].value  = 3;
            document.querySelector("#beforeMidia").attributes['data-set'].value = 2;
            break;
        case "3":
            document.querySelector(`#media > div > div > div > div:nth-child(1)`).classList.add('active');
            document.querySelector(`#media > div > div > div > div:nth-child(2)`).classList.add('active'); 
            document.querySelector("#nextMidia").attributes['data-set'].value =  1;
            document.querySelector("#beforeMidia").attributes['data-set'].value = 3;
            break;
    }
}

function beforePage() {
    let setPage =  document.querySelector("#beforeMidia").attributes['data-set'].value;
    reset()
    switch (setPage) {
        case "3":
            document.querySelector(`#media > div > div > div > div:nth-child(5)`).classList.add('active');
            document.querySelector(`#media > div > div > div > div:nth-child(1)`).classList.add('active');
            document.querySelector("#beforeMidia").attributes['data-set'].value = 2;
            document.querySelector("#nextMidia").attributes['data-set'].value = 3;
            break;
        case "2":
            document.querySelector(`#media > div > div > div > div:nth-child(3)`).classList.add('active');
            document.querySelector(`#media > div > div > div > div:nth-child(4)`).classList.add('active');
            document.querySelector("#beforeMidia").attributes['data-set'].value  = 1;
            document.querySelector("#nextMidia").attributes['data-set'].value = 2;
            break;
        case "1":
            document.querySelector(`#media > div > div > div > div:nth-child(1)`).classList.add('active');
            document.querySelector(`#media > div > div > div > div:nth-child(2)`).classList.add('active'); 
            document.querySelector("#beforeMidia").attributes['data-set'].value =  3;
            document.querySelector("#nextMidia").attributes['data-set'].value = 1;
            break;
    }
}


function reset() {
    document.querySelectorAll("#media > div > div > div > div").forEach ((page) => {
        page.classList.remove('active');
    });
}


document.querySelector("#nextMidia").onclick = () => nextPage();

document.querySelector("#beforeMidia").onclick = () => beforePage();

const plansCheckbox = document.querySelector("#plans > div > div.option > label > input[type=checkbox]");

plansCheckbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.querySelector("#plans > div > div.plans-wrap > div:nth-child(1) > p > span").innerHTML = "R$ 8.968<span>/ano<span>";
  } else {
    document.querySelector("#plans > div > div.plans-wrap > div:nth-child(1) > p > span").innerHTML = "R$ 996<span>/mês<span>";
  }
})