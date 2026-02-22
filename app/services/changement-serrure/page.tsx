import Cloaker from "@/components/Cloaker";
import ChangementSerrureContent from "./ChangementSerrureContent";

export default function page() {
    return (
        <Cloaker city="Paris" phone="0185440131" phoneDisplay="01 85 44 01 31">
            <ChangementSerrureContent />
        </Cloaker>
    );
}
