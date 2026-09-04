# CANABISA — Premium Cannabis & Social Lounge Website

A production-quality, multilingual single-page website for a premium cannabis shop and social lounge in **Patong, Phuket, Thailand**.

---

## ✨ Features

- 🌍 **Multilingual Support**: English (default), Thai, Arabic with full RTL support
- 🎨 **Premium Design**: Luxury boutique meets relaxed lounge aesthetic
- ⚡ **GSAP Animations**: Scroll-triggered reveals, parallax effects, stack cards
- 📱 **Fully Responsive**: Mobile-first design, optimized for all devices
- 🎭 **Motion Animations**: Smooth micro-interactions using Motion (Framer Motion)
- 🖼️ **Gallery with Lightbox**: Masonry grid with keyboard navigation
- 🎯 **Smooth Scrolling**: Lenis smooth scroll implementation
- ♿ **Accessible**: WCAG guidelines, keyboard navigation, semantic HTML
- 🚀 **Performance Optimized**: Next.js 15, Image optimization, lazy loading

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.0 (App Router)
- **Language**: TypeScript 5.7.2
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: GSAP 3.12.5 + Framer Motion 11.15.0
- **Smooth Scroll**: Lenis 1.1.17
- **Fonts**: Cormorant Garamond, Manrope, Noto Sans Arabic

---

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🎨 Design System

### Colors
- **Deep Black**: `#050505`
- **Charcoal**: `#0B0B0B`
- **Warm Cream**: `#F4F0E8`
- **Cream Dark**: `#E8E0D2`
- **Muted Olive**: `#59664A`
- **Forest Green**: `#1D2A20`
- **Champagne Gold**: `#C8A96B`

### Typography
- **Display/Headings**: Cormorant Garamond (Serif)
- **Body/Interface**: Manrope (Sans-serif)
- **Arabic**: Noto Sans Arabic

---

## 🌐 Language System

The website supports three languages:

1. **English** (default)
2. **ไทย** (Thai)
3. **العربية** (Arabic with RTL)

### How to Update Translations

Edit `src/lib/i18n/translations.ts` to update text content.

### How to Change Default Language

In `src/lib/site-config.ts`, update:
```typescript
seo: {
  defaultLang: "en", // Change to "th" or "ar"
}
```

---

## ⚙️ Configuration

### Business Information

Update business details in `src/lib/site-config.ts`:

```typescript
export const siteConfig = {
  name: "CANABISA",
  location: {
    area: "Patong",
    city: "Phuket",
    country: "Thailand",
    address: "YOUR ADDRESS HERE",
    phone: "+66 XX XXX XXXX",
  },
  maps: {
    directionsUrl: "https://maps.app.goo.gl/...",
  },
  social: {
    instagram: "https://instagram.com/...",
    facebook: "https://facebook.com/...",
  },
};
```

### Images

Replace images in `/public/images/` directory. The site expects 11 images (hero, interior, products, lounge, owner, night, drinks, party, detail, lifestyle, gallery11).

Update image mappings in `src/lib/site-config.ts` if needed.

---

## 📱 Sections

1. **Navigation** — Sticky nav with language switcher
2. **Hero** — Full-screen with GSAP animations
3. **Brand Introduction** — Value proposition
4. **Product Experience** — Product categories
5. **No-Pressure Service** — Service philosophy
6. **Lounge Experience** — Social atmosphere
7. **Private Events** — Bookings and gatherings
8. **Stack Cards** — Signature scroll-pinning animation
9. **Gallery** — Masonry grid with lightbox
10. **Owner** — Personal touch
11. **Visit** — Location and contact info
12. **Footer** — Links, social, legal

---

## 🔐 Age Verification

Age gate is included but **disabled by default**.

To enable, edit `src/components/age-gate/AgeVerification.tsx`:

```typescript
const [isVerified, setIsVerified] = useState(false); // Enable age gate
```

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the project:
```bash
npm run build
```

Deploy the `.next` folder to any Node.js hosting platform.

---

## 📄 License

Private project for CANABISA, Patong, Phuket.

---

## 🙏 Credits

Built with passion for premium hospitality and cannabis culture.

**Location**: Patong, Phuket, Thailand  
**Concept**: "ร้านกัญชาบรรยากาศสบายๆ เหมือนแวะมานั่งเล่นบ้านเพื่อน"

---

## 📞 Support

For questions or support, contact the owner directly.
