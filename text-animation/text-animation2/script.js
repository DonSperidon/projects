var index = 0;
var data = ["Barman","Groot","Spartacus","Dracula",];
var span = document.querySelector('span');
var section = document.querySelector('section');

function init(){
    let txt = document.createTextNode(data[index]);
    section.dataset.identity = data[index];
    span.innerText = txt.textContent;
    index++;
}
init();
setInterval (
    function(){
        let txt = document.createTextNode(data[index]);
    section.dataset.identity = data[index];
    span.innerText = txt.textContent;
    index++;
    index = index < data.length ? index++ : 0;
    }
,4501)