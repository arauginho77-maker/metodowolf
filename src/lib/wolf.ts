export const CHECKOUT_URL = "https://pay.cakto.com.br/75gsixq_995206";

export const goToCheckout = () => {
  window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
};
