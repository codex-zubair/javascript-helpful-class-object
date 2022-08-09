let lyrics = "amar sonar bangla ami tumae valo bashi, chirodin tumar akash, tumar batash amar prane,omaae amr prane, bajae bashi. sonar bangla ami tumae valo bashi."


// * checking posing of a later.
console.log(lyrics[0])

// * searching lyrics value
console.log(lyrics.includes("amar"));

// *index start from here
console.log(lyrics.indexOf("tumae"));


// * checking start position
console.log(lyrics.startsWith("amar"));
console.log(lyrics.startsWith("tumae", 22));



// *End with checking position
console.log(lyrics.endsWith('amar', 4));
console.log(lyrics.endsWith('bashi', 38));



// * Split the full string.
console.log(lyrics.split(''))



let arr = "amar sonar bangla ami tumae valo bashi, chirodin tumar akash, tumar batash amar prane,omaae amr prane, bajae bashi. sonar bangla ami tumae valo bashi."
// * string subtracting

console.log(arr.substring(1, 4))



// *string trim for removing odd space.
let trimPlease = "      amar sonar bangla ami tumae valo bashi, chirodin tumar akash, tumar batash amar prane,omaae amr prane, bajae bashi. sonar bangla ami tumae valo     bashi.     "

console.log(trimPlease.trimStart())
console.log(trimPlease.trimEnd())
console.log(trimPlease.trim())






// * string array join  can make spaces can do many things with an array.
let abc = ["abul", "kalam", "ajad", "rohim", "miya"]
console.log(abc.join(" +++  "))

