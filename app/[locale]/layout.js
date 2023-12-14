import "@styles/globals.css";
import { redirect } from "next/navigation";
import locales from "../../translation/locales";

export default function LocaleLayout({ children, params: { locale } }) {
	if (!locales.includes(locale)) {
		redirect("/");
	}

	return (
		<html lang={locale}>
			<body>{children}</body>
		</html>
	);
}
