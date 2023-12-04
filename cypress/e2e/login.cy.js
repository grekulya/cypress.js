
describe('Проверка авторизации', function () {
    
    it('Верный лог и верный пароль', function () {
        cy.visit('login.qa.studio');
        cy.get('#loginButton'). should('be.disabled');
        cy.get('#mail'). type('german@dolnikov.ru');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton'). should('be.enabled');
        cy.get('#loginButton'). click();
        cy.get('#messageHeader'). contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').  should('be.visible');

})

 it('Забыли пароль', function () {
        cy.visit('login.qa.studio');
        cy.get('#forgotEmailButton').should('be.enabled');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').  should('be.visible');
    })

it('Верный лог и неверный пароль', function () {
        cy.visit('login.qa.studio');
        cy.get('#loginButton'). should('be.disabled');
        cy.get('#mail'). type('german@dolnikov.ru');
        cy.get('#pass'). type('iLoveqastudio111');
        cy.get('#loginButton'). should('be.enabled');
        cy.get('#loginButton'). click();
        cy.get('#messageHeader'). contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').  should('be.visible');

})

it('Неверный лог и неверный пароль', function () {
        cy.visit('login.qa.studio');
        cy.get('#loginButton'). should('be.disabled');
        cy.get('#mail'). type('german@donikov.ru');
        cy.get('#pass'). type('iLoveqastudio111');
        cy.get('#loginButton'). should('be.enabled');
        cy.get('#loginButton'). click();
        cy.get('#messageHeader'). contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').  should('be.visible');

})
it('Логин без @ и правильный пароль', function () {
        cy.visit('login.qa.studio');
        cy.get('#loginButton'). should('be.disabled');
        cy.get('#mail'). type('germandolnikov.ru');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton'). should('be.enabled');
        cy.get('#loginButton'). click();
        cy.get('#messageHeader'). contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').  should('be.visible');

})
it('Верный лог и верный пароль с заглавными буквами', function () {
        cy.visit('login.qa.studio');
        cy.get('#loginButton'). should('be.disabled');
        cy.get('#mail'). type('GerMan@Dolnikov.ru');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton'). should('be.enabled');
        cy.get('#loginButton'). click();
        cy.get('#messageHeader'). contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').  should('be.visible');

})
describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('tgk.grk@gmail.com');
        cy.get('#password').type('Grekulya1');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Alex Tarabrin');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })
})

    })
