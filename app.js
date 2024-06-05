const timeLeft = document.getElementById('time-left')
const button1 = document.getElementById('button1')

//month day year
const duedate = new Date('June 06, 2024 00:17:00')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId
var timer;
var ele = document.getElementById('timer')

function timer() {
  var sec = 0;
  timer = setInterval(() => {
    ele.innerHTML = '00: ' + sec;
    sec++;
  }, 1000)

}

function bukain() {
  window.open("https://docs.google.com/document/d/1rbv8nzG3iiJl5eWZvUChkxbOBmCJr7dxINiNwF59q-c/edit?usp=sharing")
}

function countDown() {
  const today = new Date()
  const timeSpan = duedate - today
  //milliseconds
  console.log(timeSpan)

  if (timeSpan <= -day) {
    timeLeft.innerHTML = 'Semoga Menerima Apapun Hasilnya!'
    clearInterval(timerId)
    return
  }

  if (timeSpan <= 0) {
    timeLeft.innerHTML = 'Silahkan Klik Tombol Di Bawah Ini <br> <button onclick="bukain()">KLIK DISINI</button>'
    clearInterval(timerId)
    return
  }


  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan % day) / hour)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)

  timeLeft.innerHTML =
    days + 'Hari ' + hours + 'Jam ' + minutes + 'Menit ' + seconds + 'Detik '
}

timerId = setInterval(countDown, second)
