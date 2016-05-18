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

function validarCPF(cpf){
	var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
	
	if(!filtro.test(cpf))
	{
		//window.alert("CPF inválido. Tente novamente.");
		document.getElementById("tx_cpf").value="";
		document.getElementById("tx_cpf").focus();
//aqui		
	document.getElementById('cpf_er').style.display = "";
	document.getElementById('cpf_ok').className = "none";
	document.getElementById("tx_cpf").className = "alert alert-danger";

		return false;
	}
   
	cpf = remove(cpf, ".");
	cpf = remove(cpf, "-");
	
	if(cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
		cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
		cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
		cpf == "88888888888" || cpf == "99999999999")
	{
		//window.alert("CPF inválido. Tente novamente.");
		document.getElementById("tx_cpf").value='';
		document.getElementById("tx_cpf").focus();
//aqui		
	document.getElementById('cpf_er').style.display = "";
	document.getElementById('cpf_ok').style.display = "none";
	document.getElementById("tx_cpf").className = "alert alert-danger";
		
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
		//window.alert("CPF inválido. Tente novamente.");		
		document.getElementById("tx_cpf").value='';
		document.getElementById("tx_cpf").focus();

//aqui		
	document.getElementById('cpf_er').style.display = "";
	document.getElementById('cpf_ok').style.display = "none";
	document.getElementById("tx_cpf").className = "alert alert-danger";
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
		//window.alert("CPF inválido. Tente novamente.");
		document.getElementById("tx_cpf").value='';
		document.getElementById("tx_cpf").focus();
//aqui		
	document.getElementById('cpf_er').style.display = "";
	document.getElementById('cpf_ok').style.display = "none";
	document.getElementById("tx_cpf").className = "alert alert-danger";
		return false;

	}
	
//aqui
	document.getElementById('cpf_ok').style.display = "";
	document.getElementById("cpf_er").style.display = "none";
	document.getElementById("tx_cpf").className = "alert alert-success";
	
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
		document.getElementById("email_er").style.display = "";
		document.getElementById('email_ok').style.display = "none";
		document.getElementById("tx_email").className = "alert alert-danger"    
		document.getElementById("tx_email").focus();
		return false;
		}
		document.getElementById("email_er").style.display = "none";
		document.getElementById('email_ok').style.display = "";  
		document.getElementById("tx_email").className = "alert alert-success"  

return true;




};



function validarTudo(){
	 
	var cpf = document.getElementById("tx_cpf");	
	var nome = document.getElementById("tx_nome");
	var endereco = document.getElementById("tx_endereco");
	var cidade = document.getElementById("tx_cidade");
	var sexo = document.getElementById("tx_sexo");
	var email = document.getElementById("tx_email");
	var senha = document.getElementById("tx_senha");
	var test = 1;


/***********************************************************************************************/ 	
	if (cpf.value == ""){
			document.getElementById("tx_cpf").className = "alert alert-danger";	
			var test = 0
		}
	
	if (nome.value == ""){
			document.getElementById("tx_nome").className = "alert alert-danger";	
			var test = 0
		}

	if (endereco.value == ""){
			document.getElementById("tx_endereco").className = "alert alert-danger";	
		var test = 0
		}
	
	if (cidade.value == ""){
			document.getElementById("tx_cidade").className = "alert alert-danger";	
		var test = 0
		}

	if (sexo.value == "Escolher Sexo"){
			document.getElementById("tx_sexo").className = "alert alert-danger";	
		var test = 0		
		}
		
	if (email.value == ""){
			document.getElementById("tx_email").className = "alert alert-danger";	
		var test = 0		
		}
	

	if (senha.value == ""){
			document.getElementById("tx_senha").className = "alert alert-danger";	
		var test = 0		
		}
	if (document.getElementById("tx_recebers").checked == false || document.getElementById("tx_receberp").checked == false){
			document.getElementById("promo").className = "label label-danger";
	}
																	

	if (test == 0 ){
		return false;
	}

	return true

			
};

function validarSenha(){
		if(document.getElementById("tx_senha").value.length < 6){
		alert ("Senha tem que conter mais que 6 caracteres.")
		return false;
	}
	
};


function imprimir(){
	
	if (validarTudo() == false){
		return false;
	}
	
	var cpf = document.getElementById("tx_cpf");
	var nome = document.getElementById("tx_nome");
	var endereco = document.getElementById("tx_endereco");
	var cidade = document.getElementById("tx_cidade");
	var sexo = document.getElementById("tx_sexo");
	var telefone = document.getElementById("tx_telefone");
	var email = document.getElementById("tx_email");
	var obs =document.getElementById("tx_obs");
	
	var receber
		if (document.getElementById("tx_recebers").checked == true){
			receber="Sim";
		}else{
			receber="Não"
		}
	
	alert ("CPF: " + cpf.value + "\nNome: " + nome.value + "\nEndereço: " + endereco.value + "\nCidade: " + cidade.value + "\nSexo: " + sexo.value + "\nTelefone: " + telefone.value + "\nE-mail: " + email.value + "\nReceber Promoções: " + 
			receber.value + "\nObservação: " + obs.value);
	
	

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


function Mensagem(){

	if (document.getElementById("tx_recebers").checked == true) {
		document.getElementById("tx_div").innerHTML = "A qualquer momento voce pode cancelar o recebimento <br> dos e-mails de promoção\
		enviando um e-mail com o <br> assunto STOP MAIL para o endereço contato@estacio.br";
	}else{
		document.getElementById("tx_div").innerHTML = ""	
	}
	return false;
	
	
};

function tamanho_nome(){

	if (document.getElementById("tx_nome").value.length < 5){
		
		document.getElementById("nome_er").style.display = "";
		document.getElementById('nome_ok').style.display = "none";
		document.getElementById("tx_nome").className = "alert alert-danger"      
	} else{
		document.getElementById("nome_er").style.display = "none";
		document.getElementById('nome_ok').style.display = "";  
		document.getElementById("tx_nome").className = "alert alert-success"     
		}

}

function tamanho_endereco(){

	if (document.getElementById("tx_endereco").value.length < 5){
		
		document.getElementById("endereco_er").style.display = "";
		document.getElementById('endereco_ok').style.display = "none";
		document.getElementById("tx_endereco").className = "alert alert-danger"    
	} else{
		document.getElementById("endereco_er").style.display = "none";
		document.getElementById('endereco_ok').style.display = "";  
		document.getElementById("tx_endereco").className = "alert alert-success"  
		}

}
function tamanho_cidade(){

	if (document.getElementById("tx_cidade").value.length < 3){
		
		document.getElementById("cidade_er").style.display = "";
		document.getElementById('cidade_ok').style.display = "none";
		document.getElementById("tx_cidade").className = "alert alert-danger"    
	} else{
		document.getElementById("cidade_er").style.display = "none";
		document.getElementById('cidade_ok').style.display = "";  
		document.getElementById("tx_cidade").className = "alert alert-success"  
		}

}

function tamanho_sexo(){

	if (document.getElementById("tx_sexo").value == "Escolher Sexo"){
		
		document.getElementById("sexo_er").style.display = "";
		document.getElementById('sexo_ok').style.display = "none";
		document.getElementById("tx_sexo").className = "alert alert-danger"    
	} else{
		document.getElementById("sexo_er").style.display = "none";
		document.getElementById('sexo_ok').style.display = "";  
		document.getElementById("tx_sexo").className = "alert alert-success"  
		}

}
