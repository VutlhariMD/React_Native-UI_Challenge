import { Pressable, Text } from 'react-native';

export type GradientButtonProps = {
  title: string;
  onPress: () => void;
};

export function GradientButton({ title, onPress }: GradientButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}

export default GradientButton;