import { useParams, useSearchParams } from "react-router-dom";
const Post = () => {
  let { category, id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get('price'));
  console.log(searchParams.get('sort'));
  return (
    <div>
      <h1>Post page - {category}</h1>
      <h1>Post page - {id}</h1>
    </div>
  );
};

export default Post;
