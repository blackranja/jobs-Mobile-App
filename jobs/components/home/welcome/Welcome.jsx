import {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity,Image,FlatList} from 'react-native';
import {useRouter} from 'expo-router';
import styles from './welcome.style';
import {icons,SIZES} from '../../../constants';

const Welcome = () => {
  const router=useRouter();
  return (
    <View>
      <View
      style={styles.container}>
        <Text
        style={styles.userName}>
          Hello Josphat
        </Text>
        <Text style={styles.welcomeMessage}>
          Find Your Perfect jobs
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          value=""
          onChange={()=>{}}
          placeholder="what are you looking for?"/>

        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image 
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <view 
      style={styles.tabsContainer}
      >
        <FlatList 
        data={jobTypes} 
        renderItem={({item})=>(
          <TouchableOpacity 
          style={styles.tab(activeJobType,item)}
          onPress={()=>{
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }
          }
          >
            <Text style={styles.tabText(activeJobTypes,item)}>
              {item}
            </Text>

          </TouchableOpacity>
        )
      }
      keyExtractor={item=>item}
      contentcontainerStyle={{columnGap:SIZES.small}}
      horizontal
      />
      </view>

    </View>
    
  )
}

export default Welcome