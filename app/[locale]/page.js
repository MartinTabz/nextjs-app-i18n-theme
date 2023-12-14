import { useTranslations } from "next-intl";

export default function Index() {
	const t = useTranslations("Index");
	return (
		<section>
			<h1>{t("header")}</h1>
			<p>{t("description")}</p>
         <span>{t("cta")}</span>
		</section>
	);
}
