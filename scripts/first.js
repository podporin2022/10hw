const btnE = document.querySelector("#btn");
const inpTextE = document.getElementById('inp');
const ul = document.createElement('ul')
ul.classList.add('list')

document.querySelector('main').append(ul)

btnE.addEventListener('click', onClick);

function onClick(){
    const inpTextEchacked = inpTextE.value;
    if (!inpTextEchacked.trim()){
        alert('Error! Please fill in all the fields');
        return
    }
    let li = document.createElement('li');
    li.classList.add('tabs');
    li.innerText = inpTextE.value;
    ul.append(li)
    inpTextE.value = "";
    li.style.background = 'yellow';
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "<span>X</h1>";
    li.append(newDiv)
    li.addEventListener('click', onClickList);
    newDiv.addEventListener('click',function (){
        this.closest('li').remove()

    })
    function onClickList(){
        li.classList.toggle('checked');
    }
}