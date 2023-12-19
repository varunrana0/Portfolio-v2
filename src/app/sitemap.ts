import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://portfolio.varunrana.info",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
	];
}
