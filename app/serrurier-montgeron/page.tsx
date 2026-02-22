import Cloaker from "@/components/Cloaker";
import MontgeronContent from "./MontgeronContent";

export default function page() {
  return (
    <Cloaker city="Montgeron" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <MontgeronContent />
    </Cloaker>
  );
}
