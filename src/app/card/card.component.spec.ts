import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

// description du composant testé: suite de test
describe('CardComponent', () => {
  // stockage du composant
  let component: CardComponent;
  // fixture: version monté dans le DOM du composant
  let fixture: ComponentFixture<CardComponent>;

  // actions à lancer avant chaques tests
  beforeEach(async () => {
    // config du module du test
    await TestBed.configureTestingModule({
      // déclarer ici les composants utilisé pendant le test
      declarations: [CardComponent]
    })
      // compilation du module de test
      .compileComponents();
  });

  // création du composant
  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // fonction de test: un test
  it('should render title of card: Truc', () => {
    // instance du composant
    const fixture = TestBed.createComponent(CardComponent);
    // remplissage de l'input (ou des propriétées du composant)
    let comp_instance = fixture.componentInstance;
    comp_instance.cardTitle = "Truc";
    // attend les changements dans le DOM
    fixture.detectChanges();
    // Récupération du composant dans le DOM (Element DOM)
    const compiled = fixture.nativeElement as HTMLElement;
    // test
    // selection d'une partie du DOM pour le test
    expect(compiled.querySelector('.card-header')?.textContent).toContain('Truc');
  });

  it('Should render footer when cardFooter is set', () => {
    const fixture = TestBed.createComponent(CardComponent);
    let comp_instance = fixture.componentInstance;
    comp_instance.cardTitle = "Truc";
    comp_instance.cardBody = "Machin";
    comp_instance.cardFooter = "Bidule";
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.card-footer')?.textContent).toContain('Bidule');
  })

  it('Should not render footer when cardFooter is empty', () => {
    const fixture = TestBed.createComponent(CardComponent);
    let comp_instance = fixture.componentInstance;
    comp_instance.cardTitle = "Truc";
    comp_instance.cardBody = "Machin";
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // ici vérifie que le footer de la card n'est pas généré
    expect(compiled.querySelector('div.card-footer')?.textContent).toBeFalsy();
  })
});
