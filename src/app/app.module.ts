import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FeatureModule} from './pages/feature/feature.module';
import {AtScrollbarModule} from '@atomic/core';
import {CoreModule} from "./core/core.module";
import {FrameworkModule} from './pages/framework/framework.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RoutingModule,
        AtScrollbarModule.forRoot(),
        CoreModule,
        FeatureModule,
        FrameworkModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
