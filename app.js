let button=document.querySelector('button');
let ul=document.querySelector('ul');
let input=document.querySelector('input');

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