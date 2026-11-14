
import {test, expect} from "playwright/test";
import { Page } from "playwright/test";
import { Loginpage } from "../pages/login";
import { dashboard } from "../pages/Home";

test('logs in to OrangeHRM',async({page})=> {
    
    const loginpage  = new Loginpage(page);
    const home = new dashboard(page);

  await loginpage.open();
  await loginpage.login('Admin', 'admin123');
  await home.Home();
});

