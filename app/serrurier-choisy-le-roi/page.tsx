import Cloaker from "@/components/Cloaker";
import ChoisyContent from "./ChoisyContent";

export default function page() {
  return (
    <Cloaker city="Choisy-le-Roi" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <ChoisyContent />
    </Cloaker>
  );
}
