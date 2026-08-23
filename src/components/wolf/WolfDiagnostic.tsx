import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Loader2,
  ShieldCheck,
  Target,
  Timer,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ATTENTION_BY_QUESTION,
  CHECKOUT_URL,
  WOLF_MAX_SCORE,
  WOLF_QUESTIONS,
  WOLF_TOTAL,
  getWolfLevel,
} from "@/lib/wolfQuiz";
import { track } from "@/lib/analytics";
import heroImg from "@/assets/wolf-hero.jpg";
import riskImg from "@/assets/wolf-risk.jpg";
import operationImg from "@/assets/wolf-operation.jpg";
import resultImg from "@/assets/wolf-result.jpg";

type Stage = "intro" | "questions" | "analyzing" | "result";

const ANALYSIS_STEPS = [
  "Mapeando pontos de vulnerabilidade...",
  "Calculando nível de exposição...",
  "Gerando seu diagnóstico...",
];

const WolfDiagnostic = () => {
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [analysisStep, setAnalysisStep] = useState(0);
  const advancingRef = useRef(false);

  const question = WOLF_QUESTIONS[index];
  const selected = question ? answers[question.id] : undefined;

  const score = useMemo(
    () => Object.values(answers).reduce((acc, p) => acc + p, 0),
    [answers],
  );
  const level = useMemo(() => getWolfLevel(score), [score]);

  const weakest = useMemo(() => {
    const answered = WOLF_QUESTIONS.filter((q) => answers[q.id] !== undefined);
    if (!answered.length) return null;
    return answered.reduce((min, q) => (answers[q.id] < answers[min.id] ? q : min), answered[0]);
  }, [answers]);

  const progress =
    stage === "questions"
      ? ((index + (selected !== undefined ? 1 : 0)) / WOLF_TOTAL) * 100
      : stage === "intro"
        ? 0
        : 100;

  // Pré-carregamento das imagens
  useEffect(() => {
    [heroImg, riskImg, operationImg, resultImg].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    track("PageView", { page: "diagnostico_wolf" });
  }, []);

  useEffect(() => {
    if (stage !== "analyzing") return;
    setAnalysisStep(0);
    const interval = window.setInterval(() => {
      setAnalysisStep((s) => Math.min(s + 1, ANALYSIS_STEPS.length - 1));
    }, 700);
    const timeout = window.setTimeout(() => {
      setStage("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2300);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [stage]);

  const start = () => {
    track("QuizStart", { quiz: "diagnostico_wolf" });
    setStage("questions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const select = (points: number) => {
    if (advancingRef.current) return;
    setAnswers((prev) => ({ ...prev, [question.id]: points }));
    track("QuizQuestionAnswered", {
      question: question.id,
      position: index + 1,
      points,
    });
    advancingRef.current = true;
    window.setTimeout(() => {
      advancingRef.current = false;
      if (index < WOLF_TOTAL - 1) {
        setIndex(index + 1);
      } else {
        track("QuizCompleted", { quiz: "diagnostico_wolf", score, max: WOLF_MAX_SCORE });
        setStage("analyzing");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 380);
  };

  const back = () => {
    if (index > 0) setIndex(index - 1);
  };

  const goToOffer = (origem: string) => {
    track("CheckoutClick", { origem, nivel: level.tag });
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  };

  const restart = () => {
    setAnswers({});
    setIndex(0);
    setStage("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toneText =
    level.tone === "destructive"
      ? "text-destructive"
      : level.tone === "warning"
        ? "text-[hsl(var(--warning))]"
        : "text-primary";

  const sideImage = index < 4 ? riskImg : operationImg;
  const sideAlt =
    index < 4
      ? "Smartphone com alerta de interrupção na operação de WhatsApp"
      : "Múltiplos smartphones conectados a uma estrutura central protegida";

  return (
    <section className="relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] gradient-glow" aria-hidden />

      {/* ================= INTRO ================= */}
      {stage === "intro" && (
        <div className="container relative mx-auto grid min-h-screen items-center gap-10 px-4 pb-16 pt-28 lg:grid-cols-2 lg:gap-14">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Diagnóstico gratuito
            </span>

            <h1 className="mt-6 font-display text-3xl font-black leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              QUÃO <span className="text-primary text-glow">VULNERÁVEL</span> ESTÁ A SUA OPERAÇÃO NO
              WHATSAPP?
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Responda 7 perguntas e descubra se sua operação está preparada para lidar com
              imprevistos sem parar suas vendas.
            </p>

            <Button
              size="xl"
              onClick={start}
              className="mt-8 w-full animate-pulse-glow text-base font-extrabold uppercase tracking-wide shadow-accent sm:w-auto sm:px-10"
            >
              Começar diagnóstico <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
              <Timer className="h-4 w-4 text-primary" /> Leva menos de 2 minutos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["7 perguntas", "Resultado imediato", "100% gratuito"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-muted-foreground"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in-95 duration-700">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" aria-hidden />
            <img
              src={heroImg}
              alt="Lobo tecnológico observando múltiplas conexões de WhatsApp"
              width={1536}
              height={864}
              className="animate-float relative w-full rounded-2xl border border-primary/20 shadow-elevated"
              fetchPriority="high"
            />
          </div>
        </div>
      )}

      {/* ================= PERGUNTAS ================= */}
      {stage === "questions" && question && (
        <div className="container relative mx-auto grid min-h-screen items-center gap-10 px-4 pb-16 pt-24 lg:grid-cols-[1fr_360px] lg:gap-14">
          <div className="w-full max-w-2xl">
            {/* Barra de progresso */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
                <span>
                  Diagnóstico Wolf — {index + 1}/{WOLF_TOTAL}
                </span>
                <span className="text-primary">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-1.5 bg-secondary [&>div]:gradient-primary" />
            </div>

            <div
              key={question.id}
              className="animate-in fade-in slide-in-from-right-6 rounded-2xl border border-border bg-card p-5 shadow-card duration-300 sm:p-8"
            >
              <h2 className="font-display text-xl font-extrabold leading-snug sm:text-2xl">
                {question.title}
              </h2>

              {question.microcopy && (
                <p className="mt-3 border-l-2 border-primary/50 pl-3 text-xs italic leading-relaxed text-primary/90 sm:text-sm">
                  {question.microcopy}
                </p>
              )}

              <div className="mt-6 grid gap-3">
                {question.options.map((option) => {
                  const active = selected === option.points;
                  return (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => select(option.points)}
                      aria-pressed={active}
                      className={`group flex w-full items-center justify-between gap-3 rounded-xl border p-4 text-left text-sm font-medium transition-smooth sm:p-5 sm:text-base ${
                        active
                          ? "border-primary bg-primary/10 text-foreground shadow-accent"
                          : "border-border bg-secondary/40 hover:border-primary/50 hover:bg-secondary"
                      }`}
                    >
                      <span>{option.label}</span>
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-smooth ${
                          active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground/40 group-hover:border-primary/60"
                        }`}
                      >
                        {active && <Check className="h-4 w-4" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between">
                {index > 0 ? (
                  <button
                    type="button"
                    onClick={back}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-smooth hover:text-foreground sm:text-sm"
                  >
                    <ArrowLeft className="h-4 w-4" /> Voltar
                  </button>
                ) : (
                  <span />
                )}
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground/60">
                  Toque para avançar
                </span>
              </div>
            </div>
          </div>

          {/* Imagem lateral (desktop) */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" aria-hidden />
            <img
              key={sideImage}
              src={sideImage}
              alt={sideAlt}
              width={1024}
              height={1024}
              loading="lazy"
              className="animate-in fade-in zoom-in-95 relative w-full rounded-2xl border border-primary/20 shadow-elevated duration-500"
            />
          </div>
        </div>
      )}

      {/* ================= ANÁLISE ================= */}
      {stage === "analyzing" && (
        <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-16 text-center">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-primary/15 blur-3xl" aria-hidden />
            <Loader2 className="relative h-12 w-12 animate-spin text-primary" />
          </div>
          <p className="mt-8 font-display text-xl font-extrabold sm:text-2xl">
            Processando suas respostas
          </p>
          <div className="mt-6 space-y-2.5">
            {ANALYSIS_STEPS.map((step, i) => (
              <p
                key={step}
                className={`flex items-center justify-center gap-2 text-sm transition-smooth ${
                  i <= analysisStep ? "text-primary" : "text-muted-foreground/40"
                }`}
              >
                {i < analysisStep ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="h-4 w-4 rounded-full border border-current opacity-50" />
                )}
                {step}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* ================= RESULTADO ================= */}
      {stage === "result" && (
        <div className="container relative mx-auto px-4 pb-20 pt-28">
          <div className="mx-auto max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-500">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary">
                <Target className="h-3.5 w-3.5" /> Diagnóstico concluído — {level.tag}
              </span>

              <h2 className={`mt-5 font-display text-3xl font-black sm:text-4xl ${toneText}`}>
                {level.name}
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {level.message}
              </p>
            </div>

            {/* Pontuação visual */}
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
              <div className="flex items-end justify-between">
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  Índice de estrutura operacional
                </span>
                <span className="font-display text-2xl font-black text-primary sm:text-3xl">
                  {score}
                  <span className="text-sm font-bold text-muted-foreground">/{WOLF_MAX_SCORE}</span>
                </span>
              </div>
              <Progress
                value={(score / WOLF_MAX_SCORE) * 100}
                className="mt-3 h-2.5 bg-secondary [&>div]:gradient-primary"
              />
              <div className="mt-2 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground/60">
                <span>Vulnerável</span>
                <span>Estruturado</span>
              </div>
            </div>

            {/* Ponto de atenção + melhoria */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 sm:p-6">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-destructive">
                  <AlertTriangle className="h-4 w-4" /> Seu principal ponto de atenção
                </p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                  {weakest ? ATTENTION_BY_QUESTION[weakest.id] : level.improve}
                </p>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary">
                  <TrendingUp className="h-4 w-4" /> O que uma estrutura organizada pode melhorar
                </p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                  {level.improve}
                </p>
              </div>
            </div>

            {/* Imagem do resultado */}
            <div className="relative mt-8">
              <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" aria-hidden />
              <img
                src={resultImg}
                alt="Lobo em posição de liderança com múltiplas conexões protegidas ao redor"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative mx-auto w-full max-w-md rounded-2xl border border-primary/20 shadow-elevated"
              />
            </div>

            {/* CTAs */}
            <div className="mt-8 text-center">
              <Button
                size="xl"
                onClick={() => goToOffer("resultado_principal")}
                className="w-full animate-pulse-glow text-base font-extrabold uppercase tracking-wide shadow-accent sm:w-auto sm:px-10"
              >
                Quero conhecer o Método Wolf <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => goToOffer("resultado_secundario")}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 transition-smooth hover:underline"
                >
                  Ver como funciona a estrutura <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Seção final */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-center sm:p-8">
              <h3 className="font-display text-lg font-extrabold sm:text-xl">
                Seu diagnóstico é apenas o começo.
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Conheça o Método Wolf e entenda como estruturar uma operação de WhatsApp mais
                organizada, preparada e escalável.
              </p>
              <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground/60">
                O Método Wolf não promete desbloqueio de contas nem garante que uma conta nunca será
                restringida. O foco é organização, contingência e controle operacional.
              </p>
              <button
                type="button"
                onClick={restart}
                className="mt-5 text-xs font-semibold text-muted-foreground underline underline-offset-4 transition-smooth hover:text-foreground"
              >
                Refazer diagnóstico
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WolfDiagnostic;
