class Api {

    static get = async (url) => {
        
        try {

            const response = await fetch(url);

            if (!response.ok){
                throw response.error;
            }
            
            return response.json();
            
        } catch (error) {
            return { code: 500, errorMessage: "Ha ocurrido un error interno."}
        }
    }
};

export default Api;