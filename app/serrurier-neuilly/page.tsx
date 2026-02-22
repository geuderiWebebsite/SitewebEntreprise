import Cloaker from "@/components/Cloaker";
import NeuillyContent from "./NeuillyContent";

export default function page() {
  return (
    <Cloaker city="Neuilly-sur-Seine" phone="0185440131" phoneDisplay="01 85 44 01 31">
      <NeuillyContent />
    </Cloaker>
  );
}
