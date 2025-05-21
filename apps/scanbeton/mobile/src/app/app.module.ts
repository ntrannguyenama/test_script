import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { GraphQLModule } from '@cloud-factory/shared-core-state';
import { environment } from '../environments/environment';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { TranslateModule } from '@ngx-translate/core';
import { SharedTranslationStateModule } from '@cloud-factory/shared-translation-state';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { Apollo } from 'apollo-angular';

// Auth States
import {
  AuthConfigState,
  AuthPasswordState,
  AuthSessionState,
} from '@cloud-factory/shared-auth-state';

// Core States
import {
  DateState,
  LocalizationState,
  MesurementState,
  NavigateState,
  ThemeState,
} from '@cloud-factory/shared-core-state';

// IDM States
import {
  FeatureState,
  OrganizationState,
  OrganizationParentState,
  RoleState,
  RoleMemberState,
  ScopedFeatureState,
  UserState,
  UserOrganizationState,
} from '@cloud-factory/shared-idm-state';

// Layout States
import {
  LayoutDeviceState,
  LayoutFabState,
  LayoutHeaderState,
  LayoutMenuState,
} from '@cloud-factory/shared-layout-state';

// Mail States
import {
  MailLogState,
  MailPartState,
  MailPartContentState,
  MailTemplateState,
} from '@cloud-factory/shared-mail-state';

// Map States
import { GoogleMapState } from '@cloud-factory/shared-map-state';

// Scheduler States
import { TaskState, TaskLogState } from '@cloud-factory/shared-scheduler-state';

// Translation States
import {
  LanguageState,
  TranslationState,
  TranslationContentState,
  TranslationKeyState,
} from '@cloud-factory/shared-translation-state';

// AI States
import { ChatbotState, VoiceState } from '@cloud-factory/shared-ai-state';

import {
  GlobalState,
  SupplierContractState,
  SupplierState,
  ContractPriceState,
  FormulaState,
  FormulaPriceState,
  DeliveryState,
  DistributionState,
  QualityTestState,
  QualityControlState,
  QualityAlertState,
  ProjectZoneState,
  ProjectInfoState,
  ProjectLocationState,
  SupplierFormulaState,
} from '@cloud-factory/app-scanbeton-state';

export const appConfig: ApplicationConfig = {
  providers: [
    Apollo,
    provideStore(
      [
        // Auth States
        AuthSessionState,
        AuthPasswordState,
        AuthConfigState,

        // Core States
        DateState,
        LocalizationState,
        MesurementState,
        NavigateState,
        ThemeState,

        // IDM States
        FeatureState,
        OrganizationState,
        OrganizationParentState,
        RoleState,
        RoleMemberState,
        ScopedFeatureState,
        UserState,
        UserOrganizationState,

        // Layout States
        LayoutHeaderState,
        LayoutMenuState,
        LayoutFabState,
        LayoutDeviceState,

        // Mail States
        MailLogState,
        MailPartState,
        MailPartContentState,
        MailTemplateState,

        // Map States
        GoogleMapState,

        // Scheduler States
        TaskState,
        TaskLogState,

        // Translation States
        LanguageState,
        TranslationState,
        TranslationContentState,
        TranslationKeyState,

        // AI States
        ChatbotState,
        VoiceState,

        // Scanbeton States
        GlobalState,
        SupplierContractState,
        SupplierState,
        ContractPriceState,
        FormulaState,
        FormulaPriceState,
        DeliveryState,
        DistributionState,
        QualityTestState,
        QualityControlState,
        QualityAlertState,
        ProjectZoneState,
        ProjectInfoState,
        ProjectLocationState,
        SupplierFormulaState,
      ],
      withNgxsStoragePlugin({
        keys: '*',
      }),
      withNgxsReduxDevtoolsPlugin({ disabled: !isDevMode() }),
    ),
    provideRouter(routes),
    importProvidersFrom(
      BrowserModule,
      GraphQLModule,
      IonicModule.forRoot({ mode: 'ios' }),
      SharedTranslationStateModule,
      TranslateModule.forRoot(),
    ),
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    { provide: 'env', useValue: environment },
  ],
};
