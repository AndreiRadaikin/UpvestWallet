import { createUser } from './static/upvestCreateUser';
import { createWallet } from './static/upvestCreateWallet';
import { getWallets } from './static/upvestWalletsList';

var readline = require('readline');
var readline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please, enter username: ', function (username) {
    rl.question('Please, enter password: ', function (password) {
      createUser(username, password);
      createWallet(username, password);
      getWallets(username, password);
    })
})