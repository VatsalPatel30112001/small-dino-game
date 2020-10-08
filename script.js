let score = 0;
document.addEventListener('animationiteration', () => {
    const random = (Math.floor(Math.random() * 40)) + 40
    block.style.height = random + 'px'

    function jump(event) {
        if (event.key == 'ArrowUp') {
            character.style.top = 165 + 'px'
        }
        setTimeout(() => {
            character.style.top = 270 + 75 - random + 'px'
        }, 250);
    }
    block.style.top = 375 - random + 'px'
    character.style.top = 270 + 75 - random + 'px'
    document.addEventListener('keydown', jump)
    score++;
})
setTimeout(() => {
    setInterval(() => {
        blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
        blocktop = parseInt(window.getComputedStyle(block).getPropertyValue('top'))
        charactertop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
        characterleft = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
        let abs = Math.abs(blockleft - characterleft)
        let abs2 = Math.abs(charactertop - blocktop)
        if (20 < blockleft && blockleft < 50 && charactertop > 200) {
            console.log(abs2)
            location.reload()
            alert('game over: your score is  ' + score)
        }
    }, 1);
}, 4000);