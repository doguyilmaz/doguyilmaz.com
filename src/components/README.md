# Component Usage Guide

## Email Component

The `Email` component provides a simple way to display your email address throughout your site, ensuring consistency and allowing for easy updates from a single configuration file.

### Usage

```astro
import Email from "../components/Email.astro";

<!-- Basic usage - displays email address from siteConfig -->
<Email />

<!-- With custom styling -->
<Email className="text-blue-500 hover:underline font-semibold" />
```

### Usage in MDX Files

In your `.mdx` files, you can import and use the Email component:

```mdx
---
title: "Some Page"
---
import Email from "../../components/Email.astro";

## Contact Information

For inquiries, please email <Email />.
```

## Website Component

The `Website` component provides a simple way to display your website URL throughout your site, ensuring consistency.

### Usage

```astro
import Website from "../components/Website.astro";

<!-- Basic usage - displays website URL from siteConfig -->
<Website />

<!-- With custom styling -->
<Website className="text-blue-500 hover:underline font-semibold" />
```

### Usage in MDX Files

In your `.mdx` files, you can import and use the Website component:

```mdx
---
title: "Some Page"
---
import Website from "../../components/Website.astro";

## Visit Our Website

Check out our website at <Website />.
```

## Configuration

Both components draw their values from the central configuration file. To update them across the entire site, simply change the values in `src/config/site.ts`:

```ts
// src/config/site.ts
export const siteConfig = {
  // ...
  siteUrl: "https://doguyilmaz.com",
  // ...
  contact: {
    email: "hello@doguyilmaz.com",
    // ...
  },
  // ...
};
```
