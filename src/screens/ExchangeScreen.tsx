import { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../components/ScreenHeader';
import ExchangeCard from '../components/ExchangeCard';
import GradientButton from '../components/GradientButton';
import { CurrencyData } from '../components/CurrencyPanel';
import { colors, fonts } from '../theme';
import { moderateScale, fontScale } from '../utils/responsive';

const eth: CurrencyData = { code: 'ETH', amount: '12,695', balance: '293.0187' };
const usd: CurrencyData = { code: 'USD', amount: '43,937.4', balance: '12,987.21' };

const details = [
  { label: 'Estimate fee', value: '4.28 usd' },
  { label: 'You will recieve', value: '43,941,68 USD' },
  { label: 'Spread', value: '0.2%' },
  { label: 'Gas fee', value: '0.0045 ETH' },
];

export function ExchangeScreen() {
  const [swapped, setSwapped] = useState(false);
  const top = swapped ? usd : eth;
  const bottom = swapped ? eth : usd;

  return (
    <LinearGradient
      colors={[colors.background, colors.background, colors.backgroundGlow]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.flex}
    >
      <SafeAreaView style={styles.flex}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <ScreenHeader title="Exchange" hasNotification />

          <View style={styles.cardWrap}>
            <ExchangeCard
              top={top}
              bottom={bottom}
              onSwap={() => setSwapped((s) => !s)}
            />
          </View>

          <Text style={styles.rate}>1 ETH = 3,461.02 USD</Text>

          <GradientButton title="Buy ETH" onPress={() => {}} />

          <View style={styles.details}>
            {details.map((item) => (
              <InfoRow key={item.label} {...item} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default ExchangeScreen;

const styles = StyleSheet.create({
  flex: { flex: 1 },
  content: { paddingHorizontal: moderateScale(16), paddingBottom: moderateScale(24) },
  cardWrap: { marginTop: moderateScale(12) },
  rate: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: fontScale(14),
    textAlign: 'center',
    marginVertical: moderateScale(14),
  },
  details: { marginTop: moderateScale(20) },
});