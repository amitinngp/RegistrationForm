import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import {mount} from 'enzyme';
import FormikRegistrationForm from "./FormikForm/FormikRegistrationForm";


let component;
  beforeEach(()=>{
      component = mount(<FormikRegistrationForm/>);
  })
  
  const findByTypeAttr = (component,attr)=>{
      const wrapper = component.find(`[type="${attr}"]`);
      return wrapper;
  }
  const findByClass = (component,attr)=>{
    const wrapper = component.find(`.${attr}`);
    return wrapper;
}
const findById = (component,attr)=>{
  const wrapper = component.find(`#${attr}`);
  return wrapper;
}

describe('Test #FormikRegistrationForm',()=>{
  
  it('should have 3 text input username,password,confirm password!',()=>{
    const wrapper = findByTypeAttr(component,"text");
    expect(wrapper.length).toBe(3);
    component.unmount();
  });
  
  it('should have 3 label div for username,password,confirm!',()=>{
    const wrapper = findByClass(component,"label");
    expect(wrapper.length).toBe(3);
    component.unmount();
  });
  it('should have Register button with type submit!',()=>{
    const wrapper = findByTypeAttr(component,"submit");
    expect(wrapper.length).toBe(1);
    component.unmount();
  });
  it('should have Register button disabled for first load!',()=>{
    const wrapper = findByTypeAttr(component,"submit");
    expect(wrapper.props()["disabled"]).toBe(true)
    component.unmount();
  });
  
});

