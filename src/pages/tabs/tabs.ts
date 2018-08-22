import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { ActivityPage } from '../activity/activity';
import { MembersPage } from '../members/members';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ActivityPage;
  tab3Root = MembersPage;

  constructor() {

  }
}
