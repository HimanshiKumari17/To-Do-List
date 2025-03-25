// let body=document.querySelector('body');
// let input=document.querySelector('input');
// let add=document.querySelector('#add');
// let list=document.querySelector("ul");

// body.appendChild(list);

// add.addEventListener('click',function(){
//     let li=document.createElement('li');
//     let remove=document.createElement('button');
//     remove.innerText="remove";
//     remove.classList.add("delete");
//     li.innerHTML=input.value;
//     li.appendChild(remove);
//     list.appendChild(li);
//     input.value="";
// });

// let removed= document.querySelectorAll(".delete");
// for(remove of removed){
//         remove.addEventListener('click',function(){
//         console.log("task Removed");
//     }); 
// }

let button=document.querySelector('button');
let ul=document.querySelector('ul');
let input=document.querySelector('input');
// let remove=document.querySelectorAll('.delete');

button.addEventListener('click',function(){
    let li=document.createElement('li');
    li.innerText=input.value;
    ul.appendChild(li);

    let remove=document.createElement('button');
    remove.innerText='remove';
    remove.classList.add='.delete';
    li.appendChild(remove);
    input.value="";

    console.log('task added');
});
 
ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
        let liItem=event.target.parentElement;
        liItem.remove();
        console.log("task Deleted");
    }
});
// let removed=document.querySelectorAll('.delete');
// for(remove of removed){
//     remove.addEventListener('click',function(){
//         let prnt=this.parentElement;
//         console.log(prnt);
//         prnt.remove();
//         console.log('task removed');
//     });
// }  
