(function(exports) {
  function ViewList(list){
    this._list = list
  }

  ViewList.prototype.displayList = function () {
    if (this._list._notes.length > 0){
      var string = '';
    for (var i = 0; i < this._list._notes.length; i++) {
      string += "<li><div>"+this._list._notes[i]._text+"</div></li>"
    }
    return "<ul>"+string+"</ul>"
  }
  else{
    return "no notes"
  }
  }

  exports.ViewList = ViewList
})(this);
