import { Theater } from "./Theater";

export class Cinema {
    _id: string;
    status: boolean;
    slug: string;
    citySlug: string;
    name: string;
    tags: [string];
    hasPmrService: boolean
    theaters: [Theater];
    hallCount: number;
    seatCount: number;
    backdrop: string;
    comment: string;
    refImageItinerary: string;
    description: string;
    refCCS: string;
    googleMyBusinessUrl: string;
}

