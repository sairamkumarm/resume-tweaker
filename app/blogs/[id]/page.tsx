import { LandingNav } from "@/components/LandingNav";
import { Breadcrumbs } from "@/components/BlogBreadCrumbs";
import { 
    Card,
    CardContent,
    CardTitle,
 } from "@/components/ui/card";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Blog() {
    const blog = {
        id: 6,
        title: "Adding the DevCard to your GitHub profile",
        thumbnail: "/blogImages/blog5.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Creating a GitHub profile page",
                sectionDesc: "Perhaps you are still without a GitHub profile and not sure how you can create one yourself.The process of creating one is not too hard to follow.Head over to GitHub and create a new public repository. The name of this repository must be your username.For example, if your GitHub username is FrancescoXX, the repository name should be FrancescoXX.",
            },
            {
                sectiionTitle:  "Manually adding the DevCard to your GitHub profile",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
            {
                sectiionTitle:  "Creating a GitHub profile page",
                sectionDesc: "Perhaps you are still without a GitHub profile and not sure how you can create one yourself.The process of creating one is not too hard to follow.Head over to GitHub and create a new public repository. The name of this repository must be your username.For example, if your GitHub username is FrancescoXX, the repository name should be FrancescoXX.",
            }
        ]
    };

    return (
        <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto my-20 sm:px-10 px-5">
            <div className="max-w-7xl w-full h-auto">
                <LandingNav />
                <Breadcrumbs />
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-8">
                    {blog.title}
                </h1>
                <p className="my-8">{blog.updatedOn}</p>
                <div className="grid grid-cols-6 gap-8 my-8">
                    <img src={blog.thumbnail} className="col-span-4 rounded-md h-[60vh] w-full" alt={blog.title} />
                    <div className="col-span-2">
                        <ScrollArea className="h-[60vh] rounded-md border px-4 py-6">
                            <div className="w-full flex justify-center mt-4">
                                <h4 className="text-2xl font-medium leading-none">Table of contents</h4>
                            </div>
                            <div className="w-full flex px-4 justify-center">
                                <ul className="p-6 list-disc">
                                    {blog.sections.map((sec) => (
                                    <li key={sec.sectiionTitle} className="my-2 py-2 list-outside pl-4">
                                        <Link href={"#" + sec.sectiionTitle} className="cursor-pointer flex">
                                        <span className="text-primary hover:underline inline-block">{sec.sectiionTitle}</span>
                                        </Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                        </ScrollArea>
                    </div>
                </div>
                <Card id="description" className="my-8 p-6 flex gap-4 bg-secondary">
                    <span className="text-2xl mt-6">🎯 </span>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        {blog.desc}
                    </p>
                </Card>
                {blog.sections.length > 0 && blog.sections.map((sec, idx) => (
                    <section key={sec.sectiionTitle} id={sec.sectiionTitle}>
                        <h3 className="mt-8 scroll-m-20 text-3xl font-semibold tracking-tight">
                            {sec.sectiionTitle}
                        </h3>
                        <p className="leading-8 text-xl text-slate-300 [&:not(:first-child)]:mt-6">
                           {sec.sectionDesc}
                        </p>
                    </section>
                ))}
            </div>
        </main>
    );
}
