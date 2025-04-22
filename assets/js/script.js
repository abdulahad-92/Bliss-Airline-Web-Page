let menu = document.querySelector('#menu')
let navUl = document.querySelector('.toggler')
menu.addEventListener('click',()=>{
    navUl.classList.toggle('toggler')
})
let section = document.querySelector('#section')
let btn = document.querySelector('#animation_btn img')
btn.onclick = ()=>{
    console.log();
    if (section.children[2].style.webkitAnimationPlayState == 'paused') {
        section.children[2].style.webkitAnimationPlayState = 'running'
        section.children[3].style.webkitAnimationPlayState = 'running'
        section.children[4].style.webkitAnimationPlayState = 'running'
        section.children[5].style.webkitAnimationPlayState = 'running'
        btn.src = "assets/images/play.png"
    } else {
        btn.src = "assets/images/pause.png"
        section.children[2].style.webkitAnimationPlayState = 'paused'
        section.children[3].style.webkitAnimationPlayState = 'paused'
        section.children[4].style.webkitAnimationPlayState = 'paused'
        section.children[5].style.webkitAnimationPlayState = 'paused'
        section.children[2].style.webkitAnimationPlayState = 'paused'
    }
}


