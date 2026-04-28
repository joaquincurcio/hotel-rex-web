const legalTexts = {
  es: {
    kicker: "Legal",
    legal: {
      title: "Aviso legal",
      blocks: [
        "Este sitio web tiene como finalidad brindar información sobre los servicios de alojamiento ofrecidos por Hotel Rex, ubicado en La Plata, Buenos Aires.",
        "El acceso y uso de este sitio implica la aceptación de las condiciones aquí detalladas. Todo el contenido (textos, imágenes, diseño) es propiedad de Hotel Rex y no puede ser reproducido sin autorización.",
        "Hotel Rex no se responsabiliza por posibles errores en la información ni por el uso indebido del sitio por parte de terceros.",
      ],
    },
    privacidad: {
      title: "Política de privacidad",
      blocks: [
        "En Hotel Rex protegemos tu información personal.",
        "Los datos que nos brindes (nombre, teléfono, email, etc.) serán utilizados únicamente para:",
        ["Gestionar reservas", "Brindar información sobre disponibilidad", "Mejorar la atención al cliente"],
        "No compartimos tus datos con terceros.",
        "Podés solicitar la modificación o eliminación de tus datos en cualquier momento escribiéndonos a nuestro correo electrónico.",
      ],
    },
    cookies: {
      title: "Preferencias de cookies",
      blocks: [
        "Este sitio utiliza cookies para mejorar tu experiencia de navegación.",
        "Las cookies nos permiten:",
        ["Recordar tus preferencias", "Analizar el uso del sitio", "Optimizar el rendimiento"],
        "Podés aceptar, rechazar o configurar el uso de cookies desde tu navegador.",
        "Al continuar navegando, aceptás el uso de cookies según esta política.",
      ],
    },
    accesibilidad: {
      title: "Política de accesibilidad",
      blocks: [
        "En Hotel Rex trabajamos para que nuestro sitio sea accesible para todas las personas.",
        "Nos comprometemos a:",
        ["Facilitar la navegación clara y simple", "Mejorar la legibilidad del contenido", "Optimizar la experiencia en distintos dispositivos"],
        "Si encontrás alguna dificultad para acceder a la información, podés contactarnos y te ayudaremos a la brevedad.",
      ],
    },
  },
  en: {
    kicker: "Legal",
    legal: {
      title: "Legal notice",
      blocks: [
        "This website provides information about the accommodation services offered by Hotel Rex, located in La Plata, Buenos Aires.",
        "Accessing and using this website implies acceptance of the conditions described here. All content, including text, images and design, belongs to Hotel Rex and may not be reproduced without authorization.",
        "Hotel Rex is not responsible for possible errors in the information or for improper use of the website by third parties.",
      ],
    },
    privacidad: {
      title: "Privacy notice",
      blocks: [
        "At Hotel Rex, we protect your personal information.",
        "The information you provide, such as name, phone number and email, will only be used to:",
        ["Manage bookings", "Provide availability information", "Improve customer service"],
        "We do not share your data with third parties.",
        "You may request changes or deletion of your data at any time by writing to our email address.",
      ],
    },
    cookies: {
      title: "Cookie preferences",
      blocks: [
        "This website uses cookies to improve your browsing experience.",
        "Cookies allow us to:",
        ["Remember your preferences", "Analyze website usage", "Optimize performance"],
        "You can accept, reject or configure cookies from your browser.",
        "By continuing to browse, you accept the use of cookies according to this policy.",
      ],
    },
    accesibilidad: {
      title: "Accessibility policy",
      blocks: [
        "At Hotel Rex, we work to make our website accessible to everyone.",
        "We are committed to:",
        ["Making navigation clear and simple", "Improving content readability", "Optimizing the experience across devices"],
        "If you find any difficulty accessing information, you can contact us and we will help you as soon as possible.",
      ],
    },
  },
  pt: {
    kicker: "Legal",
    legal: {
      title: "Aviso legal",
      blocks: [
        "Este site tem como finalidade fornecer informações sobre os serviços de hospedagem oferecidos pelo Hotel Rex, localizado em La Plata, Buenos Aires.",
        "O acesso e uso deste site implica a aceitação das condições aqui detalhadas. Todo o conteúdo, incluindo textos, imagens e design, é propriedade do Hotel Rex e não pode ser reproduzido sem autorização.",
        "O Hotel Rex não se responsabiliza por possíveis erros nas informações nem pelo uso indevido do site por terceiros.",
      ],
    },
    privacidad: {
      title: "Política de privacidade",
      blocks: [
        "No Hotel Rex, protegemos suas informações pessoais.",
        "Os dados fornecidos, como nome, telefone e email, serão utilizados somente para:",
        ["Gerenciar reservas", "Fornecer informações sobre disponibilidade", "Melhorar o atendimento ao cliente"],
        "Não compartilhamos seus dados com terceiros.",
        "Você pode solicitar a alteração ou exclusão dos seus dados a qualquer momento escrevendo para nosso email.",
      ],
    },
    cookies: {
      title: "Preferências de cookies",
      blocks: [
        "Este site utiliza cookies para melhorar sua experiência de navegação.",
        "As cookies nos permitem:",
        ["Recordar suas preferências", "Analisar o uso do site", "Otimizar o desempenho"],
        "Você pode aceitar, rejeitar ou configurar o uso de cookies no seu navegador.",
        "Ao continuar navegando, você aceita o uso de cookies conforme esta política.",
      ],
    },
    accesibilidad: {
      title: "Política de acessibilidade",
      blocks: [
        "No Hotel Rex, trabalhamos para que nosso site seja acessível para todas as pessoas.",
        "Nos comprometemos a:",
        ["Facilitar uma navegação clara e simples", "Melhorar a legibilidade do conteúdo", "Otimizar a experiência em diferentes dispositivos"],
        "Se você encontrar alguma dificuldade para acessar informações, entre em contato e ajudaremos o quanto antes.",
      ],
    },
  },
};

function renderBlocks(blocks) {
  return blocks
    .map((block) => {
      if (Array.isArray(block)) {
        return `<ul>${block.map((item) => `<li>${item}</li>`).join("")}</ul>`;
      }
      return `<p>${block}</p>`;
    })
    .join("");
}

const lang = localStorage.getItem("hotelRex.lang") || "es";
const key = location.pathname.split("/").filter(Boolean).pop() || "legal";
const page = legalTexts[lang][key] || legalTexts[lang].legal;

document.documentElement.lang = lang;
document.querySelector("[data-legal-kicker]").textContent = legalTexts[lang].kicker;
document.querySelector("[data-legal-title]").textContent = page.title;
document.querySelector("[data-legal-body]").innerHTML = renderBlocks(page.blocks);
document.title = `${page.title} | Hotel Rex`;
