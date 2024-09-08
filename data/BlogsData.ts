import { BlogType } from "@/types/types"

export const featuredBlogs: BlogType[] = [
    {
        id: 1,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog1.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
    {
        id: 2,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog2.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
    {
        id: 3,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog3.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
    {
        id: 4,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog4.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
    {
        id: 5,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog5.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
    {
        id: 6,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog6.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
]

export const latestBlogs: BlogType[] = [
    {
        id: 1,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog6.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
    {
        id: 2,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog1.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
    {
        id: 3,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog2.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
    {
        id: 4,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog3.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
    {
        id: 5,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog4.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
    {
        id: 6,
        title: "Exploring the Archipelago Architecture",
        thumbnail: "./blogImages/blog5.png",
        updatedOn: "NOV 20, 2023",
        desc: "The Archipelago Architecture is daily.dev's innovative approach, merging monolithic and microservices architectures. It features multiple deployment units within a single service for independent scaling and efficient data access. This architecture offers scalability and reduced network load, with complexities in management and risk of over-segmentation. Key highlights include its deployment unit strategy, independence from a monorepo setup, and the use of Infrastructure as Code with Pulumi.",
        sections: [
            {
                sectiionTitle:  "Monolith",
                sectionDesc: "In a monolithic architecture, the entire codebase is consolidated into one project with a single deployable unit. This model boasts efficient internal network communication, eliminating the need for remote data fetching. It's an excellent starting point for many projects due to its simplicity and can be effective in the early stages. However, sticking to a monolith can become burdensome as the project expands and the team grows. Code navigation turns complex, a faulty deployment can bring down the entire system, and the lack of separation of concerns becomes evident. Furthermore, inter-team dependencies can create synchronization headaches when multiple teams contribute to the same codebase. This is precisely how daily.dev started, as a monolith project.",

            },
            {
                sectiionTitle:  "Microservices",
                sectionDesc: "Microservices architecture sits at the opposite end of the spectrum, championing highly specialized services that perform singular tasks. Typically, these services are succinct — often just a few hundred lines of code — and encapsulate a minimal portion of the business logic. While fostering separation of concerns, this approach heavily relies on network interactions and can suffer from latency issues. This reliance can also drive up costs, a point that has covered a lot lately (An example). Microservices pair well with serverless computing, riding the same wave of popularity. However, challenges abound. Organizations sometimes lose track of their microservices, occasionally duplicating efforts by creating identical services. This leads to redundant work and adds to the operational overhead.",
            }, 
            {
                sectiionTitle:  "Archipelago",
                sectionDesc: "The Archipelago (a group of islands) approach strikes a harmonious balance between monolithic and microservices architectures. At daily.dev, each service is responsible for a substantial domain. Take, for instance, our feed service, content pipeline, search function, and LLM gateway, to name a few. These services are far from just a few hundred lines of code – they are robust. Yet, the distinctive feature of Archipelago architecture lies in the multiple deployment units contained within a single service. This multiplicity allows for the independent scaling of each unit according to distinct metrics. These units are part of the same codebase and are deployed synchronously — enabling direct data access without the need, in most cases, for synchronous inter-service communication. Like microservices, every service owns its data and is responsible for its infrastructure.",
            },
        ]
    },
]