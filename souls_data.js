/* ---------- SOULS_DATA: almas sacras dos 15 atos ----------
   act{N}.name / title / quote  → a alma de destaque do ato (a primeira a ser libertada na ordem do mapa).
   act{N}.companions            → as demais almas do mesmo ato, na mesma estrutura.
   Total de almas por ato = 1 + companions.length e bate com `souls` de LEVELS_CONFIG:
   3,3,4,4,(chefe),4,5,5,6,(chefe),5,6,6,7,(chefe).
   Atos de chefe (5, 10 e 15) têm só o intercessor: sua voz aparece como invocação durante a luta.
   As frases são epitáfios originais, inspirados na vida de cada santo; não são citações literais,
   exceto onde a tradição já consagra a fórmula (Santo Agostinho, medalha de São Bento, Jo 20,29). */
const SOULS_DATA = {
  act1:{ name:"Santo Antônio", title:"O Farol dos Perdidos",
    quote:"Tudo o que se perde ainda tem quem o procure. Você também foi procurado: é por isso que a luz chegou até aqui.",
    companions:[
      { name:"Santa Luzia", title:"A Guardiã da Luz", quote:"Meu nome é luz, e eu a levo nos olhos de quem acredita. Mantenha-os abertos, mesmo quando o escuro insistir." },
      { name:"São Francisco de Assis", title:"O Irmão de Todas as Criaturas", quote:"Até a sombra é criatura e também pede um irmão. Comece chamando-a pelo nome." }
    ] },
  act2:{ name:"Santa Cecília", title:"A Voz do Hino Escondido",
    quote:"Cantei no coração enquanto o mundo ensurdecia. O eco que volta é só o hino esperando por você.",
    companions:[
      { name:"São João Batista", title:"A Voz no Deserto", quote:"Eu fui apenas voz; a luz vinha depois de mim. Chame no deserto: alguém vai ouvir." },
      { name:"Santa Teresinha do Menino Jesus", title:"A Pequena Via", quote:"Nenhum gesto é pequeno quando nasce do amor. Até um passo no escuro pode ser um hino." }
    ] },
  act3:{ name:"São Bruno", title:"O Silêncio que Guarda",
    quote:"Nas paredes estreitas aprendi que o infinito cabe num coração obediente. Passe com cuidado: cada passo ensina.",
    companions:[
      { name:"Santa Clara de Assis", title:"A Lâmpada da Clausura", quote:"Atrás das grades também se acende uma luz que nenhuma parede prende. Leve a minha e atravesse." },
      { name:"São Bernardo de Claraval", title:"O Mel e a Pedra", quote:"Entre pedras frias, é a ternura que mantém o caminho de pé. Siga com doçura e sem pressa." },
      { name:"Santa Escolástica", title:"A Irmã que Pediu Mais uma Noite", quote:"Dizem que pedi mais uma noite com meu irmão, e o céu fechou as portas com a chuva. O amor sempre encontra um jeito de ficar." }
    ] },
  act4:{ name:"Santa Mônica", title:"As Lágrimas que Rezam",
    quote:"Chorei anos a fio por um filho que parecia perdido. Nenhuma lágrima dada por amor cai no vazio.",
    companions:[
      { name:"São Camilo de Lellis", title:"As Mãos dos que Cuidam", quote:"Respire fundo: o ar pesa, mas o amor ainda cabe nele. Quem cuida do outro nunca respira sozinho." },
      { name:"Santa Rita de Cássia", title:"A Rosa entre os Espinhos", quote:"Uma rosa floresceu no meio do inverno porque alguém pediu o impossível com fé. Suspirar também é rezar." },
      { name:"São Vicente de Paulo", title:"O Pai dos Pobres", quote:"Todo suspiro é o pedido de alguém a quem ninguém respondeu. Responda." }
    ] },
  act5:{ name:"São Miguel Arcanjo", title:"O Príncipe da Luz",
    quote:"Quem como Deus? Enquanto uma chama arder no seu peito, nenhum guardião da noite é invencível.",
    companions:[] },
  act6:{ name:"São Paulo", title:"O Cego que Viu",
    quote:"Caí do cavalo e o dia virou noite. Foi no escuro que me encontrei. Levante-se: a luz vai achar o seu centro.",
    companions:[
      { name:"Santo Inácio de Loyola", title:"O Soldado que Aprendeu a Discernir", quote:"Uma bala de canhão me derrubou, e foi o chão que me ensinou a escolher a luz. Examine cada voz antes de segui-la." },
      { name:"Santa Maria Madalena", title:"A Primeira Testemunha da Aurora", quote:"Fui a primeira a chegar ao túmulo no escuro e a primeira a ver o amanhecer. Quem não abandona a noite encontra a manhã." },
      { name:"São Mateus", title:"O Chamado da Mesa de Impostos", quote:"Bastou uma palavra para mudar o meu centro: «Segue-me». Levante-se também, sem olhar o balcão." }
    ] },
  act7:{ name:"Santo Elói", title:"O Ferreiro de Deus",
    quote:"Forjei ouro e ferro, mas só o amor dá forma ao coração. Deixe a forja dos dias queimar o que é inútil.",
    companions:[
      { name:"São Lourenço", title:"O Tesouro nos Pobres", quote:"Sobre a grelha em brasa mostrei o meu tesouro: os pobres de Deus. Quem se entrega ao fogo por amor não é consumido, é purificado." },
      { name:"São Policarpo", title:"O Fiel até a Chama", quote:"Servi oitenta e seis anos e nunca fui traído por quem me amou. Que a chama me levasse: eu já era dela." },
      { name:"Santa Bárbara", title:"A Torre e o Relâmpago", quote:"Fecharam-me numa torre, mas a fé tinha janela. Nenhuma sombra apaga o céu que se carrega por dentro." },
      { name:"São Florião", title:"O que Apagou os Incêndios", quote:"Apaguei fogos para que outros vivessem. A escuridão queima; a luz, bem cuidada, apenas aquece." }
    ] },
  act8:{ name:"São Tomé", title:"O Buscador da Chama",
    quote:"Quis tocar as chagas antes de crer, e o amor não me negou a prova. Crer na luz mesmo sem vê-la é a bem-aventurança que lhe deixo.",
    companions:[
      { name:"Santa Teresa de Calcutá", title:"A Luz sem Consolo", quote:"Passei décadas sem sentir a presença a quem servia, e servi do mesmo jeito. A fé também caminha no escuro, de mãos dadas com a dúvida." },
      { name:"São João da Cruz", title:"A Noite Escura", quote:"A noite escura não é castigo: é a estrada onde a alma aprende a amar sem ver. Atravesse-a em silêncio." },
      { name:"Santa Teresa de Ávila", title:"A que Rezou na Aridez", quote:"Rezei anos sem consolo algum e perseverei. A dúvida passa; o amor fica." },
      { name:"São Judas Tadeu", title:"O Amigo das Causas Perdidas", quote:"Quando já não há esperança, ainda há quem peça por você. Nenhuma causa está perdida onde alguém continua a amar." }
    ] },
  act9:{ name:"Santo Antão do Deserto", title:"O Pai do Silêncio",
    quote:"No deserto aprendi que o silêncio não é vazio: é um chamado. Escute, a luz também fala baixo.",
    companions:[
      { name:"São Charbel Makhlouf", title:"O Eremita do Líbano", quote:"Vivi escondido para que a luz fosse inteira. O que se entrega em segredo não precisa de testemunhas." },
      { name:"São Pio de Pietrelcina", title:"As Chagas que Não Falam", quote:"Carreguei a dor calado, porque o amor não se explica: dá-se. Cale-se também, e doe." },
      { name:"São Charles de Foucauld", title:"O Irmão Universal", quote:"Quis ser irmão de todos, até de quem não me conhecia. No silêncio do deserto, só o amor atravessa a distância." },
      { name:"Santa Maria Goretti", title:"O Perdão em Silêncio", quote:"Perdoei antes de morrer, e o perdão calou mais fundo que qualquer grito. Não carregue ódio: pesa mais que a escuridão." },
      { name:"São Serafim de Sarov", title:"A Alegria do Eremita", quote:"Na floresta mais calada ainda se canta por dentro. A paz que você guarda acende outras luzes sem ruído." }
    ] },
  act10:{ name:"Santo Agostinho", title:"O Coração Inquieto",
    quote:"Inquieto está o nosso coração até que descanse em Ti. Entre tantas ilusões, só uma luz é verdadeira: a que não precisa de sombra para ser vista.",
    companions:[] },
  act11:{ name:"São Maximiliano Kolbe", title:"O que Tomou o Lugar de Outro",
    quote:"Pedi para entrar na cela da fome no lugar de um desconhecido, e o abismo virou altar. Ninguém tem amor maior do que este.",
    companions:[
      { name:"Santo Estêvão", title:"O Primeiro a Ver o Céu Aberto", quote:"Entre as pedras vi o céu se abrir e perdoei quem me feria. A agonia é só a última porta antes da luz." },
      { name:"Santa Perpétua e Santa Felicidade", title:"As Irmãs de Cartago", quote:"Entramos na arena de mãos dadas, e o medo ficou para trás. O que se vive junto não é destruído pela dor." },
      { name:"Santa Inês", title:"A Cordeira Corajosa", quote:"Era tão jovem e tão certa que nenhuma ameaça me dobrou. A coragem não grita: permanece." },
      { name:"São Damião de Molokai", title:"O Pastor dos Leprosos", quote:"Entrei na ilha dos abandonados e fiquei até ser um deles. O ninho da agonia só se desfaz quando alguém ousa ficar." }
    ] },
  act12:{ name:"São Tomás Moro", title:"O Homem de Consciência Inteira",
    quote:"Servi o rei, mas a Deus primeiro. Há espinhos que coroam quem não negocia a verdade.",
    companions:[
      { name:"Santa Joana d'Arc", title:"A Donzela das Vozes", quote:"Ouvi vozes na aldeia e segui até a fogueira sem soltar a bandeira. Quem avança por fé não anda só." },
      { name:"São Martinho de Tours", title:"O Manto Partilhado", quote:"Dei metade do meu manto a um pobre, e à noite vi que era Cristo quem o vestia. No escuro, reparta." },
      { name:"São Jorge", title:"O Cavaleiro do Dragão", quote:"Coragem não é não ter medo do dragão: é montar mesmo assim. O corredor não acaba para quem recua." },
      { name:"São Cristóvão", title:"O que Carregou o Menino", quote:"Atravessei o rio com o mundo nos ombros, e o peso crescia a cada passo. Todo irmão carregado encurta o caminho." },
      { name:"Santa Catarina de Alexandria", title:"A Sabedoria que Resiste", quote:"Debati com os sábios, e nenhuma roda dobrou a minha fé. Em espaço apertado, a mente firme é o maior espaço." }
    ] },
  act13:{ name:"São Bento", title:"O Escudo do Altar",
    quote:"A Santa Cruz seja a minha luz; que o dragão não seja o meu guia. Retira-te, sombra: este altar pertence à luz.",
    companions:[
      { name:"São Maurício", title:"O Capitão que Não Recuou", quote:"Mandaram-me erguer a espada contra inocentes, e baixei as armas. Há derrotas que são a mais alta vitória." },
      { name:"São Longuinho", title:"O Soldado ao Pé da Cruz", quote:"Servi a lança e vi o Amor entregue. Os caídos não estão sós: a cruz os guarda." },
      { name:"São Sebastião", title:"O Soldado Flechado", quote:"As flechas me atravessaram e ainda assim me levantei para servir. Quem cai por amor não cai: semeia." },
      { name:"Santo Expedito", title:"A Pressa da Fé", quote:"«Amanhã» é a palavra do corvo; a fé diz «hoje». O que é urgente é amar agora." },
      { name:"São Rafael Arcanjo", title:"O Companheiro de Viagem", quote:"Caminhei com Tobias sem ser reconhecido e levei a cura onde havia noite. Nenhum caído caminha sem companhia." }
    ] },
  act14:{ name:"São Pedro", title:"O Guardião das Chaves",
    quote:"Neguei três vezes e três vezes fui perdoado. A porta se abre para quem volta, não para quem nunca caiu.",
    companions:[
      { name:"São Dimas", title:"O Ladrão que Entrou no Paraíso", quote:"No último instante pedi para ser lembrado e ouvi: «Hoje estarás comigo». Nenhum portal está fechado para quem pede com amor." },
      { name:"São José", title:"O Patrono da Boa Morte", quote:"Parti amparado por Jesus e Maria. Quem atravessa o vazio com amor não o atravessa sozinho." },
      { name:"São Lázaro de Betânia", title:"O que Voltou do Sepulcro", quote:"Eu já estava no vazio quando uma voz me chamou pelo nome. A morte não tem a última palavra: o amor tem." },
      { name:"Santa Teresa Benedita da Cruz", title:"Edith Stein, a Filósofa Mártir", quote:"Busquei a verdade e encontrei a Cruz. Segui o meu povo até o fim sem soltar a luz que me guiava." },
      { name:"Santa Faustina Kowalska", title:"A Secretária da Misericórdia", quote:"«Jesus, eu confio em Vós»: é a última coisa que se diz diante do vazio, e a primeira que o enche." },
      { name:"São João Paulo II", title:"O Peregrino sem Medo", quote:"«Não tenhais medo»: abri as portas, e nenhum vazio as fechou. Atravessem; a luz vai à frente." }
    ] },
  act15:{ name:"São João Evangelista", title:"O Discípulo ao Pé da Cruz", altar:"Altar da Cruz de Luz",
    quote:"Estive ao pé da cruz e vi o amor que escrevi tornar-se carne. Dê a vida pelo irmão: é isso, a luz.",
    companions:[] }
};

/* Alma k (0 = destaque; 1.. = companheiras) do ato de id `actId` (1..15). Nunca devolve undefined. */
function soulFor(actId,k){
  const a=SOULS_DATA['act'+actId]; if(!a) return {name:'Uma alma',title:'',quote:''};
  return k<=0?a:(a.companions[k-1]||a.companions[a.companions.length-1]||a);
}
