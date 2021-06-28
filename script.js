 $(function(){
    $('.plus-icon.one').click(function(){
        $('.answer.one').slideToggle(500)
    })
    $('.plus-icon.two').click(function(){
        $('.answer.two').slideToggle(500)
    })
    $('.plus-icon.three').click(function(){
        $('.answer.three').slideToggle(500)
    })
    $('.plus-icon.four').click(function(){
        $('.answer.four').slideToggle(500)
    })
    $('.plus-icon.five').click(function(){
        $('.answer.five').slideToggle(500)
    })
    $('.plus-icon.six').click(function(){
        $('.answer.six').slideToggle(500)
    })
}) 


const icon = document.querySelectorAll('.plus-icon')

icon.forEach(el => {
    el.addEventListener('click', () => {
        if(el.name == 'add-outline'){
            el.name = 'close-outline'
        }else{
            el.name = 'add-outline'
        }
    })
})


