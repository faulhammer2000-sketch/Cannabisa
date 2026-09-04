/**
 * CANABISA — Multilingual Translation System
 * Supports: English (default), Thai, Arabic
 */

export type Language = "en" | "th" | "ar";

export const translations = {
  // ─── Navigation ───────────────────────────────────────────────────────────
  nav: {
    home: {
      en: "Home",
      th: "หน้าแรก",
      ar: "الرئيسية",
    },
    experience: {
      en: "Experience",
      th: "ประสบการณ์",
      ar: "التجربة",
    },
    products: {
      en: "Products",
      th: "ผลิตภัณฑ์",
      ar: "المنتجات",
    },
    lounge: {
      en: "Lounge",
      th: "เลานจ์",
      ar: "الصالة",
    },
    gallery: {
      en: "Gallery",
      th: "แกลเลอรี",
      ar: "معرض الصور",
    },
    visit: {
      en: "Visit",
      th: "เยี่ยมชม",
      ar: "زيارة",
    },
    comeSayHi: {
      en: "Come Say Hi",
      th: "มาทักทายกัน",
      ar: "تعال لزيارتنا",
    },
  },

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: {
      en: "PATONG · PHUKET · THAILAND",
      th: "ป่าตอง · ภูเก็ต · ประเทศไทย",
      ar: "باتونج · فوكيت · تايلاند",
    },
    headline: {
      en: "YOUR FRIEND'S HOUSE,\nBUT A LITTLE BETTER.",
      th: "บ้านเพื่อนของคุณ\nแต่ดีกว่านิดหน่อย",
      ar: "منزل صديقك،\nلكن أفضل قليلاً.",
    },
    description: {
      en: "A relaxed cannabis shop, social lounge and late-night hangout in the heart of Patong.",
      th: "ร้านกัญชาบรรยากาศสบายๆ เลานจ์สังสรรค์ และที่พักผ่อนยามดึก ใจกลางป่าตอง",
      ar: "متجر قنب مريح، صالة اجتماعية وملتقى ليلي في قلب باتونج.",
    },
    cta1: {
      en: "Explore the Experience",
      th: "สำรวจประสบการณ์",
      ar: "استكشف التجربة",
    },
    cta2: {
      en: "Come Say Hi",
      th: "มาทักทายกัน",
      ar: "تعال لزيارتنا",
    },
    scrollIndicator: {
      en: "Scroll to explore",
      th: "เลื่อนลงเพื่อสำรวจ",
      ar: "مرر للاستكشاف",
    },
  },

  // ─── Brand Introduction ───────────────────────────────────────────────────
  brandIntro: {
    headline: {
      en: "NO PRESSURE.\nJUST GOOD VIBES.",
      th: "ไม่มีการกดดัน\nแค่บรรยากาศดีๆ",
      ar: "بدون ضغوط.\nأجواء جيدة فقط.",
    },
    description: {
      en: "This is the kind of place where you can walk in, sit down, have a chat and feel comfortable from the first minute.\n\nGood-quality products, fair prices and honest recommendations — without anyone pushing you to buy anything.",
      th: "นี่คือที่ๆ คุณสามารถเดินเข้ามา นั่งลง คุยกัน และรู้สึกสบายใจตั้งแต่นาทีแรก\n\nผลิตภัณฑ์คุณภาพดี ราคายุติธรรม และคำแนะนำที่จริงใจ — โดยไม่มีใครบังคับให้คุณซื้ออะไรเลย",
      ar: "هذا هو نوع المكان الذي يمكنك الدخول إليه، الجلوس، والدردشة والشعور بالراحة منذ الدقيقة الأولى.\n\nمنتجات عالية الجودة، أسعار عادلة وتوصيات صادقة — دون أن يضغط عليك أحد لشراء أي شيء.",
    },
    highlight: {
      en: "COME FOR THE PRODUCTS.\nSTAY FOR THE PEOPLE.",
      th: "มาเพื่อผลิตภัณฑ์\nอยู่เพราะคน",
      ar: "تعال للمنتجات.\nابق من أجل الناس.",
    },
  },

  // ─── Product Experience ───────────────────────────────────────────────────
  products: {
    headline: {
      en: "GOOD QUALITY.\nFAIR PRICES.",
      th: "คุณภาพดี\nราคายุติธรรม",
      ar: "جودة عالية.\nأسعار عادلة.",
    },
    description: {
      en: "Choose from a variety of quality products at fair, accessible prices.",
      th: "เลือกจากผลิตภัณฑ์คุณภาพหลากหลาย ในราคาที่ยุติธรรมและเข้าถึงได้",
      ar: "اختر من بين مجموعة متنوعة من المنتجات عالية الجودة بأسعار عادلة ومتاحة.",
    },
    categories: {
      flower: {
        en: "Flower",
        th: "ดอกกัญชา",
        ar: "زهور",
      },
      accessories: {
        en: "Accessories",
        th: "อุปกรณ์เสริม",
        ar: "إكسسوارات",
      },
      selected: {
        en: "Selected Products",
        th: "สินค้าพิเศษ",
        ar: "منتجات مختارة",
      },
      drinks: {
        en: "Drinks",
        th: "เครื่องดื่ม",
        ar: "مشروبات",
      },
    },
  },

  // ─── No-Pressure Service ──────────────────────────────────────────────────
  noPressure: {
    headline: {
      en: "ASK ANYTHING.\nWE'LL KEEP IT SIMPLE.",
      th: "ถามอะไรก็ได้\nเราจะอธิบายให้เข้าใจง่าย",
      ar: "اسأل عن أي شيء.\nسنبقيها بسيطة.",
    },
    description: {
      en: "Our recommendations are relaxed, honest and personal.\n\nTell us what you like, ask questions, or simply come in for a chat.\n\nNo pressure. No complicated sales talk.",
      th: "คำแนะนำของเราเป็นกันเอง ซื่อสัตย์ และเป็นส่วนตัว\n\nบอกเราว่าคุณชอบอะไร ถามคำถาม หรือแค่เข้ามาคุยกัน\n\nไม่มีการกดดัน ไม่มีการขายแบบซับซ้อน",
      ar: "توصياتنا مريحة وصادقة وشخصية.\n\nأخبرنا بما تحب، اطرح الأسئلة، أو ببساطة تعال للدردشة.\n\nبدون ضغوط. بدون كلام مبيعات معقد.",
    },
  },

  // ─── Lounge Experience ────────────────────────────────────────────────────
  lounge: {
    headline: {
      en: "STAY A LITTLE LONGER.",
      th: "อยู่ต่อสักหน่อย",
      ar: "ابق لفترة أطول قليلاً.",
    },
    description: {
      en: "Some nights are better when you don't have to rush anywhere.\n\nGrab a drink, sit down, talk, meet new people and enjoy the atmosphere.",
      th: "บางคืนก็ดีกว่าเมื่อคุณไม่ต้องรีบไปไหน\n\nหยิบเครื่องดื่ม นั่งลง คุยกัน พบปะผู้คนใหม่ๆ และเพลิดเพลินกับบรรยากาศ",
      ar: "بعض الليالي أفضل عندما لا تضطر للاستعجال إلى أي مكان.\n\nاحصل على مشروب، اجلس، تحدث، قابل أشخاصًا جددًا واستمتع بالأجواء.",
    },
    features: {
      atmosphere: {
        en: "Late-night atmosphere",
        th: "บรรยากาศยามดึก",
        ar: "أجواء ليلية",
      },
      drinks: {
        en: "Cold drinks",
        th: "เครื่องดื่มเย็นๆ",
        ar: "مشروبات باردة",
      },
      conversations: {
        en: "Friendly conversations",
        th: "การสนทนาที่เป็นมิตร",
        ar: "محادثات ودية",
      },
      vibes: {
        en: "Good vibes",
        th: "บรรยากาศดีๆ",
        ar: "أجواء جيدة",
      },
    },
  },

  // ─── Private Events ───────────────────────────────────────────────────────
  events: {
    headline: {
      en: "MAKE IT YOUR NIGHT.",
      th: "ทำให้เป็นคืนของคุณ",
      ar: "اجعلها ليلتك.",
    },
    description: {
      en: "Planning a birthday, private party, celebration or casual get-together?\n\nTalk to us about hosting your group at the shop.",
      th: "กำลังวางแผนงานวันเกิด ปาร์ตี้ส่วนตัว งานฉลอง หรือการพบปะสังสรรค์?\n\nคุยกับเราเกี่ยวกับการจัดงานกลุ่มของคุณที่ร้าน",
      ar: "تخطط لعيد ميلاد، حفلة خاصة، احتفال أو لقاء غير رسمي؟\n\nتحدث معنا حول استضافة مجموعتك في المتجر.",
    },
    cta: {
      en: "Ask About Events",
      th: "สอบถามเกี่ยวกับอีเวนท์",
      ar: "اسأل عن الفعاليات",
    },
  },

  // ─── Stack Cards ──────────────────────────────────────────────────────────
  stackCards: {
    goodProducts: {
      en: "GOOD PRODUCTS",
      th: "ผลิตภัณฑ์ดี",
      ar: "منتجات جيدة",
    },
    fairPrices: {
      en: "FAIR PRICES",
      th: "ราคายุติธรรม",
      ar: "أسعار عادلة",
    },
    friendlyPeople: {
      en: "FRIENDLY PEOPLE",
      th: "คนเป็นมิตร",
      ar: "أشخاص ودودون",
    },
    lateNight: {
      en: "LATE-NIGHT VIBES",
      th: "บรรยากาศยามดึก",
      ar: "أجواء ليلية",
    },
    privateGatherings: {
      en: "PRIVATE GATHERINGS",
      th: "งานส่วนตัว",
      ar: "تجمعات خاصة",
    },
  },

  // ─── Gallery ──────────────────────────────────────────────────────────────
  gallery: {
    headline: {
      en: "COME SEE IT FOR YOURSELF.",
      th: "มาดูด้วยตัวคุณเอง",
      ar: "تعال لترى بنفسك.",
    },
    imageNumber: {
      en: "Image",
      th: "รูปที่",
      ar: "صورة",
    },
  },

  // ─── Owner Section ────────────────────────────────────────────────────────
  owner: {
    headline: {
      en: "THE OWNER WILL PROBABLY\nEND UP TALKING TO YOU.",
      th: "เจ้าของร้านอาจจะมา\nคุยกับคุณเอง",
      ar: "المالك على الأرجح\nسينتهي به الأمر بالتحدث معك.",
    },
    description: {
      en: "The best part of the shop isn't just what's on the shelves.\n\nIt's the conversations.\n\nThe owner is friendly with everyone, happy to recommend something, have a laugh, and sometimes even give you a better deal when the conversation goes well.",
      th: "สิ่งที่ดีที่สุดของร้านไม่ใช่แค่สินค้าบนชั้นวาง\n\nแต่เป็นบทสนทนา\n\nเจ้าของเป็นมิตรกับทุกคน ยินดีแนะนำ หัวเราะด้วยกัน และบางครั้งก็ให้ราคาพิเศษเมื่อคุยกันรู้เรื่อง",
      ar: "أفضل جزء في المتجر ليس فقط ما هو على الرفوف.\n\nإنها المحادثات.\n\nالمالك ودود مع الجميع، سعيد بالتوصية بشيء ما، والضحك، وأحيانًا حتى يعطيك صفقة أفضل عندما تسير المحادثة بشكل جيد.",
    },
  },

  // ─── Visit / Location ─────────────────────────────────────────────────────
  visit: {
    headline: {
      en: "COME FIND US IN PATONG.",
      th: "มาหาเราที่ป่าตอง",
      ar: "تعال لتجدنا في باتونج.",
    },
    description: {
      en: "Drop by, have a look around, grab a drink and say hello.\n\nYou'll understand the atmosphere once you're here.",
      th: "แวะมา ดูรอบๆ หยิบเครื่องดื่ม และทักทายกัน\n\nคุณจะเข้าใจบรรยากาศเมื่อคุณมาที่นี่",
      ar: "تعال، ألق نظرة حولك، احصل على مشروب وقل مرحباً.\n\nستفهم الأجواء بمجرد وصولك إلى هنا.",
    },
    cta: {
      en: "Get Directions",
      th: "รับเส้นทาง",
      ar: "احصل على الاتجاهات",
    },
    address: {
      en: "Address",
      th: "ที่อยู่",
      ar: "العنوان",
    },
    phone: {
      en: "Phone",
      th: "โทรศัพท์",
      ar: "هاتف",
    },
    hours: {
      en: "Hours",
      th: "เวลาทำการ",
      ar: "ساعات العمل",
    },
  },

  // ─── Footer ───────────────────────────────────────────────────────────────
  footer: {
    tagline: {
      en: "Cannabis · Drinks · Social Lounge",
      th: "กัญชา · เครื่องดื่ม · เลานจ์สังสรรค์",
      ar: "قنب · مشروبات · صالة اجتماعية",
    },
    location: {
      en: "Patong, Phuket, Thailand",
      th: "ป่าตอง ภูเก็ต ประเทศไทย",
      ar: "باتونج، فوكيت، تايلاند",
    },
    privacy: {
      en: "Privacy",
      th: "ความเป็นส่วนตัว",
      ar: "الخصوصية",
    },
    terms: {
      en: "Terms",
      th: "ข้อกำหนด",
      ar: "الشروط",
    },
    responsible: {
      en: "Responsible Use",
      th: "การใช้งานอย่างรับผิดชอบ",
      ar: "الاستخدام المسؤول",
    },
    copyright: {
      en: "All rights reserved.",
      th: "สงวนลิขสิทธิ์",
      ar: "جميع الحقوق محفوظة.",
    },
    responsibleNotice: {
      en: "Products and activities are subject to applicable local laws and regulations. Please consume responsibly and follow all applicable rules.",
      th: "ผลิตภัณฑ์และกิจกรรมอยู่ภายใต้กฎหมายและข้อบังคับท้องถิ่นที่เกี่ยวข้อง โปรดบริโภคอย่างรับผิดชอบและปฏิบัติตามกฎที่เกี่ยวข้องทั้งหมด",
      ar: "المنتجات والأنشطة تخضع للقوانين واللوائح المحلية المعمول بها. يرجى الاستهلاك بمسؤولية واتباع جميع القواعد المعمول بها.",
    },
  },

  // ─── Age Verification ─────────────────────────────────────────────────────
  ageGate: {
    headline: {
      en: "ARE YOU 20 OR OLDER?",
      th: "คุณอายุ 20 ปีขึ้นไปหรือไม่?",
      ar: "هل عمرك 20 عامًا أو أكثر؟",
    },
    description: {
      en: "You must be of legal age to enter this website.",
      th: "คุณต้องมีอายุตามกฎหมายเพื่อเข้าสู่เว็บไซต์นี้",
      ar: "يجب أن تكون في السن القانوني لدخول هذا الموقع.",
    },
    yes: {
      en: "Yes, I am 20+",
      th: "ใช่ ฉันอายุ 20 ปีขึ้นไป",
      ar: "نعم، أنا 20 عامًا أو أكثر",
    },
    no: {
      en: "No, I am not",
      th: "ไม่ ฉันยังไม่ถึง",
      ar: "لا، أنا لست كذلك",
    },
    exitMessage: {
      en: "You must be 20 or older to access this website.",
      th: "คุณต้องมีอายุ 20 ปีขึ้นไปจึงจะเข้าถึงเว็บไซต์นี้ได้",
      ar: "يجب أن يكون عمرك 20 عامًا أو أكثر للوصول إلى هذا الموقع.",
    },
  },

  // ─── Common / UI ──────────────────────────────────────────────────────────
  common: {
    close: {
      en: "Close",
      th: "ปิด",
      ar: "إغلاق",
    },
    next: {
      en: "Next",
      th: "ถัดไป",
      ar: "التالي",
    },
    previous: {
      en: "Previous",
      th: "ก่อนหน้า",
      ar: "السابق",
    },
    learnMore: {
      en: "Learn More",
      th: "เรียนรู้เพิ่มเติม",
      ar: "اعرف المزيد",
    },
    contact: {
      en: "Contact",
      th: "ติดต่อ",
      ar: "اتصل",
    },
  },

  // ─── WhatsApp ─────────────────────────────────────────────────────────────
  whatsapp: {
    message: {
      en: "Chat with us on WhatsApp",
      th: "แชทกับเราใน WhatsApp",
      ar: "تحدث معنا على واتساب",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations;
