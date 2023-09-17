import {useCallback,useState} from 'react';
import {useRouter} from 'expo-router';
import {
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
    RefreshControl
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
import { ScrollView } from 'react-native-gesture-handler';
const tabs=["About","Qualifications","Responsibilities",];

const JobsDetail = () => {
    const params=useSearchParams();
    const router=useRouter(); 

    const {
        data,
        isLoading,
        error,
        refetch
    }=useFetch(
        'job-details',
    {job_id:params.id}
    );
    const [refreshing,setRefreshing]=useState(false);
    const [activeTab,setActiveTab]=useState(tabs[0]);
    const onRefresh=()=>{}

  return (
    <SafeAreaView style={
        {
            flex:1,
            backgroundColor:COLORS.lightWhite
        }
        }
        >
        <Stack.Screen 
        options={
            {
                headerStyle:{
                    backgroundColor:COLORS.lightWhite
                },
                headerShadowVisible:false,
                headerBackVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn
                    iconUrk={icons.left}
                    dimension="60%"
                    handlePress={()=>router.back()}
                    />
                   
                ),
                headerTitle:''
    }
    }
    />
    <>
    <ScrollView 
    showsVerticalScrollIndicator={false}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
       {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary}/>
       ):error ? (
        <Text>
            Something Went Wrong
        </Text>
       ): data.length===0 ? (
        <Text>
            No Data
        </Text>
       ):(
        <view style={
            {
                paddding:SIZES.medium,
                paddingBottom:100
            }
        }
        >
            <Company
            companyLogo={data[0].employer_logo}
            jobTitle={data[0].job_title}
            companyName={data[0].employer_name}
            location={data[0].job_country}
            />
            <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </view>
       )
    }  
    </ScrollView>
    </>
        
    </SafeAreaView>
       
  )
}

export default JobsDetail