import { useI18n } from "@/hooks/useI18n";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";

const DynamicPage = () => {
  const { t } = useI18n({ namespace: "dynamic" });
  const { redirect } = useRouteRedirect();

  return (
    <div>
      <p>{t("dynamic.title")}</p>
      <button onClick={() => redirect("/")}>{t("homeButton")}</button>
    </div>
  );
};

export default DynamicPage;
