"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import footerTranslations from "@/translations/footer";

/**
 * Footer Component
 *
 * Displays footer navigation links and copyright information.
 * The footer is hidden on certain pages (ManuPilot and About This Website).
 */

const Footer = () => {
  // translation
  const { language } = useLanguage();
  const t = footerTranslations[language];

  const pathname = usePathname();
  const isManuPilotPage = pathname === "/manupilot";
  const isSiteDoc = pathname === "/about-this-website";
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full mt-auto pt-16 pb-16 sm:pb-12 px-10 ${
        (isManuPilotPage || isSiteDoc) && "hidden"
      }`}
    >
      <div className="w-full center flex-col md:flex-row-reverse gap-4 ">
        <div className="center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="text-center text-xs text-text-secondary hover:text-accent-extra"
          >
            {t.contact}
          </Link>

          <Link
            href="https://www.linkedin.com/in/ahmed-oun-1175a5147/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-xs text-text-secondary hover:text-accent-extra"
          >
            LinkedIn
          </Link>

          <Link
            href="/about-this-website"
            className="text-center text-xs text-text-secondary hover:text-accent-extra"
          >
            {t.about}
          </Link>

          <Link
            href="https://github.com/ahmed3oun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-xs text-text-secondary hover:text-accent-extra "
          >
            GitHub
          </Link>
        </div>

        <div className="center gap-2 flex-wrap">
          <Link
            href="/"
            className="text-text-primary center text-lg w-[26px] h-[26px] border border-text-primary center font-bold"
          >
            A
          </Link>
          <p className="text-xs text-center text-text-secondary ">
            &copy; {currentYear} {t.madeBY}{" "}
            <span className="font-semibold">Ahmed OUN</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
