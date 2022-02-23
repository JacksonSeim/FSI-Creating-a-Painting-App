let selectedColor = 'black'
const palette = document.querySelector('.palette')
palette.addEventListener('click', function(e){
    console.log(e.target.id)
    selectedColor = e.target.id
})

const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})


