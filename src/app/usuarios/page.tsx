export default function Usuario(){

    async function handleSearchUsers(formData: FormData){
        'use server'

        const userId = formData.get('userId')

        console.log(userId)
    }

    return (
        <div>
        <h1 className="text-center text-3xl mt-5">Formulário de cadastro</h1>
        <div className="px-10">
            <form 
                className="flex gap-2 my-4"
                action={handleSearchUsers}> 
                
            <input 
                type="text"
                placeholder="ID do usuário"
                className="border border-gray-200"
                name="userId"
                /> 
                <button 
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 "
                    >
                        Enviar
                </button>
            </form>
        </div>
        </div>
    )
}