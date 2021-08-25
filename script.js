    const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j']
    const blacks = ['w', 'e', 'r', 't', 'y']
        
    const keys = document.querySelectorAll('.key')
    const white_keys = document.querySelectorAll('.key.white')
    const black_keys = document.querySelectorAll('.key.black')
        
    keys.forEach(key => {
        key.addEventListener('click', () => playnotemawa(key))
    })
        
    document.addEventListener('keydown', e => {
        if (e.repeat) return
        const key = e.key
        const whitekeyindex = whites.indexOf(key)
        const blackkeyindex = blacks.indexOf(key)
        
        if (whitekeyindex > -1) playnotemawa(white_keys[whitekeyindex])
        if (blackkeyindex > -1) playnotemawa(black_keys[blackkeyindex])
    })
        
    function playnotemawa(key) {
        const noteAudio = document.getElementById(key.dataset.note)
        noteAudio.currentTime = 0
        noteAudio.play()
        key.classList.add('active')
        noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
        })
    } 