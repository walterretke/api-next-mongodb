import prismaClient from "../prisma";

interface CreateCostomerProps {
    name: string;
    email: string;

}

class CreateCustomerService {
    async execute({name, email}: CreateCostomerProps){
        console.log("ROTA FOI CHAMADA");

        if(!name || !email){
            throw new Error("Nome e email são obrigatórios");
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true,
            }
        });

        return customer;
    }
}

export { CreateCustomerService };