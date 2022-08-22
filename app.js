setInterval(() => {
  const time = new Date()
  const t = {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    milliseconds: time.getMilliseconds(),
  }

  const tim = document.querySelector('.time')
  const title = document.querySelector('.title')
  const ms = document.querySelector('.ms')

  t.seconds < 10 && (t.seconds = '0' + t.seconds)
  t.minutes < 10 && (t.minutes = '0' + t.minutes)
  t.hours < 10 && (t.hours = '0' + t.hours)

  if (t.milliseconds < 10) {
    t.milliseconds = '00' + t.milliseconds
  } else if (t.milliseconds < 100 && t.milliseconds > 10) {
    t.milliseconds = '0' + t.milliseconds
  }

  tim.innerText = `${t.hours}:${t.minutes}:${t.seconds}`
  title.innerText = `${t.hours}:${t.minutes}`
  ms.innerText = t.milliseconds
}, 1)
