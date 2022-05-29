
export default function (request = "", token = "", body){
    return {
        method: request,
        body: JSON.stringify(body),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-Type": "application/json; charset=UTF-8",
            "token" : token,
        }
    }
}
