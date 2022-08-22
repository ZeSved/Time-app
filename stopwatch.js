const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const tim = document.querySelector('.time')
const ms = document.querySelector('.ms')

start.addEventListener('click', () => {
  setInterval(() => {
    const time = new Date()
    const t = {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
      milliseconds: time.getMilliseconds(),
    }
    tim.innerText = `${t.hours}:${t.minutes}:${t.seconds}`
    ms.innerText = t.milliseconds
  }, 1)
})

stop.addEventListener('click', () => {
  clearInterval()
})
