/**
 * ============================================================
 *  CONFIG.JS — Sua "API" de configuração
 *  Edite este arquivo para personalizar o site completamente.
 *  Não precisa tocar no index.html ou i18n.js para mudanças básicas.
 * ============================================================
 */

const SITE_CONFIG = {

  /* ----------------------------------------------------------
     APARÊNCIA
  ---------------------------------------------------------- */
  theme: {
    defaultMode: "light",          // "light" | "dark"
    accentColor: "#6d28d9",        // roxo principal (hex)
    accentDeep:  "#3b0066",        // roxo escuro
    accentSoft:  "#8b5cf6",        // roxo claro
    splitAngle:  "118deg",         // ângulo da divisória do fundo
    splitRatio:  "54%",            // onde o fundo divide (branco/roxo)
  },

  /* ----------------------------------------------------------
     IDIOMA
  ---------------------------------------------------------- */
  defaultLang: "pt-BR",           // idioma inicial: "pt-BR" | "en" | "es"
  showLangSelector: true,          // mostra o seletor de idioma?

  /* ----------------------------------------------------------
     PERFIL
  ---------------------------------------------------------- */
  profile: {
    name:    "Matheus Jesus",
    handle:  "@theuzin.txt.edits",
    avatar:  "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8a7bf120ac6d0bd56c91e8cfd4a29f43~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=785df04f&x-expires=1772546400&x-signature=y%2Fszl9h0FRkdqnshM83Gsx8NSOE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my",
    verified: true,

    // Bio traduzida por idioma (use as chaves de i18n.js ou texto direto)
    bio: {
      "pt-BR": "📚 E-books práticos para você <strong>transformar sua vida</strong> e conquistar seus objetivos.",
      "en":    "📚 Practical e-books to help you <strong>transform your life</strong> and achieve your goals.",
      "es":    "📚 E-books prácticos para <strong>transformar tu vida</strong> y alcanzar tus objetivos.",
    },
  },

  /* ----------------------------------------------------------
     STATS (números do topo)
  ---------------------------------------------------------- */
  stats: [
    { value: "6",    labelKey: "stat_ebooks"  },
    { value: "4.9★", labelKey: "stat_rating"  },
    { value: "100%", labelKey: "stat_secure"  },
  ],

  /* ----------------------------------------------------------
     GRUPOS DE PRODUTOS
     Cada grupo tem: icon, titleKey (chave de tradução) e products[]
  ---------------------------------------------------------- */
  groups: [
    {
      icon:     "🚬",
      titleKey: "group_smoking",          // chave em i18n.js
      products: [
        {
          icon:    "📖",
          titleKey: "prod_smoking_title",
          subtitleKey: "subtitle_ebook",
          price:   "R$9,90",
          url:     "https://pay.kiwify.com.br/tRcJ1Na",
          premium: false,
        },
        {
          icon:    "✨",
          titleKey: "prod_smoking_premium_title",
          subtitleKey: "subtitle_premium",
          price:   "R$15,00",
          url:     "https://pay.kiwify.com.br/2K1MEez",
          premium: true,
        },
      ],
    },
    {
      icon:     "🧠",
      titleKey: "group_lust",
      products: [
        {
          icon:    "📖",
          titleKey: "prod_lust_title",
          subtitleKey: "subtitle_ebook",
          price:   "R$9,90",
          url:     "https://pay.kiwify.com.br/BgT5ynv",
          premium: false,
        },
        {
          icon:    "✨",
          titleKey: "prod_lust_premium_title",
          subtitleKey: "subtitle_premium",
          price:   "R$15,00",
          url:     "https://pay.kiwify.com.br/xoPGyul",
          premium: true,
        },
      ],
    },
    {
      icon:     "💼",
      titleKey: "group_marketing",
      products: [
        {
          icon:    "📖",
          titleKey: "prod_marketing_title",
          subtitleKey: "subtitle_ebook",
          price:   "R$9,90",
          url:     "https://pay.kiwify.com.br/QADsAL7",
          premium: false,
        },
        {
          icon:    "✨",
          titleKey: "prod_marketing_premium_title",
          subtitleKey: "subtitle_premium",
          price:   "R$15,00",
          url:     "https://pay.kiwify.com.br/H0tbbgU",
          premium: true,
        },
      ],
    },

    // ➕ Para adicionar um novo grupo, copie o bloco abaixo e descomente:
    // {
    //   icon:     "🎯",
    //   titleKey: "group_novo",          // adicione também em i18n.js
    //   products: [
    //     {
    //       icon:    "📖",
    //       titleKey: "prod_novo_title",
    //       subtitleKey: "subtitle_ebook",
    //       price:   "R$9,90",
    //       url:     "https://pay.kiwify.com.br/SEU_LINK",
    //       premium: false,
    //     },
    //   ],
    // },
  ],

  /* ----------------------------------------------------------
     REDES SOCIAIS
  ---------------------------------------------------------- */
  socials: [
    { icon: "📸", label: "Instagram", url: "https://instagram.com/theuzin.txt.edits" },
    { icon: "🎵", label: "TikTok",    url: "https://tiktok.com/@theuzin.txt01"       },
    // { icon: "▶️", label: "YouTube",   url: "https://youtube.com/@seuperfil"         },
  ],

  /* ----------------------------------------------------------
     RODAPÉ
  ---------------------------------------------------------- */
  footer: {
    madeBy:       "ducalofc",
    paymentLabel: "Kiwify",
    paymentUrl:   "https://kiwify.com.br",
  },

};
