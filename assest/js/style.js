var rand = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var phrases = ["airhead", "oh my god you are such a ditz", "bro that wave break was so knarly", "bad to the bone", "you bimbette", "totally tubular", "eat my shorts", "gag me with a spoon", "grody to the max", "take a chill pill", "that babe is totally bodacious", "don't have a cow", "party hardy with house music", "i don't have to take this. i'm going home", "i pitty the fool", "don't make me angry you wouldn't like me when i'm angry"];
var cars = ["ford mustange gt 5.0", "dmc delorean", "ferrari testarossa", "porsche", "lamborghini countach", "chevrolet camero iroc-z", "audi quattro", "acura integra", "amc eagle", "buick grand national gnx", "datsun 280zx 10th anniversary edition", "dodge omni shelby glh", "mercedes-benz g class", "mitsubishi starion"];
var movies = ["back to the future", "the breakfast club", "ghostbuster", "ferris buellers day off", "e.t. the extra-terrestrial", "the goonies", "raiders of the lost arc", "the terminator", "the princess bride", "star wars the empire strikes back", "gremlins", "blade runner", "beeteljuice", "beverly hills cop", "sixteen candles", " aliens", "airplane!", "stand by me", "bill and ted's excellent adventure", "the shining", "fast times at ridgemont high", "dirty dancing", "star wars return of the jedi", " who framed roger rabbit"];
var music = ["take on me", "don't you want me", "don't you forget about me", "come on eileen", "time after time", "karma chameleon", "hungry like the wolf", "flashdance what a feeling", "total eclipse of the heart", "i wanna dane with somebody", "sweet dreams are made of these", "sweet child o' mine", "everybody wants to rule the", "eye of the tiger", "every breathe you take", "roxanne", "girls just want to have fun", "never gonna give you up", "another one bites the dust", "wake me up before you go go", "crazy little thing called love"];
var challenges = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function phrase() {
rand = math.floor(math.random()+phrases.length);
word = phrases[rand];
document.
}