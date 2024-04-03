import { axiosClient } from "../api/axios";




const Api = {

    getCsrfToken : async () =>{
        return await axiosClient.get('/sanctum/csrf-cookie');
    },


    login : async (email, password) => {
        return  await axiosClient.post("api/login", {email, password})
    },

    getTransaction : async () => {
        const sentTransResponse = await axiosClient.get("api/senttrans");
        // console.log(sentTransResponse.data);

        const receivedTransResponse = await axiosClient.get(
            "api/receivedtrans"
        );
        // console.log(receivedTransResponse.data);

        const AllTransactions = {
            sentTransactions: sentTransResponse.data,
            receivedTransactions: receivedTransResponse.data,
        };

        return AllTransactions
    },

    getUser: async () => {
      return await  axiosClient.get('api/user')
    }
}

export default Api;