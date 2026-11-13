import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { fontScale } from '../utils/responsive';

type AppLinkProps = {
  title: string;
  onPress: () => void;
};

export default function AppLink({ title, onPress }: AppLinkProps) {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Text style={[styles.link, pressed && styles.pressed]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: { color: colors.primary, fontSize: fontScale(14) },
  pressed: { color: colors.primaryPressed },
});