
import React, {useState} from 'react';
import { Text, View, TextInput,TouchableOpacity,FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
    const [participants,setParticipants] = useState<string[]>([]);
    const [value,setValue] = useState('');

    function handleParticipantAdd(){
        if(participants.includes(value)){
            return Alert.alert('Participante Existe','Já existe um participante na lista com esse nome')
        }
        setParticipants(prevState => [...prevState, value]);
        setValue('');
        
    }

    function handleParticipantRemove(name:string) {
        Alert.alert('Remover', `Deseja remover o participante ${name}?`,[
            {
                text: 'Sim',
                onPress: () => setParticipants(prev => prev.filter((participant) => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Evento</Text>
      <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder='seu texto aqui' 
        placeholderTextColor='#6b6b6b'
        onChangeText={e => setValue(e)}
        value={value}
        />
        <TouchableOpacity style={styles.button}
        onPress={handleParticipantAdd}>
            <Text
            style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        </View>
        <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => <Participant name={item}
        onRemove={() => handleParticipantRemove(item)}
        />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={styles.listEmptyText}>Sem Registros</Text>}
        />
    </View>
  );
}