console.log("Merhaba Kodlama.io")

//js type safe değildir let ile istediğimiz değeri atayabiliriz var gibi
let dolarBugun = 9.30

let dolarDun = 9.20
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 const sabit olduğu için başka bir değer atayamayız

console.log(euroDun)

// let users = getUsersFromApi()

let konutKredileri =["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("ul")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
// console.log(konutKredileri)