'use strict';
require('styles/main.css');
var TextAnalyzer = require('./TextAnalyzer');
var textAnalyzer = new TextAnalyzer();
var _            = require('lodash');

var inputEl         = document.getElementById('input');
var consonantsEl    = document.getElementById('consonants-output');
var vowelsEl        = document.getElementById('vowels-output');
var topConsonantsEl = document.getElementById('top-consonants');
var topVowelsEl     = document.getElementById('top-vowels');

var removeChildren = function(el){
  while(el.firstChild){
    el.removeChild(el.firstChild);
  }
};

var createLetterChildren = function(parentEl, lettersStats){
  removeChildren(parentEl);
  _.forEach(lettersStats, function(letterStats){
    var el = document.createElement("span");
    el.innerHTML = letterStats.letter + ': ' + letterStats.times + ' times';
    parentEl.appendChild(el);
  });
};

var update = function(){
  textAnalyzer.setText(inputEl.value);
  consonantsEl.innerHTML = textAnalyzer.getConsonants();
  vowelsEl.innerHTML     = textAnalyzer.getVowels();
  createLetterChildren(topConsonantsEl, textAnalyzer.getTopConsonants(3));
  createLetterChildren(topVowelsEl, textAnalyzer.getTopVowels(3));
};
update();

inputEl.onkeyup = function(e){
  update();
};
