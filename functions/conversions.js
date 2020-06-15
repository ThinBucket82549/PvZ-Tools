var BulbCount;

function ConvertToPrizeBulb(xp) {
    var result = xp / 4000;
    return result;
}
function ConvertToXp(bulbs) {
    var result = bulbs * 4000;
    return result;
}

module.exports = {
    ConvertToPrizeBulb,
    ConvertToXp
};