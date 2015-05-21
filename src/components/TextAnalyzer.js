"use strict";
var _        = require('lodash');
var latinize = require('latinize');

/**
 * A class that analyzes a text.
 *
 * In order to use it you need to first instance it:
 *
 *   var textAnalyzer = new TextAnalyzer();
 *
 * Set the text that you want to analyze (by default is an empty string):
 *
 *   textAnalyzer.setText('some text that you want to analyze');
 *
 * Then you can get some stats about the text using the following methods:
 *
 *  - getConsonants
 *  - getVowels
 *  - getTopConsonants
 *  - getTopVowels
 *
 * If you want to change the text you can use the `setText` method like this:
 *
 *   textAnalyzer.setText('another text to analyze');
 *
 * And then you can further analyze the text.
 *
 * But if you want to analyze 2 text in parallel you just create 2 TextAnalyzer instances.
 */
var TextAnalyzer = function(){
  /**
   * The text as set.
   */
  this.__originalText;
  /**
   * Text in a format that is easy to process.
   */
  this.__processedText;
  /**
   * Cached stats about vowels.
   */
  this.__vowelsStats;
  /**
   * Cached stats about consonants.
   */
  this.__consonantsStats;
  /**
   * How many consonants have been found in the string.
   */
  this.__totalConsonants;
  /**
   * How many vowels have been found in the string.
   */
  this.__totalVowels;
  /**
   * Whenever the cache is clean or dirty.
   */
  this.__dirty;

  this.setText('');
};

TextAnalyzer.__vowels = 'aeiou';
// Characters between a and z except the vowels.
TextAnalyzer.__consonantRegExp = new RegExp('(?![' + TextAnalyzer.__vowels + '])[a-z]');

_.extend(TextAnalyzer.prototype, {
  /**
   * Sets the text that TextAnalyzer will analyze.
   * @param {String} text
   */
  setText: function(text){
    this.__originalText  = text;
    this.__processedText   = void 0;
    this.__vowelsStats   = void 0;
    this.__consonantsStats = void 0;
    this.__totalConsonants = void 0;
    this.__totalVowels   = void 0;
    this.__dirty       = true;
    this.__updateStats();
  },

  /**
   * Process text to be easier to count letters.
   *  - Makes all chars to lower case;
   *  - Remoes all accented chars;
   * Doesn't change any internal variables, it's just a helper.
   * @private
   * @param  {String} text
   * @return {String} processed text
   */
  __processText: function(text){
    return latinize(text.toLowerCase());
  },

  /**
   * Checks if a letter is a vowel.
   * @param  {String} letter A string with a single letter.
   * @return {Boolean} Returns true if is a vowel, false in other cases.
   */
  __isVowel: function(letter){
    return TextAnalyzer.__vowels.indexOf(letter) >= 0;
  },

  /**
   * Checks if a letter is a consonant.
   * @param  {String} letter A string with a single letter.
   * @return {Boolean} Returns true if is a consonant, false in other cases.
   */
  __isConsonant: function(letter){
    // As letter is always a 1 letter if the regexp finds any matches
    // that match will always be at index 0. If no matches are found the
    // regexp returns -1.
    return letter.search(TextAnalyzer.__consonantRegExp) === 0;
  },

  /**
   * Updates the stats only if is dirty.
   * @private
   */
  __updateStats: function(){
    if(!this.__dirty){return;}
    this.__processedText = this.__processText(this.__originalText);
    this.__analyzeText();
    this.__dirty = false;
  },

  /**
   * Because the use case for this class is to get a lot of infomation about a certain
   * text then we process the text in one batch and cache the results instead of
   * calculating each time the vowels and so on.
   * Using a cache is a trade-off because makes more rigid but increases the performance
   * if all stats are used over a certain text.
   * @todo: This logic can be encapsulated in a utility class.
   * @private
   */
  __analyzeText: function(){
    // Map letter to their frequency.
    var letter;
    var letterMap = {};
    var l         = this.__processedText.length;
    while(l--){
      letter = this.__processedText[l];
      if(!letterMap[letter]){
        letterMap[letter] = 1;
      }else{
        letterMap[letter]++;
      }
    }
    // Divide letter in vowels and consonants.
    this.__totalConsonants = 0;
    this.__totalVowels     = 0;
    var consonantsStats    = [];
    var vowelsStats        = [];
    var o;
    var that = this;
    _.forEach(letterMap, function(times, letter){
      o = {
        letter : letter,
        times  : times
      };
      if(that.__isConsonant(letter)){
        consonantsStats.push(o);
        that.__totalConsonants += times;
      }else if(that.__isVowel(letter)){
        vowelsStats.push(o);
        that.__totalVowels += times;
      }
    });
    this.__vowelsStats     = _.sortBy(vowelsStats, 'times').reverse();
    this.__consonantsStats = _.sortBy(consonantsStats, 'times').reverse();
  },

  /**
   * @return {Number} Returns the number of consonants.
   */
  getConsonants: function(){
    return this.__totalConsonants;
  },

  /**
   * @return {Number} Returns the number of vowels.
   */
  getVowels: function(){
    return this.__totalVowels;
  },

  /**
   * @param {Number} [n=Infinity] The number of vowels to return;
   * @return {Object[]} Returns an array of objects ordered by the consonant with the higher frequency.
   *          The object has a "letter" key which contains the letter value and a "times" key which
   *          contains the number of times that letter is contained in the text.
   */
  getTopConsonants: function(n){
    n = n || Infinity;
    return this.__consonantsStats.slice(0, n);
  },

  /**
   * @param {Number} [n=Infinity] The number of vowels to return;
   * @return {Object[]} Returns an array of objects ordered by the consonant with the higher frequency.
   *          The object has a "letter" key which contains the letter value and a "times" key which
   *          contains the number of times that letter is contained in the text.
   */
  getTopVowels: function(n){
    n = n || Infinity;
    return this.__vowelsStats.slice(0, n);
  }
});

module.exports = TextAnalyzer;
