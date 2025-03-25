export const config = {
  domainSource: "https://e3c412aa-5c74-4d02-b483-1802d4c8adc9.weweb-preview.io", // Your WeWeb app preview link
  patterns: [
      {
	      pattern: "/empresa/[^/]+",
	      metaDataEndpoint: "https://api.griiingo.com/rest/v1/companies_metadata?slug=eq.{id}",
      },
      {
	      pattern: "/evento/[^/]+",
	      metaDataEndpoint: "https://api.griiingo.com/rest/v1/events_metadata?slug=eq.{id}",
      },
      {
	      pattern: "/artigo/[^/]+",
	      metaDataEndpoint: "https://api.griiingo.com/rest/v1/article_metadata?slug=eq.{id}",
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
