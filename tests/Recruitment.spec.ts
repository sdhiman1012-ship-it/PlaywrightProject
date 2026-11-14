
import {test, expect} from "playwright/test";
import { Page } from "playwright/test";
import { Loginpage } from "../pages/login";
import { dashboard } from "../pages/Home";

test('navigate to recruitment page',async({page})=> {
    
    const home = new dashboard(page);
  await home.Home();

    await home.openRecruitment();
});


