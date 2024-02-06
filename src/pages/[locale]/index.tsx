import { useI18n } from "@/hooks/useI18n";
import { i18nConfig } from "../../../i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { generateRandomId } from "@/utils/util";

const Home = () => {
  const { t } = useI18n();
  const { redirect } = useRouteRedirect();

  return (
    <div>
      <p>{t("greeting")}</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        {i18nConfig.locales.map((locale) => (
          <LanguageSwitcher key={locale} locale={locale} />
        ))}
      </div>
      <button onClick={() => redirect(`/${generateRandomId()}`)}>
        {t("redirectButton")}
      </button>
    </div>
  );
};

export default Home;
