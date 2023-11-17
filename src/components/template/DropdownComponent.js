import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from '../../theme/theme';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

const dropdownData = [
  {label: 'Work', value: '1'},
  {label: 'Personal', value: '2'},
  {label: 'Social', value: '3'},
  {label: 'Home', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const DropdownComponent = ({selectedCategory, onCategoryChange}) => {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(dropdownData);
  const [selectedCountry, setSelectedCountry] = useState('');
  const searchRef = useRef();
  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(dropdownData);
    }
  };
  // console.log(dropdownValue, 'dropdownValue');
  // console.log(onChangeText, 'onChangeText');
  // const theme = useTheme();
  // const [value, setValue] = useState('');

  return (
    <View>
      <TouchableOpacity
        style={{
          height: 50,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
          borderWidth: 1,
          borderRadius: 15,
          paddingLeft: 15,
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{fontWeight: '600'}}>
          {selectedCategory === '' ? 'Select Category' : selectedCategory}
        </Text>
        {clicked ? (
          <FontAwesome6 name="angle-up" size={20} />
        ) : (
          <FontAwesome6 name="angle-down" size={20} />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 300,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Search.."
            value={search}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={{
              width: '90%',
              height: 50,
              alignSelf: 'center',
              borderWidth: 0.2,
              borderColor: '#8e8e8e',
              borderRadius: 7,
              marginTop: 20,
              paddingLeft: 20,
            }}
          />

          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                  }}
                  onPress={() => {
                    setSelectedCountry(item.label);
                    setClicked(!clicked);
                    onCategoryChange(item.label);
                    onSearch('');
                    setSearch('');
                    searchRef.current.clear();
                  }}>
                  <Text style={{fontWeight: '600'}}>{item.label}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({});
