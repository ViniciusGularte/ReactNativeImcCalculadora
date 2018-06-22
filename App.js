import React from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View
} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura)
   let s = this.state
   s.resultado = imc
   if(s.resultado < 16){
     s.resultadoText ='Muito abaixo do peso'
   }
    else if (s.resultado < 17){
     s.resultadoText ='Moderadamente abaixo do peso'
    }
    else if (s.resultado < 18.5){
     s.resultadoText ='Abaixo do peso'
    }
    else if (s.resultado < 25) {
     s.resultadoText ='Saudavel'
    }
    else if (s.resultado < 30) {
     s.resultadoText ='Sobrepeso'
    }
    else if (s.resultado < 35) {
     s.resultadoText ='Obesidade Grau 1°'
    }
    else if (s.resultado < 40) {
      s.resultadoText ='Obesidade Grau 2°'
    }
    else{
      s.resultadoText ='Obesidade Grau 3°'
    }
   this.setState(s)



  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <TextInput autoCapitalize="none" placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput autoCapitalize="none" placeholder="Massa"  keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado,{fontSize:20}]}>{this.state.resultadoText}</Text>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  entrada:{
    flexDirection:'row',
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:34,
  },
  button:{
   backgroundColor:"#9ACD32",
  },
  buttontext:{
    textAlign:"center",
    padding:30,
    fontSize:25,
    fontWeight:'bold',
    color:"green",
  },
  resultado:{
    alignSelf:"center",
    color:"lightgray",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
  },
});
