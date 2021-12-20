moment.locale('fr')
//console.log(moment().format("DD MMM YY"))
let day =moment().format("DD MMM YY")
let time = moment().format('LT')

const ecrans = document.querySelectorAll("#ecran")

const bouton = document.querySelector(".btn")
const date = document.querySelector(".date")
const heure = document.querySelector(".heure")
const notification = document.querySelector(".petiteHeure")

bouton.addEventListener("click", function(){
    //console.log("click!")
    
    ecrans.forEach(ecr=>ecr.classList.toggle("ecran"))
    date.innerHTML = day
    heure.innerText = time
    notification.innerText= time
})