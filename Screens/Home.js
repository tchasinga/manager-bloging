import React, { useState } from 'react';
import { View, Text, StyleSheet ,FlatList ,TouchableOpacity , Modal , TouchableWithoutFeedback , Keyboard} from 'react-native';
import { GlobalStyles } from '../styles/Globla';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../Shared/Card';
import ReviewForm from './ReviewFormik';
export default function Home({ navigation }) {

  const [reviews , setReviews] = useState([
    {title: 'Sunset Serenade', rating: 4.8, body: 'Experience the magic of sunsets with our melodious tunes.', key: '2'},
    {title: 'Gourmet Delights Tour', rating: 4.5, body: 'Embark on a culinary journey to savor exquisite flavors.', key: '3'},
    {title: 'TechConnect Expo', rating: 4.2, body: 'Explore the latest in technology at our interactive expo.', key: '4'},
    {title: 'Artisanal Crafts Workshop', rating: 4.7, body: 'Unleash your creativity by crafting unique artisanal pieces.', key: '5'},
    {title: 'Wilderness Expedition', rating: 4.9, body: 'Venture into the wild and discover nature’s hidden treasures.', key: '6'},
    {title: 'Fitness Fusion Festival', rating: 4.6, body: 'Join us for a high-energy event blending fitness and fun.', key: '7'},
    {title: 'Sci-Fi Symposium', rating: 4.4, body: 'Dive into the realms of science fiction and futuristic ideas.', key: '8'},
    {title: 'Health & Wellness Retreat', rating: 4.8, body: 'Rejuvenate your mind and body in a serene wellness retreat.', key: '9'},
    {title: 'Cultural Carnival Extravaganza', rating: 4.3, body: 'Immerse yourself in a whirlwind of diverse cultures and traditions.', key: '10'},
    {title: 'Photography Masterclass', rating: 4.7, body: 'Capture lifes moments beautifully with guidance from experts.', key: '11'},
    {title: 'Eco-Conscious Forum', rating: 4.5, body: 'Discuss and promote sustainable practices for a greener future.', key: '12'},
    {title: 'Vintage Car Parade', rating: 4.6, body: 'Witness a spectacular parade showcasing the charm of vintage cars.', key: '13'},
    {title: 'Fashion Show', rating: 4.9, body: 'Experience the latest trends in fashion at our exclusive show.', key: '14'},
    {title: 'Comedy Night', rating: 4.8, body: 'Laugh out loud with our hilarious stand-up comedy show.', key: '15'},
    {title: 'Dance Workshop', rating: 4.7, body: 'Learn the art of dance from the best in the industry.', key: '16'},
    {title: 'Music Concert', rating: 4.6, body: 'Groove to the beats of our electrifying music concert.', key: '17'},
    {title: 'Theater Workshop', rating: 4.5, body: 'Discover your inner actor with our theater workshop.', key: '18'},
    {title: 'Photography Workshop', rating: 4.4, body: 'Learn the art of photography from the best in the industry.', key: '19'},
    {title: 'Art Exhibition', rating: 4.3, body: 'Admire the works of talented artists at our art exhibition.', key: '20'},
    {title: 'Book Reading', rating: 4.2, body: 'Listen to excerpts from the latest bestsellers at our book reading.', key: '21'},
    {title: 'Food Festival', rating: 4.1, body: 'Savor the flavors of the world at our international food festival.', key: '22'},
    {title: 'Wine Tasting', rating: 4.0, body: 'Indulge in a luxurious evening of wine tasting and fine dining.', key: '23'},
    {title: 'Cocktail Party', rating: 4.9, body: 'Enjoy a night of cocktails and conversations at our exclusive party.', key: '24'},
    {title: 'Fashion Show', rating: 4.8, body: 'Experience the latest trends in fashion at our exclusive show.', key: '25'},
    {title: 'Comedy Night', rating: 4.7, body: 'Laugh out loud with our hilarious stand-up comedy show.', key: '26'},
    {title: 'Dance Workshop', rating: 4.6, body: 'Learn the art of dance from the best in the industry.', key: '27'},
  ])

    // When you're using FlatList you must always add TouchableOpacity
  // const presHandlerReviewPage = () => {
  //   navigation.navigate('ReviewDetail' , {item: reviews});
  //   // my 'ReviewDetail' is without 's'  at the end of it

  // }
 
  // Used param to set true or false the Element...

  const [modalOpen ,  setModalOpen] = useState(false); 
   
  // Adding new review 

  const addReview = (review) =>{
    review.key = Math.random().toString();
    setReviews((currentReview) => {
      return [review, ...currentReview];
    });
    setModalOpen(false);
  }

  return (
    <View style={GlobalStyles.container}>
       {/*  Playign with modal to display any kind of element... */}
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss} 
        >
     <View style={GlobalStyles.modalContent}>

          <MaterialIcons 
          name="close"
          size={28}
          color="black"
          style={{...styles.icons , ...styles.iconsTwo}}
          onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview}/>
            </View>
        </TouchableWithoutFeedback>
      </Modal>
     {/* This materialIcons Icon which is out-side the Modal to set entre action and else inside to set leave action..*/}
      <MaterialIcons 
        name="add"
        size={28}
        color="black"
        style={styles.icons}
        onPress={() => setModalOpen(true)}
      />

      <Text style={GlobalStyles.BlogText}>Blogging room..</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail', item)}>
            <Card>
              <Text style={GlobalStyles.BlogText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icons : {
   marginBottom : 10,
   borderWidth : 1,
   borderColor : 'black',
   padding : 10,
   borderRadius : 10,
   alignSelf : 'center',
  },
  iconsTwo : {
    marginTop : 20,
    marginBottom : 10,
  }
})
