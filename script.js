function gerar(){
  execute=1000000
  while(execute>0){
    execute=execute-1
    htmlCertificado=emitirCertificado(inputNome.value)
  }
  
  links=[
    "https://codepen.io/Leoninha/pen/dyYPMPr",
    "https://codepen.io/Leoninha/pen/gOarqLK",
    "https://codepen.io/Leoninha/pen/WNQwGOJ",
    "https://codepen.io/Leoninha/pen/mdePOqG",
    "https://codepen.io/Leoninha/pen/jObqKEJ",
    "https://codepen.io/Leoninha/pen/PoPNBpo",
    "https://codepen.io/Leoninha/pen/bGVpxra" 
  ]
  
  titulo=[
    'Cálculos Básicos',
    'Pokebola',
    'Ficha Informativa',
    'Sorteio',
    'Botão de Like',
    'App Transporte',
    'Certificado'
  ]
  contalink=0
  linkshtml=""
  while(contalink<7){
    link=links[contalink]
    linkshtml=linkshtml + `
      <li>
        ${titulo[contalink]}:
        <a target="_blank" href="${links[contalink]}">
        ${links[contalink].replace('https//','')}
        </a>
      </li>
`
    contalink=contalink+1
  }
  
  document.body.innerHTML=
    `${htmlCertificado}
  <ol>
    ${linkshtml}
  </ol>`
  
  print()
}