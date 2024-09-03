import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';

const SignIn = ()=>{

    return(
     
            <SafeAreaView className="bg-primary h-full">
                <ScrollView>
                    <View className="w-full justify-center h-full px-4 my-6">
                            <Image
                                source={images.logo}
                                resizeMode='contain'
                                className="w-[115px] h-[35px]"
                            />
                            <Text className="text-2xl text-white 
                            text-semibold mt-10 font-psemibold">NOS quedamos en el min 1:13:00 del video
                                Ract Native Course de JavaScript Mastery, en el componente de FormField
                            </Text>

                            <FormField
                            
                            />
                    </View>
                </ScrollView>
            </SafeAreaView>
        


    )

}

export default SignIn