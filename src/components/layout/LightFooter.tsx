import { Instagram, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";

const columns = [
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Case Studies", "/case-studies"],
      ["Approach", "/approach"],
      ["Careers", "/careers"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["Services", "/services"],
      ["Industries", "/industries"],
      ["Resources", "/resources"],
      ["Contact", "/contact"],
    ],
  },
] as const;

export function LightFooter() {
  return (
    <footer className="approach-footer light-site-footer">
      <div className="container-pro approach-footer__grid">
        <div>
          <Logo />
          <div className="approach-footer__socials" aria-label="Social links">
            <a
              href="https://www.linkedin.com/company/wallace-croft"
              aria-label="Wallace Croft on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/wallacecroft/"
              aria-label="Wallace Croft on Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Wallace Croft. All rights reserved.</p>
          <div className="approach-footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
        {columns.map((column) => (
          <nav className="approach-footer__col" key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map(([label, to]) => (
                <li key={label}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <nav className="approach-footer__col">
          <h3>Get in touch</h3>
          <ul>
            <li>
              <a href="mailto:info@wallacecroft.com">info@wallacecroft.com</a>
            </li>
            <li>
              <a href="tel:+254114470441">+254 114 470441</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
