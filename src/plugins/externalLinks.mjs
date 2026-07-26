const httpProtocolPattern = /^https?:$/i;

/** Return true when an HTTP(S) link points outside the portfolio origin. */
export function isExternalHttpHref(href, siteOrigin) {
  if (typeof href !== "string") return false;

  try {
    const site = new URL(siteOrigin);
    const target = new URL(href, site);
    return httpProtocolPattern.test(target.protocol) && target.origin !== site.origin;
  } catch {
    return false;
  }
}

/** Add safe new-tab attributes to external links in Astro Markdown content. */
export default function externalLinks({ siteOrigin }) {
  return (tree) => {
    const visit = (node) => {
      if (
        node?.type === "element" &&
        node.tagName === "a" &&
        isExternalHttpHref(node.properties?.href, siteOrigin)
      ) {
        node.properties.target = "_blank";
        node.properties.rel = ["noopener", "noreferrer"];
      }

      if (Array.isArray(node?.children)) node.children.forEach(visit);
    };

    visit(tree);
  };
}