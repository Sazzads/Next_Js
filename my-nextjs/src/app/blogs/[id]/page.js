import loadBlogData from "@/utils/loadBlogData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
export const generateMetadata = async ({ params }) => {
    const { id, title, body } = await loadSingleBlogData(params.id)

    return {
        title: `${title} || Next Hero `
    }
}
export const generateStaticParams = async () => {
    const blogs = await loadBlogData()
    return blogs.map(({ id }) => ({
        id:id.toString()
    }))
}
const SingleBlog = async ({ params }) => {
    const { id, title, body } = await loadSingleBlogData(params.id)

    return (
        <div className="container mx-auto">
            <div className=" border border-blue-500 p-2 my-2 mx-2">
                <h2 className="text-2xl">{id}. {title} </h2>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default SingleBlog;