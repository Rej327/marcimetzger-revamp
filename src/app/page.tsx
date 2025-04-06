import { Navigation } from "@/components/Navigation";
import SectionFooter from "@/components/SectionFooter";
import SectionForm from "@/components/SectionForm";
import { SectionGallery } from "@/components/SectionGallery";
import { SectionHero } from "@/components/SectionHero.tsx";
import { SectionServices } from "@/components/SectionServices";
import SectionSocial from "@/components/SectionSocial";
import { SectionSold } from "@/components/SectionSold";
import { SectionWidget } from "@/components/SectionWidget";
export default function Home() {
	return (
		<div>
			<Navigation>
				<SectionHero />
				<SectionSold />
				<SectionWidget />
				<SectionGallery />
				<SectionServices />
				<SectionForm />
				<SectionSocial />
				<SectionFooter />
			</Navigation>
		</div>
	);
}
