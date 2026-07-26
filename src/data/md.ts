/**
 * `md` — a tiny tagged-template helper for authoring multi-line Markdown in the
 * data files.
 *
 * It lets a description be written as an indented, wrapped block and strips the
 * common leading indentation so the Markdown parser sees clean text:
 *
 * ```ts
 * description: {
 *   en: md`
 *     First paragraph, wrapped across as many source lines as you like — single
 *     newlines are treated as spaces.
 *
 *     A blank line starts a new paragraph. Use **bold**, *italic*, or inline
 *     \`code\` (escape the backticks inside this template).
 *   `,
 *   fr: md`...`,
 * }
 * ```
 *
 * The cooked template strings are used (not `String.raw`) so escapes such as
 * `\`` become real backticks, which Markdown then renders as inline code.
 */
export function md(strings: TemplateStringsArray, ...values: unknown[]): string {
  // Interleave the (cooked) literal parts with any interpolated values.
  let text = "";
  strings.forEach((chunk, i) => {
    text += chunk + (i < values.length ? String(values[i]) : "");
  });

  // Drop a leading newline and any trailing whitespace, then remove the common
  // indentation shared by every non-blank line.
  const lines = text.replace(/^\n/, "").replace(/\s+$/, "").split("\n");
  const indents = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => line.match(/^[ \t]*/)![0].length);
  const min = indents.length ? Math.min(...indents) : 0;

  return lines.map((line) => line.slice(min)).join("\n").trim();
}
