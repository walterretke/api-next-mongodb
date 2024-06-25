import prismaClient from "../prisma";

interface DeleteCustomerServiceProps {
    id: string;
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerServiceProps){

        if(!id){
            throw new Error("Solictação inválida");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id,
            }
        });

        if(!findCustomer){
            throw new Error("Cliente não encontrado");
        }

        await prismaClient.customer.delete({
            where: {
                id: id,
            }
        });

        return { message: "Cliente deletado com sucesso"};

    }
}

export { DeleteCustomerService };