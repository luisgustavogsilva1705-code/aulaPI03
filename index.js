
import express, { response } from "express";

const host ="0.0.0.0";
const porta = 3000;
// var lista_usuario= [];
const server = express();
var lista_fornecedores=[];

server.use(express.urlencoded({extended: true}));
server.use(express.json());



server.get("/",(requisicao, resposta)=>{
    resposta.send(`

            <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Cadastro do Cliente</title>
                </head>

                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f2f5; height: 100vh; display: flex; align-items: center; justify-content: center;">

                    <!-- alterado apenas o "action" para /telaMenu e mantido method="POST" -->
                    <form method="POST" action="/telaMenu" style="background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 320px; text-align: center;">
                    <h2 style="margin-bottom: 25px; color: #333;">Login</h2>

                    <div style="margin-bottom: 20px; text-align: left;">
                        <label for="exampleInputEmail1" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Email</label>
                        <input type="email" id="exampleInputEmail1" name="email" required
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
                        <div style="font-size: 12px; color: #777; margin-top: 4px;">Nunca compartilharemos seu email com ninguém.</div>
                    </div>

                    <div style="margin-bottom: 20px; text-align: left;">
                        <label for="exampleInputPassword1" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Senha</label>
                        <input type="password" id="exampleInputPassword1" name="senha" required
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
                    </div>

                    <button type="submit"
                        style="width: 100%; background-color: #2E8B57; color: white; border: none; padding: 10px 0; border-radius: 6px; font-size: 16px; cursor: pointer; transition: background-color 0.2s;">
                        Entrar
                    </button>
                    </form>

                </body>
                </html>
        `);

});

server.post("/telaMenu", (req, res) => {
  res.redirect("/telaMenu");
});

server.get("/telaMenu",(requisicao, resposta)=>{
    resposta.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Menu</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            </head>
        <body>

            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" href="/cadastroFornecedor" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Cadastrar</a>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Lista de Cadastros</button>
            </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Cadastro de Fornecedor</div>
            </div>

        </body>
        </html>

    `);

});

server.get("/cadastroFornecedor", (requisicao, resposta)=>{
    resposta.send(`

         <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Menu</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            </head>

       <body style="margin: 0; padding: 0; padding-top: 20%; font-family: Arial, sans-serif; background-color: #f0f2f5; height: 100vh; display: flex; align-items: center; justify-content: center;">

            <form method="POST" action="/cadastroFornecedor" 
                style="background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 380px; text-align: center;">

                <h2 style="margin-bottom: 25px; color: #333;">Cadastro de Fornecedor</h2>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="cnpj" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">CNPJ</label>
                    <input type="text" id="cnpj" name="cnpj" required
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="razaoSocial" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Razão Social / Nome do Fornecedor</label>
                    <input type="text" id="razaoSocial" name="razaoSocial" required
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="nomeFantasia" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Nome Fantasia</label>
                    <input type="text" id="nomeFantasia" name="nomeFantasia" required
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="endereco" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Endereço</label>
                    <input type="text" id="endereco" name="endereco" required
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="cidade" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Cidade</label>
                    <input type="text" id="cidade" name="cidade" required
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="uf" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">UF</label>
                    <input type="text" id="uf" name="uf" maxlength="2" required
                        style="width: 60px; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; text-transform: uppercase;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="cep" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">CEP</label>
                    <input type="text" id="cep" name="cep" required
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="email" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Email</label>
                    <input type="email" id="email" name="email" required
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

               
                <div style="margin-bottom: 20px; text-align: left;">
                    <label for="telefone" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" required
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

               
                <button type="submit"
                    style="width: 100%; background-color: #2E8B57; color: white; border: none; padding: 10px 0; border-radius: 6px; font-size: 16px; cursor: pointer; transition: background-color 0.2s;">
                    Cadastrar
                </button>
            </form>

        </body>
        </html>
        `);

});

server.post('/cadastroFornecedor', (requisicao, resposta)=>{
    const cnpj= requisicao.body.cnpj;
    const razaoSocial= requisicao.body.razaoSocial;
    const nomeFantasia = requisicao.body.nomeFantasia;
    const endereco = requisicao.body.endereco;
    const cidade = requisicao.body.cidade;
    const uf= requisicao.body.uf;
    const cep= requisicao.body.cep;
    const email= requisicao.body.email;
    const telefone=requisicao.body.telefone;

});

// server.get("/", (requisicao, resposta)=>{
//     resposta.send(`
//           <!DOCTYPE html>
//         <html>
//             <head>
//                 <meta charset="UTF-8">
//                 <title>Cadastro do Cliente</title>
//             </head>
//             <body>
//                 <h1 style="text-align: center; text-decoration: underline; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #2E8B57; background-color: #E8F5E9; padding: 15px; border-radius: 8px;">
//                     Cadastro de Usuário
//                 </h1>

//                 <div style="display: flex; justify-content: center; background-color: #f9f9f9; font-size: 18px; padding: 40px; border: 2px solid #2E8B57; border-radius: 12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; width: 50%; margin: auto; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
//                     <form method="POST" action="/">

//                         <label for="nome">Nome:</label><br>
//                         <input type="text" id="nome" name="nome" size="30" style="margin-bottom: 10px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;"><br>

//                         <label for="email">Email:</label><br>
//                         <input type="text" id="email" name="email" size="30" style="margin-bottom: 10px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;"><br>

//                         <label for="cid">Cidade:</label><br>
//                         <input type="text" id="cid" name="cidade" size="30" style="margin-bottom: 10px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;"><br>

//                         <label for="estado">Estado:</label><br>
//                         <input type="text" id="estado" name="estado" size="30" style="margin-bottom: 15px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;"><br>

//                         <button type="submit" style="background-color: #2E8B57; color: white; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer;">
//                             Enviar
//                         </button>

//                     </form>
//                 </div>
                
//             </body>
//         </html>
//         `);
// });

server.post('/', (requisicao, resposta) =>{
    const nome= requisicao.body.nome;
    const email = requisicao.body.email;
    const cidade= requisicao.body.cidade;
    const estado= requisicao.body.estado;

    if(nome && email && cidade && estado)
    {
        lista_usuario.push({nome,email,cidade,estado});
        resposta.redirect("/lista_usuario");
    }
    else
    {
        let conteudo = 
        `
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

                        <label for="nome">Nome: </label><br>
                        <input type="text" id="nome" name="nome" size="30" style="margin-bottom: 10px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;" value="${nome}" ><br>`;
        if(!nome)
        {
            conteudo += 
            `
            <div>
                <p style="color: red;" > Por favor, informe o nome do usuário</p>
            </div>
            `
        }
                    
        conteudo +=`
                        <label for="email">Email:</label><br>
                        <input type="text" id="email" name="email" size="30" style="margin-bottom: 10px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;" value="${email}" ><br>`
        if(!email)
        {
            conteudo+=
            `
            <div>
                <p style="color: red;" > Por favor, informe o email do usuário</p>
            </div>
            `;
        }
        
        
        conteudo+=`
                        <label for="cid">Cidade:</label><br>
                        <input type="text" id="cid" name="cidade" size="30" style="margin-bottom: 10px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;" value="${cidade}" ><br>`

        if(!cidade)
        {
            conteudo+=
            `
            <div>
                <p style="color: red;" > Por favor, informe a cidade do usuário</p>
            </div>
            `;
        }
         

        conteudo+=`
        
                        <label for="estado">Estado:</label><br>
                        <input type="text" id="estado" name="estado" size="30" style="margin-bottom: 15px; padding: 5px; border: 1px solid #ccc; border-radius: 4px;" value="${estado}"  ><br>`
        if(!estado)
        {
             conteudo+=
            `
            <div>
                <p style="color: red;" > Por favor, informe o estado do usuário</p>
            </div>
            `;
        }
        
        conteudo+=`
                        <button type="submit" style="background-color: #2E8B57; color: white; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer;">
                            Enviar
                        </button>

                    </form>
                </div>
                
            </body>
        </html>
        
        `;

        resposta.send(conteudo); 

    }
    
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
