# Peddy - Pet Adoption Platform

Peddy is a modern web application for discovering and adopting pets. Built with Next.js and React, it provides a seamless experience for users to browse, filter, and view details about pets available for adoption. The UI is designed with Tailwind CSS for a clean and responsive look.

## Features

- **Browse Pets:** View a list of pets available for adoption, with images and key details.
- **Category Filtering:** Filter pets by categories such as Dog, Cat, Rabbit, and Bird.
- **Best Deals Section:** Highlights the best deals for pets, with sorting options by price.
- **Like Pets:** Mark pets as liked to keep track of your favorites.
- **Pet Details Modal:** Click on a pet to view detailed information in a modal, including images, breed, age, vaccination status, and more.
- **Responsive Design:** Works well on both desktop and mobile devices.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API:** Uses [Programming Hero Peddy API](https://openapi.programming-hero.com/api/peddy) for pet data

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd peddy
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `app/` - Main Next.js app directory (pages, layout, global styles)
- `components/` - Reusable React components (pet cards, modals, dropdowns, etc.)
- `public/` - Static assets (images, icons, etc.)
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## Customization

- **Add More Categories:**
  Update the categories in `adoption-categories.tsx` or fetch from a different API endpoint.
- **Styling:**
  Modify Tailwind classes in components for a custom look.
- **API Integration:**
  Replace the API endpoints in the components to connect to your own backend if needed.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Programming Hero Peddy API](https://openapi.programming-hero.com/api/peddy)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

Enjoy discovering your new best friend with Peddy!

