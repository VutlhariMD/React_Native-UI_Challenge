import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CurrencyPanel } from './CurrencyPanel';
import type { CurrencyData } from './CurrencyPanel';
import { SwapButton } from './SwapButton';
import { colors } from '../theme';
import { moderateScale } from '../utils/responsive';

export type ExchangeCardProps = {
  top: CurrencyData;
  bottom: CurrencyData;
  onSwap: () => void;
};

export function ExchangeCard({ top, bottom, onSwap }: ExchangeCardProps) {
  return (
    <LinearGradient
      colors={[colors.cardStart, colors.cardEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <CurrencyPanel {...top} />

      <View style={styles.dividerWrap}>
        <View style={styles.divider} />
        <View style={styles.swap}>
          <SwapButton onPress={onSwap} />
        </View>
      </View>

      <CurrencyPanel {...bottom} />
    </LinearGradient>
  );
}

export default ExchangeCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: moderateScale(28),
    overflow: 'hidden',
  },
  dividerWrap: { height: 2, justifyContent: 'center' },
  divider: { height: 2, backgroundColor: colors.divider },
  swap: { position: 'absolute', alignSelf: 'center' },
});