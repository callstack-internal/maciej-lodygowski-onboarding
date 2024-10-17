import * as React from 'react';

import type {RangeSliderViewComponent} from './RangeSliderViewNativeComponent';
import RangeSliderViewNativeComponent, {
  Commands,
} from './RangeSliderViewNativeComponent';

type Props = React.ComponentProps<typeof RangeSliderViewNativeComponent>;

export class RangeSliderView extends React.Component<Props> {
  private innerRef =
    React.createRef<React.ElementRef<RangeSliderViewComponent>>();

  setLeftKnobValueProgrammatically = (value: number) => {
    const ref = this.innerRef.current;

    if (ref) {
      Commands.setLeftKnobValueProgrammatically(ref, value);
    }
  };

  setRightKnobValueProgrammatically = (value: number) => {
    const ref = this.innerRef.current;

    if (ref) {
      Commands.setRightKnobValueProgrammatically(ref, value);
    }
  };

  render() {
    return (
      <RangeSliderViewNativeComponent ref={this.innerRef} {...this.props} />
    );
  }
}
