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

const thoughtSeedData = [
    {
        thought: 'I Shall Look Forward To Personally Exterminating You, Mr. Bond.',
        username: 'ernststavro',
    },
    {
        thought: 'No Mr. Bond, I expect you to die.',
        username: 'auricgoldfiner',
    },
    {
        thought: 'You know, James... I was always better.',
        username: 'alectrevelyan',
    },
    {
        thought: '...',
        username: 'haberdasher@spectre.org'
    },
    {
        thought: 'I hope our little game isn\'t causing you to perspire.',
        username: 'lechiffre',
    }
];

const getThought = (int) => {
    let results = [];
    for (let i=0; i<int; i++) {
        results.push({
            /*
            thoughtText:
            createdAt:
            username:
            reaction
            */
        })
    }
    return results;
}

const getReaction = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            /*
            reactionBody:
            username:
            */
        })
    }
    return results;
}

module.exports = { userSeedData, thoughtSeedData };