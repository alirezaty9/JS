let inp1 = document.querySelectorAll('input[name=marriage]')
let inp2 = document.querySelectorAll('input[name=education]')
let btn = document.querySelector('button')
let html= document.getElementById('result')
btn.addEventListener('click', sayhello)


function sayhello() {
let e
    for (var inputs of inp1)
        if (inputs.checked) {
            html = inputs.value;
        }




        for (var inputs of inp2)
        if (inputs.checked) {
            e = inputs.value;
        }



        const div = document.getElementById('result');
        div.innerHTML = `<p>شما ${html} هستید و دارای مدرک ${e} هستید.</p>`; 
}



