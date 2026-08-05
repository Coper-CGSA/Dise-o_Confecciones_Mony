// Centralized site content & brand configuration for Confecciones Mony.

export const SITE = {
  brandFull: "Confecciones Mony",
  brandShort: "Mony",
  // Full name of the profesora — used in signatures, quotes, and authorship.
  founderName: "Mónica R. Aguayo Varas",
  city: "Constitución",
  region: "Región del Maule",
  // Título profesional completo y versión compacta para espacios reducidos.
  profession: "Profesional en Diseño y Confección de Vestuario",
  professionShort: "Profesional en Vestuario",
  yearsExperience: "+28 años de experiencia",
  whatsappNumber: "+56 9 8197 2791",
  whatsappRaw: "56981972791",
  email: "mony.a.varas@gmail.com",
  facebookUrl: "https://web.facebook.com/confecciones.mony.2025",
  facebookLabel: "Confecciones Mony",
} as const;

export function waLink(message?: string) {
  const text = encodeURIComponent(
    message ??
      "¡Hola Mony! Quiero coordinar mi primera clase de costura 🧵 ¿Qué disponibilidad tienes?"
  );
  return `https://wa.me/${SITE.whatsappRaw}?text=${text}`;
}

// Honest social proof — no fabricated testimonials (per brand brief, real ones
// come later). Stated as a credible, defensible claim based on 28+ years teaching.
export const SOCIAL_PROOF: { stat: string; label: string }[] = [
  { stat: "+28", label: "años enseñando a coser" },
  { stat: "1 a 1", label: "clases solo para ti" },
  { stat: "100%", label: "presencial en Constitución" },
];

// Class examples (open list, not closed)
// Orden solicitado por Mony: 1, 3, 2, 6, 4, 5, 7
export const CLASS_EXAMPLES: string[] = [
  "Iniciación a la costura (desde cero)", // 1
  "Patronaje (Moldaje y corte)", // 3
  "Confección de prendas", // 2
  "Perfeccionamiento para quienes ya saben coser", // 6
  "Arreglos y reparaciones de ropa", // 4
  "Costura para niño y adulto", // 5
  "Costura orientada a emprendimiento", // 7
];

// Logros / técnicas que se pueden aprender — tono motivacional con nomenclatura del rubro.
// Se muestra en la sección de contacto para enganchar y aterrizar lo que se logra al tomar clases.
export const ACHIEVEMENTS: string[] = [
  "Realizar bastas y bastilla prolija",
  "Confeccionar una prenda desde cero, desde el molde hasta el acabado",
  "Dominar costuras básica, media y avanzada",
  "Hacer ojales y colocar cierres sin miedo",
  "Manejar entretelas para dar cuerpo y forma",
  "Fileteado y sobrehilado profesional",
  "Descoser, ajustar y corregir como una pro",
  "Patronaje (moldaje y corte) a tu medida",
  "Arreglos y reparaciones para alargar la vida de tu ropa",
  "Costura para emprender y vender",
];

// Brand credentials / trust elements
export const CREDENTIALS: { title: string; detail: string }[] = [
  {
    title: "Profesional en Diseño y Confección de Vestuario",
    detail: "Formación profesional en Santiago, graduada con máxima excelencia.",
  },
  {
    title: "+28 años de experiencia",
    detail: "En confección, diseño y docencia de la costura.",
  },
  {
    title: "Ex profesora jefe de vestuario",
    detail: "Instituto Politécnico, por más de 5 años.",
  },
  {
    title: "Cursos a nivel nacional",
    detail: "Diseño, confección y costura en distintas zonas del país.",
  },
  {
    title: "Diseñadora en desfiles de moda",
    detail: "Participación como diseñadora en pasarelas y desfiles.",
  },
];
