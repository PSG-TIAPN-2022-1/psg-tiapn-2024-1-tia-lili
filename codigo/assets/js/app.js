function validate(val) {
    v1 = document.getElementById("fname");
    v2 = document.getElementById("lname");
    v3 = document.getElementById("email");
    v4 = document.getElementById("mob");
    v5 = document.getElementById("job");
    v6 = document.getElementById("ans");

    flag1 = true;
    flag2 = true;
    flag3 = true;
    flag4 = true;
    flag5 = true;
    flag6 = true;

    if(val>=1 || val==0) {
        if(v1.value == "") {
            v1.style.borderColor = "red";
            flag1 = false;
        }
        else {
            v1.style.borderColor = "green";
            flag1 = true;
        }
    }

    if(val>=2 || val==0) {
        if(v2.value == "") {
            v2.style.borderColor = "red";
            flag2 = false;
        }
        else {
            v2.style.borderColor = "green";
            flag2 = true;
        }
    }
    if(val>=3 || val==0) {
        if(v3.value == "") {
            v3.style.borderColor = "red";
            flag3 = false;
        }
        else {
            v3.style.borderColor = "green";
            flag3 = true;
        }
    }
    if(val>=4 || val==0) {
        if(v4.value == "") {
            v4.style.borderColor = "red";
            flag4 = false;
        }
        else {
            v4.style.borderColor = "green";
            flag4 = true;
        }
    }
    if(val>=5 || val==0) {
        if(v5.value == "") {
            v5.style.borderColor = "red";
            flag5 = false;
        }
        else {
            v5.style.borderColor = "green";
            flag5 = true;
        }
    }
    if(val>=6 || val==0) {
        if(v6.value == "") {
            v6.style.borderColor = "red";
            flag6 = false;
        }
        else {
            v6.style.borderColor = "green";
            flag6 = true;
        }
    }

    flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;

    return flag;
}

function verif_login(){
    // Verifica se há um usuário logado no localStorage
    if (localStorage.getItem('usuario')) {
        // Obtém os dados do usuário
        var usuario = JSON.parse(localStorage.getItem('usuario'));
        var nome = usuario.nome;

        // Cria o novo conteúdo do link
        var linkHTML = `<a class="nav-link text-white" href="#" onclick="deslogar()"><spam>${nome}</spam> (sair)</a>`;
        
        // Atualiza a div com id "login_verif"
        document.getElementById('login_verif').innerHTML = linkHTML;
    } else {
        // Caso não haja usuário logado, mantém o link original
        // Neste caso, não é necessário fazer nada, pois o HTML inicial já contém o link "login"
    }
}
    
// Função para deslogar o usuário
function deslogar() {
    // Aqui você pode limpar o localStorage, redirecionar para a página de login, etc.
    localStorage.removeItem('usuario');
    // Exemplo de redirecionamento para a página de login
    window.location.href = 'pages/login.html';
}
    



function show_fechado(){
    alert("Restaurante fechado no momento, volte mais tarde ou entre em contato pelo whatsapp em +55 31 7114-1408")

}

function exibe_tipo_carnes(){
  
    str=''

    str_status=''

    fetch('http://localhost:3000/tipo_carnes')
        .then(response => response.json())
        .then(data => {      


            fetch('http://localhost:3000/restaurantes')
            .then(response => response.json())
            .then(data_restaurante => {      

                const rests = Object.values(data_restaurante)
                //console.log(rest);
                
                let rest = rests[0][0];
                
                // tamanho das imagens 287x190
                
                const carnes = Object.values(data)
                console.log(carnes);
                for (let i = 0; i < carnes[0].length; i++) {
                    let carne = carnes[0][i];
                    //console.log(carne);
                    
                    // tamanho das imagens 287x190

                    if(carne.disponivel){
                        if(rest.status==0){
                            //console.log(rest);
                            str_status += `onclick="show_fechado()"`
                        } else {
                            str_status += `href="pages/marmita.html?id=${carne.id}"`
                        }
                        str += `
                                <div class="col-lg-4 col-md-6 mb-4">
                                    <div class="card" >
                                        <div class="d-none d-md-block">
                                            <!-- Imagem para telas grandes -->
                                            <img src="${carne.img}" alt="" class="card-img-top ">
                                            
                                            <div class="card-body ">
                                                <h5 class="card-title">${carne.nome}</h5>
                                                <p class="card-text">Selecione acompanhamentos</p>
                                                <a ${str_status} class="btn btn-outline-success btn-sm">Adicionar</a>
                                            </div>

                                        </div>
                                        <div class=" d-flex d-md-block flex-row flex-md-column d-md-none image-container">
                                            <!-- Imagem para telas pequenas -->
                                            <img src="${carne.img}" alt="" class="card-img-top d-md-none" style="width: 50%;">
                                
                                            <div class="card-body d-md-none" style="width: 50%;">
                                                <h5 class="card-title">${carne.nome}</h5>
                                                <p class="card-text">Selecione acompanhamentos</p>
                                                <a ${str_status} class="btn btn-outline-success btn-sm">Adicionar</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                `
                                document.querySelector('#marmitas_carnes').innerHTML=str
                    }
    
                }
            }).catch(error => {
                console.error('Erro ao enviar dados:', error);
            });
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
}

function exibe_bebidas(){
  
    str2=''

    fetch('http://localhost:3000/bebidas')
        .then(response => response.json())
        .then(data => {      

            const bebidas = Object.values(data)
            console.log(bebidas);
            for (let i = 0; i < bebidas[0].length; i++) {
                let bebida = bebidas[0][i];
                //console.log(bebida);
                //
                
                if(bebida.disponivel==1){
                    str2 += `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <div class="d-none d-md-block">
                                <!-- Imagem para telas grandes -->
                                <img src="${bebida.img}" alt="" class="card-img-top ">
                                
                                <div class="card-body ">
                                    <h5 class="card-title">${bebida.nome}</h5>
                                    <p class="card-text">R$${bebida.valor},00</p>
                                    <a onclick="const usuario_id = JSON.parse(localStorage.getItem('usuario')).id; add_bebida(${bebida.id},usuario_id)" href="pages/carrinho.html" class="btn btn-outline-success btn-sm">Adicionar</a>
                                </div>

                            </div>
                            <div class=" d-flex d-md-block flex-row flex-md-column d-md-none">
                                <!-- Imagem para telas pequenas -->
                                <img src="${bebida.img}" alt="" class="card-img-top d-md-none" style="width: 50%;">
                    
                                <div class="card-body d-md-none" style="width: 50%;">
                                    <h5 class="card-title">${bebida.nome}</h5>
                                    <p class="card-text">R$${bebida.valor},00</p>
                                    <a onclick="const usuario_id = JSON.parse(localStorage.getItem('usuario')).id; add_bebida(${bebida.id},usuario_id)" href="pages/carrinho.html" class="btn btn-outline-success btn-sm">Adicionar</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    `
                    document.querySelector('#bebidas_list').innerHTML=str2
                }
            }
        
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
}

function exibe_uma_bebida(id){
  
    str2=''

    fetch('http://localhost:3000/bebidas'+id)
        .then(response => response.json())
        .then(data => {      

            const bebida = Object.values(data)[0][i]
            console.log(bebida);
            
                
            if(bebida.disponivel==1){
                str2 += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card">
                        <div class="d-none d-md-block">
                            <!-- Imagem para telas grandes -->
                            <img src="${bebida.img}" alt="" class="card-img-top ">
                            
                            <div class="card-body ">
                                <h5 class="card-title">${bebida.nome}</h5>
                                <p class="card-text">R$${bebida.valor},00</p>
                                <a onclick="add_bebida(${bebida.id})" href="pages/carrinho.html" class="btn btn-outline-success btn-sm">Adicionar</a>
                            </div>

                        </div>
                        <div class=" d-flex d-md-block flex-row flex-md-column d-md-none">
                            <!-- Imagem para telas pequenas -->
                            <img src="${bebida.img}" alt="" class="card-img-top d-md-none" style="width: 50%;">
                
                            <div class="card-body d-md-none" style="width: 50%;">
                                <h5 class="card-title">${bebida.nome}</h5>
                                <p class="card-text">R$${bebida.valor},00</p>
                                <a onclick="add_bebida(${bebida.id})" href="pages/carrinho.html" class="btn btn-outline-success btn-sm">Adicionar</a>
                            </div>

                        </div>
                    </div>
                </div>
                
                `
                document.querySelector('#bebidas_list').innerHTML=str2
            }
        
        
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
}

async function exibe_uma_marmita(id){
  
    str_marmita =''

    await fetch('http://localhost:3000/marmita/'+id)
        .then(response => response.json())
        .then(data => {      

            const carne = Object.values(data)[0][i]
            //console.log(bebida);
            
                
            if(carne.disponivel){
                str_marmita += `
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card" >
                                <div class="d-none d-md-block">
                                    <!-- Imagem para telas grandes -->
                                    <img src="db/imagens/tipo_carnes/${carne.id}.jpg" alt="" class="card-img-top ">
                                    
                                    <div class="card-body ">
                                        <h5 class="card-title">${carne.nome}</h5>
                                        <p class="card-text">Selecione acompanhamentos</p>
                                        <a href="pages/marmita.html?id=${carne.id}" class="btn btn-outline-success btn-sm">Adicionar</a>
                                    </div>

                                </div>
                                <div class=" d-flex d-md-block flex-row flex-md-column d-md-none image-container">
                                    <!-- Imagem para telas pequenas -->
                                    <img src="db/imagens/tipo_carnes/${carne.id}.jpg" alt="" class="card-img-top d-md-none" style="width: 50%;">
                        
                                    <div class="card-body d-md-none" style="width: 50%;">
                                        <h5 class="card-title">${carne.nome}</h5>
                                        <p class="card-text">Selecione acompanhamentos</p>
                                        <a href="pages/marmita.html?id=${carne.id}" class="btn btn-outline-success btn-sm">Adicionar</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        `
                    }
                    
                    
            return str_marmita
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
}
// FUNÇÕES PARA ADD UMA MARMITA AO PEDIDO

function exibe_um_tipo_carne(id){
  
    str=''

    fetch('http://localhost:3000/tipo_carnes/'+id)
        .then(response => response.json())
        .then(data => {      
            
            const carnes = data.tipo_carne;
            //console.log(carnes.valor_p);
            document.querySelector('#tipo_carnes_nome').innerHTML=`${carnes.nome}`
            
            document.querySelector('#valor_p').innerHTML=`<input name="radio" id="radio1" type="radio" onclick="calcular_valor(${carnes.valor_p}.00, 1)"><label class="d-flex flex-row justify-content-between" for="radio1"><h6>Pequena</h6><h6 class="valor" >R$${carnes.valor_p},00</h6> </label>`
            document.querySelector('#valor_g').innerHTML=`<input name="radio" id="radio2" type="radio" onclick="calcular_valor(${carnes.valor_g}.00, 2)"><label class="d-flex flex-row justify-content-between" for="radio2"><h6>Grande</h6><h6 class="valor" >R$${carnes.valor_g},00</h6> </label>`
            
            
            
            
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
        
}

function exibe_acompanhamentos(){
    str3=''
    fetch('http://localhost:3000/acompanhamentos')
        .then(response => response.json())
        .then(data => {      

            const acomps = Object.values(data)
            //console.log(acomps);
            for (let i = 0; i < acomps[0].length; i++) {
                let acomp = acomps[0][i];
                //console.log(bebida);
                if(acomp.disponivel==1){
                    
                    str3+=`<div class="checkbox-item col-12"><input name="${acomp.id}" id="checkbox${acomp.id}" type="checkbox"><label for="checkbox${i+1}">${acomp.nome}</label></div>`
                }
                
                
            }
            document.querySelector('#acompanhamentos_DB').innerHTML=str3
        
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });


}

async function getSelectedCheckboxes(tamanho, tipo_carnes_id1, obs, user_id) {
    
    // Seleciona todos os checkboxes dentro da div com id 'acompanhamentos_DB'
    const checkboxes = document.querySelectorAll('#acompanhamentos_DB input[type="checkbox"]');
    const selected = [];
    let marmita_id;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            // Adiciona o atributo name do checkbox ao array selected
            selected.push(checkbox.name);
        }
    });

    if (tamanho == 0) {
        alert("Escolha o tamanho da marmita.");
        window.location.href = "marmita.html?id=" + tipo_carnes_id1;
    } else if (selected.length < 3) {
        alert("Escolha pelo menos 3 acompanhamentos");
        window.location.href = "marmita.html?id=" + tipo_carnes_id1;
    } else {
        try {
            marmita_id = await add_marmita(tamanho, tipo_carnes_id1, obs);
            selected.forEach(element => {
                add_acomps(marmita_id,element);
            });
            pedidos_id = await read_pedido(user_id);
            
            
            create_pedido_marmitas(pedidos_id,marmita_id)
            
            //alert("pause2");

            window.location.href = "carrinho.html"  ;
        } catch (error) {
            console.error('Erro ao enviar marmita:', error);
        }
    }
}

// FUNÇÕES PARA ADD MARMITA


async function add_marmita(tamanho, tipo_carnes_id1, obs) {
    console.log("Função add_marmita");
    let marmita = {
        "tipo_carnes_id1": tipo_carnes_id1,
        "tamanho": tamanho,
        "obs": obs
    };

    try {
        const response = await fetch('http://localhost:3000/marmitas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(marmita),
        });
        console.log('Dados enviados com sucesso:', response);
        if (!response.ok) {
            throw new Error('Erro ao enviar dados!');
        }

        const data = await response.json();
        console.log('Dados enviados com sucesso:', data);
        const newMarmitaId = data.dados.id;
        console.log('ID da nova marmita:', newMarmitaId);
        return newMarmitaId;
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        throw error;
    }
}

async function read_marmitas(marmita_id) {
    //console.log("Função read_marmitas: "+ marmita_id);
    try {
        const response = await fetch('http://localhost:3000/marmitas/' + marmita_id);
        const data = await response.json();
        const marmita = Object.values(data);
        //console.log(marmita[0]);
        return await marmita[0];
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        return -1;
    }
}

async function del_pedido_marmita(marmita_id) {
    console.log("Função del_pedido_marmita");

    try {
        const response = await fetch(`http://localhost:3000/marmitas/${marmita_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar dados!');
        }

        const data = await response.json();
        console.log('Marmita deletada com sucesso:', data);
        window.location.reload();
        return data.mensagem;
    } catch (error) {
        console.error('Erro ao deletar dados:', error);
        throw error;
    }

}


// CRUD TIPO_CARNES
async function create_tipo_carnes() {
    console.log("Função create_tipo_carnes");

    // Get form elements
    const nome = document.getElementById('nome').value;
    const foto = document.getElementById('foto').files[0];
    const valorP = document.getElementById('valorP').value;
    const valorG = document.getElementById('valorG').value;

    const imageUrl = await uploadImageToImgBB(foto, "tipo_carne_"+nome);

    // Validate form fields
    if (nome === '') {
        alert('Preencha "Nome"!');
        return;
    }

    if (!foto) {
        alert('Escolha uma imagem!');
        return;
    }

    if (valorP === '') {
        alert('Preencha "Valor P"!');
        return;
    }

    if (valorG === '') {
        alert('Preencha "Valor G"!');
        return;
    }

    // Prepare form data
    let tipo_carne = {
        "nome": nome,
        "img": imageUrl,
        "valor_p": valorP,
        "valor_g": valorG,
    }

    try {
        const response = await fetch('http://localhost:3000/tipo_carnes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tipo_carne),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // Optionally handle successful response (e.g., alert or redirect)
        } else {
            alert('Erro ao salvar os dados.');
            console.error('Erro:', response.statusText);
        }
    } catch (error) {
        alert('Erro ao salvar os dados.');
        console.error('Erro:', error);
    }
}

async function att_tipo_carnes(id) {
    console.log("Função att_tipo_carnes");

    // Get form elements
    const nome = document.getElementById('nome').value;
    const foto = document.getElementById('foto').files[0];
    const valorP = document.getElementById('valor_p').value;
    const valorG = document.getElementById('valor_g').value;

    const imageUrl = await uploadImageToImgBB(foto, "tipo_carne_"+nome);
    // Validate form fields
    if (nome === '') {
        alert('Preencha "Nome"!');
        return;
    }

    if (!foto) {
        alert('Escolha uma imagem!');
        return;
    }

    if (valorP === '') {
        alert('Preencha "Valor P"!');
        return;
    }

    if (valorG === '') {
        alert('Preencha "Valor G"!');
        return;
    }

    // Prepare form data
    let tipo_carne = {
        "nome": nome,
        "img": imageUrl,
        "valor_p": valorP,
        "valor_g": valorG,
    }

    try {
        const response = await fetch('http://localhost:3000/tipo_carnes/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tipo_carne),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // Optionally handle successful response (e.g., alert or redirect)
            window.location.href = 'menu_dia.html';
        } else {
            alert('Erro ao salvar os dados.');
            console.error('Erro:', response.statusText);
        }
    } catch (error) {
        alert('Erro ao salvar os dados.');
        console.error('Erro:', error);
    }
}

async function read_tipo_carnes(id){
    //console.log("Função read_tipo_carnes");
    

    try {
        const response = await fetch('http://localhost:3000/tipo_carnes/' + id );
        const data = await response.json();
        
        const tipo_carne = Object.values(data)[0];
        //console.log(tipo_carne);
        
        return tipo_carne;
        
    } catch (error) {
        console.error('Tipo_carnes não encontrado:', error);
    }
}

async function del_tipo_carnes(acomp_id) {
    console.log("Função del_tipo_carnes");

    if(confirm("Confirmar exclusão de tipo_carne?")){

        try {
            const response = await fetch(`http://localhost:3000/tipo_carnes/${acomp_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Erro ao deletar dados!');
            }
    
            const data = await response.json();
            console.log('Marmita deletada com sucesso:', data);
            window.location.reload();
            return data.mensagem;
        } catch (error) {
            console.error('Erro ao deletar dados:', error);
            throw error;
        }
    }


}


// CRUD ACOMPANHAMENTOS
async function add_acompanhamentos() {
    
    console.log("Função add_acompanhamentos");
    nome = document.getElementById('nome').value

    if (nome == ''){
        alert('Preencha "Nome"!');
    } else {
        let acomps = {
            "nome": nome
        }
    
        
        try {
            const response = await fetch('http://localhost:3000/acompanhamentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(acomps),
            });
    
            if (response.ok) {
                const data = await response.json();
                //alert('Dados salvos com sucesso!');
                console.log(data);
            } else {
                alert('Erro ao salvar os dados.');
                console.error('Erro:', response.statusText);
            }
        } catch (error) {
            alert('Erro ao salvar os dados.');
            console.error('Erro:', error);
        }
    }
}

async function att_acompanhamentos(id) {
    console.log("Função add_acompanhamentos");
    nome = document.getElementById('nome').value

    if (nome == ''){
        alert('Preencha "Nome"!');
    } else {
        let acomps = {
            "nome": nome
        }
    
        
        //console.log(acomps);
        try {
            const response = await fetch('http://localhost:3000/acompanhamentos/'+id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(acomps),
            });
    
            if (response.ok) {
                const data = await response.json();
                //alert('Dados salvos com sucesso!');
                //console.log(data);
                window.location.href = 'menu_dia.html';
            } else {
                alert('Erro ao salvar os dados.');
                console.error('Erro:', response.statusText);
            }
        } catch (error) {
            alert('Erro ao salvar os dados.');
            console.error('Erro:', error);
        }
    }
}

async function del_acompanhamentos(acomp_id) {
    console.log("Função del_acompanhamentos");

    if(confirm("Confirmar exclusão de acompanhamento?")){

        try {
            const response = await fetch(`http://localhost:3000/acompanhamentos/${acomp_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Erro ao deletar dados!');
            }
    
            const data = await response.json();
            console.log('Marmita deletada com sucesso:', data);
            window.location.reload();
            return data.mensagem;
        } catch (error) {
            console.error('Erro ao deletar dados:', error);
            throw error;
        }
    }


}
    

async function read_acompanhamento(id){
    //console.log("Função read_acompanhamento");
    try {
        const response = await fetch('http://localhost:3000/acompanhamentos/' + id );
        const data = await response.json();
        
        const dados = Object.values(data)[0];
        //console.log(dados);
        
        return dados;
        
    } catch (error) {
        console.error('Acompanhamentos não encontrado:', error);
    }
}

// CRUD BEBIDAS

async function create_bebida() {
    console.log("Função create_bebida");

    // Get form elements
    const nome = document.getElementById('nome').value;
    const foto = document.getElementById('foto').files[0];
    const valor = document.getElementById('valor').value;

    const imageUrl = await uploadImageToImgBB(foto, "bebida_"+nome);
    
    // Validate form fields
    if (nome == '') {
        alert('Preencha "Nome"!');
        return;
    }

    if (!foto) {
        alert('Escolha uma imagem!');
        return;
    }

    if (valor == '') {
        alert('Preencha "Valor"!');
        return;
    }
    console.log(imageUrl);
    // Prepare form data

    bebida = {
        "nome": nome,
        "img": imageUrl,
        "valor": valor
    }

    
    try {
        const response = await fetch('http://localhost:3000/bebidas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bebida),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // Optionally handle successful response (e.g., alert or redirect)
        } else {
            alert('Erro ao salvar os dados.');
            console.error('Erro:', response.statusText);
        }
    } catch (error) {
        alert('Erro ao salvar os dados.');
        console.error('Erro:', error);
    }
}

async function read_bebidas(id){
    //console.log("Função read_tipo_carnes");
    

    try {
        const response = await fetch('http://localhost:3000/bebidas/' + id );
        const data = await response.json();
        
        const bebida = Object.values(data)[0];
        //console.log(bebida);
        
        return bebida;
        
    } catch (error) {
        console.error('Bebidas não encontrado:', error);
        return false
    }
}

async function att_bebidas(id) {
    console.log("Função att_bebidas");

    //alert("Bebida ID: " + id)

    nome = document.getElementById('nome').value
    valor = document.getElementById('valor').value
    const foto = document.getElementById('foto').files[0];
    const imageUrl = await uploadImageToImgBB(foto, "bebida_"+nome);
    if (nome == ''){
        alert('Preencha "Nome"!');
        return
    } 
    if (valor == '') {
        alert('Preencha "Valor"!');
        return;
    }


    let bebida = {
        "nome": nome,
        "img": imageUrl,
        "valor": valor
    }

    
    console.log(bebida);
    try {
        const response = await fetch('http://localhost:3000/bebidas/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bebida),
        });

        if (response.ok) {
            const data = await response.json();
            //alert('Dados salvos com sucesso!');
            //console.log(data);
            window.location.href = 'menu_dia.html';
        } else {
            alert('Erro ao salvar os dados.');
            console.error('Erro:', response.statusText);
        }
    } catch (error) {
        alert('Erro ao salvar os dados.');
        console.error('Erro:', error);
    }
    
}

async function del_bebidas(bebida_id) {
    console.log("Função del_bebidas");

    if(confirm("Confirmar exclusão de bebida?")){

        try {
            const response = await fetch(`http://localhost:3000/bebidas/${bebida_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Erro ao deletar dados!');
            }
    
            const data = await response.json();
            console.log('Marmita deletada com sucesso:', data);
            window.location.reload();
            return data.mensagem;
        } catch (error) {
            console.error('Erro ao deletar dados:', error);
            throw error;
        }
    }


}
  
async function uploadImageToImgBB(imageFile, imageName) {
    const apiKey = '7623a1b4817a6d9cb405ee9436537b56'; // Substitua com sua chave de API
    const formData = new FormData();
    formData.append('image', imageFile, imageName); // Inclui o nome da imagem aqui

    try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            return data.data.url;
        } else {
            console.error('Erro ao fazer upload da imagem:', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Erro ao fazer upload da imagem:', error);
        return null;
    }
}




// CRUD ACOMPANHAMENTOS MARMITAS

async function read_acompanhamento_marmitas(id){

    //console.log("Função read_acompanhamentos_marmitas");
    try {
        const response = await fetch('http://localhost:3000/marmita_acompanhamentos/' + id );
        const data = await response.json();
        
        const dados = Object.values(data)[0];
        //console.log(dados);
        
        return dados;
        
    } catch (error) {
        console.error('Marmita_acompanhamentos não encontrado:', error);
    }
}



function add_acomps(marmita_id1,acompanhamentos_id){
    console.log("Função add_acomps");
    let acomp = {
        "marmita_id1":marmita_id1,
        "acompanhamentos_id":acompanhamentos_id
    };

    //console.log("Acomp: "+acompanhamentos_id+" add at "+marmita_id1);
    fetch('http://localhost:3000/marmita_acompanhamentos',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(acomp),
    })
        .then(response => response.json())
        .then(data => {      
            console.log('Dados enviados com sucesso:', data);
            

            //const newMarmitaId = data.id; // Certifique-se de que o ID está na propriedade "id"

        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
        
}

async function create_pedido(user_id){
    console.log("Função create_pedido "+user_id);
    //alert("Criar pedido "+user_id);

    let pedido ={
        'Usuarios_id':user_id
        };
    
    console.log("Pedido: ")
    console.log(pedido);
    try {
        const response = await fetch('http://localhost:3000/pedidos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pedido),
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }
        const data = await response.json();
        console.log('Dados enviados com sucesso:', data);
        //alert("Pause1");
        const newPedidoId = data.dados.id;
        console.log('ID do novo pedido:', newPedidoId);
        return newPedidoId;
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        throw error;
    }


}

async function read_pedido(user_id) {
    console.log("Função read_pedido "+ user_id);


    try {
        const response = await fetch('http://localhost:3000/pedidos/' + user_id + "/carrinho");
        const data = await response.json();
        
        const pedidos = Object.values(data)[0];
        
        if (pedidos.length == 1) {
           // console.log("Pedido existente, pedido_id: " + pedidos[0].id);
            return pedidos[0].id;
        } else {
            // Aqui pode ser tratado o caso onde há mais de um pedido, se necessário
            console.log("Nenhum pedido existente encontrado, criando um novo pedido...");
            const novoPedidoId = await create_pedido(user_id);
            //alert("Novo pedido ID " + novoPedidoId);
            return novoPedidoId;
        }
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        // const novoPedidoId = await create_pedido();
        // return novoPedidoId;
    }
}


async function read_pedido_marmitas(pedido_id) {
    //console.log("Função read_pedido_marmitas");
    try {
        const response = await fetch('http://localhost:3000/pedido_marmitas/' + pedido_id);
        const data = await response.json();
        const pedidos = Object.values(data);
        //console.log(pedidos[0]);
        return pedidos[0];
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        return -1;
    }
}

async function create_pedido_marmitas(pedidos_id, marmita_id) {
    let marmita = {
        "pedidos_id":pedidos_id,
	    "marmita_id":marmita_id
    };
    
    try {
        console.log("Função crete_pedido_marmitas");
        const response = await fetch('http://localhost:3000/pedido_marmitas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(marmita),
        });

        if (!response.ok) {
            
            throw new Error('Erro ao enviar dados');

        }

        
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        
        throw error;
    }
}


// FUNÇÕES PARA ADD UMA BEBIDA AO PEDIDO

async function add_bebida(bebida_id, user_id){
    
    pedidos_id = await read_pedido(user_id);

   
    await create_pedido_bebidas(pedidos_id,bebida_id);

}

async function read_pedido_bebidas(pedido_id) {
    console.log("Função read_pedido_bebidas");
    try {
        const response = await fetch('http://localhost:3000/pedido_bebidas/' + pedido_id);
        const data = await response.json();
        const pedidos = Object.values(data);
        console.log(pedidos);
        return pedidos[0];
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        return -1;
    }
}

async function create_pedido_bebidas(pedidos_id, bebida_id) {
    
    console.log("Função create_pedido_bebidas");
    //console.log(" bebida pedido add " + bebida_id +"  -   " + pedidos_id);

    let bebida = {
        "pedidos_id":pedidos_id,
	    "Bebidas_id":bebida_id
    };
    
    console.log(bebida);

    fetch('http://localhost:3000/pedido_bebidas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bebida),
    })
    .then(response => response.json())
    .then(data => {      

        console.log('Dados enviados com sucesso:', data);
        

        

    }).catch(error => {
        console.error('Erro ao enviar dados:', error);
    });

        
    
}


async function del_pedido_bebida(bebida_id) {
    console.log("Função del_pedido_bebida");

    try {
        const response = await fetch(`http://localhost:3000/pedido_bebidas/${bebida_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar dados!');
        }

        const data = await response.json();
        console.log('Pedido de bebida deletado com sucesso:', data);

        // Atualiza a página após a exclusão bem-sucedida
        window.location.reload();

        return data.mensagem;
    } catch (error) {
        console.error('Erro ao deletar dados:', error);
        throw error;
    }
}



// FUNÇÕES PARA EDITAR CARDAPIO DO DIA

function show_menu_dia(){

    show_menu_dia_carnes();

    show_menu_dia_acompanhamentos();

    show_menu_dia_bebidas();


    show_menu_status();


}

function show_menu_status(){
    let str_status = ``

    fetch('http://localhost:3000/restaurantes')
        .then(response => response.json())
        .then(data => {      

            const rests = Object.values(data)
            //console.log(rest);
            
            let rest = rests[0][0];
            
            // tamanho das imagens 287x190
            if(rest.status==1){
                //console.log(rest);
                str_status += `<button onclick="alterar_status_restaurante(1)" style="width: 70%; margin-left: 15% ; margin-top: 12px;" class="btn btn-outline-success btn-sm">Aberto</button>`
            } else {
                str_status += `<button onclick="alterar_status_restaurante(0)" style="width: 70%; margin-left: 15%; margin-top: 12px;" class="btn btn-outline-danger btn-sm">Fechado</button>`
            }
            
            document.querySelector('#statusRestaurante').innerHTML=str_status;
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });

}

function show_menu_status_not_edit(){
    let str_status = ``

    fetch('http://localhost:3000/restaurantes')
        .then(response => response.json())
        .then(data => {      

            const rests = Object.values(data)
            //console.log(rest);
            
            let rest = rests[0][0];
            
            // tamanho das imagens 287x190
            if(rest.status==1){
                //console.log(rest);
                str_status += `<div  style="width: 70%; margin-left: 15% ; margin-top: 12px;" class="btn btn-outline-success btn-sm">Aberto</div>`
            } else {
                str_status += `<div  style="width: 70%; margin-left: 15%; margin-top: 12px;" class="btn btn-outline-danger btn-sm">Fechado</div>`
            }
            
            document.querySelector('#statusRestaurante').innerHTML=str_status;
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });

}

function alterar_status_restaurante( status) {
    // Determinar o novo status
    let novoStatus = status === 1 ? 0 : 1;
    
    // Criar o objeto que será enviado na requisição
    let updateData = {
        status: novoStatus
    };

    // Enviar a requisição PUT para atualizar o atributo 'status'
    fetch('http://localhost:3000/restaurantes', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Status do restaurante alterado com sucesso:');
        // Atualizar a interface para refletir o novo status
        show_menu_status();
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
}


function show_menu_dia_carnes(){
    //console.log("Teste");
    str =``
    fetch('http://localhost:3000/tipo_carnes')
        .then(response => response.json())
        .then(data => {      

            const carnes = Object.values(data)
            //console.log(carnes);
            for (let i = 0; i < carnes[0].length; i++) {
                let carne = carnes[0][i];
                // console.log(carne);
                
                // tamanho das imagens 287x190
                if(carne.disponivel==1){
                    str += `<div class="checkbox-item" >
                                <input name="carnes" id="checkbox1_${carne.id}" type="checkbox" checked onclick="marcar_carne_disponivel(${carne.id}, this.checked)">
                                <label class="row d-flex align-items-center" for="checkbox1_${i+1}" style="width: 100%; padding: 10px 50px ;">
                                    <div class="col-11" style="padding: 0;">    
                                        ${carne.nome}
                                    </div>
                                    <div class="dropdown col-1" style="padding: 0;">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ...
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <a class="dropdown-item" href="EditavelCarne.html?id=${carne.id}&nome=${carne.nome}&valor_p=${carne.valor_p}&valor_g=${carne.valor_g}">Editar</a>
                                            <a onclick="del_tipo_carnes(${carne.id})" class="dropdown-item" href="#">Deletar</a>
                                        </div>
                                    </div>
                                </label>
                            </div>
                    
                            `
                } else {
                    str += `<div class="checkbox-item" >
                                <input name="carnes" id="checkbox1_${carne.id}" type="checkbox" onclick="marcar_carne_disponivel(${carne.id}, this.checked)">
                                <label class="row d-flex align-items-center" for="checkbox1_${i+1}" style="width: 100%; padding: 10px 50px ;">
                                    <div class="col-11" style="padding: 0;">    
                                        ${carne.nome}
                                    </div>
                                    <div class="dropdown col-1" style="padding: 0;">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ...
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <a class="dropdown-item" href="EditavelCarne.html?id=${carne.id}&nome=${carne.nome}&valor_p=${carne.valor_p}&valor_g=${carne.valor_g}">Editar</a>
                                            <a onclick="del_tipo_carnes(${carne.id})" class="dropdown-item" href="#">Deletar</a>
                                        </div>
                                    </div>
                                </label>
                            </div>
                    
                             `

                }


                
            }
            str+= `<a href="CriavelCarne.html" style="width: 70%; margin-left: 15% ; margin-top: 12px;" class="btn btn-outline-success btn-sm">Adicionar</a>`
            document.querySelector('#tipo_carnes_list').innerHTML=str
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });

}

function marcar_carne_disponivel(id, disponivel) {
    // Crie um objeto que será enviado na requisição
    //console.log(id)
    if(disponivel){
        disponivel = 1;
    } else {
        disponivel = 0;
    }
    
    let updateData = {
        disponivel: disponivel
    };
    //console.log(updateData);
    // Envie a requisição PUT para atualizar o atributo 'disponível'
    fetch('http://localhost:3000/tipo_carnes/'+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
    })
    .then(response => response.json())
    .then(data => {      
        console.log('Dados enviados com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
}
    

function show_menu_dia_acompanhamentos(){
    //console.log("Teste");
    str_acomps =``
    fetch('http://localhost:3000/acompanhamentos')
        .then(response => response.json())
        .then(data => {      

            const acompanhamentos = Object.values(data)
            //console.log(acompanhamentos);
            for (let i = 0; i < acompanhamentos[0].length; i++) {
                let acompanhamento = acompanhamentos[0][i];
                //console.log(acompanhamento);
                
                // tamanho das imagens 287x190
                if(acompanhamento.disponivel==1){
                    str_acomps += `<div class="checkbox-item" >
                                <input name="acomp" id="checkbox2_${acompanhamento.id}" type="checkbox" checked onclick="marcar_acompanhamento_disponivel(${acompanhamento.id}, this.checked)">
                                <label class="row d-flex align-items-center" for="checkbox2_${i+1}" style="width: 100%; padding: 10px 50px ;">
                                    <div class="col-11" style="padding: 0;">    
                                        ${acompanhamento.nome}
                                    </div>
                                    <div class="dropdown col-1" style="padding: 0;">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ...
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <a class="dropdown-item" href="EditavelAcomp.html?id=${acompanhamento.id}&nome=${acompanhamento.nome}">Editar</a>
                                            <a onclick="del_acompanhamentos(${acompanhamento.id})" class="dropdown-item" href="#">Deletar</a>
                                        </div>
                                    </div>
                                </label>
                            </div>
                    
                            `
                } else {
                    str_acomps += `<div class="checkbox-item" >
                                <input name="acomp" id="checkbox2_${acompanhamento.id}" type="checkbox" onclick="marcar_acompanhamento_disponivel(${acompanhamento.id}, this.checked)">
                                <label class="row d-flex align-items-center" for="checkbox2_${i+1}" style="width: 100%; padding: 10px 50px ;">
                                    <div class="col-11" style="padding: 0;">    
                                        ${acompanhamento.nome}
                                    </div>
                                    <div class="dropdown col-1" style="padding: 0;">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ...
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <a class="dropdown-item" href="EditavelAcomp.html?id=${acompanhamento.id}&nome=${acompanhamento.nome}">Editar</a>
                                            <a onclick="del_acompanhamentos(${acompanhamento.id})" class="dropdown-item" href="#">Deletar</a>
                                        </div>
                                    </div>
                                </label>
                            </div>
                    
                             `

                }


                
            }
            str_acomps+= `<a href="CriavelAcompan.html" style="width: 70%; margin-left: 15% ; margin-top: 12px;" class="btn btn-outline-success btn-sm">Adicionar</a>`
            document.querySelector('#acompanhamentos_list').innerHTML=str_acomps
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });

}

function marcar_acompanhamento_disponivel(id, disponivel) {
    // Crie um objeto que será enviado na requisição
    //console.log(id)
    if(disponivel){
        disponivel = 1;
    } else {
        disponivel = 0;
    }
    
    let updateData = {
        disponivel: disponivel
    };
    //console.log(updateData);
    // Envie a requisição PUT para atualizar o atributo 'disponível'
    fetch('http://localhost:3000/acompanhamentos/'+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
    })
    .then(response => response.json())
    .then(data => {      
        console.log('Dados enviados com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
}

function show_menu_dia_bebidas(){
    //console.log("Teste");
    str_bebidas =``
    fetch('http://localhost:3000/bebidas')
        .then(response => response.json())
        .then(data => {      

            const bebidas = Object.values(data)
            //console.log(bebidas);
            for (let i = 0; i < bebidas[0].length; i++) {
                let bebida = bebidas[0][i];
                //console.log(bebida);
                
                // tamanho das imagens 287x190
                if(bebida.disponivel==1){
                    str_bebidas += `<div class="checkbox-item" >
                                <input name="acomp" id="checkbox3_${bebida.id}" type="checkbox" checked onclick="marcar_bebida_disponivel(${bebida.id}, this.checked)">
                                <label class="row d-flex align-items-center" for="checkbox3_${i+1}" style="width: 100%; padding: 10px 50px ;">
                                    <div class="col-11" style="padding: 0;">    
                                        ${bebida.nome}
                                    </div>
                                    <div class="dropdown col-1" style="padding: 0;">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ...
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <a class="dropdown-item" href="EditavelBebi.html?id=${bebida.id}&nome=${bebida.nome}&valor=${bebida.valor}">Editar</a>
                                            <a onclick="del_bebidas(${bebida.id})" class="dropdown-item" href="#">Deletar</a>
                                        </div>
                                    </div>
                                </label>
                            </div>
                    
                            `
                } else {
                    str_bebidas += `<div class="checkbox-item" >
                                <input name="acomp" id="checkbox3_${bebida.id}" type="checkbox" onclick="marcar_bebida_disponivel(${bebida.id}, this.checked)">
                                <label class="row d-flex align-items-center" for="checkbox3_${i+1}" style="width: 100%; padding: 10px 50px ;">
                                    <div class="col-11" style="padding: 0;">    
                                        ${bebida.nome}
                                    </div>
                                    <div class="dropdown col-1" style="padding: 0;">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ...
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <a class="dropdown-item" href="EditavelBebi.html?id=${bebida.id}&nome=${bebida.nome}&valor=${bebida.valor}">Editar</a>
                                            <a onclick="del_bebidas(${bebida.id})" class="dropdown-item" href="#">Deletar</a>
                                        </div>
                                    </div>
                                </label>
                            </div>
                    
                             `

                }


                
            }
            str_bebidas+= `<a href="CriavelBebi.html" style="width: 70%; margin-left: 15% ; margin-top: 12px;" class="btn btn-outline-success btn-sm">Adicionar</a>`
            document.querySelector('#bebidas_list').innerHTML=str_bebidas

        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });

}

function marcar_bebida_disponivel(id, disponivel) {
    // Crie um objeto que será enviado na requisição
    //console.log(id)
    if(disponivel){
        disponivel = 1;
    } else {
        disponivel = 0;
    }
    
    let updateData = {
        disponivel: disponivel
    };
    //console.log(updateData);
    // Envie a requisição PUT para atualizar o atributo 'disponível'
    fetch('http://localhost:3000/bebidas/'+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
    })
    .then(response => response.json())
    .then(data => {      
        console.log('Dados enviados com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
}




// FUNÇÕES PARA EXIBIR ITENS DE CARRINHO




async function exibe_carrinho(user_id) {

    verif_login();
    
    console.log("Função exibe_carrinho");

    let valor = 0;
    pedidos_id = await read_pedido(user_id);
    
    pedido_marmitas_existentes = await read_pedido_marmitas(pedidos_id);
    
    for (const pm of pedido_marmitas_existentes) {

        const marmita = await read_marmitas(pm.marmita_id);
        //console.log("marmita:");
        //console.log(marmita);
        
        let str_marmita = '';
        
        let str_aux='';
        const tipo_carne = await read_tipo_carnes(marmita.tipo_carnes_id1);
        
        //console.log("Marmita_id: " + marmita.id);
        const acompanhamento_marmitas_existentes = await read_acompanhamento_marmitas(marmita.id);

        str_marmita += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <div class="d-none d-md-block">
                        <!-- Imagem para telas grandes -->
                        <img src="${tipo_carne.img}" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${tipo_carne.nome}</h5>
                            
        `;

        for (const am of acompanhamento_marmitas_existentes) {
            const acompanhamento = await read_acompanhamento(am.acompanhamentos_id);  
            str_aux += `<div >  * ${acompanhamento.nome}</div>`;
        }


        if(marmita.tamanho==1){
            valor+=parseInt(tipo_carne.valor_p);
            str_aux += `<h4 id="valor" value="${tipo_carne.valor_p}" >R$${tipo_carne.valor_p},00</h4>`
        } else {
            valor+=  parseInt(tipo_carne.valor_g);
            str_aux += `<h4  id="valor" value="${tipo_carne.valor_g}">R$${tipo_carne.valor_g},00</h4>`
        }
        console.log("Valor "+valor)
        str_marmita+=str_aux;

        str_marmita+=`<a onclick="del_pedido_marmita(${marmita.id})" class="btn btn-outline-danger btn-sm">Remover</a>`
        str_marmita += `
                        </div>
                    </div>
                    <div class="d-flex d-md-block flex-row flex-md-column d-md-none image-container">
                        <!-- Imagem para telas pequenas -->
                        
                        <div class="card-body d-md-none" style="width: 50%;">
                            <h5 class="card-title">${tipo_carne.nome}</h5>
                            
                            `
        str_marmita+=str_aux;     
        str_marmita+=`<a onclick="del_pedido_marmita(${marmita.id})" class="btn btn-outline-danger btn-sm">Remover</a>`
        str_marmita+=`
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.querySelector('#marmitas_list').innerHTML += str_marmita; 
    }

    pedido_bebidas_existentes = await read_pedido_bebidas(pedidos_id);
    // console.log("Pedido_bebidas_existentes")
    // console.log(pedido_bebidas_existentes);
    for (const pb of pedido_bebidas_existentes){
        let str_bebida = '';
        
        const bebida = await read_bebidas(pb.bebidas_id);
        
        valor+= parseInt(bebida.valor);
        
        str_bebida += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <div class="d-none d-md-block">
                        <!-- Imagem para telas grandes -->
                        <img src="${bebida.img}" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${bebida.nome}</h5>
                            <h4  id="valor" value="${bebida.valor}">R$${bebida.valor},00</h4>
                            <a onclick="del_pedido_bebida(${pb.id})" class="btn btn-outline-danger btn-sm">Remover</a>
                        </div>
                    </div>
                    <div class="d-flex d-md-block flex-row flex-md-column d-md-none image-container">
                        <!-- Imagem para telas pequenas -->
                        
                        <div class="card-body d-md-none" style="width: 50%;">
                            <h5 class="card-title">${bebida.nome}</h5>
                            <h4  id="valor" value="${bebida.valor}">R$${bebida.valor},00</h4>
                            <a onclick="del_pedido_bebida(${pb.id})" class="btn btn-outline-danger btn-sm">Remover</a>
                        </div>
                    </div>
                </div>
            </div>
                            
        `;
        
        document.querySelector('#bebidas_list').innerHTML += str_bebida; 
    }

    if(pedido_marmitas_existentes.length + pedido_bebidas_existentes.length == 0){
        alert("Faça o pedido de uma marmita ou uma bebida!");
        //document.querySelector('#bebidas_list').innerHTML = "Faça o pedido de uma marmita ou uma bebida!"; 
        window.location.href = '../index.html';
    } 

    document.querySelector('#valor_pedido').innerHTML="R$"+valor+",00"

    const anchorElement = document.querySelector('#btn_avancar');

    if (anchorElement) {
        // Obter o href atual
        let href = anchorElement.getAttribute('href');

        // Adicionar o parâmetro desejado ao href
        href += '?valor='+valor;
        href += '&pedido='+pedidos_id;
        // Definir o novo href no elemento âncora

        anchorElement.setAttribute('href', href);
    }


}

async function add_user(userr){
    
    console.log("Função add_user");
    
    let user={
        "nome": userr.nome,
        "telefone": userr.telefone,
        "email": userr.email,
        "senha": userr.senha,
        "cep": userr.cep,
        "rua": userr.rua,
        "numero": userr.numero,
        "bairro": userr.bairro,
        "complemento": userr.complemento
    }


    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        console.log('Dados enviados com sucesso:', response);
        if (!response.ok) {
            throw new Error('Erro ao enviar dados!');
        }
        const data = await response.json(); // Supondo que o servidor responde com JSON contendo o ID

        // Atualizar o objeto user com o ID recebido do servidor
        user.id = data.dados.id; // Supondo que o ID retornado pelo servidor está em responseData.id

        console.log('Dados enviados com sucesso:', user);
        console.log('Dados enviados com sucesso:', data.dados);
        
        return user; // Retornar o objeto user atualizado com o ID 


    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        throw error;
    }


}



async function read_user(user) {
    try {
        const response = await fetch(`http://localhost:3000/login?email=${encodeURIComponent(user.email)}&senha=${encodeURIComponent(user.senha)}`);
        const data = await response.json();

        const usuario = data.usuario;
        if (usuario) {
            return usuario; // Retorna o usuário encontrado
        } else {

            const response = await fetch(`http://localhost:3000/login_adm?email=${encodeURIComponent(user.email)}&senha=${encodeURIComponent(user.senha)}`);
            const data = await response.json();

            const usuario = data.usuario;
            if (usuario) {
                return usuario; // Retorna o usuário encontrado
            } else {

                console.log("Nenhum usuário encontrado!");
                return null;
            }
        }
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        throw error; // Lança o erro para ser tratado no código que chama read_user
    }
}


function enviar_pedido(valorMinimo, trocoValor,pedido_id){

    let endereco={};
    let entrega = document.getElementById('radio1').checked;
    let pagamento = document.getElementById('radio3').checked;
    let troco = trocoValor-valorMinimo;


    if(troco<0){
        troco=0;
    }

    if(!pagamento){
        pagamento = document.getElementById('radio4').checked;

        if(!pagamento){
            pagamento = 'dinheiro';
        } else {
            pagamento = 'cartao';
        }
    } else {
        pagamento = 'pix';
    }
    
    if(entrega){
        endereco.cep = document.getElementById('cep').value ;
        endereco.rua = document.getElementById('rua').value;
        endereco.numero = document.getElementById('numero').value;
        endereco.bairro = document.getElementById('bairro').value;
        endereco.complemento = document.getElementById('complemento').value;
        entrega = 'entrega';


        taxa_entrega = calcular_frete(endereco.bairro);


        updateData = {
            'total': valorMinimo,
            'status': 'aguardando',
            'pagamento': pagamento,
            'entrega': entrega,
            'cep': parseInt(endereco.cep),
            'bairro':endereco.bairro,
            'rua': endereco.rua,
            'numero':endereco.numero,
            'complemento':endereco.complemento,
            'troco':troco,
            'taxa_entrega': taxa_entrega

        }
        
    } else {
        
        entrega = 'retirada';
        updateData = {
            'total': valorMinimo,
            'status': 'aguardando',
            'pagamento': pagamento,
            'entrega': entrega,
            'troco':troco
        }
    }


    fetch('http://localhost:3000/pedidos/'+pedido_id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Status do restaurante alterado com sucesso:');
        console.log(data);
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });

    window.location.href = '../index.html';
}

async function exibir_pedidos(status){
    
    let usuario = []; 

    console.log("Função exibir_pedidos");

    fetch('http://localhost:3000/pedidos_all/'+status)
            .then(response => response.json())
            .then(async data => {      

                const pedidoss = Object.values(data)
                
                


                let pedidos = pedidoss[0];
                let str_pedido = '';
                //console.log(pedidoss[0]);
                
                if(pedidoss[0] == 'Erro ao buscar pedidos.'){
                    document.querySelector('#aguardando').innerHTML ="";
                    document.querySelector('#entrega').innerHTML ="";                    
                    document.querySelector('#preparando').innerHTML ="";
                } else {
                    
                    for(const ped of pedidos){

                        if(ped.id){

                            const user = await fetch('http://localhost:3000/usuarios2/'+ped.Usuarios_id)
                            .then(response => response.json())
                            .then(data => {      
                                usuario = Object.values(data)[0]
                            }).catch(error => {
                                console.error('Erro ao enviar dados:', error);
                            });
        
                            if(ped.entrega=='retirada'){
                                endereco=''
                                ped.bairro=''
                            } else {
                                endereco=`Rua ${ped.rua} ${ped.numero}, ${ped.complemento}`
                            }
        
        
                            str_pedido+=`<div class="container mt-3">
                            <div class="card">
                                <div class="card-header p-0">
                                    <div class="row px-3">
                                        <div class="col-lg-1 col-md-12 p-0" >${ped.id}</div>
                                        <div class="col-lg-9 col-md-12 d-flex flex flex-row p-0">
                                            
                                            <div class="col-lg-3 p-0" >${usuario.nome}</div>
                                            <div class="col-lg-3 p-0" >${ped.entrega}</div>
                                            <div class="col-lg-3 p-0" >${ped.bairro}</div>
                                            <div class="col-lg-3 p-0" >R$ ${ped.total},00</div>
                                        </div>
                                        <div class="col-lg-1 col-md-6 col-6 p-0" >
                                            <button class="p-0 btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#collapseDetails${ped.id}" aria-expanded="false" aria-controls="collapseDetails">
                                            Detalhes
                                            </button>
                                        </div>
                                        `
                                        
                                        if(status=='aguardando'){
                                            str_pedido+=`<div class="col-lg-1 col-md-6 col-6 p-0" >
                                                            <button onclick="show_pedido(${ped.id})" class="p-0 btn btn-outline-success" type="button" >
                                                            Aprovar
                                                            </button>
                                                        </div>`
                                        } else if (status == 'preparando'){
                                            str_pedido+=`<div class="col-lg-1 col-md-6 col-6 p-0" >
                                                        <button onclick="show_pedido(${ped.id})" class="p-0 btn btn-outline-success" type="button" >
                                                        Entregar
                                                        </button>
                                                    </div>`
                                        }
                                        
                                        
                                        
                                        
                                        str_pedido+=`
                                        
                                    </div>
                                </div>
                        
                                <div class="collapse" id="collapseDetails${ped.id}">
                                    <div class="card-body row">
            
                                        <div class="col-lg-4 col-md-6 " ><strong>Endereço:</strong>
                                            <div >${endereco}</div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 " ><strong>Pagamento:</strong>  ${ped.pagamento}</div>
                                        <div class="col-lg-4 col-md-6 " ><strong>Entrega:</strong>  ${ped.entrega}</div>
                                    </div>
                                    <div style="width: 70%; margin-left: 15% ;  margin-bot: 12px;" >
                                        <div  onclick="cancelar_pedido(${ped.id})" class="col-12 p-0 btn btn-outline-danger" type="button" >
                                        Cancelar pedido
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
        
                        document.querySelector('#aguardando').innerHTML = str_pedido;
                    }
                }
                

                
            }

                

                
            }).catch(error => {
                //console.error('Erro ao enviar dados:', error);
            });

}

function show_pedido(id){



}

async function cancelar_pedido(id){
    console.log("FUnção cancelar_pedido");
    let cancelar = confirm("Cancelar pedido");

    if(!cancelar){
        return 
    } 

    let pedido = {
        'status': 'cancelado'
    }

    try {
        const response = await fetch('http://localhost:3000/pedidos/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pedido),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // Optionally handle successful response (e.g., alert or redirect)
            window.location.href = 'menu_dia.html';
        } else {
            alert('Erro ao salvar os dados.');
            console.error('Erro:', response.statusText);
        }
    } catch (error) {
        alert('Erro ao salvar os dados.');
        console.error('Erro:', error);
    }


}

function calcular_frete(bairro){
    //console.log("Função calcular_frete");
    const bairros= ['Ouro Minas',
        'São Paulo',
        'Jardim Belmonte',
        'Dom Silvério',
        'Primeiro de Maio',
        'Providência',
        'Aarão Reis',
        'Guarani',
        'Eyoard',
        'Paulo VI',
        'Vila da Luz',
        'Maria Goretti',
        'Jardim Vitória',]
    
    if(bairros.includes(bairro)){
        return 5;
    } else if (bairro == 'São Gabriel'){
        return 1;
    } else {
        return 10;
    }
}

function preencherTaxa(bairro){
    //console.log("preencher taxa " +bairro )
    
    let taxa='R$'+calcular_frete(bairro)+',00';
    document.querySelector('#taxa_entrega').innerHTML = taxa;
}
