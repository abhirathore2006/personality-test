import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.amber500,
    primary2Color: Colors.amber700,
    primary3Color: Colors.teal800,
    accent1Color: Colors.redA200,
    accent2Color: Colors.amber100,
    accent3Color: Colors.amber500,
    textColor: Colors.cyan50,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.amber300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.amber500,
  }
};