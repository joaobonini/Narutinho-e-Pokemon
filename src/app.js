import { LightningElement } from "lwc";

export default class App extends LightningElement {



  pessoa={
    nome:"Bonini",
    tel:"(18)25434-4325",
    idade:23,
    status:true
  }
  pokemons=[
    {cod: 1,nome:"Pikachu", tipo:"Elétrico", nivel:17},
    {cod: 2,nome:"Raichu", tipo:"Elétrico", nivel:25},
    {cod: 3,nome:"Dratini", tipo:"Dragão", nivel:15},
    {cod: 4,nome:"Dragonair", tipo:"Dragão", nivel:25},
    {cod: 5,nome:"Dragonite", tipo:"Dragão/Voador", nivel:55},
    {cod: 6,nome:"Larvitar", tipo:"Pedra/Terra", nivel:18},
    {cod: 7,nome:"Pupitar", tipo:"Pedra/Terra", nivel:30},
    {cod: 8,nome:"Tyranitar", tipo:"Pedra/Dark", nivel:55},
    {cod: 9,nome:"Chimchar", tipo:"Fogo", nivel:10},
    {cod: 10,nome:"Monferno", tipo:"Fogo/Lutador", nivel:14},
    {cod: 11,nome:"Infernape", tipo:"Fogo/Lutador", nivel:36},
    {cod: 12,nome:"Mudkip", tipo:"Água", nivel:13},
    {cod: 13,nome:"Marchtop", tipo:"Água/Terra", nivel:16},
    {cod: 14,nome:"Swampert", tipo:"Água/Terra", nivel:36},
    {cod: 15,nome:"Articuno", tipo:"Gelo", nivel:50},
    {cod: 16,nome:"Zapdos", tipo:"Elétrico", nivel:50},
    {cod: 17,nome:"Moltres", tipo:"Fogo", nivel:50},
  ] 

  naruto=[
    {codN: 1,nome:"Naruto", jutsu:"Rasengan Gigante",cla:"Uzumaki",classificacao:"Hokage",chakra:"Vento"},
    {codN: 2,nome:"Sasuke", jutsu:"Chidori",cla:"Uchiha",classificacao:"Shadow-Hokage",chakra:"fogo/relampago"},
    {codN: 3,nome:"Kakashi", jutsu:"Kamui",cla:"Hatake",classificacao:"sexto-hokage",chakra:"relampago"},
    {codN: 4,nome:"Itachi", jutsu:"Amaterasu",cla:"Uchiha",classificacao:"Akatsuki",chakra:"fogo"},
    {codN: 5,nome:"Madara", jutsu:"Tengai Shinsei",cla:"Uchiha",classificacao:"Co-fundador de Konoha",chakra:"fogo"},
    {codN: 6,nome:"Jiraya", jutsu:"Agulhas Jizō",cla:"?",classificacao:"Sennin-Lendario",chakra:"fogo"},
    {codN: 7,nome:"Orochimaru", jutsu:"Deslizamento do Modo da Cobra",cla:"Fuuma",classificacao:"Senin-Lendario",chakra:"Vento"},
  ]
}
