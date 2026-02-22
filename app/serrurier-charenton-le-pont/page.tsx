import Cloaker from "@/components/Cloaker";
import CharentonContent from "./CharentonContent";

export default function page() {
  return (
    <Cloaker city="Charenton-le-Pont" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <CharentonContent />
    </Cloaker>
  );
}
