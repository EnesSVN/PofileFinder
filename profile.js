class Profile{
    constructor(){
        this.clientid = "",
        this.clientsecret = ""
    }


    async getProfile(username){
        const prfileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
 
        const profile = await prfileResponse.json()
        
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)

        const todo = await todoResponse.json()

        return {
            profile,
            todo
        }

    }

}