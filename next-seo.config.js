/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "multistepform-example",
  titleTemplate: "%s | multistepform-example",
  defaultTitle: "multistepform-example",
  description: "Multi Step Form example",
  canonical: "https://multistepform-example.sznm.dev",
  openGraph: {
    url: "https://multistepform-example.sznm.dev",
    title: "multistepform-example",
    description: "Multi Step Form example",
    images: [
      {
        url: "https://og.sznm.dev/api/generate?heading=Multi%20Step%20Form&text=Multi%20Step%20Form%20example%20app%20with%20persisted%20state%20between%20session.%20Powered%20by%20react-hook-form%20+%20zustand&template=color&center=true",
        alt: "multistepform-example.sznm.dev og-image",
      },
    ],
    site_name: "multistepform-example",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
