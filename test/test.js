var expect = require('chai').expect;
describe('text analyzer', function(){
  var TextAnalyzer = require('../src/TextAnalyzer');
  // A text file would be better but this works
  // Consonants: 153;
  // Vowels: 100;
  var text = 'I am a software engineer with broad experience in different roles of the full software development cycle. I work on requirements, functional design, technical design (architecture) and programming of applications and systems. I have experience as a Scrum Master or team lead and enjoy coaching colleagues.'

  it('should return the number of consonants that appear in the text', function(){
    var textAnalyzer = new TextAnalyzer();
    textAnalyzer.setText(text);
    expect(textAnalyzer.getConsonants()).to.be(153);
  })

  it('should return the number of vowels that appear in the text', function(){
  })

  it('should return the top 3 consonants and top 3 vowels used and how many times they appear in the text.', function(){
  })

})
