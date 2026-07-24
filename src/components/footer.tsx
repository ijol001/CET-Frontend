import Link from "next/link";
import {
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  { label: "About CET", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/people" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const programmes: FooterLink[] = [
  { label: "NPTEL Courses", href: "/programs/nptel" },
  { label: "GIAN Programme", href: "/programs/gian" },
  { label: "PMMMNMTT", href: "/programs/pmmmnmtt" },
  { label: "TEQIP Training", href: "/programs/teqip" },
  { label: "Virtual Labs", href: "/programs/virtual-labs" },
  { label: "Faculty Development", href: "/programs/fdp" },
];

const explore: FooterLink[] = [
  { label: "IIT Guwahati Website", href: "https://www.iitg.ac.in" },
  { label: "NPTEL Portal", href: "https://nptel.ac.in" },
  { label: "SWAYAM Platform", href: "https://swayam.gov.in" },
  { label: "Virtual Labs", href: "https://vlab.co.in" },
];

export default function Footer() {
  return (
    <footer className="bg-[#101728] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  CET · IIT Guwahati
                </h3>

                <p className="text-sm text-[#96181A]">
                  Centre for Educational Technology
                </p>
              </div>
            </div>

            <p className="mb-6 leading-7 text-gray-400">
              A nationally recognized centre dedicated to advancing education
              through technology, research and faculty empowerment since 2003.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#D4A017]" />
                <span>IIT Guwahati, Assam – 781039</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4A017]" />
                <span>+91 361 2582790</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4A017]" />
                <a
                  href="mailto:cet@iitg.ac.in"
                  className="hover:text-white transition-colors"
                >
                  cet@iitg.ac.in
                </a>
              </div>
            </div>
          </div>

          <FooterColumn title="Quick Links">
            {quickLinks.map((link) => (
              <FooterLinkItem
                key={link.label}
                href={link.href}
                icon={<ChevronRight size={15} className="text-[#D4A017]" />}
              >
                {link.label}
              </FooterLinkItem>
            ))}
          </FooterColumn>

          <FooterColumn title="Programmes">
            {programmes.map((link) => (
              <FooterLinkItem
                key={link.label}
                href={link.href}
                icon={<ChevronRight size={15} className="text-[#D4A017]" />}
              >
                {link.label}
              </FooterLinkItem>
            ))}
          </FooterColumn>

          {/* Explore */}
          <FooterColumn title="Explore More">
            {explore.map((link) => (
              <FooterLinkItem
                key={link.label}
                href={link.href}
                external
                icon={<ExternalLink size={15} className="text-[#D4A017]" />}
              >
                {link.label}
              </FooterLinkItem>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#293247] pt-5 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Centre for Educational Technology, IIT
            Guwahati. All rights reserved.
          </p>

          <Link
            href="#top"
            className="flex items-center gap-2 rounded-full bg-[#1A2236] px-6 py-3 text-sm text-white transition hover:bg-[#232d46]"
          >
            <ArrowUp size={16} />
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

interface FooterLinkItemProps {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  external?: boolean;
}

function FooterLinkItem({
  href,
  children,
  icon,
  external = false,
}: FooterLinkItemProps) {
  return (
    <li>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex items-center gap-2 transition hover:text-white"
      >
        {icon}
        {children}
      </Link>
    </li>
  );
}
