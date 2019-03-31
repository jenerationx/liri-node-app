# LIRI Bot

### Overview

In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### What LIRI Does

1. LIRI will search Spotify for songs with the `spotify-this` command 

2. LIRI will search Bands in Town for concerts with the `concert-this` command

3. LIRI will search and OMDB for movies with the `movie-this` command

4. LIRI will also read a text file and do what it says with the `do-what-it-says` command

## Spotify This

LIRI will search the Spotify API for songs with the `spotify-this` command

In terminal (or bash), type `node liri spotify-this` and the name of the song you want information about.  LIRI will return 10 results based on your search.
## Live Demo (click image for video demonstration):

[![Video of spotify-this](http://img.youtube.com/vi/pb-NU9SN7Q4/0.jpg)](https://www.youtube.com/watch?v=pb-NU9SN7Q4 "Spotify this")

## Concert This

LIRI will search the Bands In Town API for upcoming concerts with the `concert-this` command

In terminal (or bash), type `node liri concert-this` and the name of the Artist you want information about.  LIRI will return up to 15 results based on your search.
## Live Demo (click image for video demonstration):

[![Video of concert-this](http://img.youtube.com/vi/5r5IN0v8IiA/0.jpg)](https://www.youtube.com/watch?v=5r5IN0v8IiA "Concert this")

## Movie This

LIRI will search the OMDB API for movies with the `movie-this` command

In terminal (or bash), type `node liri movie-this` and the name of the Artist you want information about.  LIRI will return one result based on your search.
## Live Demo (click image for video demonstration):

[![Video of concert-this](http://img.youtube.com/vi/C4YU5VEt7J4/0.jpg)](https://www.youtube.com/watch?v=C4YU5VEt7J4 "Movie this")

## Do What It says

LIRI will read a text file and do what it says with the `do-what-it-says` command

In terminal (or bash), type `node liri do-what-it-says` and the LIRI will perform the command in the random.txt file.
## Live Demo (click image for video demonstration):

[![Video of concert-this](http://img.youtube.com/vi/qh1Mh_n2eJI/0.jpg)](https://www.youtube.com/watch?v=qh1Mh_n2eJI "Do What It Says")

We can also change the contents of the text file and LIRI will perform whichever command the file says! 

![Do-What with movie-this](https://github.com/jenerationx/liri-node-app/blob/master/images/doWhat.png)