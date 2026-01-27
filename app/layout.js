import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Premium Todo App",
  description: "A simple, elegant todo list application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col`}>
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Todo Master
            </h1>
            <nav>
              <ul className="flex space-x-6 text-sm font-medium text-gray-600">
                <li className="hover:text-blue-600 transition-colors cursor-pointer">
                  <a href="/">Home</a>
                </li>
                <li className="hover:text-blue-600 transition-colors cursor-pointer">
                  <a href="/login">Login</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="border-t border-gray-100 bg-white py-8 mt-auto">
          <div className="max-w-4xl mx-auto px-4 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Todo Master. Crafted with precision.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
