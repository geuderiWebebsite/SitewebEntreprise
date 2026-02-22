import Cloaker from "@/components/Cloaker";
import SaintDenisContent from "./SaintDenisContent";

export default function page() {
  return (
    <Cloaker city="Saint-Denis" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <SaintDenisContent />
    </Cloaker>
  );
}
