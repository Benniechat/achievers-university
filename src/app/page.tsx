import { DesktopLanding } from "@/components/DesktopLanding";
import { MobileLanding } from "@/components/MobileLanding";

export default function LandingPage() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopLanding />
      </div>
      <div className="block lg:hidden">
        <MobileLanding />
      </div>
    </>
  );
}