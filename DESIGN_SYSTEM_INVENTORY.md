# Design System Inventory & Normalization Report

Generated: March 22, 2026

---

## 1. DESIGN SYSTEM FOUNDATION (from CLAUDE.md)

### Brand & Aesthetic
- **Brand Personality**: Creative + Technical + Playful
- **Visual Style**: Pixel-art inspired, retro 80s/90s computing meets modern web
- **Tone**: Skilled developer with personality—serious about craft, playful about presentation
- **Key Principle**: Playful Professionalism — all interactions intentional, animations snappy

### Design Principles
1. Playful Professionalism
2. Pixel-Perfect Polish
3. Accessible Delight
4. Unified Theme Experience
5. Clear Credibility Under the Fun

### Tech Stack
- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, CSS Variables, next-themes
- **Animations**: Framer Motion, React Type Animation
- **Shared Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (consistent across all transitions)

---

## 2. THEME SYSTEM & COLOR TOKENS

### CSS Variables (globals.css)
All pages should reference these variables via CSS custom properties:

**Light Theme**
```css
--page-bg: #4678cc        /* sky blue — main background */
--sidebar-bg: #095b05     /* forest green — sidebar/accent */
--card-bg: #d4e8fc        /* pixel white — card surfaces */
--border-color: #111111   /* pixel black — borders, text */
--accent-primary: #1bee0c /* retro green — interactive elements */
--accent-secondary: #dc780e /* orange — secondary CTA */
--text-color: #111111     /* dark pixel — primary text */
--muted-text: #6b7280     /* soft gray — secondary text */
```

**Dark Theme**
```css
--page-bg: #1B2A41        /* deep navy — main background */
--sidebar-bg: #062b11     /* dark forest — sidebar/accent */
--card-bg: #0F172A        /* midnight blue — card surfaces */
--border-color: #D1D5DB   /* pixel light — borders, text */
--accent-primary: #1bee0c /* retro green — interactive elements */
--accent-secondary: #eeaa22 /* warm amber — secondary CTA */
--text-color: #F9FAFB     /* pixel white — primary text */
--muted-text: #94A3B8     /* soft gray — secondary text */
```

---

## 3. HOMEPAGE STRUCTURE

### File: `app/page.tsx`
**Main Components**:
1. `Type` — Text animation/branding intro
2. `Hero` — Call-to-action buttons (GitHub, Resume)
3. `PlayerStats` — Gamified player profile with RPG elements

### Component Hierarchy
```
page.tsx
├── Type
├── Hero
│   └── CTAs: GitHub, Resume Download
├── PlayerStats (container)
│   ├── Profile Info (Name, Role, Type, Location, Edu)
│   ├── XPBar (Level, XP progress)
│   ├── AchievementsDisplay (badge grid)
│   ├── RPGStatsPanel (STR, INT, DEX, WIS)
│   ├── PersonalityTraits (integrity, discipline, curiosity, etc.)
│   └── ProfileInsights (strengths, weaknesses, goals, mindset)
```

### Styling Patterns
- **Terminal Reveal**: Staggered animation with delays (`terminal-reveal`, `terminal-delay-1/2/3`)
- **Layout**: Flex column, centered, max-width 5xl
- **Padding**: Responsive (`px-3 sm:px-4 md:px-8`)
- **Spacing**: Uses `mt-6`, `mt-8`, `md:mt-10` for section gaps
- **Text Color**: Uses `text-[var(--text-color)]` (design system compliant)

### Animations
- **Easing**: All animations use `cubic-bezier(0.22, 1, 0.36, 1)`
- **Stagger Pattern**:
  ```javascript
  const container = { hidden: {}, show: { staggerChildren: 0.11, delayChildren: 0.18 } }
  const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, duration: 0.42 } }
  ```

---

## 4. ABOUT PAGE STRUCTURE

### File: `app/about/page.tsx`

**Components**:
1. White card container with border-4
2. "About Me" heading (h1)
3. Bio paragraphs
4. **Technical Skills Grid** (4 columns on desktop)
   - Programming Languages
   - Web Development
   - Backend & Databases
   - Other Skills
5. PersonalityTraits (copied from PlayerStats)
6. ProfileInsights (copied from PlayerStats)

### Key Issues
- **Hardcoded Card Styling**:
  ```jsx
  className="w-full border-4 border-[var(--border-color)] bg-[var(--card-bg)] p-4"
  ```
  Should use reusable component or utility class
- **Missing Color Consistency**: Main container uses `bg-white/70` (hardcoded), should use `bg-[var(--card-bg)]/70`
- **Manual Borders**: `border-4` hardcoded, should be consistent token
- **Duplicate Components**: PersonalityTraits and ProfileInsights copied from homepage—should be single source

---

## 5. PROJECTS PAGE STRUCTURE

### File: `app/projects/page.tsx`

**Components**:
1. **Header Section**:
   - Title "My Projects"
   - Responsive border-4 card container
2. **Search & Filter Controls**:
   - Text search input
   - Sort dropdowns (Recently Updated / Recently Created)
   - Checkbox for showing/hiding forks
3. **Projects Grid**:
   - `QuestCard` components (4 per row on desktop)
   - Fetches from GitHub API
4. **Modal**: `ProjectModal` (opens on QuestCard click)

### QuestCard Styling (`app/components/game/QuestCard.tsx`)
```jsx
className="group cursor-pointer border-2 border-emerald-700 dark:border-emerald-600 
           bg-emerald-900/10 p-4 rounded-lg hover:bg-emerald-900/20 
           transition-colors h-full flex flex-col"
```
- **Issues**: 
  - Hardcoded `emerald-700` colors (not CSS variables)
  - Uses Tailwind opacity modifiers (`bg-emerald-900/10`) instead of transparent color tokens
  - No consistent border pattern with other cards

### ProjectModal Styling (`app/components/game/ProjectModal.tsx`)
- **Border**: `border-2 border-emerald-600 dark:border-emerald-500`
- **Background**: `bg-emerald-900/20 p-6 rounded-lg`
- **Issues**: Same as QuestCard—hardcoded colors, missing design system tokens

---

## 6. GAME COMPONENTS & STYLING PATTERNS

### XPBar (`app/components/game/XPBar.tsx`)
- **Colors**: Uses `emerald-500`, `emerald-400`, `emerald-600` hardcoded
- **Pattern**: Animated progress bar with glow effect
- **Issue**: Should use design system accent colors + glow token

### RPGStatsPanel (`app/components/game/RPGStatsPanel.tsx`)
- **Container**: `border-2 border-emerald-700 bg-emerald-900/20 p-4 rounded-lg`
- **Title**: `text-emerald-600 dark:text-emerald-400`
- **Stat Bar**: Shows progress with `bg-emerald-500` + glow
- **Issue**: Hardcoded emerald across all variants, not using CSS variables

### PersonalityTraits (`app/components/game/PersonalityTraits.tsx`)
- **Container**: `border-2 border-blue-700 bg-blue-900/20 p-4 rounded-lg`
- **Title**: `text-blue-600 dark:text-blue-400`
- **Stat Bars**: `bg-blue-500` with glow
- **Pattern**: 2-column grid layout
- **Issue**: Uses BLUE instead of design system colors—should be blue when used as trait system

### ProfileInsights (`app/components/game/ProfileInsights.tsx`)
- **Container**: `border-2 border-purple-700 bg-purple-900/20 p-4 rounded-lg`
- **Sections**: Personality Type, Strengths, Weaknesses, Goals, Mindset
- **Color Scheme**: Multi-color (green, orange, yellow, cyan, indigo, pink)
- **Issue**: Decorative colors (purple/green/yellow/etc.) hardcoded per section—should reference tokens

### AchievementBadge (`app/components/game/AchievementBadge.tsx`)
- **Unlocked**: `border-emerald-500 bg-emerald-900/30 shadow-lg shadow-emerald-500/50`
- **Locked**: `border-gray-500 bg-gray-900/30 opacity-50`
- **Issue**: Hardcoded emerald/gray colors

---

## 7. CONSISTENT STYLING PATTERNS

### Borders
| Pattern | Usage | Issue |
|---------|-------|-------|
| `border-4 border-[var(--border-color)]` | Page headers, main containers | ✅ Design system compliant |
| `border-2 border-emerald-700` | Game panels, cards | ❌ Hardcoded—should use CSS var |
| `border-blue-700`, `border-purple-700` | Component-specific | ❌ Not systematic |

### Cards/Containers
| Pattern | File | Issue |
|---------|------|-------|
| `border-4 bg-white/70 p-4 backdrop-blur-md dark:bg-[#0F172A]/70` | about, projects | ⚠️ Mixes hardcoding with CSS var |
| `border-2 border-emerald-700 bg-emerald-900/10 p-4 rounded-lg` | QuestCard | ❌ Hardcoded colors |
| `border-2 border-emerald-700 bg-emerald-900/20 p-4` | RPGStatsPanel | ❌ Hardcoded colors |

### Typography
| Element | Pattern | File |
|---------|---------|------|
| H1 (Section Titles) | `text-3xl font-bold text-[var(--text-color)]` | Homepage, About, Projects |
| H2 (Subsection) | `border-b-4 border-[var(--border-color)] pb-2 text-xl font-semibold` | PlayerStats, About |
| Body Text | `text-sm text-[var(--text-color)]` | Various |
| Labels | `text-xs font-bold uppercase tracking-widest` | Game components |

✅ **Compliant Pattern**: Uses `text-[var(--text-color)]`
❌ **Inconsistent**: RPGStatsPanel uses `text-white dark:text-emerald-100` (hardcoded)

### Spacing
| Context | Pattern | Files |
|---------|---------|-------|
| Main container | `mx-auto max-w-5xl px-3 pb-8 pt-24 sm:px-4` | page.tsx |
| Section gap | `mt-8 md:mt-16` | page.tsx |
| Card padding | `p-4 sm:p-6 md:p-8` | About, Projects |

### Animations
| Pattern | Files | Status |
|---------|-------|--------|
| Stagger + terminal-reveal | Homepage | ✅ Consistent |
| Easing `cubic-bezier(0.22, 1, 0.36, 1)` | All Framer Motion | ✅ Consistent |
| Hover scale + translate | QuestCard, Hero | ✅ Consistent |
| Progress bar animate width | XPBar, RPGStatsPanel | ✅ Consistent |

---

## 8. COLOR INCONSISTENCIES REQUIRING NORMALIZATION

### Game Panel Color Scheme Conflicts

**Current Approach**: Each component uses its own color theme
```
RPGStatsPanel    → Emerald (#1bee0c accent)
PersonalityTraits → Blue (#3b82f6)
ProfileInsights  → Purple (#a855f7) + multi-color sections
QuestCard        → Emerald
AchievementBadge → Emerald (unlocked), Gray (locked)
XPBar            → Emerald
```

**Problem**: Creates visual chaos. Should standardize.

### Proposed Solution

**Primary Palette for Game Components**:
```css
--game-primary: #1bee0c      /* retro green — main accent */
--game-info: #3b82f6         /* blue — informational panels */
--game-stat: #0ea5e9         /* cyan — stat bars */
--game-danger: #ef4444       /* red — warnings */
--game-success: #22c55e      /* green — achievements */
--game-warning: #f59e0b      /* amber — cautions */
```

**Panel Color Assignment** (proposal to standardize):
- **RPGStatsPanel**: Use `--game-primary` (emerald/green)
- **PersonalityTraits**: Use `--game-info` (blue)
- **ProfileInsights**: Use `--game-warning` (purple/amber) for sections
- **XPBar/Achievement**: Use `--game-success` (green)

---

## 9. COMPONENTS NEEDING IMMEDIATE NORMALIZATION

### High Priority
1. **QuestCard** — Hardcoded emerald colors → Use CSS variables
2. **ProjectModal** — Hardcoded border/bg colors → Use CSS variables
3. **RPGStatsPanel** — `text-white` hardcoded → Use `text-[var(--text-color)]`
4. **PersonalityTraits** — Blue hardcoded, should be systematic
5. **ProfileInsights** — Multi-color hardcoded values

### Medium Priority
1. **About Page** — Main container `bg-white/70` should use CSS var
2. **Duplicate Components** — PersonalityTraits/ProfileInsights copy-pasted
3. **Button Styling** — Hero CTA buttons use `emerald-800/30` (hardcoded opacity)
4. **XPBar** — Glows/shadows hardcoded, should reference tokens

### Low Priority
1. **Typography Consistency** — Some files use `text-white` instead of CSS var
2. **Border Radius** — Some use `rounded-lg`, some `rounded` (inconsistent)
3. **Responsive Classes** — Could consolidate common patterns

---

## 10. DESIGN TOKENS TO CREATE

### Suggested New CSS Variables

```css
/* Card System */
--card-border: 4px solid var(--border-color);
--card-border-sm: 2px solid var(--border-color);
--card-radius: 0.5rem;

/* Game Panel Colors */
--game-panel-bg: rgba(20, 184, 166, 0.1);
--game-panel-border: hsl(160, 74%, 39%);
--game-stat-glow: 0 0 8px rgba(16, 185, 129, 0.8);
--game-info-glow: 0 0 8px rgba(59, 130, 246, 0.8);

/* Shadows & Effects */
--shadow-sm: var(--nav-shadow);
--backdrop: backdrop-blur-md;

/* Spacing Scale */
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-10: 2.5rem;
```

---

## 11. REUSABLE COMPONENT PATTERNS TO EXTRACT

### Card Component (needed for About & Projects)
```jsx
// Should have consistent styling
<Card 
  border="4" 
  className="p-4 sm:p-6 md:p-8"
>
  Content
</Card>
```

### Game Panel Component
```jsx
<GamePanel 
  title="Character Stats"
  accentColor="emerald"  // or: "blue", "purple", etc.
>
  Content
</GamePanel>
```

### Stat Bar Component
```jsx
<StatBar 
  label="STR" 
  value={8} 
  max={10}
  glowColor="emerald"
/>
```

---

## 12. SUMMARY TABLE: CURRENT STATE VS. IDEAL STATE

| Category | Current | Issues | Ideal |
|----------|---------|--------|-------|
| **Theme System** | CSS variables in globals.css | ✅ Working | Keep as-is |
| **Main Containers** | Mix of CSS var + hardcoded | ⚠️ Inconsistent | All use CSS var |
| **Game Panels** | Hardcoded Tailwind colors | ❌ Not systematic | Color token system |
| **Typography** | Mostly CSS var, some hardcoded | ⚠️ Mixed | All use CSS var |
| **Borders** | Mix of 4px border-4 and 2px border-2 | ⚠️ Inconsistent | Standardize to tokens |
| **Card Styling** | Duplicated across pages | ❌ Not DRY | Extract to component |
| **Game Components** | Color-per-component | ❌ Chaotic | Unified palette, CSS vars |
| **Animations** | Consistent easing, good | ✅ Good | Keep as-is |

---

## 13. ACTION ITEMS FOR NORMALIZATION

### Phase 1: Token Creation (low risk, high impact)
- [ ] Add game panel color tokens to globals.css
- [ ] Add card styling tokens to globals.css
- [ ] Add glow/shadow tokens to globals.css

### Phase 2: Component Refactoring (medium risk)
- [ ] Create reusable `Card` component
- [ ] Create reusable `GamePanel` component
- [ ] Create reusable `StatBar` component
- [ ] Replace duplicate PersonalityTraits/ProfileInsights

### Phase 3: Color Normalization (medium risk, high visibility)
- [ ] Update QuestCard to use CSS variables
- [ ] Update ProjectModal to use CSS variables
- [ ] Update RPGStatsPanel to use CSS variables + `text-[var(--text-color)]`
- [ ] Update PersonalityTraits to use systematic colors
- [ ] Update ProfileInsights to use systematic colors

### Phase 4: Polish & Testing (low risk)
- [ ] Dark/light mode validation
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Animation smoothness check
- [ ] Accessibility audit

---

## 14. FILE REFERENCE MAP

### By Purpose
**Theme/Global**
- `app/globals.css` — CSS variables, animations, utilities
- `tailwind.config.ts` — Tailwind config
- `app/layout.tsx` — Root layout, theme provider

**Pages**
- `app/page.tsx` — Homepage (Type, Hero, PlayerStats)
- `app/about/page.tsx` — About page (bio, skills, traits)
- `app/projects/page.tsx` — Projects page (search, grid, modal)
- `app/contact/page.tsx` — Contact/socials

**Components - Game System**
- `app/components/game/RPGStatsPanel.tsx`
- `app/components/game/XPBar.tsx`
- `app/components/game/PersonalityTraits.tsx`
- `app/components/game/ProfileInsights.tsx`
- `app/components/game/QuestCard.tsx`
- `app/components/game/ProjectModal.tsx`
- `app/components/game/AchievementBadge.tsx`

**Components - Core**
- `app/components/hero.tsx`
- `app/components/player-stats.tsx`
- `app/components/navbar.tsx`
- `app/components/type.tsx`

**Utilities**
- `app/hooks/useGameStats.ts`
- `app/hooks/useAchievementTracking.ts`

---

This inventory identifies the areas where design system compliance needs improvement and provides a roadmap for normalization without breaking the existing creative vision.

