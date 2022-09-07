const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

const HH = document.getElementById('HH')
const MM = document.getElementById('MM')
const SS = document.getElementById('SS')
const MS = document.getElementById('MS')
let timer
let ms_sum = 0
let beginDate = new Date()

const handleIncrement = () => {

}
const handleUpdate = () => {
  //HH.innerText = `${ms_sum / 1000*60*60 % 60}`
  //MM.innerText = `${ms_sum / 1000*60    % 60}`
  SS.innerText = `${ms_sum}`
  //MS.innerText = `${ms_sum % 1000}`
}

start.addEventListener('click', () => timer = setInterval(() => {
  handleIncrement()
  handleUpdate()
}, 1))
stop.addEventListener('click', () => clearInterval(timer))
reset.addEventListener('click', () => {
  if(timer){
    clearInterval(timer)
    ms_sum = 0
  }else{
    ms_sum = 0
  }
})
