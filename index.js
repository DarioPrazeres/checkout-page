const qtd = document.querySelectorAll('p.qtd');
const btnAdd = document.querySelectorAll('button.btn-ctrl-add');
const btnLess = document.querySelectorAll('button.btn-ctrl-less');
const totalPrice = document.querySelector('p.total');

var newprice = [];
var cont = [];
var tot=0;

newprice[0] = 54.99;
newprice[1] = 74.99;

cont[0] = 1;
cont[1] = 1;

qtd[0].innerHTML = cont[0];
qtd[1].innerHTML = cont[1];

for(let i=0; i<qtd.length; i++){
    btnAdd[i].addEventListener('click', ()=>{
        cont[i]++;
        qtd[i].innerHTML=cont[i];
        tot = (cont[0]*newprice[0]) + (cont[1]*newprice[1]) + 19;
        totalPrice.innerHTML = `$${tot.toFixed(3)}`;
    })
    btnLess[i].addEventListener('click', ()=>{
        if(cont[i]==0){
            qtd[i].innerHTML =cont[i];
        }else{
            cont[i]--;
            qtd[i].innerHTML=cont[i];
        }
        totalPrice.innerHTML = tot;
    })
    
}
console.log(tot)
