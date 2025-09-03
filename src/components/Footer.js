function Footer(props) {
  const newsletterTitle = props.newsletterTitle || "Sign up for our newsletter";
  const newsletterDescription =
    props.newsletterDescription ||
    "Be the first to know about our special offers, new product launches, and events";
  const shopLinks = props.shopLinks || [
    { label: "Women's", link: { cached_url: "/womens" } },
    { label: "Men's", link: { cached_url: "/mens" } },
    { label: "Kids'", link: { cached_url: "/kids" } },
    { label: "Shoes", link: { cached_url: "/shoes" } },
    { label: "Equipment", link: { cached_url: "/equipment" } },
    { label: "By Activity", link: { cached_url: "/activity" } },
    { label: "Gift Cards", link: { cached_url: "/gift-cards" } },
    { label: "Sale", link: { cached_url: "/sale" } },
  ];
  const helpLinks = props.helpLinks || [
    { label: "Help Center", link: { cached_url: "/help" } },
    { label: "Order Status", link: { cached_url: "/order-status" } },
    { label: "Size Chart", link: { cached_url: "/size-chart" } },
    { label: "Returns & Warranty", link: { cached_url: "/returns" } },
    { label: "Contact Us", link: { cached_url: "/contact" } },
  ];
  const aboutLinks = props.aboutLinks || [
    { label: "About Us", link: { cached_url: "/about" } },
    { label: "Responsibility", link: { cached_url: "/responsibility" } },
    { label: "Technology & Innovation", link: { cached_url: "/technology" } },
    { label: "Explore our stories", link: { cached_url: "/stories" } },
  ];

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Signup Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {newsletterTitle}
            </h3>
            <p className="text-gray-600 mb-6">{newsletterDescription}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium">
                Sign Up
              </button>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link.cached_url}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Help</h4>
            <ul className="space-y-2">
              {helpLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link.cached_url}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">About</h4>
            <ul className="space-y-2">
              {aboutLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link.cached_url}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
