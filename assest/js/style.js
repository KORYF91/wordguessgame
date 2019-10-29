// checking to see the page is linked proper
// console.log("this is working?")

var userText = document.getElementById("guess");

     document.onkeyup = function(event) {
    userText.textContent = event.key;
  };
 
 // document.onkeyup = function(event) {
    // var userGuess = event.key;
    //console.log("button press : "+ event);
//};
var rand = 0;
var word = " ";
var phrases = ["airhead", "oh my god you are such a ditz", "bro that wave break was so knarly", "bad to the bone", "you bimbette", "totally tubular", "eat my shorts", "gag me with a spoon", "grody to the max", "take a chill pill", "that babe is totally bodacious", "don't have a cow", "party hardy with house music", "i don't have to take this. i'm going home", "i pitty the fool", "don't make me angry you wouldn't like me when i'm angry"];
var cars = ["ford mustange gt 5.0", "dmc delorean", "ferrari testarossa", "porsche", "lamborghini countach", "chevrolet camero iroc-z", "audi quattro", "acura integra", "amc eagle", "buick grand national gnx", "datsun 280zx 10th anniversary edition", "dodge omni shelby glh", "mercedes-benz g class", "mitsubishi starion"];
var movies = ["back to the future", "the breakfast club", "ghostbuster", "ferris buellers day off", "e.t. the extra-terrestrial", "the goonies", "raiders of the lost arc", "the terminator", "the princess bride", "star wars the empire strikes back", "gremlins", "blade runner", "beeteljuice", "beverly hills cop", "sixteen candles", " aliens", "airplane!", "stand by me", "bill and ted's excellent adventure", "the shining", "fast times at ridgemont high", "dirty dancing", "star wars return of the jedi", " who framed roger rabbit"];
var music = ["take on me", "don't you want me", "don't you forget about me", "come on eileen", "time after time", "karma chameleon", "hungry like the wolf", "flashdance what a feeling", "total eclipse of the heart", "i wanna dane with somebody", "sweet dreams are made of these", "sweet child o' mine", "everybody wants to rule the", "eye of the tiger", "every breathe you take", "roxanne", "girls just want to have fun", "never gonna give you up", "another one bites the dust", "wake me up before you go go", "crazy little thing called love"];
// var word = null;
var lettersinTheWord = [];
var matchedLetters = [];

function randomPhrases() {
    rand = Math.floor(Math.random() * phrases.length);
    word = phrases[rand];
    console.log("Random Phrases: " + word);
    // lettersinTheWord = word.split("");
    // displayWord()

}
randomPhrases();

function ranMovies() {
    rand = Math.floor(Math.random() * movies.length);
    word = movies[rand];
    //console.log("Random Movies: " + word);
     lettersinTheWord = word.split("");
     displayWord("_")

}
ranMovies();

function ranMusic() {
    rand = Math.floor(Math.random() * music.length);
    word = music[rand];
    console.log("Random Music: " + word);
    // lettersinTheWord = word.split("");
    // displayWord()

}
ranMusic();

function ranCars() {
    rand = Math.floor(Math.random() * cars.length);
    word = cars[rand];
       lettersinTheWord = word.split("");
    document.getElementById("wrd").style.visibility = "hidden";
    console.log("Random Cars: " + word);
}
ranCars();



// var wordView = "[]";
// var pharasView = "[]";
//  function displayWord(){
//      var PhraseView = "";
// for (var i=0; i<lettersinTheWord.length; i++){
// //the current letter has been guseed , display that letter
//     if ("#guessletter".indexOf(lettersinTheWord[i]) !== -1)
//         phraseView +=lettersinTheWord[i];       
//    else 
//            wordView += "&nbsp;_&nbsp;"
//            console.log(displayWord)
//        }
//    }
// displayWord();


//  document.getElementById("#gameContainer").innerHTML = wordView;

//  function guessletter() {
//     let onkeyup = document.querySelector('.guessletter')
//     if (onkeyup) {
//       btn.addEventListener('onkeyup', e => {
//         document.getElementById("_" + value);
//       })tt
//     }
//   }
  