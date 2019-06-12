import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TwentyOnePointsSharedLibsModule, TwentyOnePointsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TwentyOnePointsSharedLibsModule, TwentyOnePointsSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TwentyOnePointsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwentyOnePointsSharedModule {
  static forRoot() {
    return {
      ngModule: TwentyOnePointsSharedModule
    };
  }
}
