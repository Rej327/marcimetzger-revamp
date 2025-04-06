import { FocusCards } from "@/components/ui/focusCards";

export function SectionWidget() {
	const cards = [
		{
			title: "The Ridge Reality Group",
			src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100",
		},
		{
			title: "Equal Housing Opportunity",
			src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:100,h:100,cg:true",
		},
		{
			title: "Realtor",
			src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:112,h:100,cg:true",
		},
		{
			title: "Chamber of Commerce",
			src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100",
		},
	];

	return <FocusCards cards={cards} />;
}
