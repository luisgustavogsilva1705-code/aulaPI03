
import express, { response } from "express";

const host ="0.0.0.0";
const porta = 3000;
var lista_login=[];
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
                    <title>Login</title>
                </head>

                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f2f5; height: 100vh; display: flex; align-items: center; justify-content: center;">

                    
                    <form method="POST" action="/" style="background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 320px; text-align: center;">
                    <h2 style="margin-bottom: 25px; color: #333;">Login</h2>

                    <div style="margin-bottom: 20px; text-align: left;">
                        <label for="exampleInputEmail1" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Email</label>
                        <input type="email" id="exampleInputEmail1" name="Email" 
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
                    </div>

                    <div style="margin-bottom: 20px; text-align: left;">
                        <label for="exampleInputPassword1" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Senha</label>
                        <input type="password" id="exampleInputPassword1" name="senha" 
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

server.post('/', (requisicao, resposta)=>{
    const Email = requisicao.body.Email;
    const senha = requisicao.body.senha;

    let senha_correta = "1234";
    let email_correto = 'admin@email.com';
    if(Email === email_correto && senha === senha_correta)
    {
        lista_login.push({Email,senha});
        resposta.redirect("/telaMenu");
    }
    else
    {  
        let conteudo =
        `
        <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Login</title>
                </head>

                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f2f5; height: 100vh; display: flex; align-items: center; justify-content: center;">

                    
                    <form method="POST" action="/" style="background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 320px; text-align: center;">
                    <h2 style="margin-bottom: 25px; color: #333;">Login</h2>

                    <div style="margin-bottom: 20px; text-align: left;">
                        <label for="exampleInputEmail1" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Email</label>
                        <input type="email" id="exampleInputEmail1" name="Email" value="${Email}"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
                    </div>`
        if(Email !== email_correto)
        {
            conteudo+=
            `
                <div>
                    <p style="color: red; font-size: 15px" >Email incorreto</p>
                </div>
            `
        }
        conteudo+=`
                    <div style="margin-bottom: 20px; text-align: left;">
                        <label for="exampleInputPassword1" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Senha</label>
                        <input type="password" id="exampleInputPassword1" name="senha" 
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
                    </div>`
        if(senha !== senha_correta)
        {
            conteudo+=
            `
                <div>
                    <p style="color: red; font-size: 15px" >Senha incorreto</p>
                </div>
            `
        }
        conteudo+=`
                    <button type="submit"
                        style="width: 100%; background-color: #2E8B57; color: white; border: none; padding: 10px 0; border-radius: 6px; font-size: 16px; cursor: pointer; transition: background-color 0.2s;">
                        Entrar
                    </button>
                    </form>

                </body>
                </html>
        `
        resposta.send(conteudo);
    }

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
                <a class="nav-link active" href="/" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" href="/cadastroFornecedor" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Cadastrar</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" href="/lista_cadastro">Lista de Cadastros</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" href="/" >SAIR</a>
            </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
            <br>
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style="color: green; text-decoration: underline">Login Realizado Com Sucesso!!!</div>
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
                    <input type="text" id="cnpj" name="cnpj" 
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="razaoSocial" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Razão Social / Nome do Fornecedor</label>
                    <input type="text" id="razaoSocial" name="razaoSocial" 
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="nomeFantasia" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Nome Fantasia</label>
                    <input type="text" id="nomeFantasia" name="nomeFantasia" 
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="endereco" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Endereço</label>
                    <input type="text" id="endereco" name="endereco" 
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="cidade" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Cidade</label>
                    <input type="text" id="cidade" name="cidade" 
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="uf" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">UF</label>
                    <input type="text" id="uf" name="uf" maxlength="2" 
                        style="width: 60px; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; text-transform: uppercase;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="cep" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">CEP</label>
                    <input type="text" id="cep" name="cep" 
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="email" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Email</label>
                    <input type="text" id="email" name="email" 
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

               
                <div style="margin-bottom: 20px; text-align: left;">
                    <label for="telefone" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" 
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>

               
                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                    <button type="submit"
                        style="flex: 1; background-color: #2E8B57; color: white; border: none; padding: 10px 0; border-radius: 6px; font-size: 16px; cursor: pointer; transition: background-color 0.2s;">
                        Cadastrar
                    </button>

                    <a href="/telaMenu"
                        style="flex: 1; text-align: center; background-color: #6c757d; color: white; text-decoration: none; padding: 10px 0; border-radius: 6px; font-size: 16px; cursor: pointer; transition: background-color 0.2s;">
                        Voltar
                    </a>
                </div>
                
            </form>

        </body>
        </html>
        `);

});

server.use(express.urlencoded({extended: true}));


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


    if(cnpj && razaoSocial && nomeFantasia && endereco && cidade && uf && cep && email && telefone)
    {
        lista_fornecedores.push({cnpj,razaoSocial,nomeFantasia,endereco,cidade,uf,cep,email,telefone});
        resposta.redirect("/lista_cadastro");
    }
    else
    {
        let conteudo = `

            <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Menu</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            </head>

       <body style="margin: 0; padding: 0; padding-top: 50%; font-family: Arial, sans-serif; background-color: #f0f2f5; height: 100vh; display: flex; align-items: center; justify-content: center;">

            <form method="POST" action="/cadastroFornecedor" 
                style="background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 380px; text-align: center;">

                <h2 style="margin-bottom: 25px; color: #333;">Cadastro de Fornecedor</h2>

                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="cnpj" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">CNPJ</label>
                    <input type="text" id="cnpj" name="cnpj" value="${cnpj}"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>`
        if(!cnpj)
        {
            conteudo+=`<div>
                <p style="color: red";>Por gentileza, informe o CNPJ</p>
            </div>`
        }

        conteudo+=`     
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="razaoSocial" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Razão Social / Nome do Fornecedor</label>
                    <input type="text" id="razaoSocial" name="razaoSocial" value="${razaoSocial}"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>`
        if(!razaoSocial)
        {
            conteudo+=
            `<div>
                <p style="color: red";>Por gentileza, informe a razão social/Nome do Fornecedor </p>
            </div>`
        }

        conteudo+=`              
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="nomeFantasia" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Nome Fantasia</label>
                    <input type="text" id="nomeFantasia" name="nomeFantasia" value="${nomeFantasia}"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>`
        if(!nomeFantasia)
        {
            conteudo+=
            `<div>
                <p style="color: red";>Por gentileza, informe o Nome Fantasia</p>
            </div>`
        }

        conteudo+=`
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="endereco" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Endereço</label>
                    <input type="text" id="endereco" name="endereco" value="${endereco}"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>`
        if(!endereco)
        {
            conteudo+=
            `<div>
                <p style="color: red";>Por gentileza, informe o Endereço</p>
            </div>`
        }

        conteudo+=`   
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="cidade" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Cidade</label>
                    <input type="text" id="cidade" name="cidade" value="${cidade}"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>`
         if(!cidade)
        {
            conteudo+=
            `<div>
                <p style="color: red";>Por gentileza, informe a Cidade</p>
            </div>`
        }

        conteudo+=`                
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="uf" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">UF</label>
                    <input type="text" id="uf" name="uf" maxlength="2" value="${uf}"
                        style="width: 60px; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; text-transform: uppercase;">
                </div>`
         if(!uf)
        {
            conteudo+=
            `<div>
                <p style="color: red";>Por gentileza, informe o UF</p>
            </div>`
        }

        conteudo+=`            
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="cep" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">CEP</label>
                    <input type="text" id="cep" name="cep" value="${cep}"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>`
         if(!cep)
        {
            conteudo+=
            `<div>
                <p style="color: red";>Por gentileza, informe o CEP</p>
            </div>`
        }
        conteudo+=`
                <div style="margin-bottom: 15px; text-align: left;">
                    <label for="email" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Email</label>
                    <input type="text" id="email" name="email" value="${email}"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>`
         if(!email)
        {
            conteudo+=
            `<div>
                <p style="color: red";>Por gentileza, informe o EMAIL</p>
            </div>`
        }
        conteudo+=` 
                <div style="margin-bottom: 20px; text-align: left;">
                    <label for="telefone" style="display: block; font-weight: bold; margin-bottom: 6px; color: #555;">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" value="${telefone}"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;">
                </div>`
         if(!telefone)
        {
            conteudo+=
            `<div>
                <p style="color: red";>Por gentileza, informe o Telefone</p>
            </div>`
        }
        conteudo+=`
                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                    <button type="submit"
                        style="flex: 1; background-color: #2E8B57; color: white; border: none; padding: 10px 0; border-radius: 6px; font-size: 16px; cursor: pointer; transition: background-color 0.2s;">
                        Cadastrar
                    </button>

                    <a href="/telaMenu"
                        style="flex: 1; text-align: center; background-color: #6c757d; color: white; text-decoration: none; padding: 10px 0; border-radius: 6px; font-size: 16px; cursor: pointer; transition: background-color 0.2s;">
                        Voltar
                    </a>
                </div>
            </form>

        </body>
        </html>

        `
        resposta.send(conteudo);
    }

});



server.get("/lista_cadastro", (requisicao, resposta)=>{
    let conteudo=`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Menu</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            </head>
            <body>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>CNPJ</th>
                            <th>Razão Social</th>
                            <th>Fantasia</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>CEP</th>
                            <th>Email</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>`;
            for (let i= 0; i<lista_fornecedores.length; i++)
            {
                conteudo+=`
                <tr>
                    <td>${lista_fornecedores[i].cnpj}</td>
                    <td>${lista_fornecedores[i].razaoSocial} </td>
                    <td>${lista_fornecedores[i].nomeFantasia} </td>
                    <td>${lista_fornecedores[i].endereco} </td>
                    <td>${lista_fornecedores[i].cidade} </td>
                    <td>${lista_fornecedores[i].uf} </td>
                    <td>${lista_fornecedores[i].cep} </td>
                    <td>${lista_fornecedores[i].email} </td>
                    <td>${lista_fornecedores[i].telefone} </td>

                </tr>
              
                `;
            }
            conteudo+=`
                </tbody>
                </table>

               <a href="/telaMenu"
                    style="display: block; width: 150px; margin: 20px auto; text-align: center;
                        background-color: #6c757d; color: white; text-decoration: none;
                        padding: 10px 0; border-radius: 6px; font-size: 16px;
                        cursor: pointer; transition: background-color 0.2s;">
                    Voltar
                </a>

            </body>
        </html>`

        resposta.send(conteudo);
});


// server.listen(3000, () => {
//     console.log("Servidor rodando na porta 3000");
// });
server.listen(porta, host, ()=>{
    console.log(`Servidor rodando em http://localhost:${porta}/`)
});
