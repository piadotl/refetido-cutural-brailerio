const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A cultura brasileira é formada pela mistura de diferentes povos e tradições. Qual dessas opções representa uma importante influência na formação cultural do Brasil?",
        alternativas: [
            "Apenas a cultura europeia.",
            "Influências indígenas, africanas e europeias."
        ]
    },

    {
        enunciado: "O Carnaval é uma das manifestações culturais mais conhecidas do Brasil. Qual dessas características está relacionada ao Carnaval?",
        alternativas: [
            "Desfiles, fantasias, músicas e danças.",
            "Somente apresentações de música clássica."
        ]
    },

    {
        enunciado: "A culinária brasileira possui pratos muito diferentes de acordo com cada região. Qual destes pratos é tradicionalmente associado à culinária brasileira?",
        alternativas: [
            "Feijoada.",
            "Sushi."
        ]
    },

    {
        enunciado: "O Brasil possui uma grande diversidade de estilos musicais. Qual dessas opções apresenta gêneros musicais brasileiros?",
        alternativas: [
            "Samba, forró e bossa nova.",
            "Somente música clássica europeia."
        ]
    },

    {
        enunciado: "Por que é importante preservar as diferentes culturas presentes no Brasil?",
        alternativas: [
            "Porque a diversidade cultural representa a história e a identidade de diferentes grupos.",
            "Porque todas as pessoas devem seguir exatamente os mesmos costumes."
        ]
    }
];

let atual = 0;

function mostraPergunta() {

    const perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";

    for (const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativa = document.createElement("button");

        botaoAlternativa.textContent = alternativa;

        botaoAlternativa.addEventListener("click", () => {

            atual++;

            if (atual < perguntas.length) {

                mostraPergunta();

            } else {

                mostraResultado();

            }

        });

        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function mostraResultado() {

    caixaPerguntas.style.display = "none";

    caixaAlternativas.style.display = "none";

    caixaResultado.style.display = "block";

    textoResultado.textContent =
        "🎉 Parabéns! Você terminou o quiz sobre Cultura Brasileira! A cultura do Brasil é rica e diversa, formada por diferentes povos, histórias, costumes, músicas, comidas e tradições.";
}

mostraPergunta();
