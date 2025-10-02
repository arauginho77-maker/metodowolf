import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  phone: z.string().trim().min(10, "Telefone inválido").max(15),
  email: z.string().trim().email("E-mail inválido").max(255),
  course: z.string().min(1, "Selecione um curso"),
  time: z.string().optional(),
  origin: z.string().optional(),
  acceptWhatsApp: z.boolean(),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    time: "",
    origin: "",
    acceptWhatsApp: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    "Administração",
    "Pedagogia",
    "Enfermagem",
    "Direito",
    "Análise e Desenvolvimento de Sistemas",
    "Psicologia",
    "Engenharia Civil",
    "Recursos Humanos",
    "Outro",
  ];

  const handleNextStep = () => {
    // Valida campos do passo 1
    if (!formData.name || !formData.phone || !formData.course) {
      toast({
        title: "Atenção",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      if (!formData.acceptWhatsApp) {
        toast({
          title: "Atenção",
          description: "É necessário aceitar receber mensagens via WhatsApp",
          variant: "destructive",
        });
        return;
      }

      setIsSubmitting(true);

      // Monta mensagem para WhatsApp
      const mensagem = `Olá! Meu nome é ${formData.name}.%0A%0A` +
        `📱 Celular: ${formData.phone}%0A` +
        `📧 Email: ${formData.email}%0A` +
        `🎓 Curso de interesse: ${formData.course}%0A` +
        (formData.time ? `⏰ Melhor horário: ${formData.time}%0A` : '') +
        (formData.origin ? `📍 Como nos conheceu: ${formData.origin}%0A` : '') +
        `%0AGostaria de informações sobre matrícula na UNOPAR.`;

      // Abre WhatsApp com mensagem
      window.open(`https://www.contate.me/5566981109810?text=${mensagem}`, "_blank");

      toast({
        title: "Redirecionando para WhatsApp!",
        description: "Continue a conversa com nossa consultora.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        course: "",
        time: "",
        origin: "",
        acceptWhatsApp: false,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro no formulário",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Prefere preencher um formulário?
            </h2>
            <p className="text-muted-foreground text-lg">
              Deixe seus dados e nossa consultora entrará em contato
            </p>
            
            {/* Alerta de urgência */}
            <div className="mt-6 bg-accent/10 border-2 border-accent/30 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-accent font-semibold flex items-center justify-center gap-2">
                <span>⚡</span>
                Garanta sua vaga agora - Atendimento prioritário nas próximas 2 horas
              </p>
            </div>
          </div>

          {/* Barra de progresso */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-accent text-white' : 'bg-secondary text-muted-foreground'}`}>
                1
              </div>
              <div className={`h-1 w-20 ${step >= 2 ? 'bg-accent' : 'bg-secondary'}`} />
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-accent text-white' : 'bg-secondary text-muted-foreground'}`}>
                2
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Passo {step} de 2
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card shadow-elevated rounded-xl p-8 space-y-6">
            {step === 1 ? (
              // PASSO 1: Dados essenciais
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp com DDD *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">Curso de interesse *</Label>
                  <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um curso" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button type="button" variant="hero" size="lg" className="w-full" onClick={handleNextStep}>
                  Continuar →
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obrigatórios
                </p>
              </>
            ) : (
              // PASSO 2: Informações complementares
              <>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="time">Melhor horário para contato</Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manha">Manhã</SelectItem>
                        <SelectItem value="tarde">Tarde</SelectItem>
                        <SelectItem value="noite">Noite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="origin">Como nos conheceu?</Label>
                    <Select value={formData.origin} onValueChange={(value) => setFormData({ ...formData, origin: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="indicacao">Indicação</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="acceptWhatsApp"
                    checked={formData.acceptWhatsApp}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, acceptWhatsApp: checked as boolean })
                    }
                  />
                  <Label htmlFor="acceptWhatsApp" className="text-sm leading-relaxed cursor-pointer">
                    Aceito receber mensagens via WhatsApp com informações sobre minha matrícula *
                  </Label>
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setStep(1)}>
                    ← Voltar
                  </Button>
                  <Button type="submit" variant="hero" size="lg" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "💬 Falar com consultora agora"}
                  </Button>
                </div>

                <p className="text-xs text-accent text-center">
                  ⚡ Resposta em menos de 5 minutos
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
