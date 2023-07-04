import { View, Text  ,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import {Video} from 'expo-av'
const {Width,height} =Dimensions.get("window")

export default class VideoPage extends React.Component{
    // const VideoPage = ({ route }) => {
    //     const { courseId } = route.params;
      
    //     let videoUrl = '';
      
    //     // Find the video URL based on the courseId
    //     if (courseId === 1) {
    //       videoUrl = 'https://www.youtube.com/watch?v=SuyoAtihn1A';
    //     } else if (courseId === 2) {
    //       videoUrl = 'https://www.example.com/video2.mp4';
    //     }
    //     // Add more conditions for additional courses
      
    //     return (
    //       <View style={styles.container}>
    //         <Video source={{ uri: videoUrl }} style={styles.video} controls={true} />
    //       </View>
    //     );
    //   };
      
      
       
      
      
      


    render(){
            return(
                <View style={styles.container}>
                    <Video 
                    source={require('../assets/web1.mp4')}
                    rate={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    isLooping={false}
                    useNativeControls
                    style={styles.video}
                    />
                    <View >
                        <Text style={{marginTop:10 ,fontSize:20,padding:10,}}>Introducation To Amazon</Text>
                    </View>


                    
                    <View style={{marginTop:20,padding:10,fontSize:20,}}>
                        <Text>Amazon was founded by Jeff Bezos from his garage in Bellevue, Washington, on July 5, 1994. Initially an online marketplace for books, it has expanded into a multitude of product categories,
                             a strategy that has earned it the moniker The Everything Store.</Text>
                    </View>
                </View>
                
            )
    }
    
}
const styles=StyleSheet.create({
    video:{
        Width:Width,
        height:height/3

    },
    container:{
        backgroundColor:"#fff",
        justifyContent:"center"
    }
})
// export default VideoPage;



