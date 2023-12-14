"use client";

import locales, { flags } from "@translation/locales";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Switches({ locale: currentLocale }) {
	const [localeOpened, setLocaleOpened] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<div>
			<button
				onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			>
				{resolvedTheme === "dark" ? "light" : "dark"}
			</button>
			<div>
				<div onClick={() => setLocaleOpened(!localeOpened)}>
					<Image
						src={flags.find((flag) => flag.locale === currentLocale).flag}
						alt=""
						width={50}
						height={32}
					/>
				</div>
				<div
					style={{
						display: localeOpened ? "flex" : "none",
						flexDirection: "column",
					}}
				>
					{locales.map((locale, index) => {
						if (locale !== currentLocale) {
							const flagInfo = flags.find((flag) => flag.locale === locale);
							return (
								<Link key={index} href={`/${locale}`} locale={locale}>
									<Image width={50} height={32} src={flagInfo.flag} alt="" />
								</Link>
							);
						}
						return null;
					})}
				</div>
			</div>
		</div>
	);
}
