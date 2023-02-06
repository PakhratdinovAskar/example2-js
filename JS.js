
let item = document.querySelector('.item')

item.addEventListener('dragstart', function(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0); 
})

item.addEventListener('dragend', function(event) {
    event.target.classList.remove('hold', 'hide')
})


let placeholders = document.querySelectorAll('.placeholder')

for(placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragover(event){
    event.preventDefault()
}

function dragenter(event){
    event.target.classList.add('line')
}

function dragleave(event){
    event.target.classList.remove('line')
}

function dragdrop(event){
    event.target.classList.remove('line')
    event.target.append(item)
}