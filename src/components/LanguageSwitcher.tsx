import { useRouter } from "next/router";
import Link from "next/link";
import { languageDetector } from "@/lib/languageDetector";

interface LanguageSwitcherProps {
  locale: string;
  href?: string;
  asPath?: string;
}

/**
 * Renders a language switcher button that allows the user to switch between different locales.
 *
 * @param props - The props object containing the locale, href, and asPath.
 * @returns The language switcher button.
 */
export const LanguageSwitcher = ({
  locale,
  ...rest
}: LanguageSwitcherProps) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, String(router.query[k]));
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link
      href={href}
      onClick={() =>
        languageDetector.cache ? languageDetector.cache(locale) : {}
      }
    >
      <button style={{ fontSize: "small" }}>{locale}</button>
    </Link>
  );
};
