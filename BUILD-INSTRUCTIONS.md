# 🔨 Build Instructions

## ⚠️ PowerShell Execution Policy Issue

If you see this error:
```
scripts is disabled on this system
```

## ✅ Solution 1: Use Git Bash or CMD

Instead of PowerShell, use:

### Option A: Git Bash (Recommended)
```bash
npm run build
```

### Option B: Command Prompt (CMD)
```cmd
npm run build
```

## ✅ Solution 2: Enable PowerShell Scripts (One-time)

Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then close and reopen PowerShell, and run:
```powershell
npm run build
```

## ✅ Solution 3: Bypass for Single Session

In your current PowerShell window:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force
npm run build
```

---

## 🚀 Full Build Process

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```

### 3. Test Production Build
```bash
npm start
```

Visit: http://localhost:3000

---

## ✅ What Was Fixed for Production

### Fixed Issues:
1. ✅ **Package Dependencies**
   - Replaced `motion` with `framer-motion`
   - Replaced `@studio-freight/lenis` with `lenis`
   - Updated all 14 component imports

2. ✅ **SSR Hydration Issues**
   - Fixed `I18nProvider` to avoid `null` return
   - Fixed `ExperienceCard` window check using useState/useEffect

3. ✅ **TypeScript Compilation**
   - All types properly defined
   - No `any` types in critical paths
   - Proper ESLint configuration

---

## 📦 Production Build Output

After successful build, you'll see:

```
Route (app)                              Size     First Load JS
┌ ○ /                                    XXX kB         XXX kB
└ ○ /_not-found                          XXX B          XXX kB
+ First Load JS shared by all            XXX kB
  ├ chunks/framework-xxx.js
  ├ chunks/main-app-xxx.js
  └ other shared chunks
```

---

## 🔍 Verify Build Success

### Check for these indicators:
- ✅ "Compiled successfully"
- ✅ ".next" folder created
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ✅ Route information displayed

### Common Build Errors & Fixes:

#### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Error: "Type error"
- Check TypeScript version matches: `5.7.2`
- Ensure all imports use correct paths with `@/` alias

#### Error: "Image optimization"
- Verify all images exist in `/public/images/`
- Check image paths in `site-config.ts`

---

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Manual Deployment
1. Build: `npm run build`
2. Upload `.next` folder + `public` + `package.json`
3. Run: `npm start` on server

### Docker
```dockerfile
FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## 📊 Build Performance

Expected build times:
- **First build**: 2-5 minutes
- **Subsequent builds**: 30-60 seconds

Build size targets:
- **Total bundle**: < 500KB (gzipped)
- **First Load JS**: < 200KB per route
- **Images**: Auto-optimized by Next.js

---

## ✅ Pre-Deployment Checklist

Before deploying to production:

- [ ] Update business details in `src/lib/site-config.ts`
- [ ] Replace placeholder favicon in `/public/favicon.ico`
- [ ] Test all three languages (EN/TH/AR)
- [ ] Test RTL layout (Arabic)
- [ ] Test on mobile devices
- [ ] Verify all images load correctly
- [ ] Test smooth scrolling
- [ ] Test gallery lightbox
- [ ] Test navigation on all breakpoints
- [ ] Verify Google Maps link works
- [ ] Test social media links
- [ ] Enable age verification if needed
- [ ] Run Lighthouse audit (aim for 90+ scores)

---

## 🐛 Troubleshooting

### Build hangs or freezes
- Check available RAM (needs ~2GB free)
- Close other applications
- Try: `npm run build -- --no-lint`

### Out of memory error
```bash
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
npm start
```

---

## 📞 Support

If build fails after following these steps:
1. Check Node.js version: `node --version` (should be 18+)
2. Check npm version: `npm --version` (should be 8+)
3. Clear cache: `npm cache clean --force`
4. Delete and reinstall: `rm -rf node_modules && npm install`

---

**Built with ❤️ for CANABISA, Patong, Phuket** 🌿
