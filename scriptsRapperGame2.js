//SanityCheck
//alert("biggo");

// let audioElement = document.createElement('audio');
// audioElement.setAttribute('src', 'test123.mp3');
// audioElement.load()
// audioElement.getElementById = "playSnippet".addEventListener("load", function() {
//   audioElement.play();

var audio = new Audio("test12.mp3");

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}

function Rapper (name, birthName, dateOfBirth, origin, song, lyric, picture) {

  this.name        = name;
  this.birthName   = birthName;
  this.dateOfBirth = dateOfBirth;
  this.origin      = origin;
  this.song        = song;
  this.lyric       = lyric;
  this.picture     = picture;
}

var rapper1 = new Rapper("Pimp C","Chad Butler","December 29,1973","Port Arthur, Texas","some song", "some lyric", "some picture");
var rapper2 = new Rapper("Gucci Mane","Radric Davis","February 12, 1980","Atlanta, Georgia","some song", "some lyric", "some picture");
var rapper3 = new Rapper("Rakim","William Griffin, Jr.","January 28, 1968","New York, New York","some song", "some lyric", "some picture");
var rapper4 = new Rapper("Big Daddy Kane","Antonio Hardy","September 10, 1968", "New York, New York","some song", "some lyric", "some picture");
var rapper5 = new Rapper("Future", "Nayvadius Wilburn","November 20, 1983","Atlanta, Georgia","some song", "some lyric", "some picture");
