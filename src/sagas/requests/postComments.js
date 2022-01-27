import { create } from "apisauce";

export default async function requestGetComments(pid){
    let data = []
    const api = create({
        baseURL: 'https://gorest.co.in/public/v1',
        headers: {
            'Content-type': 'application/json', 
            'Accept':'application/json', 
            'Authorization': 'Bearer fdb9e9b30872cc947737a31a8b298630856f9eef188a18ba1252f722dd767b82'
        }
    })
    await api.get(`/posts/${pid}/comments`).then(response => {
        if(response.ok)
            data = response.data.data                 
    })
    return data 
}