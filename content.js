const wordDictionary = {
    "Técnico" : "Técnica",
    "Planejador" : "Planejadora",
    "Tapeceiro" : "Tapeceira",
    "Supervisor" : "Supervisora",
    "Soldador" : "Soldadora",
    "Revisor" : "Revisora",
    "Repositor" : "Repositora",
    "Redator" : "Redatora",
    "Químico" : "Química",
    "Psicólogo" : "Psicóloga",
    "Promotor" : "Promotora",
    "Programador" : "Programadora",
    "Professor" : "Professora",
    "Preparador" : "Preparadora",
    "Porteiro" : "Porteira",
    "Podólogo" : "Podóloga",
    "Pizzaiolo" : "Pizzaiola",
    "Pesquisador" : "Pesquisadora",
    "Padeiro" : "Padeira",
    "Operador" : "Operadora",
    "Engenheiro" : "Engenheira",
    "Motoboy" : "Motogirl",
    "Montador" : "Montadora",
    "Mestre" : "Mestra",
    "Mensageiro" : "Mensageira",
    "Contador" : "Contadora",
    "Veterinário" : "Veterinária",
    "Médico" : "Médica",
    "Confeiteiro" : "Confeiteira",
    "Cobrador" : "Cobradora",
    "Mecânico" : "Mecânica",
    "Carpinteiro" : "Carpinteira",
    "Caldeireiro" : "Caldeireira",
    "Instrutor" : "Instrutora",
    "Impressor" : "Impressora",
    "Cabeleireiro" : "Cabeleireira",
    "Bibliotecário" : "Bibliotecária",
    "Degustador" : "Degustadora",
    "Funileiro" : "Funileira",
    "Fresador" : "Fresadora",
    "Fonaudiólogo" : "Fonaudióloga",
    "Ferramenteiro" : "Ferramenteira",
    "Farmacêutico" : "Farmacêutica",
    "Lancheiro" : "Lancheira",
    "Auditor" : "Auditora",
    "Executivo" : "Executiva",
    "Encarregado" : "Encarregada",
    "Arquiteto" : "Arquiteta",
    "Apontador" : "Apontadora",
    "Treinador" : "Treinadora",
    "Advogado" : "Advogada",
    "Vidraceiro" : "Vidraceira",
    "Serralheiro" : "Serralheira",
    "Retificador" : "Retificadora",
    "Polidor" : "Polidora",
    "Pintor" : "Pintora",
    "Marceneiro" : "Marceneira",
    "Mandrilhador" : "Mandrilhadora",
    "Lubrificador" : "Lubrificadora",
    "Laminador" : "Laminadora",
    "Jardineiro" : "Jardineira",
    "Extrusor" : "Extrusora",
    "Eletrotécnico" : "Eletrotécnica",
    "Eletromecânico" : "Eletromecânica",
    "Cortador" : "Cortadora",
    "Coordenador" : "Coordenadora",
    "Camareiro" : "Camareira",
    "Borracheiro" : "Borracheira",
    "Barman" : "Barwoman",
    "Afiador" : "Afiadora",
    "Tesoureiro" : "Tesoureira",
    "Torneiro Mecânico" : "Torneira Mecânica",
    "Tosador" : "Tosadora",
    "Vendedor" : "Vendedora",
    "Zelador" : "Zeladora",
    "Corretor" : "Corretora",
    "Digitador" : "Digitadora",
    "Diretor" : "Diretora",
    "Embalador" : "Embaladora",
    "Encanador" : "Encanadora",
    "Divulgador" : "Divulgadora",
    "Diretor" : "Diretora",
    "Encarregado" : "Encarregada",
    "Administrativo" : "Administrativa",
    "Lavadeiro" : "Lavadeira",
    "Diagramador" : "Diagramadora",
    "Inspetor" : "Inspetora",
    "Geólogo" : "Geóloga",
    "Garçom" : "Garçonete",
    "Enfermeiro" : "Enfermeira",
    "Cozinheiro" : "Cozinheira",
    "Assessor" : "Assessora",
    "Administrador" : "Administradora",
    "Biólogo" : "Bióloga",
    "Biomédico" : "Biomédica",
    "Bioquímico" : "Bioquímica",
    "Consultor" : "Consultora",
    "Office-boy" : "Office-girl",
    "Estatístico" : "Estatística",
    "Instalador" : "Instaladora",
    "Matemático" : "Matemática",
    "Publicitário" : "Publicitária",
    "Tecnólogo" : "Tecnóloga"
};

function textNode(node) {
  let allWords = [];
  for (node = node.firstChild; node; node = node.nextSibling) {
    if (node.nodeType == 3) allWords.push(node);
    else allWords = allWords.concat(textNode(node));
  }
  return allWords;
}

let textNodes = textNode(document.body);

for (node of textNodes) {
  let originalText = node.nodeValue;
  let text = originalText;

  for (wordToReplace in wordDictionary) {
    let wordReplace = new RegExp("\\b(" + wordToReplace + ")\\b", "ig");
    let replacement = wordDictionary[wordToReplace]
    let replacedText = text.replace(wordReplace, replacement);

    if (replacedText !== text && node.parentNode !== null) text = replacedText;
  }

  if (text != originalText && node.parentNode !== null) {
    let element = document.createElement("span");
    element.innerHTML = text;
    node.parentNode.replaceChild(element, node);
  }
}
