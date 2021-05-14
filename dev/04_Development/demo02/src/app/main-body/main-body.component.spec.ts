import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyComponent } from './main-body.component';
//import triggerEvent from 'trigger-event';

describe('MainBodyComponent', () => {
  let component: MainBodyComponent;
  let fixture: ComponentFixture<MainBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBodyComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//  let bodyPartsSpy: jasmine.Spy<jasmine.Func> | EventListener | EventListenerObject;
//  beforeEach(() => {
//       bodyPartsSpy = jasmine.createSpy('event');
//  });

//  it('dispatches onMouseOver event', () => {
//    document.addEventListener('bodyParts.onMouseOver', bodyPartsSpy);

//    const $trigger = document.querySelector('app-main-body');
//    triggerEvent($trigger, 'onMouseOver');

//    expect(bodyPartsSpy).toHaveBeenCalled();
//  });

});


