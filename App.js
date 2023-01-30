import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
import ProductText,{ProductImage} from './src/screens/ProductText';
import ProductList from './src/screens/ProductList';
import { useState } from 'react';
export default function App() {

  const [countState, setCountState] = useState(0);
  const [showStatus, setShowStatus] = useState(true);

  function showData(label='',value=''){
    return label +':'+ value;
  }
  const arrowShowData=(label='',value='')=>{
    return label+':'+value;
  };
  const arrowMiniShowData=(label='',value='')=>(label+':'+value)
  let count=0;
  const tangCount=()=>count++;
  return ( 

    <View style={styles.container}>
   
      <Text style={styles.text}>Nguyễn Đức Trọng</Text>  
      <Text style={styles.text}>PH23292</Text>
      <Button
        title={'Thêm mới'}
        onPress={()=> setShowStatus(!showStatus)}/> 
        {
      showStatus
      ? <>
      <TextInput style={styles.textinput} placeholder="Tên "></TextInput>
      <TextInput style={styles.textinput} placeholder="Giá"></TextInput>
      <TextInput style={styles.textinput} placeholder="Link"></TextInput>
    <Button style={styles.button}
    title={'Hủy'}
    onPress={()=>setShowStatus(!showStatus)}
    />
      <Button style={styles.button}
    title={'Thêm'}
    onPress={()=>tangCount()}
    />
      </>
      :null
    }
 
      {/* <Text style={styles.text}>
      {
      arrowShowData('Ngày sinh','02/09/2003')}
      </Text>
      <Text style={styles.text}>
      {
      arrowMiniShowData('SĐT','0941265482')}
      </Text> */}
      <StatusBar style="auto" />
       <ProductList/>
    {/* <ProductImage /> */}
    {/* <ProductText name={'Tên sp1'} desc={123} />
    <ProductText name={'Tên sp2'} desc={123} />
    <ProductText name={'Tên sp3'} desc={123} /> */}
    {/* <Button
    title={'Bấm để ẩn hiện giao diện'}
    onPress={() => setShowStatus(!showStatus)}/>
    {
      showStatus
      ? <>
      <Text>Count:{count}</Text>
    <Button
    title={'Bấm để tăng giá trị count'}
    onPress={()=>tangCount()}
    />
      </>
      :null
    }
    <Text style={styles.text}>Count state: {countState}</Text>
    <Button
        title={'Bấm để tăng gt countState'}
        onPress={() => setCountState(countState + 1)}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    backgroundColor: '#fff',
  },
  text:{
    color:"black",
    fontWeight:"bold",
    fontSize: 20,
  },
  button: {
    marginTop:10,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    width: 100,
    height: 100,
  },
  textinput:{
    borderBottomColor: '#000000',
    borderWidth: 1,
    marginVertical: 5,
    padding: 10,

  }
});
