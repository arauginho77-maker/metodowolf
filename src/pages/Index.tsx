import WolfDiagnostic from "@/components/wolf/WolfDiagnostic";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header minimalista */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2.5" aria-label="Método Wolf">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary font-display text-lg font-black text-primary-foreground shadow-accent">
              W
            </span>
            <span className="font-display text-sm font-extrabold uppercase tracking-widest text-foreground sm:text-base">
              Método <span className="text-primary">Wolf</span>
            </span>
          </a>
          <span className="hidden items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary sm:inline-flex">
            Diagnóstico Operacional
          </span>
        </div>
      </header>

      <main>
        <WolfDiagnostic />
      </main>

      {/* Footer com disclaimers de compliance */}
      <footer className="border-t border-border/60 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-muted-foreground">
            O Método Wolf é focado em organização, contingência e controle operacional. Não prometemos
            desbloqueio de contas, não garantimos que uma conta nunca será restringida e não ensinamos
            métodos para burlar sistemas ou políticas do WhatsApp.
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground/60">
            © {new Date().getFullYear()} Método Wolf — Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
