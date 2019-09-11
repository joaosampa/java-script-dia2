// let saldo = 1000;
// let putUsuario = prompt ("Digite seu usuario");
// let putSenha = prompt ("Digite sua senha");

// if(usuario == putUsuario && senha == putSenha){ 
//      alert("Parabens vc logou");
// }else{
//      alert("puts que triste");
// }
    
//  MANEIRAS DE SE FAZER UM LOGIN 3 ////////////////////////////////////  LINKADO COM A MENIERA 2 LETS

//  if(usuario==putUsuario){
//      let putSenha = prompt ("Digite sua senha");
//      if(senha==putSenha){
//          alert("parabens voce logou");
//          let saque= Number(prompt("Digite seu valor"));
//          if(saldo>=saque){
//              alert("Saque realizado com sucesso");
//              saldo = saldo - saque
//              alert(`O seu novo saldo é ${saldo}`);
//          }else{             alert("Saldo insuficiente");
//          }
//      }else{
//          alert("Senha incorreta");
//      }
//  }else{
//      alert("Usuario incorreto");
// }

// JEITO RAPIDO E FACIL /////////////////////////////////////

let senha = "alucinacao"
let usuario = "coach"
let tentativas = 0;

while(tentativas <=3){
    let senhaDigitada = prompt("Senha");
    let usuarioDigitado = prompt("Usuario");
    if(senha == senhaDigitada && usuario == usuarioDigitado){
        alert("voce logou");
        tentativas = 100;
    }else{
        alert("usuario ou senha incorretos");
        tentativas ++;
        if(tentativas == 4){
            alert("conta bloqueada");
        }
    }
}