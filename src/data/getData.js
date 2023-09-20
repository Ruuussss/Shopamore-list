import axios from "axios";

const fetch = async(path) =>{

    return await axios.get(path)


}

export default fetch