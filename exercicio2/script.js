let numero1 = Number(prompt("Insira um número:"))
let numero2 = Number(prompt("Insira outro número:"))

console.log(`
    O primeiro numero é maior que segundo? ${numero1 > numero2}
    O primeiro numero é igual ao segundo? ${numero1 === numero2}
    O primeiro numero é divisível pelo segundo? ${numero1 % numero2 === 0}
    O segundo numero é divisível pelo primeiro? ${numero2 % numero1 === 0}
    `)
