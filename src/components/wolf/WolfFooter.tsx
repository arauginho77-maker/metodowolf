const WolfFooter = () => {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-display text-lg font-extrabold uppercase tracking-widest">
            Método <span className="text-accent">Wolf</span>
          </span>
          <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Este produto é um treinamento educacional de prospecção e vendas. Os resultados dependem da aplicação
            individual e não são garantidos. Este site não é afiliado ao WhatsApp Inc. ou à Meta Platforms.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Método Wolf. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WolfFooter;
