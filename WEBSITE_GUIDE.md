# Vigilant Secret Services — Website Guide

Welcome to your new website. This document will help you understand how the website is organised and how to make common updates such as changing images, text, or contact details.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Folder Structure](#2-folder-structure)
3. [How to Update Images](#3-how-to-update-images)
4. [Where Images Are Used (Component Reference)](#4-where-images-are-used-component-reference)
5. [How to Update Text Content](#5-how-to-update-text-content)
6. [How to Update Contact Details](#6-how-to-update-contact-details)
7. [How to Update Navigation Links](#7-how-to-update-navigation-links)
8. [Important Notes](#8-important-notes)
9. [Getting Help](#9-getting-help)

---

## 1. Project Overview

Your website is built with **Next.js** (a modern web framework) and **React**. The website is a single-page application, meaning all the content lives on one main page divided into sections.

**The sections on your website, in order:**

| Section | Description |
|---|---|
| Navbar | Top navigation bar with logo and links |
| Hero | The large banner at the top of the page |
| About | Company background, mission, and vision |
| Values | Your five core values (Integrity, Professionalism, etc.) |
| Services | Primary and advanced security services |
| Advanced Protection | VIP, Construction, and CCTV services |
| Track Record | Client testimonials and key clients |
| FAQ | Frequently asked questions |
| CTA (Call to Action) | "Secure Your Assets Today" banner |
| Footer | Contact info, links, and copyright |

---

## 2. Folder Structure

Here are the key folders and files you need to know about:

```
your-project/
├── public/                          <-- Your images go here
│   └── vigilant_logo.jpeg           <-- Your company logo
│
├── src/
│   ├── app/
│   │   └── page.tsx                <-- Main page (contains most sections)
│   │
│   └── components/
│       └── sections/
│           ├── Navbar.tsx           <-- Navigation bar
│           ├── Hero.tsx             <-- Hero/banner section
│           ├── About.tsx            <-- About section (mission & vision)
│           ├── Values.tsx           <-- Core values section
│           └── Services.tsx         <-- Services section
```

---

## 3. How to Update Images

### Step 1: Add your image to the `public/` folder

1. Prepare your image file (e.g. `team-photo.jpg`).
2. Place it inside the **`public/`** folder at the root of the project.
3. Keep file names simple — use lowercase letters, hyphens instead of spaces, and no special characters.
   - Good: `security-team.jpg`, `office-building.png`
   - Avoid: `My Photo (1).JPG`, `IMG_2024 copy.jpeg`

### Step 2: Reference the image in code

Once an image is in the `public/` folder, you reference it with a forward slash `/` followed by the file name. For example:

- File location: `public/security-team.jpg`
- Code reference: `"/security-team.jpg"`

### Step 3: Replace the image path in the relevant component

Find the `src` attribute of the image you want to change and replace the URL. For example, to change the Hero background image:

**Before (current — uses an external URL):**
```tsx
src="https://images.unsplash.com/photo-1678264239693-..."
```

**After (using your own image from the `public/` folder):**
```tsx
src="/your-new-hero-image.jpg"
```

### Recommended Image Sizes

| Image Usage | Recommended Size | Format |
|---|---|---|
| Logo | 200 x 200 px | JPEG or PNG |
| Hero background | 1920 x 1080 px (or larger) | JPEG |
| About section images | 1200 x 1200 px | JPEG |
| Service card images | 800 x 1000 px | JPEG |
| FAQ section image | 800 x 450 px (16:9 ratio) | JPEG |

Using appropriately sized images keeps the website fast and looking sharp.

---

## 4. Where Images Are Used (Component Reference)

Below is every location in the code where an image appears, so you know exactly where to make changes.

### Logo

- **File:** `src/components/sections/Navbar.tsx` — Line 42
- **Current value:** `/vigilant_logo.jpeg`
- To change the logo, replace the file `public/vigilant_logo.jpeg` with your new logo (keep the same file name), or update the `src` path to your new file name.

```tsx
<Image
  src="/vigilant_logo.jpeg"    // <-- Change this path
  alt="Vigilant Secret Logo"
  width={50}
  height={50}
/>
```

### Hero Background Image

- **File:** `src/components/sections/Hero.tsx` — Line 19
- **Current value:** An Unsplash URL (external)

```tsx
<Image
  src="https://images.unsplash.com/photo-1678264239693-..."   // <-- Replace with "/your-hero-image.jpg"
  alt="Security Professional"
  fill
  className="object-cover opacity-50"
  priority
/>
```

### About Section — Main Image

- **File:** `src/components/sections/About.tsx` — Line 75
- **Current value:** An Unsplash URL

```tsx
<Image
  src="https://images.unsplash.com/photo-1517048676732-..."   // <-- Replace
  alt="Security Management"
  fill
  className="object-cover"
/>
```

### About Section — Inset (Smaller) Image

- **File:** `src/components/sections/About.tsx` — Line 92
- **Current value:** An Unsplash URL

```tsx
<Image
  src="https://images.unsplash.com/photo-1551836022-..."   // <-- Replace
  alt="Security Officer"
  fill
  className="object-cover"
/>
```

### Services Section — Service Card Images (8 total)

- **File:** `src/components/sections/Services.tsx` — Lines 31, 37, 43, 49 (primary) and 59, 65, 71, 77 (advanced)
- Each service has an `image` property. Update the URL to point to your own image.

```tsx
// Example — Static Guarding service:
{
  title: "Static Guarding",
  desc: "Uniformed guards at fixed posts...",
  image: "https://images.unsplash.com/photo-1581092160562-...",   // <-- Replace
  icon: Shield
},
```

### Advanced Protection Section Image

- **File:** `src/app/page.tsx` — Line 157
- **Current value:** An Unsplash URL

```tsx
<Image
  src="https://images.unsplash.com/photo-1521791136064-..."   // <-- Replace
  alt="Specialized Security"
  fill
  className="object-cover"
/>
```

### FAQ Section Image

- **File:** `src/app/page.tsx` — Line 236
- **Current value:** An Unsplash URL

```tsx
<Image
  src="https://images.unsplash.com/photo-1557597774-..."   // <-- Replace
  alt="Security Guard"
  fill
  className="object-cover"
/>
```

---

## 5. How to Update Text Content

All text is written directly in the component files. To change any heading, paragraph, or description:

1. Open the relevant file (see the table in Section 1 to find which file holds which section).
2. Find the text you want to change.
3. Edit the text between the quotation marks or JSX tags.

**Example — Changing the hero headline:**

File: `src/components/sections/Hero.tsx`

```tsx
<h1 className="...">
  Vigilant Secret Services: <br />         // <-- Edit this text
  <span className="text-primary">Professional Protection</span> <br />
  You Can Trust.
</h1>
```

**Example — Changing a service description:**

File: `src/components/sections/Services.tsx`

```tsx
{
  title: "Static Guarding",                          // <-- Change title here
  desc: "Uniformed guards at fixed posts...",        // <-- Change description here
  ...
},
```

---

## 6. How to Update Contact Details

Contact information appears in **two places**:

### Hero Section (Phone Number on Button)

- **File:** `src/components/sections/Hero.tsx` — Line 52

```tsx
<Button ...>
  <Phone className="w-5 h-5 mr-2" />
  Call 081 729 5201                          // <-- Update phone number here
</Button>
```

### Footer Section

- **File:** `src/app/page.tsx` — Lines 329–340

```tsx
// Address (Line 331):
<span className="text-zinc-500">2385, 19 Brazil Street, Lotus Gardens, Pretoria, Gauteng, 0008.</span>

// Phone (Line 335):
<span className="text-zinc-500">081 729 5201</span>

// Email (Line 339):
<span className="text-zinc-500">vigilantsecretservices@gmail.com</span>
```

### Service Areas (Footer)

- **File:** `src/app/page.tsx` — Lines 317–321

```tsx
<li>Pretoria Central</li>
<li>Lotus Gardens</li>
<li>Gauteng Surroundings</li>
<li>High-Risk Zone Security</li>
<li>Industrial Area Patrols</li>
```

---

## 7. How to Update Navigation Links

The navigation links are defined in the Navbar component.

- **File:** `src/components/sections/Navbar.tsx` — Lines 22–28

```tsx
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "FAQ", href: "#faq" },
];
```

- To rename a link, change the `name` value.
- To change where a link scrolls to, update the `href` value to match the `id` of the target section.
- The "Contact Us" button in the navbar scrolls to the CTA section at the bottom of the page.

---

## 8. Important Notes

- **Do not rename or move files** unless you are familiar with how Next.js imports work. Moving a file without updating its imports will break the website.
- **Always keep a backup** of any file before editing it.
- **Image file names** should not contain spaces or special characters.
- **External images** (from Unsplash or other websites) are currently used as placeholders. We recommend replacing them with your own professional photographs stored in the `public/` folder. This ensures your images load reliably and are not dependent on a third-party service.
- After making any changes, **check the website in your browser** to confirm everything looks correct before publishing.

---

## 9. Getting Help

If you need further assistance with updating the website, or if something is not working as expected after a change, please reach out to your web developer. When reporting an issue, it is helpful to include:

- The file you were editing
- What change you made
- A screenshot of any error message you see in the browser

---

*Document prepared for Vigilant Secret Services.*
