import { Pressable, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../theme';
import { moderateScale, fontScale } from '../utils/responsive';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function AppButton({ title, onPress, style }: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(12),
    alignItems: 'center',
  },
  pressed: { backgroundColor: colors.primaryPressed },
  label: { color: '#fff', fontSize: fontScale(16), fontWeight: '600' },
});