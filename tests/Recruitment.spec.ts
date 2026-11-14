
import {test, expect} from "playwright/test";
import { Page } from "playwright/test";
import { Loginpage } from "../pages/login";
import { dashboard } from "../pages/Home";

test('navigate to recruitment page',async({page})=> {
   const login = new Loginpage(page);
  const home = new dashboard(page);
    
    
    
    await login.open();
  await login.login('Admin', 'admin123');

  await home.Home();

    await home.openRecruitment();
});


