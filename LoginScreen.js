import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import './i18n';

export default function LoginScreen() {
  const [remember, setRemember] = React.useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom', 'left', 'right']}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <Text style={styles.heading}>{t('Welcome')}</Text>
              <Text style={styles.subtitle}>{t('PleaseEnterDetails')}</Text>

              <Text style={styles.label}>{t('Email')}</Text>
              <TextInput
                style={styles.input}
                placeholder={t('Email')}
                placeholderTextColor="#888"
                autoCapitalize="none"
                keyboardType="email-address"
              />

              <Text style={styles.label}>{t('Password')}</Text>
              <TextInput
                style={styles.input}
                placeholder={t('Password')}
                placeholderTextColor="#888"
                secureTextEntry
              />

              <View style={styles.rememberRow}>
                <Switch
                  value={remember}
                  onValueChange={setRemember}
                  trackColor={{ false: '#ccc', true: '#8d4ca4' }}
                  thumbColor={remember ? '#fff' : '#888'}
                />
                <Text style={styles.checkboxLabel}>{t('RememberMe')}</Text>
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{t('Login')}</Text>
              </TouchableOpacity>

              <Text style={styles.forgotLink}>{t('ForgotPassword')}</Text>

              <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>
                  {t('NoAccount')}
                  <Text style={styles.bottomLink}>{t('CreateOne')}</Text>
                </Text>
              </View>

              <TouchableOpacity style={styles.langSwitch} onPress={toggleLanguage}>
                <Text style={styles.langSwitchText}>
                  {language === 'en' ? '🇨🇳 中文' : '🇺🇸 EN'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#222034',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // 安卓安全补偿（状态栏）
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    padding: 32,
    backgroundColor: '#222034',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    lineHeight: 28,
  },
  headingSub: {
    fontWeight: '400',
  },
  subtitle: {
    color: '#a09eaf',
    fontSize: 15,
    marginTop: 6,
    marginBottom: 28,
    fontWeight: '500',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#f2f3f7',
    borderRadius: 5,
    fontSize: 16,
    color: '#888',
    padding: 10,
    marginBottom: 18,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    marginTop: -6,
  },
  checkboxLabel: {
    color: '#6d5c7b',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#8d4ca4',
    borderRadius: 5,
    paddingVertical: 11,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  forgotLink: {
    color: '#a09eaf',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 30,
  },
  bottomTextContainer: {
    marginTop: 'auto',
    marginBottom: 22,
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#a09eaf',
    fontWeight: '500',
  },
  bottomLink: {
    color: '#8d4ca4',
    fontWeight: '600',
    marginLeft: 2,
  },
  
  // LanguageToggle 优化样式
  langSwitch: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#f0f0f5',
    borderRadius: 100, // 更加 pill 风格
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },

  langSwitchText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6d5c7b',
  },

});
