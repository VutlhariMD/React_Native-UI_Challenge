import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CurrencyIcon } from './CurrencyIcon';
import type { CurrencyCode } from './CurrencyIcon';
import { colors, fonts } from '../theme';
import { moderateScale, fontScale } from '../utils/responsive';

export type CurrencyData = {
  code: CurrencyCode;
  amount: string;
  balance: string;
};

export type CurrencyPanelProps = CurrencyData & {
  onSelectPress?: () => void;
};

export function CurrencyPanel({
  code,
  amount,
  balance,
  onSelectPress,
}: CurrencyPanelProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onSelectPress}
        style={({ pressed }) => [styles.selector, pressed && styles.pressed]}
      >
        <CurrencyIcon code={code} />
        <Text style={styles.code}>{code}</Text>
        <Ionicons name="chevron-down" size={moderateScale(13)} color={colors.label} />
      </Pressable>

      <Text style={styles.amount} numberOfLines={1} adjustsFontSizeToFit>
        {amount}
      </Text>

      <View style={styles.balanceRow}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceValue}>{balance}</Text>
      </View>
    </View>
  );
}

export default CurrencyPanel;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(22),
  },
  selector: { flexDirection: 'row', alignItems: 'center', gap: moderateScale(10) },
  pressed: { opacity: 0.6 },
  code: { color: colors.text, fontFamily: fonts.regular, fontSize: fontScale(24) },
  amount: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: fontScale(56),
    marginTop: moderateScale(16),
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(14),
  },
  balanceLabel: { color: colors.label, fontFamily: fonts.regular, fontSize: fontScale(15) },
  balanceValue: { color: colors.labelMuted, fontFamily: fonts.regular, fontSize: fontScale(15) },
});