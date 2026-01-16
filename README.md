# 🥖 Butter & Bloom - Artisan Bakery Website

A beautiful, modern website for an artisan bakery featuring sourdough bread, croissants, coffee, and baked goods.

![Butter & Bloom](https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=400&fit=crop)

## ✨ Features

- **Beautiful Design**: Premium aesthetic with warm colors, smooth animations, and modern UI
- **Fully Responsive**: Works perfectly on all devices - desktop, tablet, and mobile
- **Interactive Menu**: Category filtering and search functionality
- **Product Catalog**: Complete menu with prices and descriptions
- **Contact Form**: Customer inquiry form with validation
- **Gallery**: Stunning product photography showcase
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📄 Pages

1. **Home** - Hero section with featured products and company values
2. **About Us** - Company story, values, baking process, and team
3. **Menu** - Complete product catalog with filtering and search
4. **Gallery** - Product photos and customer reviews
5. **Contact** - Contact information, form, and FAQ

## 🛍️ Products

### Bread

- Regular Bread (400g) - ₹55
- Whole Wheat Bread (400g) - ₹65

### Rolls & Buns

- Artisan Dinner Rolls (30g) - ₹20 each
- Veg Buns (45g) - ₹30 each
- Non-Veg Buns (45g) - ₹45 each

### Snacks

- Artisan Chips (200g) - ₹60
- Cheese Bread Sticks (250g) - ₹110

### Coffee

- Coffee Beans (250g) - ₹700
- Ground Coffee Powder (250g) - ₹500

### Sourdough Specials

- Classic Sourdough Bread (500g) - ₹120
- Sourdough Toast Loaf (500g) - ₹130
- Sourdough Croissants (Pack of 4) - ₹150
- Sourdough Fruit Tarts (Pack of 3) - ₹180

## 🚀 Local Development

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone or download this repository

```bash
cd sneha
```

1. Install dependencies

```bash
npm install
```

1. Start the development server

```bash
npm start
```

1. Open your browser and visit

```
http://localhost:3000
```

## 🌐 Deploy to Render

### Quick Deploy Steps

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Butter & Bloom website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: butter-and-bloom (or your preferred name)
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free
   - Click "Create Web Service"

3. **Done!** Your site will be live at `https://butter-and-bloom.onrender.com`

### Alternative: Static Site Deploy

You can also deploy as a static site:

1. Go to Render Dashboard
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: Leave empty (no build needed)
   - **Publish Directory**: `.` (current directory)
5. Click "Create Static Site"

## 📁 Project Structure

```
sneha/
├── index.html          # Home page
├── about.html          # About page
├── menu.html           # Menu/Products page
├── gallery.html        # Gallery & Reviews page
├── contact.html        # Contact page
├── style.css           # Main stylesheet with design system
├── script.js           # JavaScript for interactivity
├── server.js           # Express server for deployment
├── package.json        # Node.js dependencies
└── README.md           # This file
```

## 🎨 Design Features

- **Color Palette**: Warm browns, peach, coral, and cream tones
- **Typography**: Pacifico (headings), Poppins (body), Dancing Script (accents)
- **Animations**: Smooth fade-ins, hover effects, and scroll animations
- **Icons**: Font Awesome 6.4.0
- **Images**: High-quality Unsplash photos

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Fonts**: Google Fonts
- **Icons**: Font Awesome
- **Images**: Unsplash (CDN)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Change Business Name

1. Update all instances of "Butter & Bloom" in HTML files
2. Update `logo-text` classes
3. Update footer and meta descriptions

### Update Products & Prices

Edit `menu.html` and modify the product cards with your actual products and prices.

### Change Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-dark: #yourcolor;
    --primary-brown: #yourcolor;
    --secondary-peach: #yourcolor;
    /* ... etc */
}
```

### Update Contact Information

Edit `contact.html` and footer sections in all HTML files with your actual:

- Address
- Phone numbers
- Email addresses
- Opening hours

## 📞 Support

For issues or questions:

- Email: <hello@butterandbloom.com>
- Phone: +91 98765 43210

## 📝 License

MIT License - feel free to use this template for your bakery or business!

## 🙏 Credits

- Design inspired by modern bakery aesthetics
- Images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)

---

**Made with ❤️ and flour** 🥖

Enjoy your beautiful bakery website!
