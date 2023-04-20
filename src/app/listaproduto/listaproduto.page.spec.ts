import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaprodutoPage } from './listaproduto.page';

describe('ListaprodutoPage', () => {
  let component: ListaprodutoPage;
  let fixture: ComponentFixture<ListaprodutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaprodutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
