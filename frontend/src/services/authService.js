// later we will replace this with real API calls to the backend server for authentication
const authService = {

    login: async (credentials) => {

        return new Promise((resolve,reject)=>{

            setTimeout(()=>{

                if(
                    credentials.email==="admin@school.com"
                    &&
                    credentials.password==="123456"
                ){

                    resolve({

                        token:"jwt-token",

                        refreshToken:"refresh-token",

                        user:{

                            id:1,

                            name:"School Admin",

                            email:"admin@school.com",

                            role:"Admin"
                        }

                    });

                }else{

                    reject(
                        new Error("Invalid email or password.")
                    );

                }

            },1200);

        });

    }

}

export default authService;