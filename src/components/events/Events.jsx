import { EventBox } from "./EventBox";
import { SectionHeader } from "./SectionHeader";

import { EventsData } from "../../../public/data/events";

export const Events = () => {
	const events = EventsData;

	console.log(events)

	return (
		<section className="section" id='tours'>
			<div className="container mx-auto">
				<SectionHeader pretitle="World Tour" title="Upcoming Events" />
				{/* event box */}
				<EventBox events={events} />
			</div>
		</section>
	)
}
