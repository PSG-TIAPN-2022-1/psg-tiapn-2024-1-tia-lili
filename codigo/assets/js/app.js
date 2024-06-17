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

function exibe_tipo_carnes(){
  
    str=''

    fetch('http://localhost:3000/tipo_carnes')
        .then(response => response.json())
        .then(data => {      

            const carnes = Object.values(data)
            console.log(carnes);
            for (let i = 0; i < carnes[0].length; i++) {
                let carne = carnes[0][i];
                //console.log(carne);
                
                // tamanho das imagens 287x190

                if(carne.disponivel){
                    str += `
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
                            document.querySelector('#marmitas_carnes').innerHTML=str
                }
  
            }
        
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
                
                if(bebida.disponivel==1){
                    str2 += `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card">
                            <div class="d-none d-md-block">
                                <!-- Imagem para telas grandes -->
                                <img src="db/imagens/bebidas/${bebida.id}.jpg" alt="" class="card-img-top ">
                                
                                <div class="card-body ">
                                    <h5 class="card-title">${bebida.nome}</h5>
                                    <p class="card-text">R$${bebida.valor},00</p>
                                    <a href="pages/marmita.html" class="btn btn-outline-success btn-sm">Adicionar</a>
                                </div>

                            </div>
                            <div class=" d-flex d-md-block flex-row flex-md-column d-md-none">
                                <!-- Imagem para telas pequenas -->
                                <img src="db/imagens/bebidas/${bebida.id}.jpg" alt="" class="card-img-top d-md-none" style="width: 50%;">
                    
                                <div class="card-body d-md-none" style="width: 50%;">
                                    <h5 class="card-title">${bebida.nome}</h5>
                                    <p class="card-text">R$${bebida.valor},00</p>
                                    <a href="pages/marmita.html" class="btn btn-outline-success btn-sm">Adicionar</a>
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

async function getSelectedCheckboxes(tamanho, tipo_carnes_id1, obs) {
   
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
            window.location.href = "carrinho.html"  ;
        } catch (error) {
            console.error('Erro ao enviar marmita:', error);
        }
    }
}

async function add_marmita(tamanho, tipo_carnes_id1, obs) {
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

        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
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

function add_acomps(marmita_id1,acompanhamentos_id){

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
            

            const newMarmitaId = data.id; // Certifique-se de que o ID está na propriedade "id"

        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
        
}

function show_menu_dia(){

    show_menu_dia_carnes();

    show_menu_dia_acompanhamentos();

    show_menu_dia_bebidas();
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
                //console.log(carne);
                
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
                                            <a class="dropdown-item" href="EditavelCarne.html?id=${carne.id}">Editar</a>
                                            <a class="dropdown-item" href="#">Deletar</a>
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
                                            <a class="dropdown-item" href="EditavelCarne.html?id=${carne.id}">Editar</a>
                                            <a class="dropdown-item" href="#">Deletar</a>
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
                                            <a class="dropdown-item" href="EditavelAcompan.html?id=${acompanhamento.id}">Editar</a>
                                            <a class="dropdown-item" href="#">Deletar</a>
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
                                            <a class="dropdown-item" href="EditavelAcompan.html?id=${acompanhamento.id}">Editar</a>
                                            <a class="dropdown-item" href="#">Deletar</a>
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
                                            <a class="dropdown-item" href="EditavelBebi.html?id=${bebida.id}">Editar</a>
                                            <a class="dropdown-item" href="#">Deletar</a>
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
                                            <a class="dropdown-item" href="EditavelBebi.html?id=${bebida.id}">Editar</a>
                                            <a class="dropdown-item" href="#">Deletar</a>
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