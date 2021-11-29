function uusiKuva()
{
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
    document.getElementById('kuva').src = data.message;
    document.getElementById('kuva').style.width = '400px';
  } );
}
function chuckNorris()
{
  fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(data => document.getElementById('chuck').innerHTML = data.value);
}
function kissaTieto()
{
  fetch("https://cat-fact.herokuapp.com/facts")
  .then(response => response.json())
  .then(data => {
    var pituus = data.length;
    var satunnainen = Math.floor(Math.random()*pituus);
    //console.log(data[0].text);
    document.getElementById('kissa').innerHTML = data[satunnainen].text;
      } );
}
function tarkasta()
{
  var enimi = document.getElementById('ekanimi').value;
  var tnimi = document.getElementById('tokanimi').value;

  fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname="+enimi+"&sname="+tnimi+"", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
  		"x-rapidapi-key": "bb537d4a34msh68b81f641c1ae69p18facajsn5125e7ebd9db"
  	}
  })
  .then(response => response.json()).then(
    data => {
      jono = "Ensimmäinen nimi: " + data.fname;
      jono += " ja toinen nimi: " + data.sname;
      jono += "<br/>Yhteensopivuusprosentti:" + data.percentage;
      jono += "<br/>Ja lopputulos: " + data.result;
      document.getElementById('vastaus').innerHTML = jono;
    });
}
