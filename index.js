
import express from "express";

const host ="0.0.0.0";
const porta = 3000;
var lista_usuario= [];
const server = express();

server.use(express.urlencoded({extended: true}));



server.get("/", (requisicao, resposta)=>{
    resposta.send(`
          <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Cadastro do Cliente</title>
            </head>
            <body>
                <h1 style="text-align: center; text-decoration: underline; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #2E8B57; background-color: #E8F5E9; padding: 15px; border-radius: 8px;">
                    Cadastro de Usuário
                </h1>

                <div style="display: flex; justify-content: center; background-color: #f9f9f9; font-size: 18px; padding: 40px; border: 2px solid #2E8B57; border-radius: 12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; width: 50%; margin: auto; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <form method="POST" action="/">

                        <label for="nome">Nome:</label><br>
                        <input type="text" id="nome" name="nome" size="30" style="margin-bottom: 10px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;"><br>

                        <label for="email">Email:</label><br>
                        <input type="text" id="email" name="email" size="30" style="margin-bottom: 10px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;"><br>

                        <label for="cid">Cidade:</label><br>
                        <input type="text" id="cid" name="cidade" size="30" style="margin-bottom: 10px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;"><br>

                        <label for="estado">Estado:</label><br>
                        <input type="text" id="estado" name="estado" size="30" style="margin-bottom: 15px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;"><br>

                        <button type="submit" style="background-color: #2E8B57; color: white; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer;">
                            Enviar
                        </button>

                    </form>
                </div>
                
            </body>
        </html>
        `);
});

server.post('/', (requisicao, resposta) =>{
    const nome= requisicao.body.nome;
    const email = requisicao.body.email;
    const cidade= requisicao.body.cidade;
    const estado= requisicao.body.estado;
    
    lista_usuario.push({nome,email,cidade,estado});
    resposta.redirect("/lista_usuario");
});


server.get("/lista_usuario", (requisicao, resposta)=> {
    let conteudo = ` 
            <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Cadastro do Cliente</title>
            </head>
            <body>
             <h1 style="text-align: center; background-color: #4CAF50; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-decoration: underline;">
                Lista de Usuários Cadastrados
            </h1>

                <div style="display: flex; justify-content: center; background-color: #f2f2f2; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333;">
                    <table border="1" style="border-collapse: collapse; background-color: white; width: 80%; text-align: center;">
                        <thead>
                            <tr style="background-color: #ddd; color: #000;">
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                    
                    <tbody>`;
    for(let i= 0; i<lista_usuario.length; i++)
    {
        conteudo += `
            <tr>
                <td>${lista_usuario[i].nome}</td>
                <td>${lista_usuario[i].email}</td>
                <td>${lista_usuario[i].cidade}</td>
                <td>${lista_usuario[i].estado}</td>
            </tr>
        `;
    }
    conteudo+=`     </tbody>
                    </table>
            </body>
            </div>
        </html>
    `
    resposta.send(conteudo);
});


// server.listen(3000, () => {
//     console.log("Servidor rodando na porta 3000");
// });
server.listen(porta, host, ()=>{
    console.log(`Servidor rodando em http://localhost:${porta}/`)
});
