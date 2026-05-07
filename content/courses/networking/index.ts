import { CourseContent } from "./types";
import ccnaCourse from "./ccna";
import ccnpCourse from "./ccna-ccnp";
import ccnpCoreAdvance from "./ccnp-core-advance";
import diplomaNetworkingCloudAI from "./diploma-networking-cloud-ai";

const ccnaCourses: Record<string, CourseContent> = {
    "ccna": ccnaCourse,
    "ccna-ccnp": ccnpCourse,
    "ccnp-core-advance": ccnpCoreAdvance,
    "diploma-networking-cloud-ai": diplomaNetworkingCloudAI,

};

export default ccnaCourses;