const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary/40 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="font-display text-sm font-bold text-primary">Central de Graduação</p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Serviço independente de orientação e consultoria educacional. Não somos uma instituição de ensino e não
            representamos oficialmente nenhuma faculdade ou universidade. As opções de curso, condições e disponibilidade
            são informadas durante o atendimento e podem variar.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Central de Graduação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
