export const BOOK_TITLE = "O Preço da Liderança";
export const AUTHOR = "Guilherme Ezequiel";

export const CHECKOUT_URL = "https://pay.hotmart.com/G108218108E?checkoutMode=10";

// TODO: trocar pelo número real do WhatsApp do cliente (DDI + DDD + número, só dígitos)
const WHATSAPP_PHONE = "5500000000000";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
  "Olá! Tenho uma dúvida sobre o livro O Preço da Liderança",
)}`;

// Valor do livro: R$ 147 à vista ou 12x de R$ 15,20.
export const PRICE_FROM = "R$197";
export const PRICE_OFFER = "R$ 147";
export const PRICE_INSTALLMENTS = "ou 12x de R$ 15,20";
export const PRICE_FAQ = "R$ 147";

// Imagens (public/). Sem capa, a página renderiza a capa em CSS; sem foto, mostra um espaço reservado.
export const IMAGES = {
  cover: "/capa.webp" as string | null,
  author: "/guilherme.webp" as string | null,
};
