let plus=document.querySelectorAll(".fa-plus-circle")
console.log(plus);
let minus=document.querySelectorAll(".fa-minus-circle")
console.log(minus)
let croix=document.querySelectorAll(".fa-times")
let coeur=document.querySelectorAll(".fa-heart")
console.log(coeur)
console.log(croix)
let somme = document.querySelector('.somme')
for(let x of plus ){
  
    x.addEventListener("click",function(e){
        x.nextElementSibling.innerHTML++
        // console.log(x.parentElement.parentElement.nextElementSibling.children[0].innerHTML.replace('$', ''))
        somme.innerHTML = parseFloat(somme.innerHTML.replace('$', '')) + parseFloat(x.parentElement.parentElement.nextElementSibling.children[0].innerHTML.replace('$', '')) + '$'
     })
 }
 for(let y of minus){
    y.addEventListener("click",function(e){
       if(y.previousElementSibling.innerHTML <= 0){
        y.previousElementSibling.innerHTML = 0
    }else{
        y.previousElementSibling.innerHTML--
        somme.innerHTML=(somme.innerHTML.replace('$','') - y.parentElement.parentElement.nextElementSibling.children[0].innerHTML.replace('$',''))+'$'
    }
    console.log(t)
    })
 }
 for(let w of croix){
     w.addEventListener("click",function(e){
      w.parentElement.parentElement.parentElement.remove() 

     })
 }
 for(let z of coeur){
     z.addEventListener("click",function(e){
         z.classList.toggle('rouge')
     })
 }
 
 