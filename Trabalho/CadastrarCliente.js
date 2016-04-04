function validarnome(e){
	
	
	var expressao;

		expressao = /[a-zA-Z ]/;

		if(expressao.test(String.fromCharCode(e.keyCode)))
		{
			return true;
		}
		else
		{
			return false;
		}
};

function mascaraCPF(cpf){
        if(mascaraInteiro(cpf)==false){
                event.returnValue = false;
        }       
        return formataCampo(cpf, '000.000.000-00', event);
};




																			//Mascara.
																			
function apenasNumero(e){																	
				
				
 var tecla=(window.event)?event.keyCode:e.which;
 if((tecla>47 && tecla<58)) return true;
 else{
 if (tecla==8 || tecla==0) return true;
 else  return false;
 }
};

			
function mascaraMutuario(o,f){
    v_obj=o
    v_fun=f
    setTimeout('execmascara()',1)
};
 
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
};
 
function cpf(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")
 
   
        //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
 
    
 
    return v
 
};

function validarCPF( cpf ){
	var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
	
	if(!filtro.test(cpf))
	{
		window.alert("CPF inválido. Tente novamente.");
		document.cadastrarCliente.tx_cpf.value='';
		document.cadastrarCliente.tx_cpf.focus();
		return false;
	}
   
	cpf = remove(cpf, ".");
	cpf = remove(cpf, "-");
	
	if(cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
		cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
		cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
		cpf == "88888888888" || cpf == "99999999999")
	{
		window.alert("CPF inválido. Tente novamente.");
		document.cadastrarCliente.tx_cpf.value='';
		document.cadastrarCliente.tx_cpf.focus();
		
		return false;
   }

	soma = 0;
	for(i = 0; i < 9; i++)
	{
		soma += parseInt(cpf.charAt(i)) * (10 - i);
	}
	
	resto = 11 - (soma % 11);
	if(resto == 10 || resto == 11)
	{
		resto = 0;
	}
	if(resto != parseInt(cpf.charAt(9))){
		window.alert("CPF inválido. Tente novamente.");		
		document.cadastrarCliente.tx_cpf.value='';
		document.cadastrarCliente.tx_cpf.focus();
		
		return false; 
	}
	
	soma = 0;
	for(i = 0; i < 10; i ++)
	{
		soma += parseInt(cpf.charAt(i)) * (11 - i);
	}
	resto = 11 - (soma % 11);
	if(resto == 10 || resto == 11)
	{
		resto = 0;
	}
	
	if(resto != parseInt(cpf.charAt(10))){
		window.alert("CPF inválido. Tente novamente.");
		document.cadastrarCliente.tx_cpf.value='';
		document.cadastrarCliente.tx_cpf.focus();
		
		return false;
	}
	
	return true;
 }
 
function remove(str, sub) {
	i = str.indexOf(sub);
	r = "";
	if (i == -1) return str;
	{
		r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
	}
	
	return r;
};


function validarEmail(email)
{
	var x = email
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		{
		alert("Não é um endereço de e-mail válido");
		document.cadastrarCliente.tx_email.value="";
		document.cadastrarCliente.tx_email.focus();
		return false;
		}
return true;
};



function validarTudo(){
	 
	var cpf = (document.cadastrarCliente.tx_cpf.value);	
	var nome = (document.cadastrarCliente.tx_nome.value);
	var endereco = (document.cadastrarCliente.tx_endereco.value);
	var cidade = (document.cadastrarCliente.tx_cidade.value);
	var sexo = (document.cadastrarCliente.tx_sexo.value);
	var email = (document.cadastrarCliente.tx_email.value);
	var senha = (document.cadastrarCliente.tx_senha.value);
	
/***********************************************************************************************/ 	
	if (cpf == ""){
	document.getElementById("divcpf").style = "border-color:red";
		}
	
	if (nome == ""){
	document.getElementById("tabnome").style="border-color:red";
		}

	if (endereco == ""){
	document.getElementById("tabendereco").style="border-color:red";
		}
	
	if (cidade == ""){
	document.getElementById("tabcidade").style="border-color:red";
		}

	if (sexo == "Escolher Sexo"){
	document.getElementById("tabsexo").style="border-color:red";
		}
		
	if (email == ""){
	document.getElementById("tabemail").style="border-color:red";
		}
	

	if (senha == ""){
	document.getElementById("tabsenha").style="border-color:red";
		}
																	
																		
	if (!document.cadastrarCliente.tx_receberP[0].checked ){
			if (!document.cadastrarCliente.tx_receberP[1].checked ){
		document.getElementById("tabpromo").style="border-color:red";
				
	}
	}

/***********************************************************************************************/ 	
	if (cpf != ""){
	document.getElementById("tabnome").style="border-color:black";
	
		}
	
	if (nome != ""){
	document.getElementById("tabnome").style="border-color:black";
		}

	if (endereco != ""){
	document.getElementById("tabendereco").style="border-color:black";
		}
	
	if (cidade != ""){
	document.getElementById("tabcidade").style="border-color:black";
		}

	if (sexo != "Escolher Sexo"){
	document.getElementById("tabsexo").style="border-color:black";
		}
		
	if (email != ""){
	document.getElementById("tabemail").style="border-color:black";
		}
	

	if (senha != ""){
	document.getElementById("tabsenha").style="border-color:black";
		}
																	
																		
	if (document.cadastrarCliente.tx_receberP[0].checked ){
			if (document.cadastrarCliente.tx_receberP[1].checked ){
		document.getElementById("tabpromo").style="border-color:black";
				
	}
	}	
		
	
/***********************************************************************************************/ 	
	if (cpf == ""){
			alert("CPF Obrigatório");
			document.cadastrarCliente.tx_cpf.focus();	
			return false;
		}
	
	if (nome == ""){
			alert("Nome Obrigatório");
			document.cadastrarCliente.tx_nome.focus();	
			return false;
		}

	if (endereco == ""){
		alert("Endereço Obrigatório");
		document.cadastrarCliente.tx_endereco.focus();
		return false;
	}
	
	if (cidade == ""){
			alert("Cidade Obrigatório");
			document.cadastrarCliente.tx_cidade.focus();	
			return false;
		}

	if (sexo == "Escolher Sexo"){
			alert("Sexo Obrigatório");
			document.cadastrarCliente.tx_sexo.focus();
			return false;
		}
		
	if (email == ""){
			alert("E-mail Obrigatório");
			document.cadastrarCliente.tx_email.focus();	
			return false;
		}
	

	if (senha == ""){
				alert("Senha Obrigatório");
				document.cadastrarCliente.tx_senha.focus();	
				return false;
		}
																	
																		
	if (!document.cadastrarCliente.tx_receberP[0].checked ){
			if (!document.cadastrarCliente.tx_receberP[1].checked ){
			alert("Opção Receber Promoções Obrigatório!")
			document.cadastrarCliente.tx_receberP.focus();
			return false;
			
			
	}
	}

	return true

			
};

function validarSenha(){
	alert("passei!");
		if(document.cadastrarCliente.tx_senha.length < 6){
		alert ("Senha tem que conter mais que 6 caracteres.")
		return false;
	}
	
};


function imprimir(){
	
	if (validarTudo() == false){
		return false;
	}
	
	var cpf = document.cadastrarCliente.tx_cpf.value;
	var nome = document.cadastrarCliente.tx_nome.value;
	var endereco = document.cadastrarCliente.tx_endereco.value;
	var cidade = document.cadastrarCliente.tx_cidade.value;
	var sexo = document.cadastrarCliente.tx_sexo.value;
	var telefone = document.cadastrarCliente.tx_telefone.value;
	var email = document.cadastrarCliente.tx_email.value;
	var obs =document.cadastrarCliente.tx_obs.value;
	
	var receber
		if (document.cadastrarCliente.tx_receberP[0].checked){
			receber = "Sim";
		}else if (document.cadastrarCliente.tx_receberP[1].checked){
			receber = "Não"
		}
	
	
	
	alert ("CPF: " + cpf + "\nNome: " + nome + "\nEndereço: " + endereco+ "\nCidade: " + cidade+ "\nSexo: " + sexo + "\nTelefone: " + telefone + "\nE-mail: " + email + "\nReceber Promoções: " + 
			receber + "\nObservação: " + obs);
	
	
};

function mascaraTelefone(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
   }
   

  
};

function validaMaiuscula(z){
        v = z.value.toUpperCase();
        z.value = v;
    };


function teste(){


	if (document.cadastrarCliente.tx_receberP[0].checked) {

	document.getElementById("tx_div").innerHTML = "A qualquer momento voce pode cancelar o recebimento <br> dos e-mails de promoção\
	enviando um e-mail com o <br> assunto STOP MAIL para o endereço contato@estacio.br";
	}
	else{
		document.getElementById("tx_div").innerHTML = "";
	}
	return false;
	
};

