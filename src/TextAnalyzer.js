var _ = require('lodash');
var latinize = require('latinize');

var TextAnalyzer = function(){
	/**
	 * The text as set.
	 */
	this.__originalText;
	/**
	 * Text in a format that is easy to process.
	 */
	this.__processedText;
}

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

	getConsonants: function(){
		return 0;
	},

	getVowels: function(){
		return 0;
	},

	getTopConsonants: function(n){
		return [];
	},

	getTopVowels: function(n){
		return [];
	}
})

module.exports = TextAnalyzer;