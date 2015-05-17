var _ = require('lodash');
var latinize = require('latinize');

/**
 * A class that analyzes a text.
 *
 * In order to use it you need to first instance it:
 *
 *   var textAnalyzer = new TextAnalyzer();
 *
 * Set the text that you want to analyze:
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

	this.setText('');
}

TextAnalyzer.__vowels = 'aeiou';

_.extend(TextAnalyzer.prototype, {
	/**
	 * Sets the text that TextAnalyzer will analyze.
	 * @param {String} text
	 */
	setText: function(text){
		this.__originalText = text;
		this.__processedText = this.__processText(text);
	},

	/**
	 * Process text to be easier to count letters.
	 *  - Makes all chars to lower case;
	 *  - Remoes all accented chars;
	 * Doesn't change any internal variables, it's just a helper.
	 * @param  {String} text
	 * @return {String} processed text
	 */
	__processText: function(text){
		return latinize(text.toLowerCase());
	},

  __isVowel: function(letter){
    return TextAnalyzer.__vowels.indexOf(letter) >= 0;
  },

  __analyzeText: function(){

  },

	/**
	 * @return {Number} Returns the number of consonants.
	 */
	getConsonants: function(){
		return 0;
	},

	/**
	 * @return {Number} Returns the number of vowels.
	 */
	getVowels: function(){
		return 0;
	},

	/**
   * @param {Number} [n=Infinity] The number of vowels to return;
	 * @return {Object[]} Returns an array of objects ordered by the consonant with the higher frequency.
	 *                    The object has a "letter" key which contains the letter value and a "times" key which
	 *                    contains the number of times that letter is contained in the text.
	 */
	getTopConsonants: function(n){
		return [];
	},

	/**
   * @param {Number} [n=Infinity] The number of vowels to return; 
	 * @return {Object[]} Returns an array of objects ordered by the consonant with the higher frequency.
	 *                    The object has a "letter" key which contains the letter value and a "times" key which
	 *                    contains the number of times that letter is contained in the text.
	 */
	getTopVowels: function(n){
    n = n || Infinity;
    var letter;
    var letterMap = {};
    var l = this.__processedText.length;
    while(l--){
      letter = this.__processedText[l];
      if(!this.__isVowel(letter)) continue;
      if(!letterMap[letter]){
        letterMap[letter] = 1;
      }else{
        letterMap[letter]++;
      }
    }
    var letterMapAsArray = _.map(letterMap, function(times, letter){
      return {
        letter : letter,
        times  : times
      }
    })
		return _.sortBy(letterMapAsArray, 'times').reverse().slice(0, n);
	}
})

module.exports = TextAnalyzer;