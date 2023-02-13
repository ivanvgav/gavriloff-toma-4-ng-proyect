import { CommonModule } from "@angular/common";
import { isDevMode, NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AuthStoreModule } from "./auth/auth-store.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        AuthStoreModule,
        UsersStoreModule,
    ]
})

export class AppStoreModule { }