

## 🧩 Overview

This project is a technical test for migrating the **BricksActive homepage** into a fully functional, responsive, and high-performance **Shopify theme** using **Liquid**, **JavaScript**, and **CSS**.

The goal is to replicate a custom homepage layout while ensuring:
- Design fidelity
- Mobile responsiveness
- Interactive features (sliders, testimonials)
- Shopify compatibility
- Speed and usability

---

##  Development Approach

Shopify offers two approaches to frontend development:

1. **Headless** using frameworks like Next.js or Remix via Storefront API.
2. **Native Liquid Theme** – Shopify’s default approach, recommended for most use cases and fully compatible with Online Store 2.0.

For this project, I chose the second approach, building directly with **Shopify Liquid** and enhancing the theme using JavaScript (SwiperJS) and CSS utilities.

---

##  Theme Foundation

When a new Shopify store is created, Shopify automatically installs a default theme. As of this writing, the default theme is **Dawn** — a flexible, fast, and extensible base theme.

While Dawn already provides a solid structure, I extended it with **custom sections** to meet the design and functional requirements of BricksActive.

---

## 📁 Shopify Theme Structure

Shopify themes follow a well-defined structure with six main directories:

- `/assets` – CSS, JS, fonts, icons, images
- `/layout` – Base templates like `theme.liquid`
- `/templates` – Page templates (e.g. `index.json`, `product.json`)
- `/sections` – Modular UI components used in templates
- `/snippets` – Reusable components (buttons, cards, etc.)
- `/locales` – Translation files for multi-language support

Understanding and following this structure ensures scalable and maintainable theme development.

---

## 🚀 Live Demo

You can view the working demo at:

**🔗 https://bricksactive-gtech.myshopify.com**  
**🔒 Password:** `live`

> ⚠️ Shopify does not allow theme duplication or local development from a non-collaborator account. All development was done directly on this test store, and the demo link is the only way to preview the result.

---

## ✨ Custom Section Overview

All custom sections are stored in the `/sections` folder and use the naming pattern:
custom-[feature].liquid





## 🌀 Sliders with SwiperJS

All carousel and slider functionality is powered by **SwiperJS**, ensuring:
- Smooth mobile swipe experience
- Autoplay + manual navigation
- Lightweight and fully responsive

---

## 📦 Metafield Integration: Testimonials

The testimonial section uses **Shopify Metaobjects**, allowing each testimonial to be managed dynamically via the Shopify Admin.

Each testimonial includes:
- Avatar image
- Star rating (1–5 stars)
- Customer quote

This makes the section fully CMS-driven and editable by non-developers.

---

## 🛒 Bonus: Full Storefront Usability

Although the test focuses on the homepage, I extended the functionality to support a **complete shopping flow**.

You can simulate checkout using Shopify’s built-in test mode:

1. Go to any product → Add to Cart → Checkout  
2. Use any dummy card:
   - Card Number: `1`
   - CVV: `123`
   - Name: Any name

This demonstrates that the theme is not only visually accurate but also fully functional.

---



---

Thank you for reviewing this submission!  
Feel free to reach out if you have any questions or feedback.
