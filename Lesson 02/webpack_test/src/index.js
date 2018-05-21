'use strict';
const Author = require ('./components/author/author');
const author = new Author(document);

document.body.appendChild(author.createComponent());
