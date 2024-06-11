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
          
                str += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card" >
                        <div class="d-none d-md-block">
                            <!-- Imagem para telas grandes -->
                            <img src="https://source.unsplash.com/random/287x190" alt="" class="card-img-top ">
                            
                            <div class="card-body ">
                                <h5 class="card-title">${carne.nome}</h5>
                                <p class="card-text">Selecione acompanhamentos</p>
                                <a href="pages/marmita.html" class="btn btn-outline-success btn-sm">Adicionar</a>
                            </div>

                        </div>
                        <div class=" d-flex d-md-block flex-row flex-md-column d-md-none">
                            <!-- Imagem para telas pequenas -->
                            <img src="https://source.unsplash.com/random/287x190" alt="" class="card-img-top d-md-none" style="width: 50%;">
                
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
                                <img src="https://source.unsplash.com/random/287x190" alt="" class="card-img-top ">
                                
                                <div class="card-body ">
                                    <h5 class="card-title">${bebida.nome}</h5>
                                    <p class="card-text">R$${bebida.valor},00</p>
                                    <a href="pages/marmita.html" class="btn btn-outline-success btn-sm">Adicionar</a>
                                </div>

                            </div>
                            <div class=" d-flex d-md-block flex-row flex-md-column d-md-none">
                                <!-- Imagem para telas pequenas -->
                                <img src="https://source.unsplash.com/random/287x190" alt="" class="card-img-top d-md-none" style="width: 50%;">
                    
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
            
            document.querySelector('#valor_p').innerHTML=`<input name="radio" id="radio1" type="radio" onclick="calcular_valor(${carnes.valor_p}.00)"><label class="d-flex flex-row justify-content-between" for="radio1"><h6>Pequena</h6><h6 class="valor" >R$${carnes.valor_p},00</h6> </label>`
            document.querySelector('#valor_g').innerHTML=`<input name="radio" id="radio2" type="radio" onclick="calcular_valor(${carnes.valor_g}.00)"><label class="d-flex flex-row justify-content-between" for="radio2"><h6>Pequena</h6><h6 class="valor" >R$${carnes.valor_g},00</h6> </label>`
            
            
            
            
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
                    str3+=`<div class="checkbox-item col-12"><input name="checkbox" id="checkbox${i+1}" type="checkbox"><label for="checkbox${i+1}">${acomp.nome}</label></div>`
                }
                
                
            }
            document.querySelector('#acompanhamentos_DB').innerHTML=str3
        
        }).catch(error => {
            console.error('Erro ao enviar dados:', error);
        });


}

