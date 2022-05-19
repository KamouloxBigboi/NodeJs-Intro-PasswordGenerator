import clipboardy from 'clipboardy';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { blue, red } from "ansicolor";

yargs(hideBin(process.argv))
  .command('pwgen', 'generate password', () => {}, (argv) => {
    console.info("longueur du mot de passe : " + argv._[1])
    let pwdlength = argv._[1]
    let pwd = makePwd(pwdlength)

    console.log(pwd)

    if (argv.c) {
      clipboardy.writeSync(pwd);
      console.log("Mot de passe copié dans le presse papier");
    }
  })
  .demandCommand(1)
  .parse()


function makePwd(length) {

  let result  = '';
  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]`;
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let charactersLength = characters.length;

  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result
}