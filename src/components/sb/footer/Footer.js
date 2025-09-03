import { storyblokEditable } from "@storyblok/react";

export default function Footer({ blok }) {
  if (!blok) {
    return null;
  }

  // Just find the needed blocks - no complex functions
  let shopLinks = [];
  let helpLinks = [];
  let aboutLinks = [];

  // If there is footer_links_block, search for the needed blocks inside it
  if (blok.footer_links_block && Array.isArray(blok.footer_links_block)) {
    blok.footer_links_block.forEach((block) => {
      if (block.component === "shop_links" && block.shop_links) {
        shopLinks = block.shop_links;
      }
      if (block.component === "help_link" && block.help_links) {
        helpLinks = block.help_links;
      }
      if (block.component === "about_link" && block.about_links) {
        aboutLinks = block.about_links;
      }
    });
  }

  return (
    <footer {...storyblokEditable(blok)} className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Signup Column */}
          <div className="lg:col-span-1">
            {blok.newsLetterTitle && (
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {blok.newsLetterTitle}
              </h3>
            )}
            {blok.newsletterDescription && (
              <p className="text-gray-600 mb-6">{blok.newsletterDescription}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium">
                {blok.cta_text || "Sign Up"}
              </button>
            </div>
          </div>

          {/* Shop Links Column - just plain markup */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.length > 0 ? (
                shopLinks.map((link, index) => (
                  <li key={link._uid || index}>
                    <a
                      href={link.link?.cached_url || "#"}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.text || "Shop Link"}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No shop links found</li>
              )}
            </ul>
          </div>

          {/* Help Links Column - just plain markup */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Help</h4>
            <ul className="space-y-2">
              {helpLinks.length > 0 ? (
                helpLinks.map((link, index) => (
                  <li key={link._uid || index}>
                    <a
                      href={link.link?.cached_url || "#"}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.text || "Help Link"}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No help links found</li>
              )}
            </ul>
          </div>

          {/* About Links Column - just plain markup */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">About</h4>
            <ul className="space-y-2">
              {aboutLinks.length > 0 ? (
                aboutLinks.map((link, index) => (
                  <li key={link._uid || index}>
                    <a
                      href={link.link?.cached_url || "#"}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.text || "About Link"}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No about links found</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
