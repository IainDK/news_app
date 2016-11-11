function testNewsModel(string){
  var testNewsModel = new NewsModel(string);
  assert.isTrue(testNewsModel.returnText() === string);
}

testNewsModel("Donald Trump wins!");
