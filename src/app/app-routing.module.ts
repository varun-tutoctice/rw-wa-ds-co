import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Choice View Components
import { ChoiceViewComponent } from './views/choice-view/choice-view.component';
import { BonusPointsComponent } from './views/choice-view/components/bonus-points/bonus-points.component';
import { CreditDetailsComponent } from './views/choice-view/components/credit-details/credit-details.component';
import { UpgradeDetailsComponent } from './views/choice-view/components/upgrade-details/upgrade-details.component';
//Wallet View Components
import { WalletViewComponent } from './views/wallet-view/wallet-view.component';
//Shared Components
import { HeaderComponent } from './shared/components/header/header.component';



/*Internal Routes are imported and declared here*/
const routes: Routes = [
    //Choice View Routes
    { path: 'choiceView', component: ChoiceViewComponent },
    { path: 'bonusPoints', component: BonusPointsComponent },
    { path: 'creditDetails', component: CreditDetailsComponent },
    { path: 'upgradeDetails', component: UpgradeDetailsComponent },

    //Waller View Routes
    { path: 'walletView', component: WalletViewComponent },
];




@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


/*Once components are declared here no need to import in the app module again*/
export const routingComponents = [
    //Choice View Components
    ChoiceViewComponent,
    BonusPointsComponent,
    CreditDetailsComponent,
    UpgradeDetailsComponent,

    //Wallet View Components
    WalletViewComponent,

    //Shared Components
    HeaderComponent
  ]
