var expect = require('chai').expect;
describe('text analyzer', function(){
  var TextAnalyzer = require('../src/TextAnalyzer');
  var text = 'I am a software engineer with broad experience...'
  var textAnalyzer;

  beforeEach(function(done){
    textAnalyzer = new TextAnalyzer();
  })

  it('should return the number of consonants that appear in the text', function(){
    textAnalyzer.setText(text);
    expect(textAnalyzer.getConsonants()).to.be(21);
  })

  it('should return the number of vowels that appear in the text', function(){
    textAnalyzer.setText(text);
    expect(textAnalyzer.getVowels()).to.be(21);
  })

  it('should return the top 3 consonants and top 3 vowels used and how many times they appear in the text.', function(){
    var text2 = '5 * aAaaa, 3 * aaA, eEe, ii, o, 5 * BBBbbB, 2 * ccC, 2 * dd, 3 * BBb, f'
    textAnalyzer.setText(text2);
    var top3Consonants = textAnalyzer.getTopConsonants(3);
    var top3Vowels     = textAnalyzer.getTopVowels(3);

    expect(top3Consonants.length).to.be(3);
    expect(top3Consonants[0].letter).to.be('b');
    expect(top3Consonants[0].times).to.be(8);
    expect(top3Consonants[1].letter).to.be('c');
    expect(top3Consonants[1].times).to.be(3);
    expect(top3Consonants[2].letter).to.be('d');
    expect(top3Consonants[2].times).to.be(2);

    expect(top3Vowels.length).to.be(3);
    expect(top3Vowels[0].letter).to.be('a');
    expect(top3Vowels[0].times).to.be(8);
    expect(top3Vowels[1].letter).to.be('e');
    expect(top3Vowels[1].times).to.be(3);
    expect(top3Vowels[2].letter).to.be('i');
    expect(top3Vowels[2].times).to.be(2);
  })

})
