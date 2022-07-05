import { database } from "../database.js";

const usersController = {
    createUser(request, response){
        const { name } = request.body;
    
        if (name.length < 1) {
            return response.status(403).json({ 'mensagem': 'Não é possível cadastrar sem um nome!' })
        }
        database.push(name)
        return response.status(201).json({ 'mensagem': `Foi cadastrado ${name}` })
    },

    getUser (request, response){
        return response.status(200).json(database)
    }
}

export { usersController }