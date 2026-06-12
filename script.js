const WHATSAPP_URL = "https://wa.me/5212218302048?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20PRAXIS";
const FORM_SUCCESS_MESSAGE = "Gracias. Recibimos tu solicitud y un asesor de PRAXIS revisara tu caso.";
const FORM_ERROR_MESSAGE = "No pudimos enviar tu solicitud en este momento. Intentalo de nuevo o contactanos por WhatsApp.";

document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
  link.href = WHATSAPP_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const submitButton = contactForm.querySelector(".submit-button");

const validationRules = {
  name: (value) => (value.trim().length >= 3 ? "" : "Escribe tu nombre completo."),
  phone: (value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 8 ? "" : "Agrega un telefono valido para poder contactarte.";
  },
  service: (value) => (value ? "" : "Selecciona el tramite o tema que quieres revisar."),
  message: (value) => {
    if (!value.trim()) {
      return "";
    }

    return value.trim().length >= 10 ? "" : "Agrega un poco mas de detalle sobre tu caso.";
  },
};

const setStatus = (type, message) => {
  formStatus.textContent = message;
  formStatus.className = `form-status ${type ? `is-${type}` : ""}`;
};

const setFieldError = (field, message) => {
  const errorElement = contactForm.querySelector(`[data-error-for="${field.name}"]`);

  field.classList.toggle("has-error", Boolean(message));

  if (errorElement) {
    errorElement.textContent = message;
  }
};

const validateForm = () => {
  let isValid = true;

  Object.entries(validationRules).forEach(([fieldName, rule]) => {
    const field = contactForm.elements[fieldName];
    const message = rule(field.value);

    setFieldError(field, message);

    if (message) {
      isValid = false;
    }
  });

  return isValid;
};

Object.keys(validationRules).forEach((fieldName) => {
  const field = contactForm.elements[fieldName];

  field.addEventListener("input", () => {
    setFieldError(field, validationRules[fieldName](field.value));
    setStatus("", "");
  });

  field.addEventListener("blur", () => {
    setFieldError(field, validationRules[fieldName](field.value));
  });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await new Promise(resolve => setTimeout(resolve, 0));

  if (!validateForm()) {
    setStatus("error", "Revisa los campos marcados antes de enviar tu solicitud.");
    contactForm.querySelector(".has-error")?.focus();
    return;
  }

  submitButton.disabled = true;
  contactForm.classList.add("is-submitting");
  setStatus("pending", "Enviando tu solicitud de forma segura...");

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Formspree request failed");
    }

    contactForm.reset();
    setStatus("success", FORM_SUCCESS_MESSAGE);
  } catch (error) {
    setStatus("error", FORM_ERROR_MESSAGE);
  } finally {
    submitButton.disabled = false;
    contactForm.classList.remove("is-submitting");
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
  revealObserver.observe(element);
});

// Hamburguer Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

if (menuToggle && navLinks) {
  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    navLinks.classList.toggle("is-active");
    body.classList.toggle("menu-open"); // Prevent background scrolling when menu is open
  };

  menuToggle.addEventListener("click", toggleMenu);

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-active");
      body.classList.remove("menu-open");
    });
  });
}
