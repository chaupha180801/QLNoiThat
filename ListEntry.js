import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView,SafeAreaView,StatusBar,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import back from '../Images/back.png'
import search from '../Images/search.png'
import filter from '../Images/filter.png'
import remove from '../Images/remove.png'
import import_color from '../Images/import_color.png'
import user1 from '../Images/user1.png'
import house from '../Images/house.png'
import receipt from '../Images/receipt.png'

export default function ListEntry({route, navigation}) {
  const {id, username} = route.params;
  return (
    <View>
          <View styles={styles.header}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                  <Image source={back} styles={styles.imge_back} />
              </TouchableOpacity>
              <Text style={styles.text_header}>Phiếu nhập hàng</Text>
              <TouchableOpacity style={styles.button1} >
                  <Image source={search} styles={styles.imge_search} />
              </TouchableOpacity> 
          </View>
          <TouchableOpacity style={styles.button2}>
             <Text style={styles.text2}>+ Thêm phiếu nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3} >
            <Image source={filter} styles={styles.imge_filter} />
          </TouchableOpacity>
          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              <TouchableOpacity >
                <View style={styles.body}>
                  <Text style={styles.text}> Số PNH: </Text>
                  <Text style={styles.text_id}> PNH250 </Text>
                  <Text style={styles.text_number}> Số lượng: </Text>
                  <Text style={styles.text_number1}> 03 </Text>
                  <Text style={styles.text_date}> Ngày: </Text>
                  <Text style={styles.text_date1}> 28/4/2022 </Text>
                  <Text style={styles.text_total}> Tổng tiền: </Text>
                  <Text style={styles.text_total1}> 750.000 VNĐ</Text>
                  <TouchableOpacity style={styles.button4} >
                    <Image source={remove} styles={styles.image_remove} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={styles.body}>
                  <Text style={styles.text}> Số PNH: </Text>
                  <Text style={styles.text_id}> PNH249 </Text>
                  <Text style={styles.text_number}> Số lượng: </Text>
                  <Text style={styles.text_number1}> 10 </Text>
                  <Text style={styles.text_date}> Ngày: </Text>
                  <Text style={styles.text_date1}> 28/4/2022 </Text>
                  <Text style={styles.text_total}> Tổng tiền: </Text>
                  <Text style={styles.text_total1}> 750.000 VNĐ</Text>
                  <TouchableOpacity style={styles.button4} >
                    <Image source={remove} styles={styles.image_remove} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={styles.body}>
                  <Text style={styles.text}> Số PNH: </Text>
                  <Text style={styles.text_id}> PNH248 </Text>
                  <Text style={styles.text_number}> Số lượng: </Text>
                  <Text style={styles.text_number1}> 03 </Text>
                  <Text style={styles.text_date}> Ngày: </Text>
                  <Text style={styles.text_date1}> 28/4/2022 </Text>
                  <Text style={styles.text_total}> Tổng tiền: </Text>
                  <Text style={styles.text_total1}> 750.000 VNĐ</Text>
                  <TouchableOpacity style={styles.button4} >
                    <Image source={remove} styles={styles.image_remove} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={styles.body}>
                  <Text style={styles.text}> Số PNH: </Text>
                  <Text style={styles.text_id}> PNH247 </Text>
                  <Text style={styles.text_number}> Số lượng: </Text>
                  <Text style={styles.text_number1}> 03 </Text>
                  <Text style={styles.text_date}> Ngày: </Text>
                  <Text style={styles.text_date1}> 28/4/2022 </Text>
                  <Text style={styles.text_total}> Tổng tiền: </Text>
                  <Text style={styles.text_total1}> 750.000 VNĐ</Text>
                  <TouchableOpacity style={styles.button4} >
                    <Image source={remove} styles={styles.image_remove} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={styles.body}>
                  <Text style={styles.text}> Số PNH: </Text>
                  <Text style={styles.text_id}> PNH246 </Text>
                  <Text style={styles.text_number}> Số lượng: </Text>
                  <Text style={styles.text_number1}> 03 </Text>
                  <Text style={styles.text_date}> Ngày: </Text>
                  <Text style={styles.text_date1}> 28/4/2022 </Text>
                  <Text style={styles.text_total}> Tổng tiền: </Text>
                  <Text style={styles.text_total1}> 750.000 VNĐ</Text>
                  <TouchableOpacity style={styles.button4} >
                    <Image source={remove} styles={styles.image_remove} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={styles.body}>
                  <Text style={styles.text}> Số PNH: </Text>
                  <Text style={styles.text_id}> PNH245 </Text>
                  <Text style={styles.text_number}> Số lượng: </Text>
                  <Text style={styles.text_number1}> 03 </Text>
                  <Text style={styles.text_date}> Ngày: </Text>
                  <Text style={styles.text_date1}> 28/4/2022 </Text>
                  <Text style={styles.text_total}> Tổng tiền: </Text>
                  <Text style={styles.text_total1}> 750.000 VNĐ</Text>
                  <TouchableOpacity style={styles.button4} >
                    <Image source={remove} styles={styles.image_remove} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={styles.body}>
                  <Text style={styles.text}> Số PNH: </Text>
                  <Text style={styles.text_id}> PNH244 </Text>
                  <Text style={styles.text_number}> Số lượng: </Text>
                  <Text style={styles.text_number1}> 03 </Text>
                  <Text style={styles.text_date}> Ngày: </Text>
                  <Text style={styles.text_date1}> 28/4/2022 </Text>
                  <Text style={styles.text_total}> Tổng tiền: </Text>
                  <Text style={styles.text_total1}> 750.000 VNĐ</Text>
                  <TouchableOpacity style={styles.button4} >
                    <Image source={remove} styles={styles.image_remove} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={styles.body}>
                  <Text style={styles.text}> Số PNH: </Text>
                  <Text style={styles.text_id}> PNH243 </Text>
                  <Text style={styles.text_number}> Số lượng: </Text>
                  <Text style={styles.text_number1}> 03 </Text>
                  <Text style={styles.text_date}> Ngày: </Text>
                  <Text style={styles.text_date1}> 28/4/2022 </Text>
                  <Text style={styles.text_total}> Tổng tiền: </Text>
                  <Text style={styles.text_total1}> 750.000 VNĐ</Text>
                  <TouchableOpacity style={styles.button4} >
                    <Image source={remove} styles={styles.image_remove} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </SafeAreaView>
          <View styles={styles.container1}>
            <TouchableOpacity style={styles.button5} onPress={() => {
                                              navigation.navigate({
                                                name: 'Home',
                                                params: { id:id, username: username},
                                                merge: true,
                                              })
                                            }}>
              <Image source={house}  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button6} onPress={()=>{navigation.navigate('Acount', {id:id, username: username})}}>
              <Image source={user1}  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button7} >
              <Image source={import_color} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button8} onPress={()=>{navigation.navigate('ListBill', {id: id,username: username})}}>
              <Image source={receipt} />
            </TouchableOpacity>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({

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
  text2:{
    position: 'absolute',
    left: 10,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 37,
    textAlign: 'justify',
    color: 'white',
  },
  button3:{
    position: 'absolute',
    width: 100,
    height: 100,
    right: -40,
    top: 120,
  },

  scrollView: {
    marginHorizontal: 10,
    top: 180,
    height: 550,
  },
  body:{
    marginTop: 10,
    padding: 30,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 5)',
    borderRadius: 8,
    backgroundColor: "#F6F7FB",
    height: 130,
  },
  text3:{
   fontSize: 18,
   color: "black",
  },
  text:{
    fontSize: 16,
    color: "black",
    marginHorizontal: -20,
  },
  text_id: {
    fontSize: 16,
    color: "#00CC99",
    bottom: 29,
    left: 90,
    fontWeight: 'bold',
    marginHorizontal: -20,
  },
  text_number: {
    fontSize: 16,
    color: "black",
    marginHorizontal: -20,
    bottom: 20,
  },
  text_number1: {
    fontSize: 16,
    color: "black",
    bottom: 48,
    left: 90,
    fontWeight: 'bold',
    marginHorizontal: -20,
  },
  text_date: {
    fontSize: 14,
    bottom: 114,
    left: 190,
    marginHorizontal: -20,
  },
  text_date1:{
    fontSize: 14,
    bottom: 138,
    left: 240,
    marginHorizontal: -20,
  },
  text_total: {
    fontSize: 16,
    color: "black",
    bottom: 128,
    left: 130,
  },
  text_total1:{
    fontSize: 15,
    color: "black",
    bottom: 154,
    left: 242,
    fontWeight: 'bold',
    marginHorizontal: -20,
  },
  button4: {
    position: 'absolute',
    width: 100,
    height: 100,
    right: -60,
    top: 10,
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
  }

})