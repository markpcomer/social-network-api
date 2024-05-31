// username & email data for user-controller.js
const userSeedData = [
    {
        username: 'ernststavro',
        email: 'blofeld@spectre.org'
    },
    {
        username: 'auricgoldfiner',
        email: 'ireallylikegold@spectre.org'
    },
    {
        username: 'alectrevelyan',
        email: '006@mi6.co.uk'
    },
    {
        username: 'oddjob',
        email: 'haberdasher@spectre.org'
    },
    {
        username: 'lechiffre',
        email: 'customerservice@bankofamerica.com'
    },
];

// username & thought data for thought-controller.js
const thoughtSeedData = [
    {
        thoughtText: 'I Shall Look Forward To Personally Exterminating You, Mr. Bond.',
        username: 'ernststavro',
    },
    {
        thoughtText: 'No Mr. Bond, I expect you to die.',
        username: 'auricgoldfiner',
    },
    {
        thoughtText: 'You know, James... I was always better.',
        username: 'alectrevelyan',
    },
    {
        thoughtText: '...',
        username: 'oddjob'
    },
    {
        thoughtText: 'I hope our little game isn\'t causing you to perspire.',
        username: 'lechiffre',
    }
];

// Exporting userSeedData & houghtSeedData in one module
module.exports = { userSeedData, thoughtSeedData };