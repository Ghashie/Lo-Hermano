import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliticaPage } from './politica.page';

describe('PoliticaPage', () => {
  let component: PoliticaPage;
  let fixture: ComponentFixture<PoliticaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PoliticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
