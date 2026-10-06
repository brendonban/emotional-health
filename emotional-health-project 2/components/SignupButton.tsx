import { site } from "@/site.config";
import { safeUrl } from "@/lib/safe";

export default function SignupButton() {
  const url = safeUrl(site.signup.url);
  if (!url) return null;
  return <a className="btn" href={url} target="_blank" rel="noopener">{site.signup.label || "Register your interest"}</a>;
}
