import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView,SafeAreaView,StatusBar,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import back from '../Images/back.png'
import remove from '../Images/remove.png'
import bell from '../Images/bell.png'
import user1 from '../Images/user1.png'
import house from '../Images/house.png'
import receipt from '../Images/receipt.png'
import top1 from '../Images/top1.png'
import top2 from '../Images/top2.png'
import top3 from '../Images/top3.png'
import top4 from '../Images/top4.png'
import top5 from '../Images/top5.png'
import login from '../Images/login.png'
export default function Report({route, navigation}) {
  const {id,username} = route.params;
  return (
    <View>
       <Image source={login} style={styles.image}/>
          <View styles={styles.header}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                  <Image source={back} styles={styles.imge_back} />
              </TouchableOpacity>
              <Text style={styles.text_header}>Báo Cáo</Text>
          </View>
          <View style={styles.body}>
            <TouchableOpacity style={styles.button_top1}>
             <Image source={top1} style={styles.image_top1}/>
             <Text style={styles.text1}>Top 5 sản phẩm bán chạy</Text>
             <Text style={styles.text2}>Tên sản phẩm, số lượng bán trong tháng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_top2}>
             <Image source={top2} style={styles.image_top2}/>
             <Text style={styles.text1}>Doanh thu trong năm</Text>
             <Text style={styles.text2}>Thống kê doanh thu theo từng tháng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_top3}>
             <Image source={top3} style={styles.image_top3}/>
             <Text style={styles.text1}>Doanh thu trong từng năm</Text>
             <Text style={styles.text2}>Thống kê doanh thu theo từng năm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_top4}>
             <Image source={top4} style={styles.image_top4}/>
             <Text style={styles.text1}>Top 10 khách hàng thân thiết</Text>
             <Text style={styles.text2}>Thống kê 10 khách hàng mua nhiều nhất</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_top5}>
             <Image source={top5} style={styles.image_top5}/>
             <Text style={styles.text1}>Thống kê tồn kho</Text>
             <Text style={styles.text2}>Danh sách các sản phẩm tồn kho</Text>
            </TouchableOpacity>
            
          </View>
          

          <View styles={styles.container1}>
            <TouchableOpacity style={styles.button5} onPress={() => {
                                              navigation.navigate({
                                                name: 'Home',
                                                params: {id:id, username: username},
                                                merge: true,
                                              })
                                            }}>
              <Image source={house}  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button6} onPress={()=>{navigation.navigate('Acount', {id:id, username: username})}}>
              <Image source={user1}  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button7} onPress={()=>{navigation.navigate('ListEntry', {id:id, username: username})}}>
              <Image source={bell} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button8} onPress={()=>{navigation.navigate('ListBill', {id:id, username: username})}}>
              <Image source={receipt} />
            </TouchableOpacity>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 740,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  header:{
    position: 'absolute',
    width: 200,
    height: 30,
    left: 16,
    top: 70,
    backgroundColor: 'white',
  },
  button: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 10,
    top: 40,
  },
  imge_back:{
    position: 'absolute',
    width: 90,
    height: 90,
    left: 10,
    top: 40,
  },
  text_header:{
    position: 'absolute',
    width: 250,
    left: 70,
    right: 0,
    top: 40,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
    color: '#303030',
  },
  button1: {
    position: 'absolute',
    width: 100,
    height: 100,
    right: -40,
    top: 40,
  },
  button2:{
    position: 'absolute',
    width: '50%',
    height: 50,
    left: 20,
    top: 110,
    backgroundColor: '#00CC99',
    borderRadius: 4,
    shadowColor: 'rgba(48, 48, 48, 0.3)',
    borderRadius: 8,
  },
 
  button3:{
    position: 'absolute',
    width: 100,
    height: 100,
    right: -40,
    top: 120,
  },
  button5: {
    position: 'absolute',
    width: 0,
    height: 40,
    left: 50,
    top: 196,
    borderRadius: 4,
    shadowColor: 'rgba(48, 48, 48, 0.3)',
    borderRadius: 8,
  },
  button6: {
    position: 'absolute',
    width: 0,
    height: 40,
    right: 90,
    top: 200,
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: 'rgba(48, 48, 48, 0.3)',
    borderRadius: 8,
  },
  button7: {
    position: 'absolute',
    width: 0,
    height: 40,
    right: 180,
    top: 198,
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: 'rgba(48, 48, 48, 0.3)',
    borderRadius: 8,
  },
  button8: {
    position: 'absolute',
    width: 0,
    height: 40,
    left: 140,
    top: 198,
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: 'rgba(48, 48, 48, 0.3)',
    borderRadius: 8,
  },
  body: {
    marginHorizontal: 10,
    top: 155,
    height: 550,
  },
  button_top1: {
    width: '100%',
    backgroundColor: '#45C6EE',
    height: 90,
    borderRadius: 12,
  },
  button_top2: {
    width: '100%',
    backgroundColor: '#9FFFF6',
    height: 90,
    borderRadius: 12,
    marginTop: 20,
  },
  button_top3: {
    width: '100%',
    backgroundColor: '#D799FF',
    height: 90,
    borderRadius: 12,
    marginTop: 20,
  },
  button_top4: {
    width: '100%',
    backgroundColor: '#FFDFA6',
    height: 90,
    borderRadius: 12,
    marginTop: 20,
  },
  button_top5: {
    width: '100%',
    backgroundColor: '#FF94AB',
    height: 90,
    borderRadius: 12,
    marginTop: 20,
  },
  image_top1: {
    backgroundColor: '#45C6EE',
    borderRadius: 12,
    left: 10,
    top: 20,
  },
  image_top2: {
    backgroundColor: '#9FFFF6',
    borderRadius: 12,
    left: 10,
    top: 20,
  },
  image_top3: {
    borderRadius: 12,
    left: 10,
    top: 20,
  },
  image_top4: {
    borderRadius: 12,
    left: 10,
    top: 20,
  },
  image_top5: {
    borderRadius: 12,
    left: 10,
    top: 20,
  },
  text1: {
    bottom: 40,
    left: 78,
    fontSize: 18,
    color: '#132743',
    fontWeight: 'bold',
  },
  text2: {
    bottom: 40,
    left: 80,
    fontSize: 12,
    color: '#132743',
  }
 
  

})