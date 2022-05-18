import clipboardy from 'clipboardy';
import yargs from 'yargs';

console.log('Node rocks!');

function makePwd(length) {
    
    // let length = process.argv
    let result  = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      clipboardy.writeSync(result);
   }
   return result
}

console.log(makePwd(5));

//// penser à yargs = process.argv ?  /////
