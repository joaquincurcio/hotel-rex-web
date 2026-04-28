const exchangeRates = {
  ARS: 1,
  USD: 1450,
  BRL: 280,
};

const supabaseUrl = "https://aedyyfalybrnvwuomxpc.supabase.co";
const supabaseAnonKey = "sb_publishable_Pc8h1KnMHTPxZ5JbqlQIYA_3T9Aejl-";
const supabaseClient = window.supabase?.createClient(supabaseUrl, supabaseAnonKey);

const roomImages = {
  simple: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80",
  double: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
  triple: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
};

const state = {
  lang: localStorage.getItem("hotelRex.lang") || "es",
  currency: localStorage.getItem("hotelRex.currency") || "ARS",
};

const translations = {
  es: {
    nav: { rooms: "Habitaciones", services: "Servicios", videos: "Videos", residence: "Residencia", reserve: "Consultar", signIn: "Iniciar sesión" },
    hero: {
      eyebrow: "Centro de La Plata",
      title: "Hotel Rex",
      subtitle: "Residencia & hospedaje en el centro de La Plata.",
      primary: "Consultar disponibilidad",
      secondary: "Ver habitaciones",
    },
    intro: {
      eyebrow: "Residencia y hotel",
      title: "Una estadía cómoda, céntrica y bien resuelta.",
      copy: "Hotel Rex combina la practicidad de una residencia estudiantil con la atención de un alojamiento urbano. Habitaciones equipadas, servicios esenciales y una ubicación estratégica a metros del centro.",
    },
    rooms: {
      eyebrow: "Habitaciones",
      title: "Opciones simples, dobles y triples.",
      copy: "Espacios pensados para estudiar, descansar y alojarse con comodidad.",
      estimate: "Precio por noche",
      askPrice: "Consultar precio",
      consult: "Consultar esta habitación",
      simple: { title: "Habitación simple", description: "Privacidad y calma para estudiantes, viajeros o estadías de trabajo.", capacity: "1 persona" },
      double: { title: "Habitación doble", description: "Una opción cómoda para compartir sin resignar orden ni descanso.", capacity: "2 personas" },
      triple: { title: "Habitación triple", description: "Más amplitud para familias, grupos o residencia compartida.", capacity: "3 personas" },
    },
    services: {
      eyebrow: "Servicios",
      title: "Servicios incluidos para alojarte con tranquilidad.",
      copy: "Una base práctica y cuidada para que tu estadía sea simple, cómoda y bien acompañada desde el primer día.",
      items: [
        ["Habitaciones equipadas", "Baño privado, TV, Wi-Fi, frigobar, calefacción, ventilador de techo y placard."],
        ["Rutina diaria resuelta", "Gimnasio, desayuno seco y espacios comunes para estudiar o compartir."],
        ["Atención directa", "Consultas rápidas por WhatsApp y acompañamiento para avanzar con tu reserva."],
        ["Ubicación céntrica", "Av. 44 N°323, entre 1 y 2, cerca de puntos clave de La Plata."],
      ],
    },
    monthly: {
      eyebrow: "Estadía mensual",
      title: "Residencia mensual para estudiantes y estadías prolongadas.",
      copy: "Consultá por modalidad mensual en habitaciones equipadas, con servicios incluidos y acceso a espacios comunes para estudiar, descansar y organizar tu rutina en La Plata.",
      label: "Valor mensual",
      price: "Consultar precio",
      cta: "Consultar estadía mensual",
    },
    featured: {
      eyebrow: "Beneficios destacados",
      title: "Más que una habitación: espacios pensados para tu rutina.",
      gym: {
        title: "Gimnasio",
        copy: "Contamos con un espacio de gimnasio equipado para que puedas entrenar durante tu estadía, manteniendo tu rutina y bienestar.",
      },
      study: {
        title: "Espacio de estudio",
        copy: "Disponemos de un amplio espacio común ideal para estudiar, trabajar o compartir, con un ambiente tranquilo y cómodo.",
        item1: "Mesas amplias",
        item2: "Buena iluminación",
        item3: "Ambiente silencioso",
      },
      breakfast: {
        title: "Desayuno seco incluido",
        copy: "Incluimos desayuno seco para que puedas comenzar el día de forma práctica y cómoda.",
        badge: "Beneficio incluido",
      },
    },
    residence: {
      eyebrow: "Residencia estudiantil",
      title: "Un lugar práctico para vivir, estudiar y moverse por La Plata.",
      copy: "Habitaciones equipadas, espacios comunes y modalidad mensual para estudiantes que buscan una solución cómoda, céntrica y confiable.",
      cta: "Consultar opción mensual",
    },
    hotel: {
      eyebrow: "Estadías por noche",
      title: "Para viajes breves, trámites, estudio, salud o trabajo.",
      copy: "Consultas flexibles para turistas, familias, estudiantes en ingreso y personas que necesitan hospedarse temporalmente en una zona céntrica.",
      cta: "Consultar estadía",
    },
    gallery: { eyebrow: "Galería", title: "Ambientes cálidos, funcionales y bien ubicados." },
    video: {
      eyebrow: "Conocé el hotel",
      title: "Videos oficiales de Hotel Rex.",
      copy: "Mirá contenido del hotel y conocé mejor los espacios antes de consultar disponibilidad.",
      cta: "Ver más en YouTube",
    },
    contact: {
      eyebrow: "Consulta / Reserva",
      title: "Consultá disponibilidad sin crear una cuenta.",
      copy: "Completá lo que sepas. Si falta algún dato, igual podés enviar la consulta.",
    },
    location: {
      eyebrow: "Ubicación",
      title: "Av. 44 N°323, entre 1 y 2.",
      copy: "Una ubicación céntrica en La Plata, práctica para moverse por estudio, trabajo, trámites o turismo.",
      cta: "Cómo llegar",
    },
    form: {
      roomType: "Tipo de habitación",
      guests: "Personas",
      checkIn: "Ingreso",
      checkOut: "Salida",
      modality: "Modalidad",
      check: "Consultar",
      firstName: "Nombre",
      lastName: "Apellido",
      phone: "Teléfono",
      country: "País",
      message: "Mensaje adicional",
      note: "Los campos incompletos se marcarán visualmente, pero podés consultar igual.",
    },
    modality: { night: "Por noche", monthly: "Residencia mensual" },
    amenities: ["Baño privado", "Wi-Fi", "TV", "Frigobar", "Calefacción", "Ventilador de techo", "Placard"],
    faq: {
      title: "Preguntas frecuentes.",
      items: [
        ["¿Dónde está ubicado Hotel Rex?", "En Av. 44 N°323, entre 1 y 2, La Plata, Buenos Aires."],
        ["¿Las habitaciones tienen baño privado?", "Sí, las habitaciones cuentan con baño privado."],
        ["¿Qué servicios incluye?", "Wi-Fi, TV, frigobar, calefacción, ventilador de techo, placard y espacios comunes."],
        ["¿Se puede alquilar por mes?", "Sí, Hotel Rex funciona también como residencia estudiantil con opción mensual."],
        ["¿Se puede reservar por noche?", "Sí, se pueden consultar estadías temporarias por noche."],
      ["¿Cómo consulto disponibilidad?", "Podés completar el formulario y escribir por WhatsApp con el mensaje generado automáticamente."],
        ["¿Puedo escribir por WhatsApp?", "Sí, el botón abre WhatsApp con la consulta precargada."],
        ["¿La residencia es para estudiantes?", "Sí, está pensada especialmente para estudiantes que buscan ubicación y comodidad."],
        ["¿Qué tipos de habitaciones hay?", "Habitaciones simples, dobles y triples."],
        ["¿Cómo puedo avanzar con una reserva?", "Primero consultá disponibilidad; el equipo te indicará precio, servicios incluidos y próximos pasos."],
      ],
    },
    footer: {
      description: "Residencia estudiantil y hospedaje en el centro de La Plata. Habitaciones simples, dobles y triples con baño privado, servicios incluidos y espacios pensados para estudiar, descansar y alojarse con comodidad.",
      location: "Ubicación",
      contact: "Contacto",
      legal: "Legal",
    },
    legal: {
      legalNotice: "Aviso legal",
      privacy: "Política de privacidad",
      cookies: "Preferencias de cookies",
      accessibility: "Política de accesibilidad",
    },
    placeholders: { empty: "[completar]" },
    emailSubject: "Consulta de disponibilidad - Hotel Rex",
  },
  en: {
    nav: { rooms: "Rooms", services: "Services", videos: "Videos", residence: "Residence", reserve: "Inquiry", signIn: "Sign in" },
    hero: {
      eyebrow: "Downtown La Plata",
      title: "Hotel Rex",
      subtitle: "Residence & accommodation in downtown La Plata.",
      primary: "Check availability",
      secondary: "View rooms",
    },
    intro: {
      eyebrow: "Residence and hotel",
      title: "A comfortable, central and well-planned stay.",
      copy: "Hotel Rex combines the practicality of a student residence with the care of urban accommodation. Equipped rooms, essential services and a strategic location near the city center.",
    },
    rooms: {
      eyebrow: "Rooms",
      title: "Single, double and triple options.",
      copy: "Spaces designed for studying, resting and staying comfortably.",
      estimate: "Price per night",
      askPrice: "Ask for price",
      consult: "Ask about this room",
      simple: { title: "Single room", description: "Privacy and calm for students, travelers or work stays.", capacity: "1 guest" },
      double: { title: "Double room", description: "A comfortable option to share without giving up order or rest.", capacity: "2 guests" },
      triple: { title: "Triple room", description: "More space for families, groups or shared residence.", capacity: "3 guests" },
    },
    services: {
      eyebrow: "Services",
      title: "Included services for a worry-free stay.",
      copy: "A practical and carefully planned base so your stay feels simple, comfortable and well supported from day one.",
      items: [
        ["Equipped rooms", "Private bathroom, TV, Wi-Fi, minibar, heating, ceiling fan and wardrobe."],
        ["Daily routine covered", "Gym, dry breakfast and common spaces for studying or sharing."],
        ["Direct assistance", "Quick WhatsApp inquiries and support to move forward with your booking."],
        ["Central location", "Av. 44 N°323, between 1 and 2, close to key areas of La Plata."],
      ],
    },
    monthly: {
      eyebrow: "Monthly stay",
      title: "Monthly residence for students and extended stays.",
      copy: "Ask about monthly options in equipped rooms, with included services and access to common spaces for studying, resting and organizing your routine in La Plata.",
      label: "Monthly rate",
      price: "Ask for price",
      cta: "Ask about monthly stay",
    },
    featured: {
      eyebrow: "Featured benefits",
      title: "More than a room: spaces designed around your routine.",
      gym: {
        title: "Gym",
        copy: "We offer an equipped gym space so you can train during your stay, keeping your routine and wellbeing.",
      },
      study: {
        title: "Study space",
        copy: "We provide a large common area ideal for studying, working or sharing, with a quiet and comfortable atmosphere.",
        item1: "Large tables",
        item2: "Good lighting",
        item3: "Quiet atmosphere",
      },
      breakfast: {
        title: "Dry breakfast included",
        copy: "We include dry breakfast so you can start the day in a practical and comfortable way.",
        badge: "Included benefit",
      },
    },
    residence: {
      eyebrow: "Student residence",
      title: "A practical place to live, study and move around La Plata.",
      copy: "Equipped rooms, common spaces and monthly options for students looking for a comfortable, central and reliable solution.",
      cta: "Ask about monthly option",
    },
    hotel: {
      eyebrow: "Nightly stays",
      title: "For short trips, paperwork, study, health or work.",
      copy: "Flexible inquiries for tourists, families, incoming students and people who need temporary accommodation in a central area.",
      cta: "Ask about a stay",
    },
    gallery: { eyebrow: "Gallery", title: "Warm, functional and well-located spaces." },
    video: {
      eyebrow: "Get to know the hotel",
      title: "Official Hotel Rex videos.",
      copy: "Watch hotel content and get to know the spaces better before checking availability.",
      cta: "See more on YouTube",
    },
    contact: {
      eyebrow: "Inquiry / Booking",
      title: "Check availability without creating an account.",
      copy: "Fill in what you know. If any detail is missing, you can still send the inquiry.",
    },
    location: {
      eyebrow: "Location",
      title: "Av. 44 N°323, between 1 and 2.",
      copy: "A central location in La Plata, practical for study, work, paperwork or tourism.",
      cta: "Get directions",
    },
    form: {
      roomType: "Room type",
      guests: "Guests",
      checkIn: "Check-in",
      checkOut: "Check-out",
      modality: "Modality",
      check: "Check",
      firstName: "First name",
      lastName: "Last name",
      phone: "Phone",
      country: "Country",
      message: "Additional message",
      note: "Incomplete fields will be visually marked, but you can still send the inquiry.",
    },
    modality: { night: "Per night", monthly: "Monthly residence" },
    amenities: ["Private bathroom", "Wi-Fi", "TV", "Minibar", "Heating", "Ceiling fan", "Wardrobe"],
    faq: {
      title: "Frequently asked questions.",
      items: [
        ["Where is Hotel Rex located?", "At Av. 44 N°323, between 1 and 2, La Plata, Buenos Aires."],
        ["Do rooms have private bathrooms?", "Yes, rooms include a private bathroom."],
        ["What services are included?", "Wi-Fi, TV, minibar, heating, ceiling fan, wardrobe and common spaces."],
        ["Can I rent monthly?", "Yes, Hotel Rex also works as a student residence with monthly options."],
        ["Can I book by the night?", "Yes, temporary nightly stays can be requested."],
      ["How do I check availability?", "Complete the form and contact by WhatsApp with an automatically generated message."],
        ["Can I write via WhatsApp?", "Yes, the button opens WhatsApp with the inquiry preloaded."],
        ["Is the residence for students?", "Yes, it is especially designed for students seeking location and comfort."],
        ["What room types are available?", "Single, double and triple rooms."],
        ["How can I proceed with a booking?", "First check availability; the team will share price, included services and next steps."],
      ],
    },
    footer: {
      description: "Student residence and accommodation in downtown La Plata. Single, double and triple rooms with private bathrooms, included services and spaces designed for studying, resting and staying comfortably.",
      location: "Location",
      contact: "Contact",
      legal: "Legal",
    },
    legal: {
      legalNotice: "Legal notice",
      privacy: "Privacy notice",
      cookies: "Cookie preferences",
      accessibility: "Accessibility policy",
    },
    placeholders: { empty: "[to complete]" },
    emailSubject: "Availability inquiry - Hotel Rex",
  },
  pt: {
    nav: { rooms: "Quartos", services: "Serviços", videos: "Vídeos", residence: "Residência", reserve: "Consultar", signIn: "Entrar" },
    hero: {
      eyebrow: "Centro de La Plata",
      title: "Hotel Rex",
      subtitle: "Residência & hospedagem no centro de La Plata.",
      primary: "Consultar disponibilidade",
      secondary: "Ver quartos",
    },
    intro: {
      eyebrow: "Residência e hotel",
      title: "Uma estadia confortável, central e bem resolvida.",
      copy: "O Hotel Rex combina a praticidade de uma residência estudantil com o atendimento de uma hospedagem urbana. Quartos equipados, serviços essenciais e localização estratégica perto do centro.",
    },
    rooms: {
      eyebrow: "Quartos",
      title: "Opções individuais, duplas e triplas.",
      copy: "Espaços pensados para estudar, descansar e hospedar-se com conforto.",
      estimate: "Preço por noite",
      askPrice: "Consultar preço",
      consult: "Consultar este quarto",
      simple: { title: "Quarto individual", description: "Privacidade e calma para estudantes, viajantes ou estadias de trabalho.", capacity: "1 pessoa" },
      double: { title: "Quarto duplo", description: "Uma opção confortável para compartilhar sem abrir mão do descanso.", capacity: "2 pessoas" },
      triple: { title: "Quarto triplo", description: "Mais espaço para famílias, grupos ou residência compartilhada.", capacity: "3 pessoas" },
    },
    services: {
      eyebrow: "Serviços",
      title: "Serviços incluídos para uma estadia tranquila.",
      copy: "Uma base prática e bem cuidada para que sua estadia seja simples, confortável e bem acompanhada desde o primeiro dia.",
      items: [
        ["Quartos equipados", "Banheiro privativo, TV, Wi-Fi, frigobar, aquecimento, ventilador de teto e armário."],
        ["Rotina diária resolvida", "Academia, café da manhã seco e espaços comuns para estudar ou compartilhar."],
        ["Atendimento direto", "Consultas rápidas por WhatsApp e suporte para avançar com a reserva."],
        ["Localização central", "Av. 44 N°323, entre 1 e 2, perto de pontos importantes de La Plata."],
      ],
    },
    monthly: {
      eyebrow: "Estadia mensal",
      title: "Residência mensal para estudantes e estadias prolongadas.",
      copy: "Consulte a modalidade mensal em quartos equipados, com serviços incluídos e acesso a espaços comuns para estudar, descansar e organizar sua rotina em La Plata.",
      label: "Valor mensal",
      price: "Consultar preço",
      cta: "Consultar estadia mensal",
    },
    featured: {
      eyebrow: "Benefícios destacados",
      title: "Mais que um quarto: espaços pensados para sua rotina.",
      gym: {
        title: "Academia",
        copy: "Contamos com um espaço de academia equipado para que você possa treinar durante sua estadia, mantendo sua rotina e bem-estar.",
      },
      study: {
        title: "Espaço de estudo",
        copy: "Disponibilizamos um amplo espaço comum ideal para estudar, trabalhar ou compartilhar, com um ambiente tranquilo e confortável.",
        item1: "Mesas amplas",
        item2: "Boa iluminação",
        item3: "Ambiente silencioso",
      },
      breakfast: {
        title: "Café da manhã seco incluído",
        copy: "Incluímos café da manhã seco para que você possa começar o dia de forma prática e confortável.",
        badge: "Benefício incluído",
      },
    },
    residence: {
      eyebrow: "Residência estudantil",
      title: "Um lugar prático para viver, estudar e circular por La Plata.",
      copy: "Quartos equipados, espaços comuns e modalidade mensal para estudantes que buscam uma solução confortável, central e confiável.",
      cta: "Consultar opção mensal",
    },
    hotel: {
      eyebrow: "Estadias por noite",
      title: "Para viagens curtas, trâmites, estudo, saúde ou trabalho.",
      copy: "Consultas flexíveis para turistas, famílias, estudantes ingressantes e pessoas que precisam de hospedagem temporária em uma região central.",
      cta: "Consultar estadia",
    },
    gallery: { eyebrow: "Galeria", title: "Ambientes acolhedores, funcionais e bem localizados." },
    video: {
      eyebrow: "Conheça o hotel",
      title: "Vídeos oficiais do Hotel Rex.",
      copy: "Veja conteúdos do hotel e conheça melhor os espaços antes de consultar disponibilidade.",
      cta: "Ver mais no YouTube",
    },
    contact: {
      eyebrow: "Consulta / Reserva",
      title: "Consulte disponibilidade sem criar uma conta.",
      copy: "Preencha o que souber. Se faltar algum dado, você ainda pode enviar a consulta.",
    },
    location: {
      eyebrow: "Localização",
      title: "Av. 44 N°323, entre 1 e 2.",
      copy: "Uma localização central em La Plata, prática para estudo, trabalho, trâmites ou turismo.",
      cta: "Como chegar",
    },
    form: {
      roomType: "Tipo de quarto",
      guests: "Pessoas",
      checkIn: "Entrada",
      checkOut: "Saída",
      modality: "Modalidade",
      check: "Consultar",
      firstName: "Nome",
      lastName: "Sobrenome",
      phone: "Telefone",
      country: "País",
      message: "Mensagem adicional",
      note: "Campos incompletos serão marcados visualmente, mas você ainda pode consultar.",
    },
    modality: { night: "Por noite", monthly: "Residência mensal" },
    amenities: ["Banheiro privativo", "Wi-Fi", "TV", "Frigobar", "Aquecimento", "Ventilador de teto", "Armário"],
    faq: {
      title: "Perguntas frequentes.",
      items: [
        ["Onde fica o Hotel Rex?", "Na Av. 44 N°323, entre 1 e 2, La Plata, Buenos Aires."],
        ["Os quartos têm banheiro privativo?", "Sim, os quartos contam com banheiro privativo."],
        ["Quais serviços estão incluídos?", "Wi-Fi, TV, frigobar, aquecimento, ventilador de teto, armário e espaços comuns."],
        ["É possível alugar por mês?", "Sim, o Hotel Rex também funciona como residência estudantil com opção mensal."],
        ["É possível reservar por noite?", "Sim, é possível consultar estadias temporárias por noite."],
      ["Como consulto disponibilidade?", "Complete o formulário e escreva por WhatsApp com a mensagem gerada automaticamente."],
        ["Posso escrever por WhatsApp?", "Sim, o botão abre o WhatsApp com a consulta preenchida."],
        ["A residência é para estudantes?", "Sim, foi pensada especialmente para estudantes que buscam localização e conforto."],
        ["Que tipos de quartos existem?", "Quartos individuais, duplos e triplos."],
        ["Como posso avançar com uma reserva?", "Primeiro consulte disponibilidade; a equipe informará preço, serviços incluídos e próximos passos."],
      ],
    },
    footer: {
      description: "Residência estudantil e hospedagem no centro de La Plata. Quartos individuais, duplos e triplos com banheiro privativo, serviços incluídos e espaços pensados para estudar, descansar e hospedar-se com conforto.",
      location: "Localização",
      contact: "Contato",
      legal: "Legal",
    },
    legal: {
      legalNotice: "Aviso legal",
      privacy: "Política de privacidade",
      cookies: "Preferências de cookies",
      accessibility: "Política de acessibilidade",
    },
    placeholders: { empty: "[preencher]" },
    emailSubject: "Consulta de disponibilidade - Hotel Rex",
  },
};

const rooms = [
  { key: "simple", basePrice: 60000 },
{ key: "double", basePrice: 65000 },
{ key: "triple", basePrice: 105000 },
];

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[state.lang]) || path;
}

function formatPrice(ars) {
  const converted = Math.round(ars / exchangeRates[state.currency]);
  return new Intl.NumberFormat(state.lang === "en" ? "en-US" : state.lang === "pt" ? "pt-BR" : "es-AR", {
    style: "currency",
    currency: state.currency,
    maximumFractionDigits: 0,
  }).format(converted);
}

function renderRooms() {
  const grid = document.querySelector("#roomGrid");
  grid.innerHTML = rooms
    .map((room) => {
      const roomText = t(`rooms.${room.key}`);
      const amenities = translations[state.lang].amenities.map((item) => `<li>${item}</li>`).join("");
      return `
        <article class="room-card">
          <div class="room-image"><img src="${roomImages[room.key]}" alt="${roomText.title}"></div>
          <div class="room-body">
            <h3>${roomText.title}</h3>
            <p>${roomText.description}</p>
            <ul class="amenities"><li>${roomText.capacity}</li>${amenities}</ul>
            <div class="price"><small>${t("rooms.estimate")}</small><strong>${formatPrice(room.basePrice)}</strong></div>
            <a class="btn primary room-consult" href="#contact" data-room="${room.key}">${t("rooms.consult")}</a>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".room-consult").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector('#inquiryForm [name="roomType"]').value = button.dataset.room;
      updateLinks();
    });
  });
}

function renderServices() {
  document.querySelector("#servicesGrid").innerHTML = translations[state.lang].services.items
    .map(([title, copy], index) => `<article class="service-card"><span>0${index + 1}</span><strong>${title}</strong><p>${copy}</p></article>`)
    .join("");
}

function renderFaq() {
  document.querySelector("#faqList").innerHTML = translations[state.lang].faq.items
    .map(([question, answer]) => `<details class="faq-item"><summary>${question}</summary><p>${answer}</p></details>`)
    .join("");
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
  document.querySelector("#currency").value = state.currency;
  renderRooms();
  renderServices();
  renderFaq();
  updateLinks();
}

function getFormValues(source = "#inquiryForm") {
  const form = document.querySelector(source);
  const values = Object.fromEntries(new FormData(form).entries());
  return values;
}

function getStoredProfile() {
  return JSON.parse(localStorage.getItem("hotelRex.profile") || "{}");
}

function autofillInquiryFromProfile() {
  const profile = getStoredProfile();
  if (!profile.signedIn) return;

  const form = document.querySelector("#inquiryForm");
  const fieldMap = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    phone: "phone",
    country: "country",
  };

  Object.entries(fieldMap).forEach(([formField, profileField]) => {
    if (form.elements[formField] && profile[profileField] && !form.elements[formField].value) {
      form.elements[formField].value = profile[profileField];
    }
  });
}

function saveGuestAction(channel) {
  const profile = getStoredProfile();
  const values = getFormValues();
  const now = new Date().toISOString();
  const inquiry = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    userEmail: profile.email || values.email,
    channel,
    idioma: state.lang,
    moneda: state.currency,
    ...values,
    createdAt: now,
  };

  if (profile.signedIn) {
    const inquiries = JSON.parse(localStorage.getItem("hotelRex.inquiries") || "[]");
    inquiries.push(inquiry);
    localStorage.setItem("hotelRex.inquiries", JSON.stringify(inquiries));

    const reservations = JSON.parse(localStorage.getItem("hotelRex.reservations") || "[]");
    reservations.push({ ...inquiry, estado: "pendiente" });
    localStorage.setItem("hotelRex.reservations", JSON.stringify(reservations));
  }

  return inquiry;
}

function normalizeDate(value) {
  return value && String(value).trim() ? value : null;
}

function createReservationPayload(values) {
  return {
    nombre: [values.firstName, values.lastName].filter(Boolean).join(" ").trim() || null,
    telefono: values.phone || null,
    tipo_habitacion: values.roomType || null,
    personas: values.guestCount ? Number(values.guestCount) : null,
    ingreso: normalizeDate(values.checkIn),
    salida: normalizeDate(values.checkOut),
    modalidad: values.modality || null,
    estado: "pendiente",
  };
}

function setReservationStatus(message, type = "info") {
  const note = document.querySelector("#formNote");
  if (!note) return;
  note.textContent = message;
  note.dataset.status = type;
}

function validateReservation(values) {
  const required = ["firstName", "phone", "roomType", "guestCount", "checkIn", "checkOut", "modality"];
  const missing = required.filter((name) => !values[name] || !String(values[name]).trim());
  markMissing(required);
  return missing.length === 0;
}

async function saveReservationToSupabase(values) {
  if (!supabaseClient) {
    console.warn("Supabase client is not available.");
    return { ok: false };
  }

  const payload = createReservationPayload(values);

  const { error } = await supabaseClient.from("reservations").insert(payload);

  if (error) {
    console.error("No se pudo guardar la reserva en Supabase:", error);
    return { ok: false, error };
  }

  return { ok: true, payload };
}

async function sendReservationEmail(payload) {
  try {
    const response = await fetch("/api/send-reservation-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("No se pudo enviar el email de reserva:", details);
      return { ok: false };
    }

    return { ok: true };
  } catch (error) {
    console.error("Error enviando email de reserva:", error);
    return { ok: false, error };
  }
}

async function submitReservation(values) {
  const saved = await saveReservationToSupabase(values);

  if (!saved.ok) {
    setReservationStatus("No pudimos enviar la consulta. Por favor, intentá nuevamente o escribinos por WhatsApp.", "error");
    return saved;
  }

  setReservationStatus("Consulta enviada correctamente. Te contactaremos por WhatsApp a la brevedad.", "success");
  sendReservationEmail(saved.payload);
  return saved;
}

function valueOrPlaceholder(value) {
  return value && String(value).trim() ? value : translations[state.lang].placeholders.empty;
}

function selectedLabel(select) {
  return select.options[select.selectedIndex]?.textContent || valueOrPlaceholder("");
}

function roomMessageLabel(select) {
  const label = selectedLabel(select);
  if (state.lang === "es") return label.replace(/^Habitación\s+/i, "").toLowerCase();
  if (state.lang === "pt") return label.replace(/^Quarto\s+/i, "").toLowerCase();
  return label.replace(/\s+room$/i, "").toLowerCase();
}

function buildWhatsappMessage(values) {
  const roomSelect = document.querySelector('#inquiryForm [name="roomType"]');
  const roomType = roomMessageLabel(roomSelect);
  const guests = valueOrPlaceholder(values.guestCount);
  const checkIn = valueOrPlaceholder(values.checkIn);
  const checkOut = valueOrPlaceholder(values.checkOut);

  if (state.lang === "en") {
    return `Hello, I would like to check availability at Hotel Rex.\n\nI am looking for a ${roomType} room for ${guests} guest/s, from ${checkIn} to ${checkOut}.\n\nI would like to know the price, included services and how to proceed with the booking.\n\nThank you.`;
  }
  if (state.lang === "pt") {
    return `Olá, gostaria de consultar disponibilidade no Hotel Rex.\n\nEstou procurando um quarto ${roomType} para ${guests} pessoa/s, de ${checkIn} até ${checkOut}.\n\nGostaria de saber o preço, os serviços incluídos e como posso avançar com a reserva.\n\nMuito obrigado.`;
  }
  return `Hola, quiero consultar disponibilidad en Hotel Rex.\n\nEstoy buscando una habitación ${roomType} para ${guests} persona/s, desde el ${checkIn} hasta el ${checkOut}.\n\nQuisiera saber el precio, los servicios incluidos y cómo puedo avanzar con la reserva.\n\nMuchas gracias.`;
}

function buildEmailBody(values) {
  const roomSelect = document.querySelector('#inquiryForm [name="roomType"]');
  const modalitySelect = document.querySelector('#inquiryForm [name="modality"]');
  const roomType = selectedLabel(roomSelect);
  const modality = selectedLabel(modalitySelect);
  const guests = valueOrPlaceholder(values.guestCount);
  const checkIn = valueOrPlaceholder(values.checkIn);
  const checkOut = valueOrPlaceholder(values.checkOut);

  if (state.lang === "en") {
    return `Hello, Hotel Rex team.\n\nI would like to check availability.\n\nRoom type: ${roomType}\nGuest count: ${guests}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nModality: ${modality}\n\nI would also like to receive information about prices, included services and booking steps.\n\nThank you.`;
  }
  if (state.lang === "pt") {
    return `Olá, equipe do Hotel Rex.\n\nGostaria de consultar disponibilidade.\n\nTipo de quarto: ${roomType}\nQuantidade de pessoas: ${guests}\nData de entrada: ${checkIn}\nData de saída: ${checkOut}\nModalidade: ${modality}\n\nTambém gostaria de receber informações sobre preços, serviços incluídos e passos para reservar.\n\nMuito obrigado.`;
  }
  return `Hola, equipo de Hotel Rex.\n\nQuiero consultar disponibilidad.\n\nTipo de habitación: ${roomType}\nCantidad de personas: ${guests}\nFecha de ingreso: ${checkIn}\nFecha de salida: ${checkOut}\nModalidad: ${modality}\n\nTambién quisiera recibir información sobre precios, servicios incluidos y pasos para reservar.\n\nMuchas gracias.`;
}

function markMissing(fields = ["roomType", "guestCount", "checkIn", "checkOut", "modality"]) {
  const form = document.querySelector("#inquiryForm");
  fields.forEach((name) => {
    const field = form.elements[name];
    if (field) field.closest("label").classList.toggle("invalid", !field.value);
  });
}

function updateLinks() {
  const values = getFormValues();
  markMissing();
  const whatsappMessage = buildWhatsappMessage(values);
  document.querySelector("#whatsappLink").href = `https://wa.me/5492216064151?text=${encodeURIComponent(whatsappMessage)}`;
}

function wireContactTracking() {
  document.querySelector("#whatsappLink").addEventListener("click", async (event) => {
    event.preventDefault();
    const values = getFormValues();

    if (!validateReservation(values)) {
      setReservationStatus("Completá los campos principales para enviar la consulta.", "error");
      return;
    }

    saveGuestAction("whatsapp");
    const whatsappUrl = event.currentTarget.href;
    const whatsappWindow = window.open("about:blank", "_blank");
    const result = await submitReservation(values);

    if (result.ok) {
      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappUrl;
      } else {
        window.location.href = whatsappUrl;
      }
      return;
    }

    if (whatsappWindow) whatsappWindow.close();
  });
}

function copyQuickSearch() {
  const values = getFormValues("#quickSearch");
  const form = document.querySelector("#inquiryForm");
  Object.entries(values).forEach(([key, value]) => {
    if (form.elements[key]) form.elements[key].value = value;
  });
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  updateLinks();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("hotelRex.lang", state.lang);
    applyTranslations();
  });
});

document.querySelector("#currency").addEventListener("change", (event) => {
  state.currency = event.target.value;
  localStorage.setItem("hotelRex.currency", state.currency);
  renderRooms();
});

document.querySelector("#inquiryForm").addEventListener("input", updateLinks);
document.querySelector("#inquiryForm").addEventListener("change", updateLinks);
document.querySelector("#quickToContact").addEventListener("click", copyQuickSearch);

autofillInquiryFromProfile();
wireContactTracking();
applyTranslations();
