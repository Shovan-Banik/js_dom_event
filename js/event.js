// option 1: see the html code 
// <button onclick="document.body.style.backgroundColor='yellow';">Make yellow</button>


// option 2:[important use krbo aita]
function makeRed(){
    document.body.style.backgroundColor='red';
}
// option : 3
const makeOrangeButton=document.getElementById('orange');
makeOrangeButton.onclick=makeOrange;
function makeOrange(){
    document.body.style.background='orange';
}

// option:3 another (same as 3 just some chng)
const makePurpleButton=document.getElementById('purple');
makePurpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';
}
// option:4 (use evenlistener)
const makePinkButton=document.getElementById('pink');
makePinkButton.addEventListener('click',makePink);
function makePink(){
 document.body.style.backgroundColor='pink';
}
// option :4 (another)
const makeGreenButton=document.getElementById('green');
makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green';
})
// option:4(final)[important use krbo aita]
document.getElementById('blue').addEventListener('click',function makeBlue(){
    document.body.style.backgroundColor='blue';
})