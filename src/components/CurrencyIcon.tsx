import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, fonts } from '../theme';
import { moderateScale, fontScale } from '../utils/responsive';

export type CurrencyCode = 'ETH' | 'USD';

export function CurrencyIcon({ code }: { code: CurrencyCode }) {
  const isEth = code === 'ETH';

  return (
    <View style={[styles.circle, isEth ? styles.eth : styles.usd]}>
      {isEth ? (
        <MaterialCommunityIcons name="ethereum" size={moderateScale(26)} color="#fff" />
      ) : (
        <Text style={styles.dollar}>$</Text>
      )}
    </View>
  );
}

export default CurrencyIcon;

const SIZE = moderateScale(42);

const styles = StyleSheet.create({
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eth: { backgroundColor: '#000' },
  usd: { backgroundColor: colors.iconBg },
  dollar: { color: colors.text, fontFamily: fonts.regular, fontSize: fontScale(22) },
});