

const SingleBlog = ({ params }) => {
    const [year, id] = params.segments || [];
    return (
        <div>
            single blog {year || new Date().getFullYear()} for {id}
        </div>
    );
};

export default SingleBlog;