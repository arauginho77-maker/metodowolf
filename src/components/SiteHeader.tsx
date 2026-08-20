import { GraduationCap } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center gap-3 px-4 py-3 sm:py-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-card">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="font-display text-base font-bold leading-tight text-primary sm:text-lg">
            Central de Graduação
          </p>
          <p className="truncate text-xs text-muted-foreground sm:text-sm">
            Orientação para escolha do seu curso
          </p>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
