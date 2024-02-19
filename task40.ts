function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } 
    {let album: { artist: string, title: string, tracks?: number } = { artist, title };
//here the tracks are optinals therefore if the tracks dont match they can be unidentified
if (tracks !== undefined) {album.tracks = tracks;} return album;}

//  the artist and the title name has been gven and i have also provided the tracks value in 2 of them.
console.log(make_album('Atif Aslam', 'Woh Lamhe'));
console.log(make_album('Michel Jackson', 'Smooth Criminal', 12));
console.log(make_album('ChainSmoker', 'Closer', 8));


