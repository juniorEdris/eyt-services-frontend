import { AppLogo } from "@/lib/custom-svg";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around p-24">
      <AppLogo />
      <h1 className="text-2xl font-semibold text-app-theme text-center">
        EYT SERVICES
      </h1>
    </main>
  );
}
