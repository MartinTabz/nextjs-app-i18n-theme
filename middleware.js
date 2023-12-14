import locales from "@translation/locales";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales: locales,
  defaultLocale: 'cs',
	localePrefix: "as-needed",
});

export const config = {
	matcher: ["/", "/(cs|de|en)/:path*"],
};
