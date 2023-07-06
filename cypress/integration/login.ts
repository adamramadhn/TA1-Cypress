import { DashboardPage } from "./pages/dashboard_pages"
import { LoginPage } from "./pages/login_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/v1/'

// it('Test LOGIN', () => {
//     loginPage.login(URL,'standard_user','secret_sauce')
//     loginPage.assertLogin() 
// })

// it('Test Sauce Demo Invalid Password', () => {
//     loginPage.login(URL,'standard_user','invalidPass')
//     loginPage.assertLoginFail()
// })

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

// it('Test Sauce Demo Checkout backpack',()=>{
//     loginPage.login(URL,'standard_user','secret_sauce')
//     loginPage.assertLogin()
//     dashboardPage.sauceLabsBackpack() 
//     dashboardPage.sauceLabsBackpackAddToCart()

// })

// it('Invalid Test Sauce Demo Checkout product backpack',()=>{
//     loginPage.login(URL,'standard_user','secret_sauce')
//     loginPage.assertLogin()
//     dashboardPage.sauceLabsBackpack() 
//     dashboardPage.invalidSauceLabsBackpackAddToCart()

// })
