/** Diagnóstico Wolf — quiz de vulnerabilidade operacional no WhatsApp. */

export const CHECKOUT_URL = "https://pay.cakto.com.br/75gsixq_995206";

export type WolfOption = {
  label: string;
  /** 0 = mais vulnerável, 3 = mais estruturado */
  points: number;
};

export type WolfQuestion = {
  id: string;
  title: string;
  microcopy?: string;
  options: WolfOption[];
};

export const WOLF_QUESTIONS: WolfQuestion[] = [
  {
    id: "dependencia",
    title: "Hoje, quanto da sua operação depende de um único número de WhatsApp?",
    microcopy: "Uma operação que depende de um único ponto é uma operação vulnerável.",
    options: [
      { label: "Praticamente tudo", points: 0 },
      { label: "Uma parte importante", points: 1 },
      { label: "Tenho mais de uma estrutura", points: 2 },
      { label: "Minha operação já é distribuída", points: 3 },
    ],
  },
  {
    id: "cenario",
    title: "Se o seu principal WhatsApp parasse de funcionar hoje, o que aconteceria?",
    microcopy: "Você tem uma alternativa ou apenas espera nunca precisar dela?",
    options: [
      { label: "Minha operação praticamente pararia", points: 0 },
      { label: "Eu perderia parte dos atendimentos", points: 1 },
      { label: "Tenho alguma alternativa", points: 2 },
      { label: "Minha operação continuaria normalmente", points: 3 },
    ],
  },
  {
    id: "historico",
    title: "Você já teve um número/conta do WhatsApp restringido, bloqueado ou perdeu acesso temporariamente?",
    microcopy: "Quanto custa ficar sem atender seus leads?",
    options: [
      { label: "Sim, mais de uma vez", points: 0 },
      { label: "Sim, uma vez", points: 1 },
      { label: "Nunca, mas tenho receio", points: 2 },
      { label: "Nunca e tenho estrutura preparada", points: 3 },
    ],
  },
  {
    id: "numeros",
    title: "Quantos números você utiliza atualmente na sua operação?",
    options: [
      { label: "1", points: 0 },
      { label: "2", points: 1 },
      { label: "3 a 5", points: 2 },
      { label: "Mais de 5", points: 3 },
    ],
  },
  {
    id: "processo",
    title: "Você possui algum processo organizado para controlar suas linhas, números e estruturas?",
    microcopy: "Seu WhatsApp é apenas uma ferramenta ou é parte da sua operação?",
    options: [
      { label: "Não", points: 0 },
      { label: "Tenho algumas anotações", points: 1 },
      { label: "Tenho uma organização básica", points: 2 },
      { label: "Tenho controle estruturado", points: 3 },
    ],
  },
  {
    id: "tempo_parado",
    title: "Quanto tempo sua operação poderia ficar parada antes de começar a gerar um prejuízo relevante?",
    microcopy: "Uma operação que depende de um único ponto é uma operação vulnerável.",
    options: [
      { label: "Algumas horas", points: 0 },
      { label: "1 dia", points: 1 },
      { label: "Alguns dias", points: 2 },
      { label: "Não posso correr esse risco", points: 3 },
    ],
  },
  {
    id: "situacao",
    title: "Qual dessas frases mais representa sua situação?",
    options: [
      { label: "“Eu vendo pelo WhatsApp e dependo dele todos os dias.”", points: 0 },
      { label: "“Tenho números, mas não tenho uma estrutura organizada.”", points: 1 },
      { label: "“Já tive problemas e não quero passar por isso novamente.”", points: 2 },
      { label: "“Quero transformar meu WhatsApp em uma operação mais estruturada.”", points: 3 },
    ],
  },
];

export const WOLF_TOTAL = WOLF_QUESTIONS.length;
export const WOLF_MAX_SCORE = WOLF_TOTAL * 3;

export type WolfLevel = {
  name: string;
  tag: string;
  message: string;
  improve: string;
  /** var de cor semântica usada no destaque do nível */
  tone: "destructive" | "warning" | "primary";
};

export const getWolfLevel = (score: number): WolfLevel => {
  if (score <= 6) {
    return {
      name: "EXPOSIÇÃO ALTA",
      tag: "NÍVEL 1",
      message:
        "Sua operação está muito dependente de poucos pontos de contato. Um imprevisto pode gerar uma interrupção significativa.",
      improve:
        "Distribuir a operação entre múltiplas estruturas, criar processos de contingência e reduzir a dependência de um único número.",
      tone: "destructive",
    };
  }
  if (score <= 11) {
    return {
      name: "EXPOSIÇÃO MODERADA",
      tag: "NÍVEL 2",
      message:
        "Você já possui alguma estrutura, mas ainda existem pontos de vulnerabilidade que podem comprometer sua operação.",
      improve:
        "Formalizar processos de controle de linhas, preparar estruturas reserva e organizar a continuidade do atendimento.",
      tone: "warning",
    };
  }
  if (score <= 16) {
    return {
      name: "ESTRUTURA EM DESENVOLVIMENTO",
      tag: "NÍVEL 3",
      message:
        "Você já pensa além do número único, mas ainda pode organizar melhor seus processos e controles.",
      improve:
        "Padronizar o controle de números e linhas, documentar processos e transformar improviso em rotina operacional.",
      tone: "primary",
    };
  }
  return {
    name: "OPERAÇÃO ESTRUTURADA",
    tag: "NÍVEL 4",
    message:
      "Você já entende que WhatsApp não deve ser tratado apenas como um aplicativo, mas como parte de uma operação.",
    improve:
      "Escalar com previsibilidade: mais estruturas, mais controle e processos replicáveis para crescer sem desorganizar.",
    tone: "primary",
  };
};

/** Texto do "principal ponto de atenção" derivado da resposta mais fraca. */
export const ATTENTION_BY_QUESTION: Record<string, string> = {
  dependencia: "Concentração da operação em um único número de WhatsApp.",
  cenario: "Ausência de um plano de contingência para interrupções.",
  historico: "Histórico de restrições sem mudança estrutural na operação.",
  numeros: "Poucos números ativos para o volume da operação.",
  processo: "Falta de processo organizado para controlar linhas e estruturas.",
  tempo_parado: "Baixa tolerância a interrupções — cada hora parada gera prejuízo.",
  situacao: "Dependência diária do WhatsApp como canal principal de receita.",
};
