// Import declaration.
const styles = require('./author.css');

class Author {
  constructor(doc) {
    this.name = 'Yury Timofeev';
    this.document = doc;
    this.styles = styles;
  }
  
  createComponent() {
    if (!this.document || !this.document.doctype) {
      throw new Error('Document not initialized.');
    }
    
    function createElement() {
      this.elem = this.document.createElement('div');
      this.elem.className = 'authorComponent';
      this.elem.title = 'Click to see current date and time';
      this.elem.innerHTML = `The author's name is <span class="authorName">${this.name}</span>.`;
    }
  
    function createEventHandlers() {
      this.elem.onclick = function(event) {
        alert(`Current date & time is ${new Date()}`);
      }
    }

    createElement();
    createEventHandlers();

    return this.elem;
  }
}

// Export declaration.
module.exports = Author;
