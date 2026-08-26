import { redirect } from "next/navigation";

export default function LegacyAnalysisRedirect() {
  redirect("/analytics?game=codenames");
}
