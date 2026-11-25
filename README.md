# React Native UI Challenge: Crypto Exchange Screen
A crypto Exchange screen from the crypto exchange screen built with Expo, Expo Router  and Typescript.
Focuses on the design implementation, styling with React Native 'StyleSheet' , reusable components and responsiveness across different screen sizes.

### User Interface

<img width="1162" height="700" alt="image" src="https://github.com/user-attachments/assets/74b440ec-e48a-4d83-bd72-5dc5d5edf3c5" />






## Getting started        

### Prerequisites

- Node.js (LTS)
- The Expo Go app on your phone, or an Android or iOS emulator

### How to Install and run

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `w` to open the web version.
If your phone can't connect, use `npx expo start --lan` with the phone and computer on
the same Wi-Fi network.

### Type check

```bash
npx tsc --noEmit
```

## Build the Android APK

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

The `preview` profile in `eas.json` is set to produce an installable `.apk` file.
