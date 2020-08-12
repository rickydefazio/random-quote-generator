var quotes = [
    {
        quote: 'If you want others to be happy, practice compassion. If you want to be happy, practice compassion.',
        source: 'Dalai Lama',
        citation: 'https://www.developgoodhabits.com/mindfulness-quotes/',
        tag: 'Mindfulness'
    },
    {
        quote: 'When we get too caught up in the busyness of the world, we lose connection with one another -- and ourselves.',
        source: 'Jack Kornfield',
        citation: 'https://www.developgoodhabits.com/mindfulness-quotes/',
        tag: 'Mindfulness'
    },
    {
        quote: 'Let go of your mind and then be mindful. Close your ears and listen!',
        source: 'Jalauddin Rumi',
        citation: 'https://www.developgoodhabits.com/mindfulness-quotes/',
        tag: 'Mindfulness'
    },
    {
        quote: 'Look at other people and ask yourself if you are really seeing them or just your thoughts about them.',
        source: 'Jon Kabat-Zinn',
        citation: 'https://www.developgoodhabits.com/mindfulness-quotes/',
        tag: 'Mindfulness'
    },
    {
        quote: "When I'm hungry, I eat what I love. When I'm bored, I do something I love. When I'm lonely, I connect with someone I love. When I feel sad, I remember that I am loved.",
        source: 'Michelle May',
        citation: 'https://www.developgoodhabits.com/mindfulness-quotes/',
        tag: 'Mindfulness'
    },
    {
        quote: 'The things that matter most in our lives are not fantastic or grand. They are moments when we touch one another.',
        source: 'Jack Kornfield',
        citation: 'https://www.developgoodhabits.com/mindfulness-quotes/',
        tag: 'Mindfulness'
    },
    {
        quote: "The first step toward your success is the one 'you' take, not someone else.",
        source: 'Ricky DeFazio',
        year: 2018,
        tag: 'Motivation'
    },
    {
        quote: "The usefulness of having a goal isn't it's eventual attainment, but rather the actions it manifests.",
        source: 'Ricky DeFazio',
        year: 2018,
        tag: 'Motivation'
    },
];
var randomIndex = function (array) {
    return Math.floor(Math.random() * array.length);
};
var getRandomQuote = function () { return quotes[randomIndex(quotes)]; };
var changeColor = function () {
    var colors = [
        'blue',
        'yellow',
        'green',
        'purple',
        'red',
        'turquoise',
        'orange',
        'white',
    ];
    document.getElementById('quote').style.color = colors[randomIndex(colors)];
};
var displayQuote = function () {
    var callQuote = getRandomQuote();
    var html = "\n  <p id=\"quote\">" + callQuote.quote + "</p>\n  <p class=\"source\"><strong>" + callQuote.source + "</strong>";
    if (callQuote.hasOwnProperty('citation')) {
        html += "<span class=\"citation\">" + callQuote.citation + "</span>";
    }
    if (callQuote.hasOwnProperty('year')) {
        html += "<span class=\"year\">" + callQuote.year + "</span>";
    }
    if (callQuote.hasOwnProperty('tag')) {
        html += "<p class=\"tag\">Tag: <strong>" + callQuote.tag + "</strong>";
    }
    html += '</p>';
    document.getElementById('quote-box').innerHTML = html;
    changeColor();
};
var autoChangeQuote = setInterval(displayQuote, 20000);
document
    .getElementById('loadQuote')
    .addEventListener('click', displayQuote, false);
