/**
 * ============================================================
 *  I18N.JS — Traduções do site
 *  Adicione ou edite textos aqui para cada idioma.
 *  Para adicionar um novo idioma: copie o bloco "en" e traduza.
 * ============================================================
 */

const I18N = {

  /* ──────────────────────────────────────────────
     🇧🇷 PORTUGUÊS BRASILEIRO
  ────────────────────────────────────────────── */
  "pt-BR": {
    // Idioma
    lang_name:   "PT",
    lang_full:   "Português",

    // Pill de segurança
    pill_secure: "🔒 Pagamento 100% seguro",

    // Stats
    stat_ebooks: "E-books",
    stat_rating: "Avaliação",
    stat_secure: "Seguro",

    // Subtítulos de card
    subtitle_ebook:   "E-book completo · PDF",
    subtitle_premium: "Conteúdo exclusivo + bônus",

    // Badge
    badge_premium: "⭐ Premium",

    // Grupos
    group_smoking:   "Pare de Fumar",
    group_lust:      "Vício da Luxúria",
    group_marketing: "Marketing Digital",

    // Produtos — Parar de Fumar
    prod_smoking_title:         "Pare de fumar em 7 dias",
    prod_smoking_premium_title: "Pare de fumar em 7 dias — Premium",

    // Produtos — Luxúria
    prod_lust_title:         "Pare de vez com o vício da Luxúria",
    prod_lust_premium_title: "Vício da Luxúria — Versão Premium",

    // Produtos — Marketing Digital
    prod_marketing_title:         "Aprenda a trabalhar com Marketing Digital",
    prod_marketing_premium_title: "Marketing Digital de vez — Premium",

    // Seção social
    section_follow: "Me siga",

    // Rodapé
    footer_made:    "Feito por",
    footer_payment: "Pagamento seguro via",
  },


  /* ──────────────────────────────────────────────
     🇺🇸 ENGLISH
  ────────────────────────────────────────────── */
  "en": {
    lang_name:   "EN",
    lang_full:   "English",

    pill_secure: "🔒 100% Secure Payment",

    stat_ebooks: "E-books",
    stat_rating: "Rating",
    stat_secure: "Secure",

    subtitle_ebook:   "Full e-book · PDF",
    subtitle_premium: "Exclusive content + bonuses",

    badge_premium: "⭐ Premium",

    group_smoking:   "Quit Smoking",
    group_lust:      "Lust Addiction",
    group_marketing: "Digital Marketing",

    prod_smoking_title:         "Quit Smoking in 7 Days",
    prod_smoking_premium_title: "Quit Smoking in 7 Days — Premium",

    prod_lust_title:         "Break Free from Lust Addiction",
    prod_lust_premium_title: "Lust Addiction — Premium Edition",

    prod_marketing_title:         "Learn Digital Marketing",
    prod_marketing_premium_title: "Digital Marketing Mastery — Premium",

    section_follow: "Follow me",

    footer_made:    "Made by",
    footer_payment: "Secure payment via",
  },


  /* ──────────────────────────────────────────────
     🇪🇸 ESPAÑOL
  ────────────────────────────────────────────── */
  "es": {
    lang_name:   "ES",
    lang_full:   "Español",

    pill_secure: "🔒 Pago 100% seguro",

    stat_ebooks: "E-books",
    stat_rating: "Valoración",
    stat_secure: "Seguro",

    subtitle_ebook:   "E-book completo · PDF",
    subtitle_premium: "Contenido exclusivo + bonos",

    badge_premium: "⭐ Premium",

    group_smoking:   "Deja de Fumar",
    group_lust:      "Adicción a la Lujuria",
    group_marketing: "Marketing Digital",

    prod_smoking_title:         "Deja de fumar en 7 días",
    prod_smoking_premium_title: "Deja de fumar en 7 días — Premium",

    prod_lust_title:         "Supera la adicción a la lujuria",
    prod_lust_premium_title: "Adicción a la Lujuria — Edición Premium",

    prod_marketing_title:         "Aprende Marketing Digital",
    prod_marketing_premium_title: "Marketing Digital — Versión Premium",

    section_follow: "Sígueme",

    footer_made:    "Hecho por",
    footer_payment: "Pago seguro vía",
  },


  // ➕ Para adicionar um novo idioma (ex: francês), copie o bloco acima
  // e adicione também no array `availableLangs` abaixo.
};

/** Idiomas disponíveis no seletor (ordem de exibição) */
const AVAILABLE_LANGS = ["pt-BR", "en", "es"];
