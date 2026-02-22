import Cloaker from "@/components/Cloaker";
import ApresEffractionContent from "./ApresEffractionContent";

export default function page() {
    return (
        <Cloaker city="Paris" phone="0185440131" phoneDisplay="01 85 44 01 31">
            <ApresEffractionContent />
        </Cloaker>
    );
}
