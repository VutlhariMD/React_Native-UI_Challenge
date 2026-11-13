import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../theme';
import { moderateScale, fontScale } from '../utils/responsive';

export type InfoRowProps = {
  label: string;
  value: string;
};

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default InfoRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(8),
  },
  label: {
   
    fontFamily: fonts.regular,
    fontSize: fontScale(14),
  },
  value: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: fontScale(14),
  },
})