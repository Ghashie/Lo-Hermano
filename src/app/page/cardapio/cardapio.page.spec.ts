import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardapioPage } from './cardapio.page';

describe('CardapioPage', () => {
  let component: CardapioPage;
  let fixture: ComponentFixture<CardapioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardapioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
