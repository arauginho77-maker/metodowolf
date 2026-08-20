export const WHATSAPP_URL = "https://wa.me/message/3CDHVQEHZB47K1";

/** Checkout preparado para uso futuro — o fluxo principal é Quiz → Resultado → WhatsApp. */
export const CHECKOUT_URL = "https://pay.cakto.com.br/75gsixq_995206";

export const COURSES = [
  "Administração",
  "Pedagogia",
  "Enfermagem",
  "Educação Física",
  "Engenharia Civil",
  "Engenharia de Produção",
  "Análise e Desenvolvimento de Sistemas",
  "Ciência da Computação",
  "Ciências Contábeis",
  "Recursos Humanos",
  "Direito",
  "Psicologia",
  "Marketing",
  "Logística",
  "Outro curso",
] as const;

export type Question = {
  id: string;
  title: string;
  subtitle?: string;
  options: string[];
};

export const QUESTIONS: Question[] = [
  {
    id: "area",
    title: "Qual área você pretende estudar?",
    subtitle: "Escolha a que mais se aproxima do seu interesse.",
    options: [
      "Administração",
      "Pedagogia",
      "Enfermagem",
      "Educação Física",
      "Engenharia",
      "Tecnologia",
      "Contabilidade",
      "Outra área",
    ],
  },
  {
    id: "objetivo",
    title: "Qual é o seu principal objetivo?",
    options: [
      "Conseguir uma nova profissão",
      "Melhorar meu currículo",
      "Buscar uma promoção",
      "Entrar no mercado de trabalho",
      "Fazer uma segunda graduação",
      "Ainda estou decidindo",
    ],
  },
  {
    id: "formato",
    title: "Como você prefere estudar?",
    options: ["Online", "Estudando de forma flexível", "Com apoio de polo", "Ainda não sei"],
  },
  {
    id: "inicio",
    title: "Quando pretende começar?",
    options: ["O quanto antes", "Este mês", "Nos próximos meses", "Ainda estou pesquisando"],
  },
  {
    id: "curso",
    title: "Qual curso você pretende fazer?",
    subtitle: "Selecione o curso para receber sua orientação.",
    options: [...COURSES],
  },
];

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");

/** Resolve o parâmetro ?curso=administracao para um curso da lista. */
export const resolveCourseParam = (param: string | null): string | null => {
  if (!param) return null;
  const target = normalize(param);
  if (!target) return null;
  return (
    COURSES.find((c) => normalize(c) === target) ??
    COURSES.find((c) => normalize(c).startsWith(target)) ??
    COURSES.find((c) => normalize(c).includes(target)) ??
    null
  );
};

export const buildWhatsAppLink = (course: string, name?: string) => {
  const quem = name?.trim() ? `Meu nome é ${name.trim()}. ` : "";
  const message = `Olá! ${quem}Acabei de concluir o quiz e quero informações sobre o curso de ${course}.`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
};
