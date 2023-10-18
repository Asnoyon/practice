
import axios from "./Axios";

const usPost = (dataToSubmit) =>{
    axios({
        url: "posts",
        method: "POST",
        data: dataToSubmit,
      }).then((res) => {
        console.log(res);
      });
}

export default usPost;