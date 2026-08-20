/**
 * Camada de analytics preparada para receber Meta Pixel (ou outro) no futuro.
 * Nenhum script de terceiros é carregado aqui — apenas a estrutura de eventos.
 * Quando o Pixel for instalado, window.fbq passa a existir e os eventos fluem automaticamente.
 */

export type TrackEvent =
  | "PageView"
  | "QuizStart"
  | "QuizQuestionAnswered"
  | "QuizCompleted"
  | "WhatsAppClick"
  | "CheckoutClick";

type Payload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const STANDARD_EVENTS: TrackEvent[] = ["PageView"];

export const track = (event: TrackEvent, payload: Payload = {}) => {
  if (typeof window === "undefined") return;

  // Meta Pixel (só dispara se o pixel estiver instalado)
  if (typeof window.fbq === "function") {
    const method = STANDARD_EVENTS.includes(event) ? "track" : "trackCustom";
    window.fbq(method, event, payload);
  }

  // GTM / dataLayer (opcional)
  window.dataLayer?.push({ event, ...payload });

  if (import.meta.env.DEV) {
    console.info(`[analytics] ${event}`, payload);
  }
};
