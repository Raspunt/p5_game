const  { PrismaClient,Player } = require('@prisma/client')

const prisma = new PrismaClient()





module.exports.ConnectToDb =()=>{
    prisma.$connect()
    console.log('succesely connected to db');
}



module.exports.AddPlayer =()=>{

    const prisma = new PrismaClient()
    const players = new Player(prisma.player)
    
    const player = players.signup({
        username: 'karl',
        x: 0,
        y: 0,
        r: 0
    })


}