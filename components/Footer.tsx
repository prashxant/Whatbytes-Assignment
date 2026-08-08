import Link from "next/link";

// Inline SVGs for social icons (lucide-react v1 removed branded icons)
function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="w-full mt-auto"
      style={{ backgroundColor: "var(--color-primary-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
          {/* Filters / Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-3">Filters</h3>
            <ul className="space-y-1 text-sm text-blue-200">
              <li>
                <Link href="/?category=All" className="hover:text-white transition-colors">
                  All
                </Link>
              </li>
              <li>
                <Link href="/?category=Electronics" className="hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/?category=Clothing" className="hover:text-white transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/?category=Home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-base mb-3">About Us</h3>
            <ul className="space-y-1 text-sm text-blue-200">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-base mb-3">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-blue-400 flex items-center justify-center text-blue-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-twitter"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-blue-400 flex items-center justify-center text-blue-200 hover:bg-blue-400 hover:border-blue-400 hover:text-white transition-all"
              >
                <TwitterIcon size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-blue-400 flex items-center justify-center text-blue-200 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-900 mt-8 pt-4 text-xs text-blue-300">
          © 2024 American. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
