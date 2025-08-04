# Flourish - The First AI Therapy App on iOS

[![React Native](https://img.shields.io/badge/React%20Native-0.72+-blue.svg)](https://reactnative.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-9.0+-orange.svg)](https://firebase.google.com/)
[![Expo](https://img.shields.io/badge/Expo-48.0+-purple.svg)](https://expo.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Launched January 2023** - The first AI-driven therapy application to launch on the iOS App Store, pioneering accessible mental health support through conversational AI technology.

## 🚀 App Store

[<img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" width="250">](https://apps.apple.com/us/app/flourish-app-id)

---

## 📱 Overview

**Flourish made history in January 2023 as the first AI therapy application to launch on the iOS App Store.** This groundbreaking achievement positioned the app as a pioneer in the mental health technology space, demonstrating the viability of AI-powered therapeutic support in a regulated app marketplace.

The app addresses critical challenges in mental health accessibility by combining evidence-based therapeutic techniques with advanced conversational AI. At its core is "Fleur," an intelligent AI chatbot that engages users in therapeutic conversations, supported by a comprehensive suite of wellness tools including breathing exercises, meditation sessions, stress assessments, and structured journaling exercises.

**Key Achievement:** First-mover advantage in the AI therapy space, successfully navigating App Store approval processes for mental health applications with AI components.

## 🏗️ Architecture & Tech Stack

### Frontend
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and build tools
- **React Navigation** - Navigation and routing
- **TailwindCSS (twrnc)** - Utility-first styling
- **Moti** - Animation library for React Native
- **React Native Gesture Handler** - Touch interactions

### Backend & Services
- **Firebase Authentication** - User management and security
- **Firebase Realtime Database** - Real-time data synchronization
- **Firebase Analytics** - User behavior tracking
- **RevenueCat** - Subscription management and monetization

### AI & Machine Learning
- **Custom AI Chatbot** - Therapeutic conversation engine
- **Natural Language Processing** - Context-aware responses
- **Conversation Memory** - Persistent session context

### Development Tools
- **TypeScript** - Type safety and developer experience
- **ESLint** - Code quality and consistency
- **React Native Custom Haptics** - Enhanced user experience

## 🎯 What's in this Repository?

This repository contains the **complete React Native frontend codebase** for Flourish, showcasing the technical implementation that achieved the milestone of being the first AI therapy app on the iOS App Store. The codebase demonstrates:

- **Complete UI Components** - All screens, navigation, and interactive elements
- **State Management** - Context providers and custom hooks for app state
- **Authentication Flow** - User registration, login, and session management
- **AI Chatbot Interface** - Complete chat UI and conversation management
- **Wellness Tools** - Breathing exercises, meditation, stress tests, and journaling
- **Subscription Management** - Paywall, promo codes, and membership features
- **Analytics Integration** - User behavior tracking and insights
- **Local Data Persistence** - Offline capability and data caching

**Note:** This is a curated showcase of the production codebase, focusing on the core technical implementation that achieved App Store approval and commercial success.

## 🔒 What's Not in this Repository?

To protect the core intellectual property that enabled this first-to-market achievement, the following components are not included in this public repository:

- **Backend Service Code** - Proprietary API endpoints and business logic
- **AI Model Implementation** - Core conversational AI engine and training data that powered the first AI therapy chatbot on iOS
- **Database Schema** - Complete data structure and relationships
- **Revenue Optimization Logic** - Advanced subscription and pricing algorithms
- **App Store Approval Documentation** - Internal processes and compliance strategies that enabled the first AI therapy app approval

These components represent the proprietary innovations that secured Flourish's position as the first AI therapy application on the iOS App Store.

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 16+ 
- React Native development environment
- Expo CLI
- iOS Simulator or Android Emulator

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/flourish-mental-health-companion.git
cd flourish-mental-health-companion

# Install dependencies
npm install

# Start the development server
npx expo start
```

### Environment Setup
Create a `.env` file with your Firebase and RevenueCat configuration:

```env
# Firebase Configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
FIREBASE_DATABASE_URL=your_firebase_database_url

# RevenueCat API Keys
REVENUECAT_APPLE_API_KEY=your_revenuecat_apple_api_key
REVENUECAT_GOOGLE_API_KEY=your_revenuecat_google_api_key
```

**Important:** Copy `firebaseConfig.example.js` to `firebaseConfig.js` and update with your actual Firebase credentials.

## 🏗️ Code Highlights

### Key Implementation Areas

#### **AI Chatbot System**
- [`Screens/AI/ChatBot/Fleur.js`](./Screens/AI/ChatBot/Fleur.js) - Main chatbot interface with real-time conversation handling
- [`Context/FleurContext.js`](./Context/FleurContext.js) - Global state management for AI conversations
- [`Components/ExerciseComponents/`](./Components/ExerciseComponents/) - Therapeutic exercise components

#### **Authentication & User Management**
- [`Context/AuthContext.js`](./Context/AuthContext.js) - Firebase authentication with custom hooks
- [`Screens/OnBoarding/OnBoarding.js`](./Screens/OnBoarding/OnBoarding.js) - User onboarding flow
- [`Screens/Settings.js`](./Screens/Settings.js) - User preferences and account management

#### **Wellness Tools**
- [`Screens/AnxietyPrograms/`](./Screens/AnxietyPrograms/) - Breathing exercises and anxiety management
- [`Screens/Tools/`](./Screens/Tools/) - Meditation, stress tests, and journaling tools
- [`Components/AudioPlayer.js`](./Components/AudioPlayer.js) - Audio playback for guided sessions

#### **Subscription & Monetization**
- [`Components/useRevHook.js`](./Components/useRevHook.js) - RevenueCat integration for subscriptions
- [`Screens/Paywall2.js`](./Screens/Paywall2.js) - Premium feature paywall
- [`Screens/PromoCode.js`](./Screens/PromoCode.js) - Promotional code system

## 📊 Features

### 🤖 AI-Powered Therapy (First on iOS)
- **Intelligent Chatbot** - Context-aware therapeutic conversations that pioneered AI therapy on mobile
- **Personalized Responses** - Tailored to individual user needs using advanced NLP
- **Conversation Memory** - Persistent session context across interactions
- **App Store Compliance** - Successfully navigated Apple's review process for AI mental health applications

### 🧘‍♀️ Wellness Tools
- **Breathing Exercises** - Multiple techniques for anxiety relief
- **Meditation Sessions** - Guided mindfulness practices
- **Stress Assessment** - Comprehensive mental health evaluation
- **Daily Journaling** - Structured reflection exercises
- **Goal Planning** - Cognitive behavioral therapy techniques

### 💰 Monetization
- **Freemium Model** - Basic features free, premium features subscription-based
- **Subscription Management** - Seamless billing and account management
- **Promotional Codes** - Flexible pricing and marketing campaigns

### 📱 User Experience
- **Intuitive Design** - Clean, accessible interface
- **Haptic Feedback** - Enhanced tactile interactions
- **Offline Support** - Core features available without internet
- **Cross-Platform** - Consistent experience across iOS and Android

## 🚀 Deployment

### iOS App Store
1. Configure Firebase project settings
2. Set up RevenueCat for subscription management
3. Configure app signing and provisioning profiles
4. Build and submit through Expo Application Services

### Android Play Store
1. Generate signed APK/AAB
2. Configure Firebase for Android
3. Set up Google Play Console
4. Deploy through Expo Application Services

## 📈 Analytics & Insights

The app integrates comprehensive analytics to track:
- User engagement and retention
- Feature usage patterns
- Subscription conversion rates
- Mental health assessment results
- AI conversation effectiveness
- App Store performance metrics (first AI therapy app category)

## 🏆 Key Achievements

- **First AI Therapy App on iOS App Store** (January 2023)
- **Pioneered AI Mental Health Category** - Established new app category standards
- **Successfully Navigated App Store Review Process** - Set precedent for AI therapy applications
- **Commercial Viability Demonstrated** - Proved market demand for AI-powered mental health support

## 🤝 Contributing

This repository serves as a showcase of the technical implementation that achieved the milestone of being the first AI therapy app on the iOS App Store. While primarily focused on demonstrating the codebase that enabled this achievement, we welcome:
- Bug reports and issue tracking
- Documentation improvements
- Accessibility enhancements
- Performance optimizations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [flourishtech.app](https://www.flourishtech.app)
- **App Store**: [Download on iOS](https://apps.apple.com/us/app/flourish-app-id)
- **Support**: support@flourishtech.app

## 🙏 Acknowledgments

- **Therapeutic Techniques**: Based on evidence-based cognitive behavioral therapy
- **AI Technology**: Powered by advanced natural language processing
- **User Experience**: Designed with accessibility and mental health best practices in mind
- **App Store Team**: For reviewing and approving the first AI therapy application on iOS

---

**Built with ❤️ for better mental health accessibility**

*Pioneering AI therapy on mobile since January 2023* 
