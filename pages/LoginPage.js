export class LoginPage {

    constructor(page){
        this.page = page
    }

    async acessaPagina(){
        await this.page.goto('http://paybank-mf-auth:3000/')
    }

    async informaCpf(cpf){
        await this.page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(cpf);
        await this.page.getByRole('button', { name: 'Continuar' }).click();
    }

    async informaSenha(senha){
        for (const digito of senha) {
            await this.page.getByRole('button', { name: digito }).click();
          }
        
          await this.page.getByRole('button', { name: 'Continuar' }).click();
    }

    async informe2FA(code){
        await this.page.getByRole('textbox', { name: '000000' }).fill(code);
        await this.page.getByRole('button', { name: 'Verificar' }).click();
    }
    
    async checkpointVerificacao2FA(){
        await this.page.getByRole('heading', {name: 'Verificação em duas etapas'})
            .waitFor({timeout: 3000})
    }
}