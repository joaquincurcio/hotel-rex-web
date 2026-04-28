const authCopy = {
  es: {
    loginTitle: "Iniciar sesión",
    loginCopy: "Ingresá para guardar tus datos y preparar futuras reservas. La consulta por WhatsApp sigue disponible sin cuenta.",
    registerTitle: "Crear cuenta",
    registerCopy: "Guardá tus datos de huésped para agilizar próximas consultas.",
    accountTitle: "Mi cuenta",
    accountCopy: "Estos datos quedan guardados localmente en esta versión. En la etapa Supabase se sincronizarán con tu perfil real.",
    recoverTitle: "Recuperar contraseña",
    recoverCopy: "Ingresá tu email. En la integración Supabase se enviará un enlace seguro para restablecer el acceso.",
    email: "Email",
    password: "Contraseña",
    firstName: "Nombre",
    lastName: "Apellido",
    phone: "Teléfono",
    country: "País",
    guestType: "Tipo de huésped",
    student: "Estudiante",
    tourist: "Turista",
    company: "Empresa",
    other: "Otro",
    signIn: "Iniciar sesión",
    register: "Registrarme",
    save: "Guardar datos",
    logout: "Cerrar sesión",
    recover: "Recuperar contraseña",
    sendRecovery: "Enviar enlace",
    goRegister: "Crear cuenta",
    goLogin: "Ya tengo cuenta",
    back: "Volver al sitio",
    saved: "Datos guardados.",
    recoverySent: "Solicitud registrada. En Supabase este paso enviará el email real.",
    historyTitle: "Historial",
    inquiriesTitle: "Consultas",
    reservationsTitle: "Reservas",
    emptyHistory: "Todavía no hay registros.",
    pending: "pendiente",
  },
  en: {
    loginTitle: "Sign in",
    loginCopy: "Sign in to save your details and prepare future bookings. WhatsApp inquiries remain available without an account.",
    registerTitle: "Create account",
    registerCopy: "Save your guest details to speed up future inquiries.",
    accountTitle: "My account",
    accountCopy: "These details are stored locally in this version. In the Supabase stage they will sync with your real profile.",
    recoverTitle: "Recover password",
    recoverCopy: "Enter your email. With Supabase integration, a secure reset link will be sent.",
    email: "Email",
    password: "Password",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone",
    country: "Country",
    guestType: "Guest type",
    student: "Student",
    tourist: "Tourist",
    company: "Company",
    other: "Other",
    signIn: "Sign in",
    register: "Register",
    save: "Save details",
    logout: "Sign out",
    recover: "Recover password",
    sendRecovery: "Send link",
    goRegister: "Create account",
    goLogin: "I already have an account",
    back: "Back to site",
    saved: "Details saved.",
    recoverySent: "Request saved. With Supabase this step will send the real email.",
    historyTitle: "History",
    inquiriesTitle: "Inquiries",
    reservationsTitle: "Bookings",
    emptyHistory: "No records yet.",
    pending: "pending",
  },
  pt: {
    loginTitle: "Entrar",
    loginCopy: "Entre para salvar seus dados e preparar futuras reservas. A consulta por WhatsApp continua disponível sem conta.",
    registerTitle: "Criar conta",
    registerCopy: "Salve seus dados de hóspede para agilizar próximas consultas.",
    accountTitle: "Minha conta",
    accountCopy: "Estes dados ficam salvos localmente nesta versão. Na etapa Supabase serão sincronizados com seu perfil real.",
    recoverTitle: "Recuperar senha",
    recoverCopy: "Digite seu email. Na integração Supabase será enviado um link seguro para redefinir o acesso.",
    email: "Email",
    password: "Senha",
    firstName: "Nome",
    lastName: "Sobrenome",
    phone: "Telefone",
    country: "País",
    guestType: "Tipo de hóspede",
    student: "Estudante",
    tourist: "Turista",
    company: "Empresa",
    other: "Outro",
    signIn: "Entrar",
    register: "Cadastrar",
    save: "Salvar dados",
    logout: "Sair",
    recover: "Recuperar senha",
    sendRecovery: "Enviar link",
    goRegister: "Criar conta",
    goLogin: "Já tenho conta",
    back: "Voltar ao site",
    saved: "Dados salvos.",
    recoverySent: "Solicitação registrada. Com Supabase este passo enviará o email real.",
    historyTitle: "Histórico",
    inquiriesTitle: "Consultas",
    reservationsTitle: "Reservas",
    emptyHistory: "Ainda não há registros.",
    pending: "pendente",
  },
};

const lang = localStorage.getItem("hotelRex.lang") || "es";
const copy = authCopy[lang];
const profileKey = "hotelRex.profile";

document.documentElement.lang = lang;
document.querySelectorAll("[data-auth]").forEach((element) => {
  element.textContent = copy[element.dataset.auth];
});

const form = document.querySelector("form");
const statusNode = document.querySelector("[data-status]");
const existingProfile = JSON.parse(localStorage.getItem(profileKey) || "{}");

if (form) {
  Object.entries(existingProfile).forEach(([key, value]) => {
    if (form.elements[key]) form.elements[key].value = value;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem(profileKey, JSON.stringify({ ...existingProfile, ...data, signedIn: true }));

    if (form.dataset.redirect) {
      window.location.href = form.dataset.redirect;
      return;
    }

    if (statusNode) statusNode.textContent = form.dataset.recovery ? copy.recoverySent : copy.saved;
  });
}

const logout = document.querySelector("[data-logout]");
if (logout) {
  logout.addEventListener("click", () => {
    const profile = JSON.parse(localStorage.getItem(profileKey) || "{}");
    localStorage.setItem(profileKey, JSON.stringify({ ...profile, signedIn: false }));
    window.location.href = "../";
  });
}

function renderHistory(kind) {
  const container = document.querySelector(`[data-history="${kind}"]`);
  if (!container) return;

  const records = JSON.parse(localStorage.getItem(`hotelRex.${kind}`) || "[]");
  const profile = JSON.parse(localStorage.getItem(profileKey) || "{}");
  const filtered = records.filter((record) => !profile.email || record.userEmail === profile.email).slice(-4).reverse();

  if (!filtered.length) {
    container.innerHTML = `<p class="history-empty">${copy.emptyHistory}</p>`;
    return;
  }

  container.innerHTML = filtered
    .map((record) => {
      const title = record.roomType || "Hotel Rex";
      const date = record.createdAt ? new Date(record.createdAt).toLocaleDateString() : "";
      const status = record.estado || record.channel || copy.pending;
      return `<div class="history-item"><strong>${title}</strong><span>${date}</span><small>${status}</small></div>`;
    })
    .join("");
}

renderHistory("inquiries");
renderHistory("reservations");
