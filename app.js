setInterval(() => {
  // Gets the time
  const time = new Date()

  // Puts the time into easier to use variables
  const t = {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    milliseconds: time.getMilliseconds(),
  }

  // Gets the HTML element classes
  const tim = document.querySelector('.time')
  const title = document.querySelector('.title')
  const ms = document.querySelector('.ms')

  // Makes the different time types are always the same size
  t.seconds < 10 && (t.seconds = '0' + t.seconds)
  t.minutes < 10 && (t.minutes = '0' + t.minutes)
  t.hours < 10 && (t.hours = '0' + t.hours)

  // Makes sure the milliseconds are the same size
  if (t.milliseconds < 10) {
    t.milliseconds = '00' + t.milliseconds
  } else if (t.milliseconds < 100 && t.milliseconds > 10) {
    t.milliseconds = '0' + t.milliseconds
  }

  // Displays the now processed time types in the website
  tim.innerText = `${t.hours}:${t.minutes}:${t.seconds}`
  title.innerText = `${t.hours}:${t.minutes}`
  ms.innerText = t.milliseconds
}, 1)
