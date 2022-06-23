import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Choice View Components
import { ChoiceViewComponent } from './views/choice-view/choice-view.component';
import { RewardsHeaderComponent } from './views/choice-view/components/rewards-header/rewards-header.component';
import { ChoiceCtaComponent } from './views/choice-view/components/choice-cta/choice-cta.component';

//Wallet View Components
import { WalletViewComponent } from './views/wallet-view/wallet-view.component';
//Shared Components
import { HeaderComponent } from './shared/components/header/header.component';
import { ChoiceDescriptionComponent } from './shared/components/choice-description/choice-description.component';
import { ChoiceDetailComponent } from './views/choice-view/components/choice-detail/choice-detail.component';

/*Internal Routes are imported and declared here*/
const routes: Routes = [
    //Choice View Routes
    { path: 'choiceView', component: ChoiceViewComponent },
    { path: 'choice', component: ChoiceDetailComponent },
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
    RewardsHeaderComponent,
    ChoiceCtaComponent,
    ChoiceDetailComponent,
    
    //Wallet View Components
    WalletViewComponent,

    //Shared Components
    HeaderComponent,
    ChoiceDescriptionComponent,

  ]
