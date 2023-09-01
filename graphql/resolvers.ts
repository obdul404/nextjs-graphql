import { Context } from "@/pages/api/graphql";

export const resolvers = {
	Query: {
		//get user by id
		user: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.user.findUnique({
                where:{
                    id: args.id
                }
            });
		},
		// get all users
		users: async (_parent: any, _args: any, context: Context) => {
			return await context.prisma.user.findMany();
		},
	},
    Mutation: {
		// add novel
		addUser: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.user.create({
				data: {
					name: args.name,
					email: args.email,
                    role: args.role
				},
			});
		}
    }
};