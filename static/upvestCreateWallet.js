const { UpvestClienteleAPI } = require('@upvest/clientele-api');

function createWallet(username, password) {

    const ASSET_ID = 'deaaa6bf-d944-57fa-8ec4-2dd45d1f5d3f';

    const clientele = new UpvestClienteleAPI(
        'https://api-playground.eu.upvest.co/1.0/',
        '7e0ZSHaU38FWC4HsqdXooj3sPiwDmMMjXzi9tIEH',   //OAuth2 ClientID
        '6PFoCj8IhjJa6QOF9XddPtg70ecEmEOL5VjvsNKGnO9ST8vOYpXuYYkWIuNjJfzILdy7wjTw8Bjx0a2gWNgM8CUJnb94wMest6KH0UTilPbWMH9aqz1IwyfaflqX5GJf',
        username,
        password
    );

    try {
        const ethereumWallet = await clientele.wallets.create(ASSET_ID, 'password');
        console.log(ethereumWallet);
        return ethereumWallet;
    } catch (err) {}
}

module.exports.createWallet = createWallet;