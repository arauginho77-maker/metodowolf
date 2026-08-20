import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { QUESTIONS, buildWhatsAppLink, CHECKOUT_URL } from "@/lib/quiz";
import { track } from "@/lib/analytics";

type Stage = "questions" | "name" | "loading" | "result";

type QuizProps = {
  /** Curso vindo do parâmetro ?curso= (usado para pré-selecionar a última pergunta). */
  preselectedCourse?: string | null;
};

const Quiz = ({ preselectedCourse = null }: QuizProps) => {
  const [stage, setStage] = useState<Stage>("questions");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setAnswers((prev) => ({ ...prev, curso: preselectedCourse }));
    }
  }, [preselectedCourse]);

  useEffect(() => {
    if (!started) {
      setStarted(true);
      track("QuizStart", { source: preselectedCourse ? "url_param" : "organic" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const question = QUESTIONS[index];
  const selected = answers[question?.id ?? ""];
  const total = QUESTIONS.length;
  const course = answers.curso ?? preselectedCourse ?? "";

  const progress = useMemo(() => {
    if (stage === "questions") return ((index + (selected ? 1 : 0)) / (total + 1)) * 100;
    if (stage === "name") return (total / (total + 1)) * 100;
    return 100;
  }, [stage, index, selected, total]);

  const select = (option: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: option }));
    track("QuizQuestionAnswered", { question: question.id, position: index + 1, answer: option });
  };

  const next = () => {
    if (!selected) return;
    if (index < total - 1) {
      setIndex(index + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setStage("name");
  };

  const back = () => {
    if (stage === "name") {
      setStage("questions");
      setIndex(total - 1);
      return;
    }
    if (index > 0) setIndex(index - 1);
  };

  const finish = () => {
    setStage("loading");
    track("QuizCompleted", { curso: course, objetivo: answers.objetivo, inicio: answers.inicio });
    window.setTimeout(() => {
      setStage("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1100);
  };

  const openWhatsApp = () => {
    track("WhatsAppClick", { curso: course, origem: "resultado" });
    window.open(buildWhatsAppLink(course, name), "_blank", "noopener,noreferrer");
  };

  const openCheckout = () => {
    track("CheckoutClick", { curso: course });
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="quiz" className="scroll-mt-24 py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-2xl">
          {/* Barra de progresso */}
          {stage !== "result" && (
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold text-muted-foreground sm:text-sm">
                <span>
                  {stage === "questions" ? `Pergunta ${index + 1} de ${total}` : "Última etapa"}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          <div className="rounded-2xl border border-border bg-card p-5 shadow-card sm:p-8">
            {stage === "questions" && question && (
              <div key={question.id} className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="font-display text-xl leading-snug text-primary sm:text-2xl">{question.title}</h2>
                {question.subtitle && (
                  <p className="mt-2 text-sm text-muted-foreground">{question.subtitle}</p>
                )}

                <div className="mt-6 grid gap-3">
                  {question.options.map((option) => {
                    const active = selected === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => select(option)}
                        aria-pressed={active}
                        className={`flex w-full items-center justify-between gap-3 rounded-xl border p-4 text-left text-sm font-medium transition-smooth sm:text-base ${
                          active
                            ? "border-accent bg-accent/10 text-primary shadow-accent"
                            : "border-border bg-background hover:border-accent/60 hover:bg-secondary/60"
                        }`}
                      >
                        <span>{option}</span>
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-smooth ${
                            active ? "border-accent bg-accent text-accent-foreground" : "border-border"
                          }`}
                        >
                          {active && <Check className="h-4 w-4" />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row-reverse">
                  <Button size="lg" className="w-full sm:flex-1" disabled={!selected} onClick={next}>
                    Continuar <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                  {index > 0 && (
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={back}>
                      <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                    </Button>
                  )}
                </div>
                {!selected && (
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Escolha uma opção para continuar.
                  </p>
                )}
              </div>
            )}

            {stage === "name" && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="font-display text-xl leading-snug text-primary sm:text-2xl">
                  Como podemos te chamar?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Opcional — serve apenas para personalizar seu atendimento.
                </p>

                <div className="mt-6 space-y-2">
                  <Label htmlFor="nome">Seu nome (opcional)</Label>
                  <Input
                    id="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu primeiro nome"
                    maxLength={60}
                    autoComplete="given-name"
                  />
                  <p className="text-xs text-muted-foreground">
                    Não pedimos CPF, documentos ou dados sensíveis.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row-reverse">
                  <Button size="lg" className="w-full sm:flex-1" onClick={finish}>
                    Ver minha orientação <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={back}>
                    <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                  </Button>
                </div>
              </div>
            )}

            {stage === "loading" && (
              <div className="flex flex-col items-center justify-center py-14 text-center animate-in fade-in">
                <Loader2 className="h-10 w-10 animate-spin text-accent" />
                <p className="mt-5 font-display text-lg text-primary">Analisando suas respostas...</p>
                <p className="mt-1 text-sm text-muted-foreground">Isso leva só alguns segundos.</p>
              </div>
            )}

            {stage === "result" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                  <Sparkles className="h-3.5 w-3.5" /> Orientação personalizada
                </span>

                <h2 className="font-display mt-4 text-2xl leading-tight text-primary sm:text-3xl">
                  {name.trim() ? `${name.trim()}, sua orientação` : "Sua orientação"} para{" "}
                  <span className="text-accent">{course}</span> está pronta
                </h2>

                <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/5 p-5 text-center sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Curso de interesse
                  </p>
                  <p className="font-display mt-2 text-2xl text-primary sm:text-3xl">{course}</p>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Com base nas informações que você respondeu, podemos seguir com uma orientação sobre esse curso e
                  verificar as opções disponíveis para você.
                </p>

                <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Área de interesse", value: answers.area },
                    { label: "Objetivo", value: answers.objetivo },
                    { label: "Formato de estudo", value: answers.formato },
                    { label: "Previsão de início", value: answers.inicio },
                  ]
                    .filter((i) => i.value)
                    .map((i) => (
                      <div key={i.label} className="rounded-xl border border-border bg-background p-4">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {i.label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-foreground">{i.value}</dd>
                      </div>
                    ))}
                </dl>

                <Button size="xl" className="mt-7 w-full" onClick={openWhatsApp}>
                  <MessageCircle className="mr-2 h-5 w-5" /> FALAR COM CONSULTOR
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Você será direcionado ao WhatsApp para conversar com um consultor de orientação.
                </p>

                <div className="mt-6 border-t border-border pt-5 text-center">
                  <button
                    type="button"
                    onClick={openCheckout}
                    className="text-xs font-medium text-muted-foreground underline underline-offset-4 transition-smooth hover:text-primary"
                  >
                    Já falei com o consultor e recebi o link de pagamento
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
