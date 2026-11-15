import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { moderateScale } from '../utils/responsive';

export type SwapButtonProps = { onPress: () => void };

export function SwapButton({ onPress }: SwapButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={(state) => {
        const hovered = (state as { hovered?: boolean }).hovered;
        return [styles.button, (state.pressed || hovered) && styles.active];
      }}
    >
      <Ionicons name="swap-vertical" size={moderateScale(20)} color={colors.text} />
    </Pressable>
  );
}

export default SwapButton;

const styles = StyleSheet.create({
  button: {
    width: moderateScale(42),
    height: moderateScale(40),
    borderRadius: moderateScale(12),
    backgroundColor: colors.swapBg,
    borderWidth: 1,
    borderColor: colors.swapBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: { backgroundColor: '#25232D' },
});