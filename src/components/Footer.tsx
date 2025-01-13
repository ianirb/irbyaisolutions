import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import NavLink from './shared/NavLink';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' }
];

const footerLinks = {
  Solutions: ['AI Services', 'Automation', 'Integration', 'Analytics'],
  Company: ['About', 'Careers', 'Contact', 'Blog']
};

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
              Irby AI Solutions
            </h2>
            <p className="text-gray-400 mb-4 max-w-sm">
              Automate. Elevate. Dominate. Transform your business with cutting-edge AI solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <NavLink href="#">{link}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Irby AI Solutions. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
            <NavLink href="#">Privacy Policy</NavLink>
            <NavLink href="#">Terms of Service</NavLink>
            <NavLink href="#">Cookie Settings</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}