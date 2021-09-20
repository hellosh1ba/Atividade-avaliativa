var cpf = "131-790-349.80"
var email =  "etrhjernh@gmail.com"
var cnpj = "20.806.466/0001-96" //XX.XXX.XXX/(0001 ou 0002)-XX
var opcao = ''

class Validacoes {

    constructor(email, cpf, cnpj){
        this.email = email
        this.cpf = cpf
        this.cnpj = cnpj
    }

    validacaoEmail(email){
        let b = false
        let emCar = []

        if(email.length > 256)return b;

        for(let c = 0; c <= email.length; c++) emCar = email.charAt(c);

        const i = email.indexOf('@')
        if(i > 64)return b;

        for(let c = 0; c <= email.length; c++ ){
            //antes do "@"
            if(c < i){

                if(c == 0 && parseInt(emCar) >= 0)return b;

                if((c == 0 || c == (i-1))&&  emCar[c] == '-')return b;
                if((c == 0 || c == (i-1))&&  emCar[c] == '!')return b;
                if((c == 0 || c == (i-1))&&  emCar[c] == '$')return b;
                if((c == 0 || c == (i-1))&&  emCar[c] == '%')return b;
                if((c == 0 || c == (i-1))&&  emCar[c] == '¨')return b;
                if((c == 0 || c == (i-1))&&  emCar[c] == '&')return b;
                if((c == 0 || c == (i-1))&&  emCar[c] == '*')return b;
                if((c == 0 || c == (i-1))&&  emCar[c] == '(')return b;
                if((c == 0 || c == (i-1))&&  emCar[c] == ')')return b;
            }
            //depois do "@"
            
        }
        return b
    }

    validacaoCPF(cpf){
        let b = false

        let [ soma, resto, mult ] = [ 0, 0, 10 ]
        let quantidadeFatores = []

        cpf=cpf.replace('-', '');
        cpf=cpf.replace('-', '');
        cpf=cpf.replace('.', '');

        for(let c = 0; c <= 10; c++){
            quantidadeFatores[c] = cpf.charAt(c)
        }

        if(quantidadeFatores.length != 11 ) return b;

            for(let c = 0; c <=8; c++){
                soma += parseInt(cpf.charAt(c)) * mult-- 
            }
            resto = (soma * 10)%11 
            
            if ((resto == 10) || (resto == 11)){
                resto = 0

            }

            if (resto != parseInt(cpf.charAt(9))) return b;
            soma = 0
            mult = 11
            for(let c = 0; c <=9; c++){
                soma += parseInt(cpf.charAt(c)) * mult-- 
            }
            resto = (soma * 10)%11
            if ((resto == 10) || (resto == 11)){
                resto = 0

            }
            if(resto == parseInt(cpf.charAt(10)) ) b = true; 
            
        return b
    }

    validacaoCNPJ(cnpj){
        let [soma, resto] = [0, 0]
        let Fatores = []

        cnpj = cnpj.replace('.', '');
        cnpj = cnpj.replace('.', '');
        cnpj = cnpj.replace('/', '');
        cnpj = cnpj.replace('-', '');
        
        const somaFatores = function(cnpj, l, jj){
            for(let c = 0; c<=jj; c++) {
                if(l == 1){
                    l=9
                }
                soma += (l* parseInt(cnpj.charAt(c)))

                console.log(soma)
            l--
            }
            
            return soma;
        }
        for(let c = 0; c <=13; c++){
            Fatores[c] = cnpj.charAt(c)
        }

        if(Fatores.length != 14) return false;

        resto = somaFatores(cnpj, 5, 11)%11

        if(resto < 2) {
            resto = 0
            if(resto != parseInt(cnpj.charAt(12))) return false;  
        }
            resto = 11 - resto;
            if(resto != parseInt(cnpj.charAt(12)))  return false;
        soma = 0;
        resto = somaFatores(cnpj, 6, 12)%11
        
        if(resto < 2){
            resto = 0; 
            if(resto == parseInt(cnpj.charAt(13))) return true;
            return false;
        }
            resto = 11 -resto
            if(resto == parseInt(cnpj.charAt(13))) return true ;
            return false;
    }
}

const val = new Validacoes()

const input = prompt("informe sua escolha de verificação\nA-Verificação Email\nB-Verificação CPF\nC-Verificação Cnpj ")

switch(input){
    case 'A':
    case 'a':
        console.log(`Verificação Email: ${val.validacaoEmail(email)}`)
        break
    case'B':
    case'b':
        console.log(`Verificação CPF: ${val.validacaoCPF(cpf)}`)
        break
    case'C':
    case'c':
        console.log(`Verificação CNPJ: ${val.validacaoCNPJ(cnpj)}`)
        break
}
