import React, {useState} from 'react';
import { TextInput, Text, View , Image, CheckBox} from 'react-native';
import styles from '../Design/stylesheet';
import RoundCheckbox from 'react-native-round-checkbox';
import { Ionicons } from '@expo/vector-icons';


export default Settings=()=>{
    const [areNotifications, setNotifications] = useState(false)
    const [isGPS, setGPS] = useState(false)
    const [isDarkMode, setDarkMode] = useState(false)
    return(
        
    <View style={styles.screen}>
    {/* upperContainer ist der mit Logo und Hinweisbalken */}
    <View style={styles.upperContainer}>
      <Image style={{height:'27%', width:'14%',alignSelf:'flex-start', marginLeft: 20, marginBottom: 20,}} source={require('../Design/pics/apple.png')} />
      <Text style={styles.fetteSchrift}>Einstellungen</Text>
      <View style={styles.textbalken}>
          <Text style={styles.weisserText}>Aktiviere für Benachrichtigungen bei Betreten einer Maskenzone "Push-Benachrichtigungen" und "GPS".</Text>
      </View>
    </View>

    <View style={styles.middleContainerSettings}>
        <View style={styles.placeforMapSettings}>
          
            <View style={styles.settingbox}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#B2E0E6'}
                    backgroundColor={"#B2E0E6"}
                    iconColor={'white'}
                    checked={areNotifications}
                    onValueChange={setNotifications}
                    style={styles.checkbox}
                />
                <Text style={styles.settingText}>Push-Benachrichtigungen</Text>
            </View>
            <View style={styles.settingbox}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#B2E0E6'}
                    backgroundColor={"#B2E0E6"}
                    iconColor={'white'}
                    checked={isGPS}
                    onValueChange={setGPS}
                    style={styles.checkbox}
                />
                <Text style={styles.settingText}>GPS Daten nutzen </Text>
            </View>
            <View style={styles.settingbox}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#B2E0E6'}
                    backgroundColor={"#B2E0E6"}
                    iconColor={'white'}
                    checked={isDarkMode}
                    onValueChange={setDarkMode}
                    style={styles.checkbox}
                />
                <Text style={styles.settingText}>Dark Mode hahaha als wenn </Text>
            </View>
          
          
        </View>
   
        <Text style={styles.impressumHeading}>Impressum</Text>
        <View style={styles.impressum}>
            
          <Text style={styles.impressumText}>IIIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMPRESSUUUM impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum impressum .</Text>


        </View>
    </View>
        
</View>
    );
};