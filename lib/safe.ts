/** Only allow https links from config. */
export function safeUrl(u?: string): string {
  return u && /^https:\/\/\S+$/i.test(u) ? u : "";
}
