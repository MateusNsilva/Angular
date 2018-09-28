import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDePostsComponent } from './listagem-de-posts.component';

describe('ListagemDePostsComponent', () => {
  let component: ListagemDePostsComponent;
  let fixture: ComponentFixture<ListagemDePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemDePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemDePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
