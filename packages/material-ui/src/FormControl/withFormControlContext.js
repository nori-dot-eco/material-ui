import React from 'react';
import FormControlContext from './FormControlContext';
import { getDisplayName } from '@material-ui/utils';

export default function withFormControlContext(Component) {
  const EnhancedComponent = props => {
    return (
      <FormControlContext.Consumer>
        {context => {
          return <Component muiFormControl={context} {...props} />;
        }}
      </FormControlContext.Consumer>
    );
  };

  if (process.env.NODE_ENV !== 'production') {
    EnhancedComponent.displayName = `WithFormControlContext(${getDisplayName(Component)})`;
  }

  return EnhancedComponent;
}
