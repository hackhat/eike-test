'use strict';
var TextAnalyzer = require('../TextAnalyzer');
var textAnalyzer = new TextAnalyzer();

var inputEl          = document.getElementById('input');
var consonantsEl     = document.getElementById('consonants');
var vowelsEl         = document.getElementById('vowels');
var top3consonantsEl = document.getElementById('top-3-consonants');
var top3vowelsEl     = document.getElementById('top-3-vowels');

var update = function(){
	textAnalyzer.setText(inputEl.value);
	consonantsEl.innerHTML     = textAnalyzer.getConsonants();
	vowelsEl.innerHTML         = textAnalyzer.getVowels();
	top3consonantsEl.innerHTML = JSON.stringify(textAnalyzer.getTopConsonants(3));
	top3vowelsEl.innerHTML     = JSON.stringify(textAnalyzer.getTopVowels(3));
}

inputEl.onkeyup = function(e){
	update();
};