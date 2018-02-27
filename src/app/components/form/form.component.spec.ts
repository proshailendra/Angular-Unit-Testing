import { FormComponent } from "./form.component";
import { FormBuilder } from "@angular/forms";

describe('Isolated Tests : ', () => { 
    let component : FormComponent;

    beforeEach(() => {
        component = new FormComponent(new FormBuilder());
    });

    it('should create a form with three controls', () => {        
      expect(component.form.contains('name')).toBeTruthy();
      expect(component.form.contains('email')).toBeTruthy();
      expect(component.form.contains('address')).toBeTruthy();

    });

    it('should make the name control required', () => {
       let name=component.form.get('name');
       name.setValue('shailendra');
       expect(name.valid).toBe(true);
    });
     
    it('should set validity flag true/false when call save method', () => {
        component.form.get('name').setValue('shailendra');
        component.form.get('email').setValue('shailendra@dotnettricks.com');
       component.save();
       expect(component.validity).toBe(true);
    });
});