import React from 'react'
import { View, Text } from 'react-native'

import styles from './company.style'
import {icons} from '../../../constants';
import { checkImageURL } from '../../../utils';
const Company = ({companyLogo,jobTitle,companyName,location}) => {
  return (
   <View style={styles.container}>
    <View style={styles.logoBox}>
      <Image
      source={{
        url:checkImageURL(companyLogo)
        ? companyLogo
        : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"

      }}
      style={styles.logoImage}
      />

    </View>
    <view style={styles.jobTitleBox}>
      <Text style={styles.jobTitle}>
        {jobTitle}
      </Text>
    </view>
    <View style={styles.companyInfoBox}>
      <Text style={styles.companyName}>
        {companyName}
      </Text>
      <View>
        <Image source={icons.location}
        resizeMode="contain"
        style={styles.locationImage}
        />
        <Text style={style.locationName}>
          {location}
        </Text>
      </View>
    </View>
   </View>
  )
}

export default Company