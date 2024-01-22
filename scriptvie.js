/* All of this is from the previous idea
var vieJoueur = 100
var vieRestanteJoueur = vieJoueur
var vieRival = 100
var vieRestanteRival = vieRival
var forceAttaqueDeBase = 15
var modificateurDeForce = 1
var modificateurDeForceB = 1
var dégâts = 1
var dégâtsB = 1
var state = 1
var stateB = 1
var stateWord = String
var stateWordB = String
var chancesEsquive = 1

document.getElementById('vieDeNotreJoueur').innerHTML = 'vie du joueur A: ' + vieJoueur;
document.getElementById('vieDuRival').innerHTML = 'vie du joeur B: ' + vieRival;


function attaqueDeBaseContreA() {
    if (state == 2) {
        modificateurDeForce = Math.floor(Math.random() * (5 - 0)) + 1;
    } else {
        modificateurDeForce = Math.floor(Math.random() * (15 - 7)) + 1;
    };
    dégâts = forceAttaqueDeBase + modificateurDeForce;
    vieRestanteJoueur = vieRestanteJoueur - dégâts
    document.getElementById('vieDeNotreJoueur').innerHTML = 'vie restante A: ' + vieRestanteJoueur;
 }


function attaqueDeBaseContreB() {
    if (stateB == 2) {
        modificateurDeForceB = Math.floor(Math.random() * (5 - 0)) + 1;
    } else {
        modificateurDeForceB = Math.floor(Math.random() * (15 - 7)) + 1;
    };
    dégâtsB = forceAttaqueDeBase + modificateurDeForceB
    vieRestanteRival = vieRestanteRival - dégâtsB
    document.getElementById('vieDuRival').innerHTML = 'vie restante B: ' + vieRestanteRival;
 }

function stateSwitcher(){
    if(state == 1){
        state = state + 1
        stateWord = 'deffense'
    } else if (state ==2){
        state = state -1
        stateWord = 'offense'
    };
    document.getElementById('stateSwitch').innerHTML = stateWord;
 }

 function stateSwitcherB(){
    if(stateB == 1){
        stateB = stateB + 1
        stateWordB = 'deffense'
    } else if (stateB ==2){
        stateB = stateB -1
        stateWordB = 'offense'
    };
    document.getElementById('stateSwitchB').innerHTML = stateWordB;
 }
*/



