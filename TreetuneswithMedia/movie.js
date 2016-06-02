function Movie(title, year, duration) {
  Media.call(this, title, duration);
  this.year = year;
}
//copy the references to the Media's prototyp properties and methods to the song's prototype.
Movie.prototype = Object.create(Media.prototype)

Movie.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' (';
  htmlString += this.year;
  htmlString += ')';
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};
