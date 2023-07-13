import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '55212714c7fe440b85ab04e641bd126b'
    }
})
export {CanceledError}