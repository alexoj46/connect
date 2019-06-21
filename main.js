
var press = $('button')
press.on("click", submit)

function submit(){
  event.preventDefault();
  var people = [
    "Arthur Smith",
    "Nathaniel Banks",
    "Bernard Bass",
    "Barbara Archibald",
    "Betty Pillsbury",
    "Agnes Cherryhill"
  ]
  var randomDecimal = Math.random()*people.length
  var randomNumber = Math.floor(randomDecimal)
  var randomPerson = people[randomNumber]
  var header = $('h2')
  header.text(randomPerson)

  var pic = [
    "https://files.slack.com/files-pri/TK5GC0Y6T-FKSPSUYHK/q2.jpg",
    "https://files.slack.com/files-pri/TK5GC0Y6T-FKSPSUYHK/q2.jpg","https://files.slack.com/files-pri/TK5GC0Y6T-FKSPSUYHK/q2.jpg","https://files.slack.com/files-pri/TK5GC0Y6T-FKSPSUYHK/q2.jpg","https://files.slack.com/files-pri/TK5GC0Y6T-FKSPSUYHK/q2.jpg","https://files.slack.com/files-pri/TK5GC0Y6T-FKSPSUYHK/q2.jpg"
  ]
  var source = $('.pro')
  $('.pro').attr("src", pic[randomNumber]);
}
