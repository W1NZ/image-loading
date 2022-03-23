const lake = document.querySelector(".lake")
const number = document.querySelector(".number")
 
const z = setInterval(showPic, 8)
 
let p = 0
 
function showPic() {
    number.innerText = p + "%"
    lake.style.filter = `blur(${100-p}px)`
 
    if(p === 100) {
        clearInterval(z)
    } else {
        p++
    }
 
}