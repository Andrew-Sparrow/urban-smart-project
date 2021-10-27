import {combineReducers} from 'redux';
import {form} from './form/form';

export const NameSpace = {
  FORM: 'FORM',
};

export default combineReducers({
  [NameSpace.FORM]: form,
});
