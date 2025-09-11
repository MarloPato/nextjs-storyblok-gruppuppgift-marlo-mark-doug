import Link from "next/link.js";
import CartIcon from "./CartIcon.js";

export default function Header({ 
  menuLinks, 
  logoText, 
  currency, 
  supportLink,
  promoMessage
}) {

  return (
    <header className="w-full">
      {/* Top Bar - Black background with white text */}
      <div className="bg-black text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            {/* Currency selector */}
            <div className="flex items-center">
              {currency && <span className="font-medium">{currency}</span>}
            </div>

            {/* Promotional message */}
            <div className="flex-1 text-center">
              {promoMessage && (
                <span className="font-medium">{promoMessage}</span>
              )}
            </div>

            {/* Support link */}
            <div className="flex items-center">
              {supportLink && (
                <Link
                  href={supportLink.link?.cached_url}
                  className="hover:text-gray-300 transition-colors"
                >
                  {supportLink.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - White background */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  {logoText}
                </Link>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-6">
                {menuLinks &&
                  menuLinks.map((item, i) => (
                    <div key={i} className="relative group">
                      <Link
                        href={"/" + item.category_link?.cached_url || ""}
                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
              </nav>
            </div>

            {/* Right side - Search and Cart */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent w-64 bg-gray-50"
                  />
                </div>
              </div>

              {/* Shopping Cart */}
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
