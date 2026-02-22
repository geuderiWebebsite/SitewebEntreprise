import Cloaker from "@/components/Cloaker";
import ClichyContent from "./ClichyContent";

export default function page() {
  return (
    <Cloaker city="Clichy" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <ClichyContent />
    </Cloaker>
  );
}
