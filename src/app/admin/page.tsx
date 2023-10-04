import {prisma} from "@/../route"


export default async function Page() {

    async function setTrue(title: string) {

    }

    const postItem = await prisma.post.findMany({})
    // const  

    return (
        <div className="min-h-screen ml-64 p-4">
            
        </div>
    )
}