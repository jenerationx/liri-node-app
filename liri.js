var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require('moment');
var fs = require("fs");
var command = process.argv[2];
var searchTerm = process.argv.slice(3).join(" ");

var concertThis = function () {
  axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp").then(
    function (response) {
      var bandsResp = response.data
      for (var i = 0; i < 15; i++) {
        console.log("\n" + bandsResp[i].venue.name + "\n" +
          bandsResp[i].venue.city + ", " +
          bandsResp[i].venue.region + "\n" +
          moment(bandsResp[i].datetime).format('LL') +
          "\n\n----------------------------------------------------------------\n");
      }
    });
};

var movieThis = function () {
  axios.get("http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      var movie = response.data;
      console.log("Title: " + movie.Title +
        "\nYear: " + movie.Year +
        "\nCountry: " + movie.Country +
        "\nLanguage: " + movie.Language +
        "\nPlot: " + movie.Plot +
        "\nActors: " + movie.Actors +
        "\nIMDB Rating: " + movie.imdbRating);
      if (!movie.Ratings[1]) {
        return console.log("Rotten Tomatoes Rating: N/A");
      } else {
        console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value)
      }
    }
  );
};

var spotifyThis = function () {
  spotify.search({ type: 'track', query: searchTerm })
    .then(function (response) {
      var song = response.tracks.items
      for (var i = 0; i < 10; i++) {
        console.log("Artist: " + song[i].album.artists[0].name +
          "\nTitle: " + song[i].name +
          "\nPreview URL: " + song[i].preview_url +
          "\nAlbum: " + song[i].album.name +
          "\n\n----------------------------------------------------------------\n");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
};

if (command === "concert-this") {
  if (!searchTerm) {
    console.log("Please enter an Artist Name")
  } else {
    concertThis()
  };
}
else if (command === "movie-this") {
  if (!searchTerm) {
    searchTerm = "mr nobody";
    movieThis();
  } else {
    movieThis();
  }
}
else if (command === "spotify-this") {
  if (!searchTerm) {
    searchTerm = "ace of base the sign";
    spotifyThis();
  } else {
    spotifyThis();
  }
}
else if (command === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");
    command = dataArr[0];
    searchTerm = dataArr[1];
    if (command === "concert-this") {
      concertThis();
    }
    else if (command === "movie-this") {
      movieThis();
    }
    else if (command === "spotify-this") {
      spotifyThis();
    }
  });
}
else {
  console.log("Command not recognized.");
}    
