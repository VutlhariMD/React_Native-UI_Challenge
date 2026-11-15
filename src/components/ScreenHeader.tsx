import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '../theme';
import { moderateScale, fontScale } from '../utils/responsive';

export type ScreenHeaderProps = {
  title: string;
  onBack?: () => void;
  onBellPress?: () => void;
  hasNotification?: boolean;
};

export function ScreenHeader({
  title,
  onBack,
  onBellPress,
  hasNotification = false,
}: ScreenHeaderProps) {
  return (
    <View style={styles.row}>
      <Pressable
        onPress={onBack}
        hitSlop={12}
        style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
      >
        <Ionicons name="chevron-back" size={moderateScale(22)} color={colors.infoText} />
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      <Pressable
        onPress={onBellPress}
        hitSlop={12}
        style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
      >
        <Ionicons name="notifications" size={moderateScale(24)} color="#B9A6D9" />
        {hasNotification && <View style={styles.dot} />}
      </Pressable>
    </View>
  );
}

export default ScreenHeader;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(12),
  },
  iconButton: { width: moderateScale(36), alignItems: 'center' },
  pressed: { opacity: 0.5 },
  title: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: fontScale(17),
  },
  dot: {
    position: 'absolute',
    top: 0,
    right: moderateScale(4),
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: 4,
    backgroundColor: colors.accent,
  },
});