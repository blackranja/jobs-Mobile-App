import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';
import useFetch from '../../../hook/useFetch';
import {useRouter} from 'expo-router';
import styles from './popularjobs.style';
import {
  COLORS,
  SIZES
} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const {data,isLoading,error}=useFetch('search',{query:'React developer',num_pages:1});
  const router=useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popular Jobs
        </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading?(
          <ActivityIndicator 
          size="large"
          colors={COLORS.primary}/>
        ):
         error?(
          <Text>Something Went Wrong</Text>
        ):(
          <FlatList data={data}
          renderItem={({item})=>(
            <PopularJobCard item={item}/>
          )}
          keyExtractor={item=>item?.job_id}
          contentContainerStyle={{
            columnGap:SIZES.medium
          }}
          horizontal
          />
        )
      }
        
      </View>
    </View>
  )
}

export default Popularjobs