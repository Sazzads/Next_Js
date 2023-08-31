import { useParams, useSearchParams } from "next/navigation";

const SingleBlog = ({ params }) => {

    return (
        <div>
            single blog {params.id}
        </div>
    );
};

export default SingleBlog;