const { default: axios } = require("axios");

axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms');

var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));