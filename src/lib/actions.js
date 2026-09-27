import { toast } from "react-hot-toast";
import { profile } from "../data/portfolio";

export async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email);
    toast.success(`${profile.email} copied — talk soon!`);
  } catch {
    window.location.href = `mailto:${profile.email}`;
  }
}

export function downloadResume() {
  const link = document.createElement("a");
  link.href = profile.resume;
  link.download = profile.resumeFileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
