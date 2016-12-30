/* global describe it */
/* eslint no-undef: "error" */
require('should');
const run = require('./helper').run;

describe('variables and components', () => {
  it('simple extract',
    () => run("li(@repeat='items as item')\n  ItemDetail(item='{item}')").then((output) => {
      output.variables.length.should.be.eql(1);
      output.variables.should.containEql('items');
      output.components.length.should.be.eql(1);
      output.components.should.containEql('ItemDetail');
    }));

  it('ignore reserved keyword: React, this',
    () => run('div\n  | {React.Children.only(this.props.children)}').then((output) => {
      output.variables.length.should.be.eql(0);
    }));
});