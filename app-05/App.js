import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Button } from 'react-native';
// import { TelegramClient } from "telegram";
// import { StringSession } from "telegram/sessions";
// import { DefaultConnection } from 'telegram/auto';
// import { message, regex } from 'telegram/extensions';
// import input from "input";
// import { TelegramBot } from 'telegram-bot-api';
// import SmsListener from 'react-native-android-sms-listener';
// import axios from 'axios';
import * as SMS from 'expo-sms';

const apiId = 24039750;
const apiHash = "13c3d37d575e307bdd907dc5d27abc4e";

// const stringSession = new StringSession(""); // fill this later with the value from session.save()

// (async () => {
//   console.log("Loading interactive example...");
//   const client = new TelegramClient(stringSession, apiId, apiHash, {
//     connectionRetries: 5,
//   });
//   await client.start({
//     phoneNumber: async () => await input.text("Please enter your number: "),
//     password: async () => await input.text("Please enter your password: "),
//     phoneCode: async () =>
//       await input.text("Please enter the code you received: "),
//     onError: (err) => console.log(err),
//   });
//   console.log("You should now be connected.");
//   console.log(client.session.save()); // Save this string to avoid logging in again
//   await client.sendMessage("me", { message: "Hello!" });
// })();


export default function App() {
  const [isAvailable, setIsAvailable] = useState('');


  const botToken = '6025734915:AAHYSpqD2kzaA8GanLY1-SjGjv3yuSHX0MI';
  const groupId = '-940062725';
  
  useEffect(() => {
    async function smsListener() {     
      try {
        const isSmsAvailable = await SMS.isAvailableAsync();
        setIsAvailable(isSmsAvailable);
      } catch(err) {
        console.log(err.message);
      }
    }
    smsListener();
  }, []);

  async function smsRetrieve() {
    const phoneNumber = await SMSRetriever.requestPhoneNumber();
  }

  // async function read() {
  //   await startReadSMS(successCallbackFn);
  // }

  // async function successCallbackFn(status, sms, error) {
  //   console.log("successCallbackFn", status, sms, error);
  // }

  // useEffect(() => {
  //   if (checkIfHasSMSPermission) read();
  //   // requestReadSMSPermission();
  //   return () => {};
  // }, []);

  const sendSms = async() => {
    const { result } = await SMS.sendSMSAsync(
      ['9650831067'],
      'Hi Friend!!!'
    );
    console.log(result);
  }

  return (
    <View style={styles.container}>
      {
        isAvailable ? <Button title="Send Sms" onPress={sendSms} /> : <Text>Sms not Available</Text>
      }
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
