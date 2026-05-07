import { CourseContent } from "./types";
import cloudInfraCourse from "./cloud-infra";
import diplomaCloudComputing from "./diploma-cloud-computing";
import cloudInfraWithDevOps from "./cloud-infra-with-devops";
import azureCloudBasic from "./azure-cloud-for-basic";
import azureCloudProfessional from "./azure-cloud-for-professional";

const cloudinfraCourses: Record<string, CourseContent> = {
    "cloud-infra": cloudInfraCourse,
    "diploma-cloud-computing": diplomaCloudComputing,
    "cloud-infra-with-devops": cloudInfraWithDevOps,
    "azure-cloud-for-basic": azureCloudBasic,
    "azure-cloud-for-professional": azureCloudProfessional,

};

export default cloudinfraCourses;