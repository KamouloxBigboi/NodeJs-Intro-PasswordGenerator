import clipboardy from 'clipboardy'

console.log('Node rocks!');

function makePwd(length) {
    
    // let length = process.argv
    let result  = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

console.log(makePwd(5));

//// penser à yargs = process.argv ?    
