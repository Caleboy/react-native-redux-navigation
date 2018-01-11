import {
    PixelRatio
} from 'react-native';
import Dimensions from'Dimensions';
const fontSizeScaler = PixelRatio.get()/PixelRatio.getFontScale();
export const totalWidth=Dimensions.get('window').width;
export const totalHeight=Dimensions.get('window').height;
export const sixFontSize=6*fontSizeScaler;
export const cheekborder=1;
