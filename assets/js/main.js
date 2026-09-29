// Número oficial de WhatsApp (formato internacional, só dígitos)
const WHATSAPP = "5511998330214";

// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Formulário de contato: monta a mensagem e abre o WhatsApp.
// Nenhum dado é enviado a servidores do site.
const form = document.querySelector("#contato-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nome = (data.get("nome") || "").toString().trim();
    const assunto = (data.get("assunto") || "").toString();
    const modalidade = (data.get("modalidade") || "").toString();
    const msg = (data.get("mensagem") || "").toString().trim();

    let texto = `Olá, Dra. Rosana! Meu nome é ${nome}.`;
    if (assunto) texto += ` Gostaria de informações sobre: ${assunto}.`;
    if (modalidade) texto += ` Preferência de atendimento: ${modalidade}.`;
    if (msg) texto += `\n\n${msg}`;

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  });
}

// Ano no rodapé
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
