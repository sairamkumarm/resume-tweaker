export type BlogType = {
    id: number,
    title: string;
    thumbnail: string;
    updatedOn: string;
    desc: string;
    sections: [
        {
            sectiionTitle:  string;
            sectionDesc: string;
        },
        {
            sectiionTitle:  string;
            sectionDesc: string;
        }, 
        {
            sectiionTitle:  string;
            sectionDesc: string;
        },
    ]
}