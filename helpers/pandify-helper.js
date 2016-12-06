const moodList = ['cool', 'funny', 'dumb', 'LoL', 'nice', 'rocking', 'Just food it!', 'funky', 'lazy'];

var pandify = function(body) {
    body.mood = moodList[Math.floor(Math.random() * moodList.length)]
    return body;
}

module.exports = pandify;
