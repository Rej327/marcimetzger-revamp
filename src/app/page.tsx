import { Navigation } from "@/components/Navigation";
import SectionFooter from "@/components/SectionFooter";
import SectionForm from "@/components/SectionForm";
import { SectionGallery } from "@/components/SectionGallery";
import { SectionProjects } from "@/components/SectionProjects";
// import { SectionHero } from "@/components/SectionHero.tsx";
import { SectionServices } from "@/components/SectionServices";
import SectionSocial from "@/components/SectionSocial";
import { SectionSold } from "@/components/SectionSold";
import SectionStack from "@/components/SectionStack";
import SectionTraining from "@/components/SectionTraining";
import { SectionWidget } from "@/components/SectionWidget";
import { Header } from "@/components/ui/heroParallax";
import SocialLinks from "@/components/ui/socialLinks";
export default function Home() {
	return (
		<div>
			<Navigation>
				<Header />
				<div className="mt-40 mx-auto bg-white w-full z-100">
					<SectionTraining />
				</div>
				<div className="bg-white w-full">
					<div className="bg-[#263f3d] mx-auto rounded-lg w-[94%]">
						<SectionStack />
					</div>
				</div>
				<SectionProjects />
				{/* <SectionHero /> */}
				{/* <SectionSold /> */}
				{/* <SectionWidget /> */}
				{/* <SectionGallery /> */}
				{/* <SectionServices /> */}
				{/* <SectionForm /> */}
				{/* <SectionSocial /> */}
				{/* <SectionFooter /> */}
			</Navigation>
		</div>
	);
}
