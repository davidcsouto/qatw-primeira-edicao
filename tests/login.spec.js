import { test, expect } from '@playwright/test';
import { obterCodigo2FA } from '../support/db';
import { LoginPage } from '../pages/LoginPage';
import { DashPage } from '../pages/DashPage'; 
import { LoginActions } from '../actions/LoginPage';
import { getJob, cleanJobs } from '../support/redis';

test('Não deve logar quando o código de autenticação é inválido', async ({ page }) => {

  const loginPage = new LoginPage(page)

  const usuario = {
    cpf: "00000014141",
    senha: "147258"
  }

  await loginPage.acessaPagina()
  await loginPage.informaCpf(usuario.cpf)
  await loginPage.informaSenha(usuario.senha)
  await loginPage.informe2FA('123456')
  
  await expect(page.locator('span')).toContainText('Código inválido. Por favor, tente novamente.');
});

test('Deve acessar a conta do usuário', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const dashPage = new DashPage(page)

  const usuario = {
    cpf: "00000014141",
    senha: "147258"
  }

  await cleanJobs()

  await loginPage.acessaPagina()
  await loginPage.informaCpf(usuario.cpf)
  await loginPage.informaSenha(usuario.senha)

  await loginPage.checkpointVerificacao2FA()

  const codigo = await getJob()

  // const codigo = await obterCodigo2FA(usuario.cpf)

  await loginPage.informe2FA(codigo)

  await expect(await dashPage.obterSaldo()).toHaveText('R$ 5.000,00')
  
});

// test('Deve acessar a conta do usuário 2', async ({ page }) => {

//   const logtinActions = new LoginActions(page)
//   const usuario = {
//     cpf: "00000014141",
//     senha: "147258"
//   }

//   await logtinActions.acessaPagina()
//   await logtinActions.informaCpf(usuario.cpf)
//   await logtinActions.informaSenha(usuario.senha)

//   // Temporário
//   await page.waitForTimeout(3000)
//   const codigo = await obterCodigo2FA()

//   await logtinActions.informe2FA(codigo)
  
//   // Temporário
//   await page.waitForTimeout(2000)

//   expect(await logtinActions.obterSaldo()).toHaveText('R$ 5.000,00')
  
// });