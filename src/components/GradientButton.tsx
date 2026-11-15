import { Pressable, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, fonts } from '../theme';
import { moderateScale, fontScale } from '../utils/responsive';

export type GradientButtonProps = {
  title: string;
  onPress: () => void;
};

export function GradientButton({ title, onPress }: GradientButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={(state) => {
        const hovered = (state as { hovered?: boolean }).hovered;
        return [(state.pressed || hovered) && styles.active];
      }}
    >
      <LinearGradient
        colors={[colors.buttonStart, colors.buttonEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.label}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

export default GradientButton;

const styles = StyleSheet.create({
  button: {
    height: moderateScale(54),
    borderRadius: moderateScale(27),
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: { opacity: 0.8 },
  label: {
    color: colors.buttonText,
    fontFamily: fonts.regular,
    fontSize: fontScale(17),
  },
});