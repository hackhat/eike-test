var expect = require('chai').expect;

describe('TextAnalyzer', function(){
  var TextAnalyzer = require('../src/TextAnalyzer');
  var text = 'I am a software engineer with broad experience...'
  var textAnalyzer;

  beforeEach(function(){
    textAnalyzer = new TextAnalyzer();
  })

  it('should return the number of consonants that appear in the text', function(){
    textAnalyzer.setText(text);
    expect(textAnalyzer.getConsonants()).to.be.equal(21);
  })

  it('should return the number of vowels that appear in the text', function(){
    textAnalyzer.setText(text);
    expect(textAnalyzer.getVowels()).to.be.equal(21);
  })

  it('should count accented vowels', function(){
    textAnalyzer.setText('áé');
    expect(textAnalyzer.getVowels()).to.be.equal(2);
  })

  it('should count accented consonants', function(){
    textAnalyzer.setText('ňř');
    expect(textAnalyzer.getVowels()).to.be.equal(2);
  })

  it('should return the top 3 consonants and how many times they appear in the text.', function(){
    var text2 = '5 * aAaaa, 3 * aaA, eEe, ii, o, 5 * BBBbB, 2 * ccC, 2 * dd, 3 * BBb, f'
    textAnalyzer.setText(text2);
    var top3Consonants = textAnalyzer.getTopConsonants(3);

    // I could used deep equal but in this way I get more detailed errors when test fails.
    expect(top3Consonants.length).to.be.equal(3);
    expect(top3Consonants[0].letter).to.be.equal('b');
    expect(top3Consonants[0].times).to.be.equal(8);
    expect(top3Consonants[1].letter).to.be.equal('c');
    expect(top3Consonants[1].times).to.be.equal(3);
    expect(top3Consonants[2].letter).to.be.equal('d');
    expect(top3Consonants[2].times).to.be.equal(2);
  })

  it('should return the top 3 vowels used and how many times they appear in the text.', function(){
    var text2 = '5 * aAaaa, 3 * aaA, eEe, ii, o, 5 * BBBbbB, 2 * ccC, 2 * dd, 3 * BBb, f'
    textAnalyzer.setText(text2);
    var top3Vowels = textAnalyzer.getTopVowels(3);

    expect(top3Vowels.length).to.be.equal(3);
    expect(top3Vowels[0].letter).to.be.equal('a');
    expect(top3Vowels[0].times).to.be.equal(8);
    expect(top3Vowels[1].letter).to.be.equal('e');
    expect(top3Vowels[1].times).to.be.equal(3);
    expect(top3Vowels[2].letter).to.be.equal('i');
    expect(top3Vowels[2].times).to.be.equal(2);
  })

})
