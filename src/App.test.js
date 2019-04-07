import {expect} from 'mocha';
import {List, Map} from 'immutable';
import orderActionReducer from './reducers/index';

describe('reducer',()=>{
  describe('order action reducer', ()=>{
    it('Should put the order and set status to pending',()=>{
      let initialState = Map();
      let action = {type:'PUT_ORDER'}
      let nextState = orderActionReducer(initialSate, action);
      expect(nextState.orderStatus).to.equal(Map({
        orderStatus:'PENDING'
      }))
    })
    it('order status reducer',()=>{
      let initialSate = Map();
      let action = {type:'MAKE_ACTIVE'}
      let nextState = Map({
        orderStatus:'ACTIVE'})
      })
      expect(nextState.orderStatus).to.equal('ACTIVE')
    it('order status reducer',()=>{
      let initialSate = Map();
      let action = {type:'MAKE_PENDING'}
      let nextState = Map({
        orderStatus:'PENDING'})
      })
      expect(nextState.)
    it('order status reducer',()=>{
      let initialSate = Map();
      let action = {type:'MAKE_RECIEVED'}
      let nextState = Map({
        orderStatus:'RECIEVED'})
      })
    })
  })