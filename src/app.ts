import express, { Request, Response } from "express"
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
// https://www.prisma.io/docs/concepts/components/prisma-client


app.get("/", async (req: Request, res: Response) => {

    // OR AND SQL
    //
    let deleteUser = await prisma.user.deleteMany({
        where : {
            age : 30
        }
    })
    res.json(deleteUser);
})


app.listen(3000, () => {
    console.log("Server Has Started");
})




// let user = await prisma.user.createMany({
    //     data: [
    //         {
    //             firstName: "Asad",
    //             lastName: "Javed",
    //             age: 16,
    //             email: "asad@gmail.com"
    //         },
    //         {
    //             firstName: "Ahmed",
    //             lastName: "Javed",
    //             age: 21,
    //             email: "ahmed@gmail.com"
    //         },
    //         {
    //             firstName: "Jamshed",
    //             lastName: "Javed",
    //             age: 12,
    //             email: "jamshed@gmail.com"
    //         },
    //     ]
    // })




      // let allUsers = await prisma.user.findMany({
    //     select : {
    //         firstName : true,
    //         lastName : true,
    //         email : true
    //     }
    // });


    // let user = await prisma.user.findUnique({
    //     //     where : {
    //     //         id : 1,
    //     //         email : "afaq@gmail.com"
    //     //     }
    //     // })


    // let allUsers = await prisma.user.findMany({
    //     where : {
    //         OR : [
    //             {id : 1},
    //             {email : 'asad@gmail.com'}
    //         ]
    //     }
    // })



    // let updatedUser = await prisma.user.updateMany({
    //     where : {email : {
    //         contains : "@gmail.com"
    //     }},
    //     data : {age : 30}
    // })