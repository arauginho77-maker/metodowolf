import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Cursos", href: "#cursos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Vantagens", href: "#vantagens" },
  ];

  const legalLinks = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="font-display text-2xl font-bold">Grupo X</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Assessoria completa para sua matrícula na UNOPAR. Tornamos seu sonho de estudar realidade.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <span>(66) 98110-9810</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                <span>contato@grupox.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-sm text-primary-foreground/60 space-y-2">
            <p>© {currentYear} Grupo X — Todos os direitos reservados.</p>
            <p className="text-xs max-w-3xl mx-auto">
              A oferta é de intermediação e orientação. As informações acadêmicas e contratos são de responsabilidade da UNOPAR. Verifique requisitos específicos com nossa consultora.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
