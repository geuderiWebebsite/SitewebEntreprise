import Cloaker from "@/components/Cloaker";
import HomeContent from "./HomeContent";

export default function Home() {
  return (
    // skipAggressive=true → tous les visiteurs voient HomeContent
    // Le Cloaker reste actif pour la détection des bots (SEO)
    <Cloaker city="France" phone="0185440131" phoneDisplay="01 85 44 01 31" skipAggressive={true}>
      <HomeContent />
    </Cloaker>
  );
}
