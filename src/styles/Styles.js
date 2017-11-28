import {
    PixelRatio
} from 'react-native';
import Dimensions from'Dimensions';
const fontSizeScaler = PixelRatio.get()/PixelRatio.getFontScale();
export const totalWidth=Dimensions.get('window').width;
export const totalHeight=Dimensions.get('window').height;
export const firstFontSize=20*fontSizeScaler;
export const twoFontSize=18*fontSizeScaler;
export const threeFontSize=16*fontSizeScaler;
export const fourFontSize=10*fontSizeScaler;
export const fiveFontSize=8*fontSizeScaler;
export const sixFontSize=6*fontSizeScaler;
export const wuFontSize=5*fontSizeScaler;
export const sevenFontSize=4*fontSizeScaler;
export const firstColor='#173840';
export const twoColor='#53B193';
export const threeColor='white';
export const fourColor='black';
export const cheekborder=1;
export const radborder=5;
