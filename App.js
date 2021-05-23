import React, { useState } from 'react';
import { SafeAreaView ,ScrollView,Text, TextInput, TouchableOpacity, View} from 'react-native';
const App= () => {
  const [text,setText]=useState("0");
  const [scrollView,setScrollView]=useState(null);
  const addToText=(txt)=>{
    if(text==="0"){
      setText(txt);
    }else{
      setText(text+txt);
    }
  };
  const remove= ()=>{
    setText(text.slice(0, -1)); 
  }
  const reset=()=>{
    setText("0");
  }
  const calculate=()=>{
    setText(eval(text));
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#282828',flexDirection:'column'}}>
      <ScrollView horizontal={true} style={{flex:1,}} ref={ref => {setScrollView(ref)}}
    onContentSizeChange={() => scrollView.scrollToEnd({animated: true})}>
        <Text style={{fontSize:70,color:"#FDFDFD",textAlign:'right',alignSelf:'center'}} editable={false} >{text}</Text>
      </ScrollView>
      
      <View style={{flex:1,flexDirection:'row'}}>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={reset}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("(")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText(")")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#ed9c30',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("/")}>
          <Text style={{color:'#fceec0',fontSize:50,textAlign:'center'}}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,flexDirection:'row'}}>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("7")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("8")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("9")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#ed9c30',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("*")}>
          <Text style={{color:'#fceec0',fontSize:50,textAlign:'center'}}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,flexDirection:'row'}}>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("4")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("5")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("6")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#ed9c30',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("-")}>
          <Text style={{color:'#fceec0',fontSize:50,textAlign:'center'}}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,flexDirection:'row'}}>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("1")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("2")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("3")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#ed9c30',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("+")}>
          <Text style={{color:'#fceec0',fontSize:50,textAlign:'center'}}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,flexDirection:'row'}}>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText("0")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={()=>addToText(".")}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#a1a1a1',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={remove}>
          <Text style={{color:'#090909',fontSize:50,textAlign:'center'}}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,backgroundColor:'#ed9c30',height:'100%',width:'100%',justifyContent:'center',alignContent:'center'}} onPress={calculate}>
          <Text style={{color:'#fceec0',fontSize:50,textAlign:'center'}}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
