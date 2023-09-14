import {useCallback,useState} from 'react';
import {useRouter} from 'expo-router';
import {
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
    RefeshControl
} from 'react-native';

import {
    Company,
    JobAbout,
    JobFooter,
    JobTabs,
    ScreenHeaderBtn,
    Specifics
} from '../../components';

import {COLORS, icons,SIZES} from '../../constants';
import useFetch from '../../hook/useFetch';

const JobsDetail = () => {
    const params=useSearchParams();
    const router=useRouter(); 
    const {data,isLoading,error,refetch}=useFetch('job-detail',{job_id:params.id})

  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen 
        options={
            {
                headerStyle:{
                    backgroundColor:COLORS.lightWhite
                },
                headerShadowVisible:false,
                headerBackVisible:false;
                headerLeft:()=>
    }
    }
    >

        </Stack.Screen>
    </SafeAreaView>
       
  )
}

export default JobsDetail