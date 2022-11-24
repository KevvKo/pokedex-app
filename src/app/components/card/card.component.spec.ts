import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CardComponent } from './card.component';

@Component({
  selector: 'test-card',
  template: `
    <app-card>
      <h1>im a title</h1>
      <p>it renders</p>
    </app-card>
  `
})
class TestComponent {}


describe('CardComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent, TestComponent], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should correctly project the title', () => {
    expect(
      fixture.debugElement.query(By.css('h1')).nativeElement.innerHTML
    ).toContain('im a title')
  })
  it('should correctly project the paragraph', () => {
    expect(
      fixture.debugElement.query(By.css('p')).nativeElement.innerHTML
    ).toContain('it renders')
  })
});
