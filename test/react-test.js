import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {renderIntoDocument} from 'react-addons-test-utils';

import ExampleApplication from '../lib/index';


describe("testsuite", function() {
  it("MyComp contains message with expect", function() {
    const wrapper = shallow(<ExampleApplication/>);
    expect(wrapper.find('label')).to.have.length(1);
   
  });
  it("should render",function(){
  	const item = renderIntoDocument(<ExampleApplication/>);

  	expect(item).toExist;
  })

  it('should have props for message and submessage', function () {
    const wrapper = shallow(<ExampleApplication/>);
    expect(wrapper.props().message).to.be.defined;
    expect(wrapper.props().submessage).to.be.defined;
  });

  it('this should fail',function(){

    expect('foooo').to.have.length(3);
  })

  it('this should fail',function(){

    expect('foooo').to.have.length(4);
  })
 
  
});