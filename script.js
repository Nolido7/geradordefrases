const frases = {
    triste: [
        "Às vezes, a tristeza nos faz mais fortes.",
        "A vida é cheia de altos e baixos.",
        "A tristeza faz parte da jornada da vida.",
        "Lagrimas caem por uma razão. São sinais da sua força.",
        "Em algum momento da sua vida seu coraçao vai despedaçar.",
        "Chorar não significa ser fraco.",
        "A raiva aparece quando voçê está triste.",
    ],
    alegre: [
        "A alegria está nas coisas simples da vida.",
        "A felicidade é contagiosa, espalhe-a.",
        "Aproveite os momentos de alegria ao máximo.",
        "A felicidade está onde voçê menos imagina",
        "A felicidade é igual a você, tem apenas 1 vida. aproveite!",
        "viva a vida ao lado de quem te faz feliz.",
        "Deus lhe fez para ser a alegria em um mundo que tem mais tristeza.",
        "Seja o quiser, desde que esteja feliz!",
        "O sorriso é um caminho para a felicidade.",
        "A sensaçao de está feliz é a melhor de todas.",
    ],
    motivacional: [
        "Você é capaz de conquistar seus sonhos.",
        "Acredite em si mesmo, você é incrível.",
        "Nunca desista, grandes coisas estão por vir.",
        "você tem um dom que nimguém mais tem.",
    ],
    amor: [
      "Você é a luz que me tira da escuridão.",
      "O amor que eu sinto por você é inexplicavel.",
      "Juntos hoje, amanhã e para sempre, Eu te amo!",
      "deixei de observar as estrelas. quando eu vi que a lua era perfeita.",
      ],
};

function gerarFrase() {
    const selecionarOpcao = document.getElementById("selecionarOpcao");
    const fraseGerada = document.getElementById("fraseGerada");

    const tipoFrase = selecionarOpcao.value;
    const frasesSelecionadas = frases[tipoFrase];
    const fraseAleatoria = frasesSelecionadas[Math.floor(Math.random() * frasesSelecionadas.length)];

    fraseGerada.textContent = fraseAleatoria;
}
