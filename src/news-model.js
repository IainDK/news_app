(function(exports) {
    function NewsModel(text){
      this.text = text;
    }

    NewsModel.prototype.returnText = function (){
      return this.text;
    };

    exports.NewsModel = NewsModel;
    exports.returnText = this.returnText;
})(this);
