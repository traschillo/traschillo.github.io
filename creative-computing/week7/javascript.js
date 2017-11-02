function updateTime() {

	var clockHolder = document.getElementById("clock")

	var now = new Date()
	var seconds = now.getSeconds()
	now = now.toTimeString()

	clockHolder.innerHTML = now

	console.log(now)
	console.log(seconds)

	if (seconds < 20) {
		clockHolder.style.color = "red"
	} else if (seconds < 40) {
		clockHolder.style.color = "green"
	} else {
		clockHolder.style.color = "blue"
	}

	clockHolder.innerHTML = now
}

setInterval(updateTime,1000)
